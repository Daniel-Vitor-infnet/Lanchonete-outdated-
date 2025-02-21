
import { createClient } from '@supabase/supabase-js';
import { getUser } from '../utils/function';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

// const user = getUser().id
const table_name = "react_tp3"


const generateUid = () => {

};



const update = async (data, id) => {
    if (id) {
        data.id = id;
    }
    return await supabase.from(table_name).upsert(data).select();
}


const drop = async (id) => {
    return await supabase.from(table_name).delete().eq("id", id);
}

const get = async (id) => {
    const { data, error } = await supabase.from(table_name).select().eq("id", id).order('created_at', { ascending: false });
    if (error) {
        throw error;
    }
    return data[0];
}

const list = async () => {
    const { data, error } = await supabase.from(table_name).select().order('created_at', { ascending: false });
    if (error) {
        throw error;
    }
    return data;
}



const save = (data) => {
    update(data, null);


};


export { save, update, drop, get, list };