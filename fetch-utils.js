const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4Mzk4NywiZXhwIjoxOTU1MjU5OTg3fQ.lZd6n8MtNXbfRUtdU92nzkroI1CnEE8ap-xzguNGUDI';

const SUPABASE_URL = 'https://nlriycmmckxcuagpzbyu.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createPoll(poll) {
    // creates a poll for currently signed-in user in Supabase.
    const newPoll = { ...poll };
    const response = await client
        .from('Polls')
        .insert(
            newPoll
        );
    // console.log(response.data);
    return response.data;
}

export async function getPolls() {
    // returns polls for currently signed-in user from Supabase.

}

// AUTH FUNCTIONS

export async function signIn(email, password) {
    const response = await client.auth.signIn({
        email,
        password
    });
    // console.log(response);
    return response.user;
}

export async function signUp(email, password) {
    const response = await client.auth.signUp({
        email,
        password
    });
    // console.log(response);
    return response.user;
}

export async function signOut() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function getUser() {

    return client.auth.session();
}

export async function redirect() {
    if (await getUser()) {
        location.replace('./main');
    }
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) {
        location.replace('../');
    }
}