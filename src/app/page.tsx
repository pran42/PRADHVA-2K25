import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

const ContactCard = ({ name, role, email, phone, image }: ContactCardProps) => (
  <Card className="bg-gradient-to-b from-amber-500 to-white border-none hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-y-2">
    <Image
      src={image}
      alt={`${name}'s picture`}
      width={199}
      height={199}
      className="rounded-full mt-4 border-2 border-white w-32 h-32 object-cover"
    />
    <CardHeader className="items-center">
      <CardTitle className="font-bold">{name}</CardTitle>
      <p className="font-medium">{role}</p>
    </CardHeader>
    <CardContent>
      <p className="flex items-center">
        <Mail className="mr-2" size={16} /> {email}
      </p>
      {phone && (
        <p className="flex items-center mt-2">
          <Phone className="mr-2" size={16} /> {phone}
        </p>
      )}
    </CardContent>
  </Card>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-400 text-white font-sans">
      {/* Header */}
      <header className="py-20 text-center bg-gradient-to-b from-green-500 to-white border-none hover:shadow-lg transition-shadow duration-300">
        <Image
          src="/sportec-logo.jpeg"
          alt="Pradhva Logo"
          width={150}
          height={150}
          className="mx-auto mb-8 rounded-full"
        />
        <h1 className="text-7xl font-bold mb-4 text-black">PRADHVA</h1>
        <p className="text-2xl mb-8 text-black">
          IIIT Kottayam&apos;s Annual Sports Fest
        </p>
        <Link href={"/registrations"}>
          <Button
            type="button"
            size="lg"
            className="bg-green-500 text-white hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg font-semibold"
          >
            Register Now
          </Button>
        </Link>
      </header>

      {/* Navigation */}
      <nav className="bg-amber-400 py-4 sticky top-0 z-10">
        <ul className="flex justify-center space-x-8">
          <li>
            <a
              href="#about"
              className="text-black hover:text-white transition-colors font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="text-black hover:text-white transition-colors font-medium"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/rules"
              className="text-black hover:text-white transition-colors font-medium"
            >
              Rules
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-5xl font-bold mb-6 text-black">About Pradhva</h2>
          <p className="text-xl mb-4 text-white">
            Pradhva is IIIT Kottayam&apos;s annual sports fest, where students
            participate in a wide range of sports events. It serves as a
            platform for showcasing athletic talent and fosters competitive
            spirit among participants.
          </p>
          <p className="text-xl">
            The event includes multiple games like badminton, football,
            volleyball, athletics, and many others, giving students the
            opportunity to represent their skills and passion for sports.
          </p>
        </section>

        {/* Event Highlights */}
        <section id="events" className="mb-20">
          <h2 className="text-5xl font-bold mb-10 text-black">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-amber-500 to-yellow-300 border-none hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-black font-bold">
                  <Trophy className="mr-2" /> Student Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-black">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="block text-lg mb-2">
                        TRACK EVENTS
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>100m</li>
                        <li>200m</li>
                        <li>400m</li>
                        <li>800m</li>
                        <li>1500m</li>
                        <li>4x100m Relay</li>
                        <li>4x400m Relay</li>
                      </ul>
                      <strong className="block text-lg mb-2">
                        INDOOR GAMES
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Table Tennis</li>
                        <li>Carroms</li>
                        <li>Chess</li>
                        <li>Badminton</li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <strong className="block text-lg mb-2">
                        GROUP GAMES
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Cricket</li>
                        <li>Football</li>
                        <li>Volleyball</li>
                        <li>Basketball</li>
                        <li>Kho-Kho</li>
                        <li>Kabaddi</li>
                      </ul>

                      <strong className="block text-lg mb-2">
                        FIELD EVENTS
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Long Jump</li>
                        <li>Discus Throw</li>
                        <li>Shot Put</li>
                        <li>Javelin Throw</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <strong>Kabaddi and Kho-Kho will be conducted later</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500 to-yellow-300 border-none hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-black font-bold">
                  <Users className="mr-2" /> Staff Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-black">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="block text-lg mb-2">
                        INDOOR GAMES
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Table Tennis</li>
                        <li>Carroms</li>
                        <li>Chess</li>
                      </ul>
                      <strong className="block text-lg mb-2">
                        TRACK EVENTS
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>50m</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="block text-lg mb-2">
                        FIELD EVENTS
                      </strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Discus Throw</li>
                        <li>Shot Put</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-5xl font-bold mb-10 text-black">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Dr. A Ananth"
              role="Faculty-In-Charge"
              email="ananth@iiitkottayam.ac.in"
              phone=""
              image="/Dr_Ananth_pic_2.jpg"
            />

            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Ms Priya Mol K"
              role="Physical Education Instructor"
              email="pet@iiitkottayam.ac.in"
              phone=""
              image="/Priya_pic.jpg"
            />
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Bhargav Ch"
              role="Sportec-Club Mentor"
              email="chennup23bcs219@iiitkottayam.ac.in"
              phone="+91 9381895559"
              image="/bhargav.jpeg" // Update image path
            />
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Praneetha Pillai"
              role="Sportec-Club Mentor"
              email="praneet23bcs207@iiitkottayam.ac.in"
              phone="+91 9063721357"
              image="/placeholder-w.jpg"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-amber-500 to-yellow-300 p-16 rounded-lg shadow-xl">
          <h2 className="text-5xl font-bold mb-6 text-black">
            Ready to Participate?
          </h2>
          <Link href={"/registrations"}>
            <Button
              size="lg"
              className="bg-black text-yellow-500 hover:bg-gray-900 hover:text-yellow-400 transition-all duration-300 shadow-lg font-semibold"
            >
              Join Pradhva 2025
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-500 py-8 text-center text-black mt-20">
        <p>&copy; 2025 Pradhva. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
