import { State as UserState, initialState as initialUserState } from 'store/reducers/user';

import { validateExportedUserData } from 'utils/validation';

export const enum Version
{
  V0 = 0,
  V1 = 1,
  V2 = 2,

  CurrentVersion = V2
}

export interface PreviousVersions
{
  [ Version.V0 ]: Version.V0;
  [ Version.V1 ]: Version.V0;
  [ Version.V2 ]: Version.V1;
}

interface UserDataV1
{
  playlistSubscriptions: string[];
}

export interface UserDataTypes
{
  [ Version.V0 ]: {} | null;
  [ Version.V1 ]: UserDataV1;

  [ Version.CurrentVersion ]: UserState;
}

export interface UserData<V extends Version>
{
  version: V;
  data: UserDataTypes[ V ];
}

export type ExportedUserData = (
  UserData<Version.CurrentVersion> |
  UserData<Version.V1> |
  UserData<Version.V2>
);

export function formatExportUserDataAsDatUrl( state: UserState )
{
  let exportedUserData: UserData<Version.CurrentVersion> = {
    version: Version.CurrentVersion,
    data: state
  };

  let data = JSON.stringify( exportedUserData, null, 2 );

  return `data:text/json;charset=utf-8,${encodeURIComponent( data )}`;
}

export function parseExportUserData( dataText: string ): UserState | null
{
  try
  {
    let data = JSON.parse( dataText ) as unknown;

    let exportedUserData = validateExportedUserData( data );

    return Object
      .entries( MIGRATORS )
      .filter( ( [ version, migrator ] ) => (
        ( version as unknown as Version ) > exportedUserData.version
      ) )
      .reduce(
        // tslint:disable-next-line:no-any
        ( userData, [ version, migrator ] ) => ( migrator( userData as any ) as any ),
        exportedUserData.data
      ) as UserState;
  }
  catch( e )
  {
    console.error( 'Failed to parse exported user data:\n', dataText, '\n', e );
    return null;
  }
}

export const MIGRATORS: { [ version in Version ]: ( userData: UserDataTypes[ PreviousVersions[ version ] ] ) => UserDataTypes[ version ] } = {
  [ Version.V0 ]: migrateUserDataV0toV0,
  [ Version.V1 ]: migrateUserDataV0toV1,
  [ Version.V2 ]: migrateUserDataV1toV2,
};

export function migrateUserDataV0toV0( userData: UserDataTypes[ Version.V0 ] ): UserDataTypes[ Version.V0 ]
{
  console.log( 'Migration V0 -> V0:', userData );

  return {};
}

export function migrateUserDataV0toV1( userData: UserDataTypes[ Version.V0 ] ): UserDataTypes[ Version.V1 ]
{
  console.log( 'Migration V0 -> V1:', userData );

  return {
    playlistSubscriptions: initialUserState.playlistSubscriptions
  };
}

export function migrateUserDataV1toV2( userData: UserDataTypes[ Version.V1 ] ): UserDataTypes[ Version.V2 ]
{
  console.log( 'Migration V1 -> V2:', userData );

  return {
    ...userData,
    hiddenPlaylistItems: initialUserState.hiddenPlaylistItems
  };
}
