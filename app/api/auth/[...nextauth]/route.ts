
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import type { NextAuthOptions } from "next-auth";
export const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"email",
            credentials:{
                email:{
                    label:"Email",type:"text",placeholder:'abc@example.com'
                },
                password:{
                    label:'Password',type:"password"
                }
            },
            async authorize(credentials){
                await connectDB();
                const email=credentials?.email;
                const password=credentials?.password;
                const isUserExist=await User.findOne({email})
                if(!isUserExist){
                    return null;
                }
                const isMatch=await bcrypt.compare(password as string,isUserExist.password)
                if(!isMatch){
                  return null;
                }
                return {
                    id:isUserExist._id.toString(),
                    name:isUserExist.username,
                    email:isUserExist.email
                };
            }
        })
    ],
    pages:{
        signIn:"/signin"
    },
    session:{
        strategy:"jwt"
    },
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id;
            }
            return token;
        },
        async session({session,token}){
            if(session.user){
                session.user.id=token.id as string;
            }
            return session;
        }
    },
    secret:process.env.NEXTAUTH_SECRET
};
const handler=NextAuth(authOptions);
export {handler as GET , handler as POST};