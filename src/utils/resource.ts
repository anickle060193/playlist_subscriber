export interface Resource<T>
{
  item: T | null;
  loading: boolean;
  error: Error | null;
}

export interface MappedResource<T>
{
  items: { [ key: string ]: T | null | undefined };
  loading: { [ key: string ]: boolean | undefined };
  error: { [ key: string ]: Error | null | undefined };
}

export function mappedResourceNeedsLoad<T>( key: string, mappedResource: MappedResource<T> )
{
  return (
    !mappedResource.loading[ key ]
    && typeof mappedResource.items[ key ] === 'undefined'
    && typeof mappedResource.error[ key ] === 'undefined'
  );
}
