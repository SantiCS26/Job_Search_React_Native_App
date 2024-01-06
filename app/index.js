import {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {
    NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome
} from '../constants';


const Home = () => {
    const router = useRouter();

    return(
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    
                }}
            />
        </SafeAreaView>
    )
}

export default Home;