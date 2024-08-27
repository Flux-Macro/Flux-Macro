import { ScrollView, Text } from "react-native";
export const Tab=({ TabTitle, children })=>{
    return(<>
        <ScrollView style={{
            padding: 25,
        }}
        contentContainerStyle={{
            gap: 10,
        }} 
        key={btoa(TabTitle)}>
          {children}
        </ScrollView>
    </>);
}