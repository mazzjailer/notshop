'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useSession } from '@/contexts/sessionContext'
import { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { FaC, FaCheck } from 'react-icons/fa6'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { authClient } from '@/lib/auth-client'
import { Toaster, toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'


const ProfilePage = () => {
  const { session } = useSession();
  const [name, setName] = useState(session?.user?.name);
  const [email, setEmail] = useState(session?.user?.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <Card className='rounded-2xl'>
      <CardContent className='flex flex-col gap-4 py-4'>
        <div className='flex flex-col gap-2'>
          <Label className='font-medium'>Change your name:</Label>
          <div className='flex felx-row gap-1'>
            <Input className='rounded-xl' value={name} onChange={(e) => {
              setName(e.target.value);
            }} />
            <Button className='rounded-xl bg-[#5A3D25] hover:bg-[#5A3D25] hover:opacity-90' type='submit' size='icon' disabled={loading} onClick={async () => {
              await authClient.updateUser({
                name: name,
                callbackURL: "/dashboard",
                fetchOptions: { 
                  onResponse: () => {
                    setLoading(false);
                  },
                  onRequest: () => {
                    setLoading(true);
                  },
                  onError: (ctx) => {
                    toast.error(ctx.error.message);
                  },
                  onSuccess: () => {
                    toast.success('Name changed successfully');
                  }
                }
            })
            }}>{loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <FaCheck />
            )}</Button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Label className='font-medium'>Change your email:</Label>
          <div className='flex felx-row gap-1'>
            <Input className='rounded-xl' value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
            <Button className='rounded-xl bg-[#5A3D25] hover:bg-[#5A3D25] hover:opacity-90' type='submit' size='icon' disabled={loading} onClick={async () => {
              await authClient.changeEmail({
                newEmail: email,
                callbackURL: "/dashboard",
                fetchOptions: { 
                  onResponse: () => {
                    setLoading(false);
                  },
                  onRequest: () => {
                    setLoading(true);
                  },
                  onError: (ctx) => {
                    toast.error(ctx.error.message);
                  },
                  onSuccess: () => {
                    toast.success('Email changed successfully');
                  }
                }
            });
            }}>{loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <FaCheck />
            )}</Button>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Toaster toastOptions={{
              className: 'bg-black text-white',
            }} 
          />
          <Dialog>
            <DialogTrigger className='bg-[#5A3D25] hover:opacity-90 rounded-xl text-white text-sm px-4 py-2 font-medium'>Change your password</DialogTrigger>
            <DialogContent className='flex flex-col gap-4 bg-white rounded-3xl'>
              <div className='flex flex-col gap-2'>
                <Label className='font-medium'>Enter your current password:</Label>
                <Input type='password' className='rounded-xl' value={currentPassword} onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }} />
              </div>
              <div className='flex flex-col gap-2'>
                <Label className='font-medium'>Enter a new password:</Label>
                <Input type='password' className='rounded-xl' value={newPassword} onChange={(e) => {
                  setNewPassword(e.target.value);
                }} />
              </div>
              <Button className='rounded-xl bg-[#5A3D25] font-medium hover:bg-[#5A3D25] hover:opacity-90' type='submit' disabled={loading} onClick={ async () => {
                  await authClient.changePassword({
                    newPassword: newPassword,
                    currentPassword: currentPassword,
                    revokeOtherSessions: true,
                    callbackURL: "/dashboard",
                    fetchOptions: { 
                      onResponse: () => {
                        setLoading(false);
                      },
                      onRequest: () => {
                        setLoading(true);
                      },
                      onError: (ctx) => {
                        toast.error(ctx.error.message);
                        setNewPassword('');
                        setCurrentPassword('')
                      },
                      onSuccess: () => {
                        toast.success('Password changed successfully');
                      }
                    }
                });
                }
              }> {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Change"
              )}</Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfilePage