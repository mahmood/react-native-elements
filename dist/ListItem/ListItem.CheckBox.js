var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyleSheet } from 'react-native';
import CheckBox from '../CheckBox';
/** This allows adding CheckBox to the ListItem.
 * This, Receives all [CheckBox](checkbox#props) props. */
export const ListItemCheckBox = (_a) => {
    var { containerStyle } = _a, rest = __rest(_a, ["containerStyle"]);
    return (<CheckBox {...rest} containerStyle={StyleSheet.flatten([styles.container, containerStyle])}/>);
};
const styles = StyleSheet.create({
    container: {
        margin: 0,
        marginRight: 0,
        marginLeft: 0,
        padding: 0,
    },
});
ListItemCheckBox.displayName = 'ListItem.CheckBox';