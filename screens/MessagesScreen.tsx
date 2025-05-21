import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, MessageDataType, Message } from '../types';
import { MessageCircle } from 'lucide-react-native';

type MessagesScreenRouteProp = RouteProp<RootStackParamList, 'Messages'>;

// Mock data for messages based on directory ID
const messageData: MessageDataType = {
  '1': [ // Work
    { id: '101', text: 'Meeting rescheduled to 3 PM', timestamp: '9:30 AM', sender: 'Sarah Johnson' },
    { id: '102', text: 'Please review the Q2 report by tomorrow', timestamp: '11:45 AM', sender: 'Michael Chen' },
    { id: '103', text: 'New client onboarding next week', timestamp: '2:15 PM', sender: 'David Smith' },
    { id: '104', text: 'Project deadline extended to Friday', timestamp: 'Yesterday', sender: 'Emma Wilson' },
    { id: '105', text: 'Team lunch confirmed for Thursday', timestamp: 'Yesterday', sender: 'Team Calendar' },
  ],
  '2': [ // Personal
    { id: '201', text: 'Remember to pick up groceries', timestamp: '10:00 AM', sender: 'Me' },
    { id: '202', text: 'Call mom for her birthday', timestamp: 'Yesterday', sender: 'Reminders' },
    { id: '203', text: 'Dentist appointment next Tuesday at 2 PM', timestamp: '2 days ago', sender: 'Calendar' },
    { id: '204', text: 'Pay electricity bill', timestamp: '3 days ago', sender: 'Bills Reminder' },
  ],
  '3': [ // Projects
    { id: '301', text: 'UI designs finalized for homepage', timestamp: '1:20 PM', sender: 'Design Team' },
    { id: '302', text: 'Backend API documentation updated', timestamp: 'Yesterday', sender: 'Alex Martinez' },
    { id: '303', text: 'Testing phase begins next Monday', timestamp: '2 days ago', sender: 'QA Team' },
  ],
  '4': [ // Family
    { id: '401', text: 'Dinner at grandma\'s on Sunday', timestamp: '10:45 AM', sender: 'Mom' },
    { id: '402', text: 'Jessica\'s graduation pictures uploaded', timestamp: 'Yesterday', sender: 'Dad' },
    { id: '403', text: 'Family vacation planning - vote on destination', timestamp: '3 days ago', sender: 'Family Group' },
    { id: '404', text: 'Tommy needs a ride to soccer practice tomorrow', timestamp: '3 days ago', sender: 'Sister' },
  ],
  '5': [ // Friends
    { id: '501', text: 'Movie night confirmed for Saturday', timestamp: '3:30 PM', sender: 'John' },
    { id: '502', text: 'Beach trip planned for next weekend', timestamp: 'Yesterday', sender: 'Friends Group' },
    { id: '503', text: 'Happy hour at Barley\'s after work', timestamp: '2 days ago', sender: 'Lisa' },
  ],
  '6': [ // Shopping Lists
    { id: '601', text: 'Grocery list for the week', timestamp: 'Yesterday', sender: 'Me' },
    { id: '602', text: 'Items to buy for the camping trip', timestamp: '3 days ago', sender: 'Outdoor Group' },
  ],
  '7': [ // Ideas
    { id: '701', text: 'App feature: dark mode implementation', timestamp: '11:20 AM', sender: 'Me' },
    { id: '702', text: 'Blog post topic: React Native best practices', timestamp: '2 days ago', sender: 'Content Calendar' },
    { id: '703', text: 'Birthday gift ideas for Sarah', timestamp: '5 days ago', sender: 'Me' },
  ],
  '8': [ // Health
    { id: '801', text: 'Track daily water intake', timestamp: 'Today', sender: 'Health App' },
    { id: '802', text: 'Weekly workout schedule updated', timestamp: 'Yesterday', sender: 'Fitness Tracker' },
    { id: '803', text: 'Meditation session reminder', timestamp: '2 days ago', sender: 'Mindfulness App' },
  ],
};

export default function MessagesScreen() {
  const route = useRoute<MessagesScreenRouteProp>();
  const { directoryId } = route.params;
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Load messages based on directory ID
    setMessages(messageData[directoryId] || []);
  }, [directoryId]);

  const renderMessageItem: ListRenderItem<Message> = ({ item }) => (
    <View style={styles.messageItem}>
      <View style={styles.messageHeader}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <View style={styles.messageContent}>
        <MessageCircle color="#2196F3" size={20} style={styles.messageIcon} />
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {messages.length > 0 ? (
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No messages in this directory</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    padding: 16,
  },
  messageItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sender: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  timestamp: {
    fontSize: 14,
    color: '#666666',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  messageIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  messageText: {
    fontSize: 15,
    color: '#333333',
    flex: 1,
    lineHeight: 22,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
  },
});