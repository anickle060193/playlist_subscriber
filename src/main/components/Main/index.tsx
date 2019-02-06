import React from 'react';
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
  Tooltip
} from '@material-ui/core';
import { TooltipProps } from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const drawerWidth = 240;

const styles = ( theme: Theme ) => createStyles( {
  root: {
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
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
} );

const PAGES = [
  { name: 'Home', IconComponent: HomeIcon },
  { name: 'Subscriptions', IconComponent: SubscriptionsIcon },
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

interface State
{
  drawerOpen: boolean;
  selectedPage: number;
}

type Props = WithStyles<typeof styles, true>;

class Main extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    drawerOpen: true,
    selectedPage: 0,
  };

  public render()
  {
    const { classes, theme } = this.props;
    const { drawerOpen, selectedPage } = this.state;

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
                  selected={selectedPage === i}
                  onClick={() => this.onPageSelected( i )}
                >
                  <ListItemIcon>
                    <IconComponent color={( selectedPage === i ) ? 'secondary' : 'inherit'} />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </HideableTooltip>
            ) )}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbarOffset} />
          <Typography paragraph={true}>
            Content
          </Typography>
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

  private onPageSelected = ( page: number ) =>
  {
    this.setState( { selectedPage: page } );
  }
}

export default withStyles( styles, { withTheme: true } )( Main );
