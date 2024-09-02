import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages.tsx";
import MessageSkeleton from "../skeletons/MessageSkeleton.tsx";

const Messages = () => {

    const {loading, messages} = useGetMessages();

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.map((message) => (
                <Message key={message.id} message={message}/>
            ))}

            {!loading && messages.length === 0 && (
                <p className='text-center text-white'>Send a message to start the conversation</p>
            )}
        </div>
    );
};
export default Messages;
