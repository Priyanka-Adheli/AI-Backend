const mongoose = require("mongoose");
const {Schema} = mongoose;
const MessageSchema = Schema(
  {
    role: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ChatMessageSchema = Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    chatMessages: [
      {
        title: {
          type: String,
          default: "New Chat",
        },
        messages: [MessageSchema],
      },
    ],
  },
  { timestamps: true }
);

const ChatData = mongoose.model("ChatData", ChatMessageSchema);
module.exports = ChatData;
