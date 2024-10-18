export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("events").del();
  await knex("events").insert([
    {
      id: 1,
      title: "Mind Matters: Breaking the Silence",
      category: "mental_health",
      description:
        "A mental health awareness event featuring expert speakers and group activities aimed at reducing stigma and promoting mental well-being.",
      date: "2024-11-25",
      location: "Toronto, Ontario",
      event_type: "Seminar, Group Discussion",
      audience: "General public",
    },
    {
      id: 2,
      title: "Youth Empowerment Summit",
      category: "community",
      description:
        "A community event focused on empowering underprivileged youth through educational workshops and career development.",
      date: "2024-12-03",
      location: "Montreal, Quebec",
      event_type: "Educational Workshops",
      audience: "High school students",
    },
    {
      id: 3,
      title: "Workplace Wellness Week",
      category: "workplace",
      description:
        "A virtual event promoting a healthy work-life balance and mental wellness in corporate environments.",
      date: "2025-01-15",
      location: "Online",
      event_type: "Webinar Series",
      audience: "Corporate employees",
    },
    {
      id: 4,
      title: "Volunteer for Change: Habitat for Humanity",
      category: "volunteer",
      description:
        "An opportunity to help build homes for families in need through Bell’s partnership with Habitat for Humanity.",
      date: "2024-11-15",
      location: "Vancouver, British Columbia",
      event_type: "Hands-on Volunteer",
      audience: "Community volunteers",
    },
    {
      id: 5,
      title: "Bell Let's Talk Day",
      category: "mental_health",
      description:
        "Annual mental health awareness and fundraising event aimed at supporting mental health organizations.",
      date: "2025-01-29",
      location: "Nationwide",
      event_type: "Social Media Campaign",
      audience: "General public",
    },
    {
      id: 6,
      title: "Mental Health and Wellness Workshop",
      category: "mental_health",
      description:
        "Virtual workshops to help individuals manage stress and improve mental well-being.",
      date: "2024-11-18",
      location: "Online",
      event_type: "Virtual Workshops",
      audience: "General public",
    },
    {
      id: 7,
      title: "Green Community Cleanup",
      category: "community",
      description:
        "An initiative to clean up local parks and public spaces, raising environmental awareness.",
      date: "2024-12-12",
      location: "Calgary, Alberta",
      event_type: "Volunteer Event",
      audience: "General public",
    },
    {
      id: 8,
      title: "Workplace Mental Health Strategies",
      category: "workplace",
      description:
        "A webinar series on improving mental health strategies within the workplace.",
      date: "2025-01-20",
      location: "Online",
      event_type: "Webinar Series",
      audience: "HR professionals",
    },
    {
      id: 9,
      title: "Volunteer Together: Soup Kitchen Support",
      category: "volunteer",
      description:
        "Volunteers will assist in preparing and serving meals at the local soup kitchen.",
      date: "2024-12-01",
      location: "Ottawa, Ontario",
      event_type: "Hands-on Volunteer",
      audience: "Community volunteers",
    },
    {
      id: 10,
      title: "Mindful Workplace Habits",
      category: "workplace",
      description:
        "An online workshop focusing on building mindful habits at work to boost productivity and well-being.",
      date: "2024-11-10",
      location: "Online",
      event_type: "Online Workshop",
      audience: "Corporate employees",
    },
    {
      id: 11,
      title: "Community Garden Project",
      category: "community",
      description:
        "Participants will help create and maintain a community garden to support local food banks.",
      date: "2024-12-15",
      location: "Halifax, Nova Scotia",
      event_type: "Volunteer Event",
      audience: "General public",
    },
    {
      id: 12,
      title: "Remote Working Wellness",
      category: "workplace",
      description:
        "A virtual seminar on maintaining health and well-being while working from home.",
      date: "2024-12-05",
      location: "Online",
      event_type: "Webinar",
      audience: "Remote workers",
    },
    {
      id: 13,
      title: "Mental Health Awareness for Teens",
      category: "mental_health",
      description:
        "A youth-focused event on recognizing mental health challenges and seeking support.",
      date: "2024-12-22",
      location: "Edmonton, Alberta",
      event_type: "Workshops and Talks",
      audience: "Teens, Educators",
    },
    {
      id: 14,
      title: "Corporate Volunteering: Tree Planting",
      category: "volunteer",
      description:
        "A corporate volunteer event where employees plant trees to support the local environment.",
      date: "2024-11-20",
      location: "Winnipeg, Manitoba",
      event_type: "Hands-on Volunteer",
      audience: "Corporate employees",
    },
    {
      id: 15,
      title: "Mental Health in the Workplace",
      category: "workplace",
      description:
        "A webinar discussing mental health challenges and solutions in corporate settings.",
      date: "2025-01-07",
      location: "Online",
      event_type: "Webinar Series",
      audience: "Corporate employees",
    },
    {
      id: 16,
      title: "Community Storytelling Night",
      category: "community",
      description:
        "An evening of storytelling, highlighting diverse voices from the community.",
      date: "2024-11-30",
      location: "Toronto, Ontario",
      event_type: "Community Event",
      audience: "Local residents",
    },
    {
      id: 17,
      title: "Workplace Ergonomics and Well-being",
      category: "workplace",
      description:
        "A webinar on optimizing workplace ergonomics for better physical and mental health.",
      date: "2025-02-05",
      location: "Online",
      event_type: "Webinar",
      audience: "Corporate employees",
    },
    {
      id: 18,
      title: "Mental Health for Parents",
      category: "mental_health",
      description:
        "A seminar on how parents can manage their own mental health while supporting their children.",
      date: "2024-12-15",
      location: "Vancouver, British Columbia",
      event_type: "Seminar",
      audience: "Parents, Guardians",
    },
    {
      id: 19,
      title: "Community Winter Clothing Drive",
      category: "community",
      description:
        "A community event to collect winter clothing for homeless and low-income individuals.",
      date: "2024-12-10",
      location: "Calgary, Alberta",
      event_type: "Donation Drive",
      audience: "Local residents",
    },
    {
      id: 20,
      title: "Mental Health in Remote Work",
      category: "workplace",
      description:
        "A webinar discussing strategies for maintaining mental health while working remotely.",
      date: "2025-01-03",
      location: "Online",
      event_type: "Webinar",
      audience: "Remote workers",
    },
    {
      id: 21,
      title: "Volunteer for Change: Food Bank Support",
      category: "volunteer",
      description:
        "Volunteers will help sort and distribute food at the local food bank.",
      date: "2024-11-27",
      location: "Toronto, Ontario",
      event_type: "Hands-on Volunteer",
      audience: "Community volunteers",
    },
    {
      id: 22,
      title: "Mindfulness in the Workplace",
      category: "workplace",
      description:
        "An online mindfulness workshop focused on reducing workplace stress and increasing focus.",
      date: "2024-11-18",
      location: "Online",
      event_type: "Webinar",
      audience: "Corporate employees",
    },
    {
      id: 23,
      title: "Mental Health and Wellness Forum",
      category: "mental_health",
      description:
        "A virtual forum for discussing mental health challenges and sharing coping strategies.",
      date: "2024-12-05",
      location: "Online",
      event_type: "Virtual Forum",
      audience: "General public",
    },
    {
      id: 24,
      title: "Community Art and Culture Fair",
      category: "community",
      description:
        "A fair celebrating the arts and cultures of local communities through exhibitions and performances.",
      date: "2024-12-03",
      location: "Montreal, Quebec",
      event_type: "Community Fair",
      audience: "Local residents",
    },
    {
      id: 25,
      title: "Corporate Volunteering: Beach Cleanup",
      category: "volunteer",
      description:
        "Volunteers will participate in cleaning up local beaches to support environmental sustainability.",
      date: "2024-12-02",
      location: "Vancouver, British Columbia",
      event_type: "Hands-on Volunteer",
      audience: "Corporate employees",
    },
    {
      id: 26,
      title: "Online Workshop: Work-Life Balance",
      category: "workplace",
      description:
        "An interactive online workshop focusing on achieving a healthier work-life balance.",
      date: "2024-12-08",
      location: "Online",
      event_type: "Workshop",
      audience: "Remote workers",
    },
    {
      id: 27,
      title: "Annual Blood Donation Drive",
      category: "community",
      description:
        "A community initiative to encourage blood donation in partnership with local hospitals.",
      date: "2024-12-12",
      location: "Ottawa, Ontario",
      event_type: "Donation Drive",
      audience: "General public",
    },
  ]);
}
