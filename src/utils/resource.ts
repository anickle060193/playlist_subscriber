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

export function mappedResourceNeedsRetrieved<T>( key: string, mappedResource: MappedResource<T> )
{
  return (
    !mappedResource.loading[ key ]
    && typeof mappedResource.items[ key ] === 'undefined'
    && typeof mappedResource.error[ key ] === 'undefined'
  );
}

export function mappedResourceRetrieveStarted<T>( resource: MappedResource<T>, key: string ): MappedResource<T>
{
  return {
    ...resource,
    loading: {
      ...resource.loading,
      [ key ]: true
    }
  };
}

export function mappedResourceRetrieveDone<T>( resource: MappedResource<T>, key: string, result: T ): MappedResource<T>
{
  return {
    ...resource,
    items: {
      ...resource.items,
      [ key ]: result
    },
    loading: {
      ...resource.loading,
      [ key ]: false
    },
    error: {
      ...resource.error,
      [ key ]: null
    }
  };
}

export function mappedResourceRetrieveFailed<T>( resource: MappedResource<T>, key: string, error: Error ): MappedResource<T>
{
  return {
    ...resource,
    loading: {
      ...resource.loading,
      [ key ]: false
    },
    error: {
      ...resource.error,
      [ key ]: error
    }
  };
}
