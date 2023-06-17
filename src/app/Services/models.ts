export interface AuthStatus {
    status : string;
    user_id ?: string;
};

export interface AuthData {
    username ?: string;
    email : string;
    password : string;
};

export interface ChatData {
    user : string;
};

export interface ChatReply {
    reply : string;
};