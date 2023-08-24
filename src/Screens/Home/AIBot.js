import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import AIBotPopup from './AIBotPopup'; // Adjust the path accordingly

const AIBot = () => {
  const [isAIBotVisible, setIsAIBotVisible] = useState(false);

  const openAIBot = () => {
    setIsAIBotVisible(true);
  };

  const closeAIBot = () => {
    setIsAIBotVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={openAIBot}>
        <Image
          source={require('./Assetb/aibot.png')}
          style={{width: 80, height: 80, borderRadius: 25}}
        />
      </TouchableOpacity>
      <AIBotPopup visible={isAIBotVisible} onClose={closeAIBot} />
    </View>
  );
};

export default AIBot;
