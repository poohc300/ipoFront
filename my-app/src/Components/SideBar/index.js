import React from "react";
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { Toolbar } from "@mui/material";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const SideBar = () => {
    const navigate = useNavigate();

    const handleClick = (text) => {
        switch (text) {
            case 'IPO 분석 홈':
                navigate('/');
                break;
            case '공모주 분석':
                navigate('/ipoAnalysis');
                break;
            case '시세 분석':
                navigate('/marketAnalysis');
                break;
            case '이슈 분석':
                navigate('/issueAnalysis');
                break;

            default:
                break;
        }
    }
    return (
        <div id="sidebar">
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['IPO 분석 홈', '공모주 분석', '시세 분석', '이슈 분석'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => {
                                handleClick(text)
                            }}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {/* <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>

        </div>
    )
}
export default SideBar