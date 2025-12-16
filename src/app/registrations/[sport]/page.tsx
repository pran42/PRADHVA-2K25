import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { notFound } from 'next/navigation';

const sportsData: {
    [key: string]: {
        icon: string;
        rules: string[];
        bgImage: string;
        formLink?: string;
        singlesFormLink?: string;
        doublesFormLink?: string;
    }
} = {
    'Cricket': {
        icon: '🏏',
        rules: [
            "Spot registrations are not allowed.",
            "Each team must have at least 5 bowlers; failure to comply will result in disqualification.",
            "All matches will follow a knockout format with 10 overs per match, and each bowler may bowl a maximum of 2 overs.",
            "Players from a knocked-out team are not allowed to join another team.",
            "No more than 15 players are allowed to represent a single batch or team.",
            "League matches will be held on our college ground, while the semi-finals and final matches will take place on an external ground outside the campus.",
        ],
        formLink: 'https://forms.gle/824JjXxZDywZgTZg8',
        bgImage: '/images/cricket-bg.jpg'
    },
    'Athletics': {
        icon: '🏃',
        rules: [
            "Spot registrations are not allowed.",
            "An athlete can participate in a maximum of two field events and two track events, excluding one of the relay events.",
            "In throw events, each participant will have three attempts, and the best attempt will be considered.",
            "For track events (except the 100m and 200m sprints), winners will be determined based on the time taken by participants.",
            "Field events such as shot put, discus throw, and javelin throw will be conducted on our college ground.",
            "Athletes exhibiting unsportsmanlike conduct, including using unfair methods or disputing with officials, will face disqualification.",
            "All athletes must arrive at their event locations no later than 15 minutes before the event starts.",
        ],
        formLink: 'https://forms.gle/TTmC8neDQT2sfto1A',
        bgImage: '/images/athletics-bg.jpg'
    },
    'Kabaddi': {
        icon: '🤼',
        rules: [
            "A maximum of 12 players may represent any team.",
            "The tournament will be conducted on a knockout basis",
            "Preliminary matches will be played as two 10-minute halves with a 5-minute break in between",
            "Quarter-final matches will be conducted as two 15-minute halves with a 5-minute break in between",
            "A team can have a maximum of 3 substitutions per match",
        ],
        formLink: 'https://forms.gle/AHKAxPbXxWAiaB36A',
        bgImage: '/images/volleyball-bg.jpg'
    },

    'Volleyball': {
        icon: '🏐',
        rules: [
            "Spot registrations are not permitted.",
            "A maximum of 10 players may represent any batch or team.",
            "The tournament will be conducted on a knockout basis. ",
            "Matches up to the quarterfinals will be played in a best of 3 sets format, with each set played to 15 points.",
            "Semi-final matches will also be played in a best of 3 sets format, but each set will be played to 25 points.",
            "Final matches will be played in a best of 5 sets format, with each set played to 25 points."
        ],
        formLink: 'https://forms.gle/rwhvKN6fVZXnssLU9',
        bgImage: '/images/volleyball-bg.jpg'
    },
    'Badminton': {
        icon: '🏸',
        rules: [
            "Spot registrations are not permitted.",
            "Preliminary matches will be played as a single set to 15 points.",
            "Quarter-final matches will be conducted in a best of 3 sets format, with each set played to 15 points.",
            "Semi-final and final matches will also be played in a best of 3 sets format, but each set will be played to 21 points.",
            "The same scoring rules apply to doubles matches as well.",
            "For doubles, two players must be from the same house."
        ],
        singlesFormLink: 'https://forms.gle/i5MjjPqntPDHADRN6',
        doublesFormLink: 'https://forms.gle/ZGiJyFdhuApP5sGH9',
        bgImage: '/images/badminton-bg.jpg'
    },
    'Football': {
        icon: '⚽',
        rules: [
            "Spot registrations are not permitted.",
            "Each match will last for 30 minutes, consisting of two 15-minute halves with a 5-minute break in between.",
            "All matches will follow a knockout format. If a match ends in a draw, extra time will be given, followed by a penalty shootout to decide the winner.",
            "Each team must have no more than 15 members."
        ],
        formLink: 'https://forms.gle/bLBLzSBq275ZYybu6',
        bgImage: '/images/football-bg.jpg'
    },
    'Throw Ball': {
        icon: '🤾‍♀️',
        rules: [
            "Spot registrations are not permitted.",
            "Each team must submit a list of players, with a maximum of 12 players allowed.",
            "The tournament will be conducted on a knockout basis, with all matches played in a best of 3 sets format, using 15 rally points per set.",
        ],
        formLink: 'https://forms.gle/Xp725sx3KrDmNuiD7',
        bgImage: '/images/throw-ball-bg.jpg'
    },
    'Kho-Kho': {
        icon: '🏃‍♀️🔥',
        rules: [
            "Spot registrations are not permitted.",
            "A maximum of 12 players may represent any batch or team.",
            "All matches will follow a knockout format.",
            "Each match will have a duration of 20 minutes, divided into four 5-minute quarters.",
        ],
        formLink: 'https://forms.gle/U8bbbGMmFH16B7bQ9',
        bgImage: '/images/basketball-bg.jpg'
    },
    'Basketball': {
        icon: '🏀',
        rules: [
            "Spot registrations are not permitted.",
            "A maximum of 10 players may represent any batch team.",
            "All matches will follow a knockout format.",
            "Each match will have a duration of 20 minutes, divided into four 5-minute quarters.",
        ],
        formLink: 'https://forms.gle/Svj6U91yfcSgNEhn8',
        bgImage: '/images/basketball-bg.jpg'
    },
    'Indoor Games': {
        icon: '🏓',
        rules: [
            "Spot registrations are not permitted.",
            "Chess, Carrom, Table Tennis matches will be conducted on a knockout basis.",
            "Each match will have a time duration of one hour. If a match extends beyond this duration, an additional 10 minutes will be granted to determine the winner.",
            "If the match remains undecided after the extra time, the winner will be determined by the result of a coin toss between the players.",
            "For Table Tennis, preliminary matches will be played as a single set to 11 points.",
            "Quarter-final, semi-final, and final matches of Table Tennis will be conducted in a best of 3 sets format, with each set played to 11 points.",
            "The same scoring rules apply to doubles matches in Table Tennis as well."
        ],
        formLink: 'https://forms.gle/sqMaaaFgk4og7pfj7',
        bgImage: '/images/board-games-bg.jpg'
    }
};

const page = ({ params }: { params: { sport: string } }) => {
    const sport = decodeURIComponent(params.sport);
    const sportInfo = sportsData[sport as keyof typeof sportsData];

    if (!sportInfo) {
        notFound();
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${sportInfo.bgImage})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-white z-10" />

            {/* Content */}
            <div className="relative z-20 min-h-screen flex items-center justify-center p-8 mb-6">
                <Card className="w-full max-w-4xl bg-black/50 backdrop-blur-md border-none shadow-2xl text-white">
                    <CardHeader className="border-b border-white/20">
                        <CardTitle className="text-4xl font-extrabold flex items-center justify-between">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                                {sport} Registration
                            </span>
                            <span className="text-5xl">{sportInfo.icon}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-6">
                        <h2 className="text-2xl font-bold mb-4 text-orange-400">Rules and Regulations</h2>
                        <ul className="list-disc mb-6 space-y-2">
                            {sportInfo.rules.map((rule) => (
                                <li key={rule} className="text-white/90">{rule}</li>
                            ))}
                        </ul>

                        {sportInfo.singlesFormLink &&
                            <Link href={sportInfo.singlesFormLink}>
                                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-red-600 text-black font-bold py-4 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-4">
                                    Register for Singles
                                </Button>
                            </Link>}

                        {sportInfo.doublesFormLink &&
                            <Link href={sportInfo.doublesFormLink}>
                                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-red-600 text-black font-bold py-4 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                    Register for Doubles
                                </Button>
                            </Link>
                        }

                        {sportInfo.formLink && <Link href={sportInfo.formLink}>
                            <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-orange-600 hover:to-red-600 text-black font-bold py-4 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                Register for {sport}
                            </Button>
                        </Link>}
                    </CardContent>
                </Card>
            </div>

            {/* Back Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <Link href="/registrations">
                    <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                        Back to All Sports
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default page;
