import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

const AIBotPopup = ({visible, onClose}) => {
  const [inputText, setInputText] = useState('');

  const botResponses = [
    {patterns: ['hello', 'hi', 'hey'], response: 'Hi there!'},
    {
      patterns: ['how are you', 'how are you doing'],
      response: "I'm doing well, thank you!",
    },
    {
      patterns: ["what's your name", 'who are you'],
      response: "I'm just a simple AI bot.",
    },
    {
      patterns: ['bye', 'goodbye', 'see you', 'see you later'],
      response: 'Goodbye!',
    },
    {
      patterns: [
        'how to manage my finance',
        'finance help',
        'finance',
        'help for finance',
      ],
      response: 'Got your query. For more information, visit our Finance page.',
    },
    // Add more predefined responses here
  ];

  const [chatHistory, setChatHistory] = useState([]);

  const handleQueryClick = query => {
    // Add user query to chat history

    setChatHistory(prevChat => [...prevChat, {type: 'user', text: query}]);
    // Search for a matching response pattern

    setInputText('');

    const matchedResponse = botResponses.find(response =>
      response.patterns.some(pattern => query.toLowerCase().includes(pattern)),
    );

    if (matchedResponse) {
      // Add bot response to chat history
      setChatHistory(prevChat => [
        ...prevChat,
        {type: 'bot', text: matchedResponse.response},
      ]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={require('./Assetb/aibot.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginBottom: 10,
              marginTop: 10,
            }}
          />

          <ScrollView style={{maxHeight: 300}}>
            {chatHistory.map((message, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent:
                    message.type === 'bot' ? 'flex-start' : 'flex-end',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    backgroundColor:
                      message.type === 'bot' ? '#e5e5e5' : '#dcf8c6',
                    borderRadius: 10,
                    padding: 10,
                    maxWidth: '70%',
                  }}>
                  <Text
                    style={{color: message.type === 'bot' ? 'black' : 'green'}}>
                    {message.text}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <TextInput
            placeholder="Type your query..."
            value={inputText} // Add this line
            onChangeText={setInputText} // Add this line
            onSubmitEditing={event => {
              handleQueryClick(event.nativeEvent.text);
            }}
            style={{borderBottomWidth: 1, marginBottom: 10}}
          />
          <TouchableOpacity onPress={onClose} style={{alignItems: 'flex-end'}}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AIBotPopup;

// import {View, Text, TouchableOpacity, Modal} from 'react-native';

// const AIBotPopup = ({visible, onClose}) => {
//   return (
//     <Modal visible={visible} animationType="slide" transparent={true}>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
//           <Text>AI Bot</Text>
//           <TouchableOpacity onPress={onClose}>
//             <Text>Close</Text>
//           </TouchableOpacity>
//           {/* You can add your AI bot interaction UI here */}
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default AIBotPopup;
