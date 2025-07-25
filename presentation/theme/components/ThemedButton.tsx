import { Ionicons } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { Platform, Pressable, PressableProps, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';


interface Props extends PressableProps {
    icon?: keyof typeof Ionicons.glyphMap;
    children?: ReactNode;
    widthWeb?: number;
    widthAndroid?: number;
    backgroundColor?: string;
}

const ThemedButton = ({
    children,
    widthWeb = 0,
    widthAndroid = 0,
    icon,
    backgroundColor: customBackgroundColor,
    ...rest
}: Props) => {
    const { width } = useWindowDimensions();
    const resto = () => {
        if (widthAndroid === 0 && widthWeb === 0) {
            return null;
        }
        return {
            width: Platform.select({
                web: width * widthWeb,
                default: width * widthAndroid,
            }),
        };
    };

    const defaultBackgroundColor = useThemeColor({}, 'primary');
    const textColor = useThemeColor({}, 'textButton');
    const backgroundColor = customBackgroundColor || defaultBackgroundColor;

    return (
        <View>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? backgroundColor + '90' : backgroundColor,
                    },
                    resto(),
                    styles.button,
                ]}
                {...rest}
            >
                <Text style={{ color: textColor, fontWeight: 'bold' }}>{children}</Text>
                {icon && (
                    <Ionicons
                        name={icon}
                        size={24}
                        color={textColor}
                        style={{ alignItems: 'flex-end', left: Platform.select({ web: width * 0.08, default: width * 0.2 }) }}
                    />
                )}
            </Pressable>
        </View>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        minWidth: 74,

    },

})