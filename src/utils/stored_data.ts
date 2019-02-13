import { State as StoredState } from 'store/reducers/stored';

import { jsonParseReviver, jsonStringifyReplacer } from 'utils/transformer';
import { validateExportedStoredData } from 'utils/validation';

export const enum Version
{
  V0 = 0,
  V1 = 1,
  V2 = 2,
  V3 = 3,
  V4 = 4,

  CurrentVersion = V4
}

export interface PreviousVersions
{
  [ Version.V0 ]: Version.V0;
  [ Version.V1 ]: Version.V0;
  [ Version.V2 ]: Version.V1;
  [ Version.V3 ]: Version.V2;
  [ Version.V4 ]: Version.V3;
}

type StoredDataV0 = {} | null;

interface StoredDataV1
{
  playlistSubscriptions: string[];
}

interface StoredDataV2
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: { [ playlistItemId: string ]: boolean | undefined };
}

interface StoredDataV3
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: Set<string>;
}

interface StoredDataV4
{
  user: {
    playlistSubscriptions: string[];
    hiddenPlaylistItems: Set<string>;
  };
  settings: {
    useDarkTheme: boolean;
  };
}

export interface StoredDataTypes
{
  [ Version.V0 ]: StoredDataV0;
  [ Version.V1 ]: StoredDataV1;
  [ Version.V2 ]: StoredDataV2;
  [ Version.V3 ]: StoredDataV3;
  [ Version.V4 ]: StoredDataV4;
}

export interface StoredData<V extends Version>
{
  version: V;
  data: StoredDataTypes[ V ];
}

export type ExportedStoredData = (
  StoredData<Version.V1> |
  StoredData<Version.V2> |
  StoredData<Version.V3> |
  StoredData<Version.V4>
);

export function formatExportStoredDataAsDatUrl( state: StoredState )
{
  let exportedStoredData: StoredData<Version.CurrentVersion> = {
    version: Version.CurrentVersion,
    data: state
  };

  let data = JSON.stringify( exportedStoredData, jsonStringifyReplacer, 2 );

  return `data:text/json;charset=utf-8,${encodeURIComponent( data )}`;
}

export function parseExportStoredData( dataText: string ): StoredState | null
{
  try
  {
    let data = JSON.parse( dataText, jsonParseReviver ) as unknown;

    let exportedStoredData = validateExportedStoredData( data );

    return migrateExportedStoredData( exportedStoredData );
  }
  catch( e )
  {
    console.error( 'Failed to parse exported stored data:\n', dataText, '\n', e );
    return null;
  }
}

export const MIGRATORS: { [ version in Version ]: ( storedData: StoredDataTypes[ PreviousVersions[ version ] ] ) => StoredDataTypes[ version ] } = {
  [ Version.V0 ]: migrateStoredDataV0toV0,
  [ Version.V1 ]: migrateStoredDataV0toV1,
  [ Version.V2 ]: migrateStoredDataV1toV2,
  [ Version.V3 ]: migrateStoredDataV2toV3,
  [ Version.V4 ]: migrateStoredDataV3toV4,
};

function migrateExportedStoredData( exportedStoredData: ExportedStoredData ): StoredDataTypes[ Version.CurrentVersion ]
{
  return Object
    .entries( MIGRATORS )
    .filter( ( [ version, migrator ] ) => (
      ( version as unknown as Version ) > exportedStoredData.version
    ) )
    .reduce(
      // tslint:disable-next-line:no-any
      ( storedData, [ version, migrator ] ) => ( migrator( storedData as any ) as any ),
      exportedStoredData.data
    ) as StoredDataTypes[ Version.CurrentVersion ];
}

export function migrateStoredDataV0toV0( storedData: StoredDataTypes[ Version.V0 ] ): StoredDataTypes[ Version.V0 ]
{
  console.log( 'Migration V0 -> V0:', storedData );

  return {};
}

export function migrateStoredDataV0toV1( storedData: StoredDataTypes[ Version.V0 ] ): StoredDataTypes[ Version.V1 ]
{
  console.log( 'Migration V0 -> V1:', storedData );

  return {
    playlistSubscriptions: []
  };
}

export function migrateStoredDataV1toV2( storedData: StoredDataTypes[ Version.V1 ] ): StoredDataTypes[ Version.V2 ]
{
  console.log( 'Migration V1 -> V2:', storedData );

  return {
    playlistSubscriptions: storedData.playlistSubscriptions,
    hiddenPlaylistItems: {}
  };
}

export function migrateStoredDataV2toV3( storedData: StoredDataTypes[ Version.V2 ] ): StoredDataTypes[ Version.V3 ]
{
  console.log( 'Migration V2 -> V3:', storedData );

  let hiddenPlaylistItems = Object.entries( storedData.hiddenPlaylistItems )
    .filter( ( [ playlistItemId, hidden ] ) => hidden )
    .map( ( [ playlistItemId, hidden ] ) => playlistItemId );

  return {
    playlistSubscriptions: storedData.playlistSubscriptions,
    hiddenPlaylistItems: new Set( hiddenPlaylistItems )
  };
}

export function migrateStoredDataV3toV4( storedData: StoredDataTypes[ Version.V3 ] ): StoredDataTypes[ Version.V4 ]
{
  console.log( 'Migration V2 -> V3:', storedData );

  return {
    user: storedData,
    settings: {
      useDarkTheme: false
    }
  };
}
