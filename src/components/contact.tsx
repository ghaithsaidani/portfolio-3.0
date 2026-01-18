import {Mail, Map, Phone} from "lucide-react"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser"
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {useState} from "react"
import {toast} from "sonner";
import CustomSonner from "@/components/ui/custom-sonner.tsx";


const CONTACT_OPTIONS = [
    {
        icon: Map,
        title: "Address",
        description: "Hamburg, Germany",
    },
    {
        icon: Phone,
        title: "Phone",
        description: "+49 174 1690356",
    },
    {
        icon: Mail,
        title: "Email",
        description: "ghaith.saidani.contact@gmail.com",
    },
];


const ContactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().optional(),
    inquiry: z.string().min(5, "Please enter your message"),
})

type ContactFormValues = z.infer<typeof ContactSchema>

const Contact = () => {
    const [isLoading, setIdLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            inquiry: ''
        }
    });

    const onSubmit = async (values: ContactFormValues) => {
        setIdLoading(true)

        try {
            await emailjs.send(
                import.meta.env.VITE_APP_SERVICE_ID,
                import.meta.env.VITE_APP_TEMPLATE_ID,
                {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.inquiry,
                },
                import.meta.env.VITE_APP_PUBLIC_KEY
            ).then(() => {
                toast.custom((t) => (<CustomSonner id={t} status={'success'} message={'Message sent successfully'}/>))
                form.reset()
            })
        } catch (error) {
            console.error(error)
            toast.custom((t) => (<CustomSonner id={t} status={'error'} message={'Error sending message'}/>))
        } finally {
            setIdLoading(false)
        }
    }

    return (
        <section className="py-16" id={"contact"}>
            <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-4xl font-bold">
                            Let's start a conversation
                        </h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            I'm always happy to help with any questions you might have. Get
                            in touch with me and I'll respond as soon as possible.
                        </p>

                        <div className="space-y-6">
                            {CONTACT_OPTIONS.map(
                                ({icon: Icon, title, description}, key) => (
                                    <div key={key} className="flex items-start gap-4">
                                        <div
                                            className="bg-primary/10 grid h-12 w-12 shrink-0 place-items-center rounded-lg">
                                            <Icon className="text-primary h-6 w-6"/>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-1 font-semibold">{title}</h3>
                                            <p className="text-muted-foreground mb-3 text-sm">
                                                {description}
                                            </p>
                                            {/*<Button variant="link" className="h-auto p-0">
                                                {action} →
                                            </Button>*/}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <Card className="p-8">
                        <h3 className="mb-6 text-2xl font-bold">Quick Contact</h3>

                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* NAME */}
                            <div className="space-y-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    {...form.register("name")}
                                />
                                {form.formState.errors.name && (
                                    <p className="text-sm text-red-500">
                                        {form.formState.errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* EMAIL */}
                            <div className="space-y-2">
                                <Label htmlFor="email">Your Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...form.register("email")}
                                />
                                {form.formState.errors.email && (
                                    <p className="text-sm text-red-500">
                                        {form.formState.errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* PHONE */}
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number (Optional)</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone"
                                    {...form.register("phone")}
                                />
                            </div>

                            {/* MESSAGE */}
                            <div className="space-y-2">
                                <Label htmlFor="inquiry">Your Inquiry</Label>
                                <Textarea
                                    id="inquiry"
                                    placeholder="What can I help you with?"
                                    {...form.register("inquiry")}
                                />
                                {form.formState.errors.inquiry && (
                                    <p className="text-sm text-red-500">
                                        {form.formState.errors.inquiry.message}
                                    </p>
                                )}
                            </div>

                            {/* BUTTON + STATUS */}
                            <Button className="w-full" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Submit"}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Contact;
