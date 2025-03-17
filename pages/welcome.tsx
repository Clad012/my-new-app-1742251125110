
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";

/**
 * Welcome page component
 *
 * Displays a welcome message and a list of features.
 *
 * @returns {JSX.Element} The rendered welcome page
 */
export default function Welcome(): JSX.Element {
  const features = [
    {
      title: "Easy Navigation",
      description: "Intuitive interface for effortless browsing.",
    },
    {
      title: "Powerful Search",
      description: "Quickly find what you're looking for with our advanced search.",
    },
    {
      title: "Customizable Settings",
      description: "Tailor the application to your preferences.",
    },
    {
      title: "Real-time Updates",
      description: "Stay informed with instant notifications.",
    },
    {
      title: "Secure Data",
      description: "Your information is protected with industry-leading security.",
    },
  ];

  return (
    <Layout title="Welcome" description="Welcome to our application!">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Our Application!
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl">
          We're thrilled to have you on board. Here's a quick overview of what
          you can expect:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center">
                  <CheckCircleIcon className="mr-2 text-green-500" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>

                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
