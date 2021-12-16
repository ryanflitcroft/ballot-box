const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4Mzk4NywiZXhwIjoxOTU1MjU5OTg3fQ.lZd6n8MtNXbfRUtdU92nzkroI1CnEE8ap-xzguNGUDI';

const SUPABASE_URL = 'https://nlriycmmckxcuagpzbyu.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

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
