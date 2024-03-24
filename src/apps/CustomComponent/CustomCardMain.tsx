import {SafeAreaView} from 'react-native';
import React from 'react';
import CustomCard from './component/CustomCard.tsx';

const CustomCardMain = () => {
  return (
    <SafeAreaView>
      <CustomCard title="Eddard Stark" text="Winter is coming..." />
      <CustomCard title="Arif Işık" text="Her türlü halı, kilim, travel..." />
      <CustomCard
        title="Serbest"
        text="Benim babamın siki kutu kola gibidir..."
      />
    </SafeAreaView>
  );
};

export default CustomCardMain;
