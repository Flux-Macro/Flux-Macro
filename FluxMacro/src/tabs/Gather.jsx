import { Text, View } from "react-native";
import { Tab } from "./_Tab";
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState, useEffect } from "react";
import { dropdown_styles as styles } from "../../App";

const data = [
    { label: 'Pine Tree Forest', value: 'pinetree' },
];

export const GatherTab=()=>{
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return(<Tab TabTitle="Gather">
        <Text>Gather</Text>
        <View style={{
            padding: 15,
            backgroundColor: "#101010",
            borderRadius: 15,
        }}>
            <Text>Feild</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
            />
        </View>
    </Tab>);
}