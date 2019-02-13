import { State as UserState } from 'store/reducers/user';

import { jsonParseReviver, jsonStringifyReplacer } from 'utils/transformer';
import { validateExportedUserData } from 'utils/validation';

export const enum Version
{
  V0 = 0,
  V1 = 1,
  V2 = 2,
  V3 = 3,

  CurrentVersion = V3
}

export interface PreviousVersions
{
  [ Version.V0 ]: Version.V0;
  [ Version.V1 ]: Version.V0;
  [ Version.V2 ]: Version.V1;
  [ Version.V3 ]: Version.V2;
}

type UserDataV0 = {} | null;

interface UserDataV1
{
  playlistSubscriptions: string[];
}

interface UserDataV2
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: { [ playlistItemId: string ]: boolean | undefined };
}

interface UserDataV3
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: Set<string>;
}

export interface UserDataTypes
{
  [ Version.V0 ]: UserDataV0;
  [ Version.V1 ]: UserDataV1;
  [ Version.V2 ]: UserDataV2;
  [ Version.V3 ]: UserDataV3;
}

export interface UserData<V extends Version>
{
  version: V;
  data: UserDataTypes[ V ];
}

export type ExportedUserData = (
  UserData<Version.V1> |
  UserData<Version.V2> |
  UserData<Version.V3>
);

export function formatExportUserDataAsDatUrl( state: UserState )
{
  let exportedUserData: UserData<Version.CurrentVersion> = {
    version: Version.CurrentVersion,
    data: state
  };

  let data = JSON.stringify( exportedUserData, jsonStringifyReplacer, 2 );

  return `data:text/json;charset=utf-8,${encodeURIComponent( data )}`;
}

export function parseExportUserData( dataText: string ): UserState | null
{
  try
  {
    let data = JSON.parse( dataText, jsonParseReviver ) as unknown;

    let exportedUserData = validateExportedUserData( data );

    return migrateExportedUserData( exportedUserData );
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
  [ Version.V3 ]: migrateUserDataV2toV3,
};

function migrateExportedUserData( exportedUserData: ExportedUserData ): UserDataTypes[ Version.CurrentVersion ]
{
  return Object
    .entries( MIGRATORS )
    .filter( ( [ version, migrator ] ) => (
      ( version as unknown as Version ) > exportedUserData.version
    ) )
    .reduce(
      // tslint:disable-next-line:no-any
      ( userData, [ version, migrator ] ) => ( migrator( userData as any ) as any ),
      exportedUserData.data
    ) as UserDataTypes[ Version.CurrentVersion ];
}

export function migrateUserDataV0toV0( userData: UserDataTypes[ Version.V0 ] ): UserDataTypes[ Version.V0 ]
{
  console.log( 'Migration V0 -> V0:', userData );

  return {};
}

export function migrateUserDataV0toV1( userData: UserDataTypes[ Version.V0 ] ): UserDataTypes[ Version.V1 ]
{
  console.log( 'Migration V0 -> V1:', userData );

  return {
    playlistSubscriptions: []
  };
}

export function migrateUserDataV1toV2( userData: UserDataTypes[ Version.V1 ] ): UserDataTypes[ Version.V2 ]
{
  console.log( 'Migration V1 -> V2:', userData );

  return {
    playlistSubscriptions: userData.playlistSubscriptions,
    hiddenPlaylistItems: {}
  };
}

export function migrateUserDataV2toV3( userData: UserDataTypes[ Version.V2 ] ): UserDataTypes[ Version.V3 ]
{
  console.log( 'Migration V2 -> V3:', userData );

  let hiddenPlaylistItems = Object.entries( userData.hiddenPlaylistItems )
    .filter( ( [ playlistItemId, hidden ] ) => hidden )
    .map( ( [ playlistItemId, hidden ] ) => playlistItemId );

  return {
    playlistSubscriptions: userData.playlistSubscriptions,
    hiddenPlaylistItems: new Set( hiddenPlaylistItems )
  };
}
