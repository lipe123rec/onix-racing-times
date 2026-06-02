import { supabase } from './supabase.js';

/**
 * Get current session user
 * @returns {Promise<object|null>}
 */
export async function getCurrentUser() {
  if (!supabase) return null;
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    return user;
  } catch (e) {
    return null;
  }
}

/**
 * Get profile for user
 * @param {string} userId 
 * @returns {Promise<object|null>}
 */
export async function getUserProfile(userId) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}

/**
 * Login user
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<object>}
 */
export async function login(email, password) {
  if (!supabase) throw new Error('Supabase client not initialized.');
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

/**
 * Logout user
 */
export async function logout() {
  if (!supabase) return;
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
