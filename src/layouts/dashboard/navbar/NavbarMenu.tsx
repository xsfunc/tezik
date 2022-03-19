import { List, ListSubheader, Typography } from '@mui/material'
import { useCollapseDrawer } from '../hooks/useCollapseDrawer'
import { NavbarMenuItem } from './NavbarMenuItem'
import { menu } from './navbarConfig'

export function NavbarMenu() {
  const { isCollapsed } = useCollapseDrawer()

  return (
    <>
      {menu?.map(({ subheader, items }) => (
        <List key={subheader} disablePadding sx={{ px: 2 }}>
          <ListSubheader
            component={Typography}
            variant="overline"
            disableSticky
            disableGutters
            sx={{
              pt: 3,
              pl: 2,
              pb: 1,

              color: (theme) => theme.palette.text.primary,
              transition: ({ transitions }) =>
                transitions.create('opacity', {
                  duration: transitions.duration.shorter,
                }),

              ...(isCollapsed && {
                opacity: 0,
              }),
            }}
          >
            {subheader}
          </ListSubheader>

          {items?.map((item) => (
            <NavbarMenuItem key={item.title} {...item} />
          ))}
        </List>
      ))}
    </>
  )
}
