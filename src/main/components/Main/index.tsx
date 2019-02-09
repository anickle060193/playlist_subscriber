import React from 'react';
import { connect } from 'react-redux';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import classNames from 'classnames';
import
{
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Tooltip,
  Button
} from '@material-ui/core';
import { TooltipProps } from '@material-ui/core/Tooltip';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import HomePage from '../HomePage';
import SubscriptionsPage from '../SubscriptionsPage';

import { retrieveYoutubeAuthToken } from 'store/reducers/youtubeApi';

import { Resource } from 'utils/resource';

const drawerWidth = 240;

const styles = ( theme: Theme ) => createStyles( {
  root: {
    widht: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create( [ 'width', 'margin' ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    } ),
  },
  menuButton: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    } ),
  },
  drawerClose: {
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    } ),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1
  },
  toolbarOffset: theme.mixins.toolbar,
  content: {
    flex: 1,
    minWidth: 0,
    padding: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column'
  },
} );

interface Page
{
  name: string;
  IconComponent: React.ComponentType<SvgIconProps>;
  PageComponent: React.ComponentType;
}

const PAGES: Page[] = [
  { name: 'Home', IconComponent: HomeIcon, PageComponent: HomePage },
  { name: 'Subscriptions', IconComponent: SubscriptionsIcon, PageComponent: SubscriptionsPage },
];

const HideableTooltip: React.SFC<TooltipProps & { enabled: boolean }> = ( { enabled, ...props } ) => (
  enabled ?
    (
      <Tooltip {...props} />
    ) :
    (
      props.children
    )
);

interface PropsFromState
{
  token: Resource<string>;
}

interface PropsFromDispatch
{
  retrieveYoutubeAuthToken: ( interactive: boolean ) => Promise<string>;
}

interface State
{
  drawerOpen: boolean;
  selectedPage: string;
}

type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles, true>;

class Main extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    drawerOpen: true,
    selectedPage: PAGES[ 0 ].name,
  };

  public async componentDidMount()
  {
    // try
    // {
    //   let token = await this.props.retrieveYoutubeAuthToken( false );
    //   console.log( 'Youtube Token:', token );
    // }
    // catch( e )
    // {
    //   console.warn( 'Could not silently retrieve Youtube token:', e );
    // }
  }

  public render()
  {
    const { classes, theme, token } = this.props;
    const { drawerOpen, selectedPage } = this.state;

    const page = PAGES.find( ( { name } ) => name === selectedPage ) || PAGES[ 0 ];
    const MainPageComponent = page.PageComponent;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label={drawerOpen ? 'Close drawer' : 'Open drawer'}
              onClick={drawerOpen ? this.onDrawerClose : this.onDrawerOpen}
              className={classes.menuButton}
            >
              {drawerOpen ?
                (
                  theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />
                ) :
                (
                  <MenuIcon />
                )}
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap={true}>
              Playlist Subscriber
            </Typography>
            <span className={classes.grow} />
            {!token.item && false && (
              <Button
                color="inherit"
                className={classes.menuButton}
                onClick={this.onYoutubeSignInClick}
                disabled={token.loading}
              >
                Sign In to YouTube
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames( classes.drawer, {
            [ classes.drawerOpen ]: drawerOpen,
            [ classes.drawerClose ]: !drawerOpen,
          } )}
          classes={{
            paper: classNames( {
              [ classes.drawerOpen ]: drawerOpen,
              [ classes.drawerClose ]: !drawerOpen,
            } ),
          }}
          open={drawerOpen}
        >
          <div className={classes.toolbarOffset} />
          <Divider />
          <List>
            {PAGES.map( ( { name, IconComponent }, i ) => (
              <HideableTooltip
                key={i}
                title={name}
                placement="right"
                enabled={!drawerOpen}
              >
                <ListItem
                  button={true}
                  selected={selectedPage === name}
                  onClick={() => this.onPageSelected( name )}
                >
                  <ListItemIcon>
                    <IconComponent color={( selectedPage === name ) ? 'secondary' : 'inherit'} />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </HideableTooltip>
            ) )}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbarOffset} />
          <MainPageComponent />
        </main>
      </div>
    );
  }

  private onDrawerOpen = () =>
  {
    this.setState( { drawerOpen: true } );
  }

  private onDrawerClose = () =>
  {
    this.setState( { drawerOpen: false } );
  }

  private onYoutubeSignInClick = async () =>
  {
    try
    {
      let token = await this.props.retrieveYoutubeAuthToken( true );
      console.log( 'Youtube Token:', token );
    }
    catch( e )
    {
      console.error( 'Failed to retrieve Youtube token:', e );
    }
  }

  private onPageSelected = ( page: string ) =>
  {
    this.setState( { selectedPage: page } );
  }
}

export default connect<PropsFromState, PropsFromDispatch, {}, RootState>(
  ( state ) => ( {
    token: state.youtubeApi.token
  } ),
  {
    retrieveYoutubeAuthToken: thunkToAction( retrieveYoutubeAuthToken.action )
  }
)( withStyles( styles, { withTheme: true } )( Main ) );
