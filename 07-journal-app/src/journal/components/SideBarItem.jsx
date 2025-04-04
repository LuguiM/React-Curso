import { TurnedInNot } from '@mui/icons-material'
import { Grid2 as Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({title = '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title
    }, [title])

    const activeNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    return (
        <ListItem key={id} disablePadding onClick={activeNote}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
