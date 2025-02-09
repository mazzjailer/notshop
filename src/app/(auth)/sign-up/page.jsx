"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "@/contexts/sessionContext";

export default function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const { session } = useSession();

	return (
		<div className="flex items-center justify-center h-screen">
			{!session ? (<Card className="rounded-3xl md:max-w-md max-w-sm">
				<CardHeader>
					<CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
					<CardDescription className="text-xs md:text-sm">
						Enter your information to create an account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="first-name">First name</Label>
								<Input
									id="first-name"
									placeholder="Max"
									required
									onChange={(e) => {
										setFirstName(e.target.value);
									}}
									value={firstName}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="last-name">Last name</Label>
								<Input
									id="last-name"
									placeholder="Robinson"
									required
									onChange={(e) => {
										setLastName(e.target.value);
									}}
									value={lastName}
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								value={email}
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								autoComplete="new-password"
								placeholder="Password"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Confirm Password</Label>
							<Input
								id="password_confirmation"
								type="password"
								value={passwordConfirmation}
								onChange={(e) => setPasswordConfirmation(e.target.value)}
								autoComplete="new-password"
								placeholder="Confirm Password"
							/>
						</div>
						<Toaster toastOptions={{
              className: 'bg-black text-white',
            }} 
            />
						<Button
							type="submit"
							className="w-full bg-[#5A3D25] hover:bg-[#5A3D25] hover:bg-opacity-95"
							disabled={loading}
							onClick={async () => {
								await signUp.email({
									email,
									password,
									name: `${firstName} ${lastName}`,
									callbackURL: "/",
									fetchOptions: {
										onResponse: () => {
											setLoading(false);
										},
										onRequest: () => {
											setLoading(true);
										},
										onError: (ctx) => {
											toast(ctx.error.message);
										},
									},
								});
							}}
						>
							{loading ? (
								<Loader2 size={16} className="animate-spin" />
							) : (
								"Create an account"
							)}
						</Button>
					</div>
				</CardContent>
				<CardFooter>
					<div className="flex justify-center w-full border-t py-4">
						<p className="text-gray-500">Already have an account?</p>
						<Link href="/sign-in" className="ml-2 text-blue-500">Sign in</Link>
          </div>
				</CardFooter>
			</Card>) : (<Card>
        <CardHeader>
          <CardTitle className="text-xl">
            You are already logged in!
          </CardTitle>
          <Link href='/' className="text-blue-500 hover:underline text-md">Go to home page &gt;</Link>
        </CardHeader>
      </Card>)}
		</div>
	);
}