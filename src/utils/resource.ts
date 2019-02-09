export interface MappedResource<T>
{
  items: { [ key: string ]: T | null | undefined };
  loading: { [ key: string ]: boolean | undefined };
  errors: { [ key: string ]: Error | null | undefined };
}

export interface Resource<T>
{
  item: T | null;
  loading: boolean;
  error: Error | null;
}

export function retrieveMappedResourceStartedHandler<T>( mappedResource: MappedResource<T>, id: string | number ): MappedResource<T>
{
  return {
    ...mappedResource,
    loading: {
      ...mappedResource.loading,
      [ id ]: true
    },
    errors: {
      ...mappedResource.errors,
      [ id ]: null
    }
  };
}

export function retrieveMappedResourceDoneHandler<T>( mappedResource: MappedResource<T>, id: string | number, resource: T | null ): MappedResource<T>
{
  return {
    ...mappedResource,
    items: {
      ...mappedResource.items,
      [ id ]: resource
    },
    loading: {
      ...mappedResource.loading,
      [ id ]: false
    },
    errors: {
      ...mappedResource.errors,
      [ id ]: null
    }
  };
}

export function retrieveMappedResourceFailedHandler<T>( mappedResource: MappedResource<T>, id: string | number, error: Error ): MappedResource<T>
{
  return {
    ...mappedResource,
    loading: {
      ...mappedResource.loading,
      [ id ]: false
    },
    errors: {
      ...mappedResource.errors,
      [ id ]: error
    }
  };
}

export function retrieveResourceStartedHandler<T>( resource: Resource<T> ): Resource<T>
{
  return {
    ...resource,
    loading: true,
    error: null
  };
}

export function retrieveResourceDoneHandler<T>( resource: Resource<T>, item: T | null ): Resource<T>
{
  return {
    ...resource,
    item,
    loading: false,
    error: null
  };
}

export function retrieveResourceFailedHandler<T>( resource: Resource<T>, error: Error ): Resource<T>
{
  return {
    ...resource,
    loading: false,
    error
  };
}

export function mappedResourceNeedsLoad<T>( resource: MappedResource<T>, resourceId: string | number )
{
  return (
    !resource.items[ resourceId ]
    && !resource.loading[ resourceId ]
    && !resource.errors[ resourceId ]
  );
}

export function resourceNeedsLoad<T>( resource: Resource<T> )
{
  return (
    resource.item === null
    && !resource.loading
    && !resource.error
  );
}
