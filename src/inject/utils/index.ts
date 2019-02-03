import EventEmitter from 'eventemitter3';

interface DocEventMap
{
  change: void;
}

interface Doc
{
  on<E extends keyof DocEventMap>( event: E, listener: ( value: DocEventMap[ E ] ) => void ): void;
}

class DocEventEmitter extends EventEmitter
{
  private readonly mutationObserver: MutationObserver;

  constructor()
  {
    super();

    this.mutationObserver = new MutationObserver( this.onMutation );
    this.mutationObserver.observe( document.body, { childList: true, subtree: true } );
  }

  private onMutation = () =>
  {
    this.emit( 'change' );
  }
}

export const doc: Doc = new DocEventEmitter();
