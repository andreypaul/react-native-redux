import React from 'react';
import {Scene, Stack} from "react-native-router-flux";
import Main from "../containers/Main";
import Profile from "../containers/Profile";
import Dashboard from "../screens/Dashboard";

export const MainTab = () =>
    <Scene
        key="Main"
        component={Main}
        title="Main" initial
    />

export const ProfileTab = () =>
    <Scene
        key="Profile"
        component={Profile}
        title="Profile"
    />

export const DashboardTab = () =>
    <Scene
        key="Dashboard"
        component={Dashboard}
        title="Dashboard"
    />