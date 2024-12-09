import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Appbar, Avatar } from 'react-native-paper';

const LeftContent = props => (
    <Avatar.Image {...props} size={40} source={require('./11.jpg')} />
  );
  
  const DetailsScreen = ({ navigation }) => {
    return (
      <>

        <ScrollView contentContainerStyle={styles.container}>
          <Card style={styles.card}>
            <Card.Title title="Imallzz" subtitle=" Information" left={LeftContent} />
            <Card.Content>
              <Title>Singkat saja</Title>
              <Paragraph>
                Belajar DPM sanggat menyenangkan🔥
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => navigation.goBack()}>
                Back to Dashboard
              </Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      alignItems: 'stretch',
    },
    card: {
      marginVertical: 10,
    },
  });
  
  export default DetailsScreen;