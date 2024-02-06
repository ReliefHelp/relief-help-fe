import React, { useState } from "react";
import LandingPageNav from "../landing page/navbar";
import "./chatbot.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import image from "../../../src/assets/images/carousel/disaster pic 2.jpg";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ReliefHelper! Ask me anything!",
      sentTime: "just now",
      sender: "ReliefHelper",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role =
        messageObject.sender === "ReliefHelper" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      messages: apiMessages,
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices[0].message.content;

        setMessages((prevMessages) => [
          ...prevMessages,
          { message: reply, sender: "ReliefHelper" },
        ]);
      } else {
        console.error("Failed to get a response from the OpenAI API");
      }
    } catch (error) {
      console.error("An error occurred while calling the OpenAI API", error);
    }

    setIsTyping(false);
  }

  return (
    <div className="ChatBot">
      <LandingPageNav />
      <div className="grid-container">
        <div className="image-column">
          <img className="chatbot-picture" src={image} alt="Your Image" />
        </div>
        <div className="chatbot-column">
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping && (
                    <TypingIndicator content="ReliefHelper is typing" />
                  )
                }
              >
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput
                className="input-message"
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
