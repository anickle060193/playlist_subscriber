import { State as UserState } from 'store/reducers/user';
import { validateExportedUserData } from './validation';

const enum Version
{
  V1 = 1
}

interface UserDataV1
{
  playlistSubscriptions: string[];
}

interface UserDataTypes
{
  [ Version.V1 ]: UserDataV1;
}

interface UserData<V extends Version>
{
  version: V;
  data: UserDataTypes[ V ];
}

export type ExportedUserData = UserData<Version>;

const PARSERS: { [ version in Version ]: ( userData: UserDataTypes[ version ] ) => UserState | null } = {
  [ Version.V1 ]: parseExportUserDataV1
};

export function formatExportUserDataAsDatUrl( state: UserState )
{
  let exportedUserData: ExportedUserData = {
    version: Version.V1,
    data: state
  };

  let data = JSON.stringify( exportedUserData, null, 2 );

  return `data:text/json;charset=utf-8,${encodeURIComponent( data )}`;
}

export function parseExportUserData( dataText: string )
{
  try
  {
    let data = JSON.parse( dataText ) as unknown;

    let exportedUserData = validateExportedUserData( data );

    return PARSERS[ exportedUserData.version ]( exportedUserData.data );
  }
  catch( e )
  {
    console.error( 'Failed to parse exported user data:\n', dataText, '\n', e );
    return null;
  }
}

function parseExportUserDataV1( userData: UserDataV1 ): UserState | null
{
  return userData;
}
