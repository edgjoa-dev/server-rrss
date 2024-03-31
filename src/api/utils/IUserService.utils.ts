
export interface IUser {
    name:      string;
    user_name: string;
    email:     string;
    password:  string;
    bio?:       string;
    birth_day?: Date;
    gender?:    string;
    web_site?:  string;
    phone?:     string;
    private?:   boolean;
    role?:      string;
    state?:     boolean;
    google?:    boolean;
    createAT:   Date;
    uid:        string;
}
