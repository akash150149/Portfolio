export const ssbExperience = {
    title: 'My First SSB Experience – 5 AFSB Guwahati',
    date: 'Jan 10, 2024',
    readTime: '15 min read',
    slug: 'ssb-experience',
    backgroundImage: '/blog/ssb-guwahati.jpg',
    content: (
        <div className="space-y-16 relative z-10">
            <p className="intro-text text-xl">
                My name is Akash Poddar, and this is the story of my first Services Selection Board (SSB) experience at 5 AFSB Guwahati. I appeared after clearing NDA 149 written and this five-day journey became one of the most transformative phases of my life.
            </p>

            {/* Quick Stats Card */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Location', value: '5 AFSB Guwahati' },
                    { label: 'Date', value: '22–26 Aug 2022' },
                    { label: 'Chest No.', value: '18' },
                    { label: 'Result', value: 'Not Recommended' },
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl">
                        <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-xl font-bold text-green-400">{stat.value}</p>
                    </div>
                ))}
            </section>

            {/* Before Reporting */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">The Build-Up: Preparation & Confidence</h2>
                    <div className="h-px w-20 bg-green-500"></div>
                </div>
                <div className="text-zinc text-lg leading-relaxed space-y-6">
                    <p>
                        My preparation started on 9 May 2022, when NDA 149 written results were declared. With zero knowledge about the procedure, I enrolled in a coaching institute for structured guidance. Over three months, I focused on communication skills, logical reasoning, and confidence in public speaking.
                    </p>
                    <p>
                        On Independence Day, just a week before my SSB, I delivered a speech on “Progress of India after Independence”. That moment gave me immense confidence. On 20 August 2022, I boarded my train to Guwahati — nervous yet excited. After reaching Kamakhya station, we visited Kamakhya Temple to seek blessings.
                    </p>
                    <p>
                        That night, watching aircraft take off near Guwahati Airport, I felt emotional. The next five days would test everything I believed about myself.
                    </p>
                </div>
            </section>

            {/* Day 1: Screening */}
            <section className="space-y-8">
                <div className="space-y-4 text-right">
                    <h2 className="text-3xl md:text-4xl font-bold">Day 1: Stage I Screening</h2>
                    <div className="h-px w-20 bg-green-500 ml-auto"></div>
                </div>
                <div className="text-zinc text-lg leading-relaxed space-y-6">
                    <p>
                        I woke up at 4 AM. Being a fresher, nervousness was natural. The OIR tests went well, and then came the PPDT. The picture was hazy — I perceived two men in a restaurant discussing financial instability and created a story around digital awareness.
                    </p>
                    <p>
                        During narration, I spoke confidently. In the GD, I entered after observing the flow, contributing a point about using social media for flood awareness. After lunch, the results were declared: <strong>I was Screened In.</strong> Calling my parents at that moment was one of the happiest experiences of my life.
                    </p>
                </div>
            </section>

            {/* Psychology */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Psychology & The First Lessons</h2>
                    <div className="h-px w-20 bg-green-500"></div>
                </div>
                <div className="text-zinc text-lg leading-relaxed space-y-6">
                    <p>
                        At AFSB, Psychology happens on the same day. While I felt it went well at the time, later analysis showed flaws. My TAT stories were too focused on government schemes and lacked personal reflection. I had also prepared casually for the SDT.
                    </p>
                    <p className="italic text-green-400/80">
                        Lesson: Psychology reflects your real personality, not rehearsed answers.
                    </p>
                </div>
            </section>

            {/* The Interview */}
            <section className="space-y-8 bg-zinc-900/20 p-8 md:p-12 rounded-[3rem] border border-white/5">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Day 3: The Personal Interview</h2>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">A Test of Clarity</p>
                </div>
                <div className="text-zinc text-lg leading-relaxed space-y-6">
                    <p>
                        I was interviewed by a Senior Interviewing Officer. Initially nervous, his calm greeting helped, but the rapid-fire CIQs (Comprehensive Information Questionnaires) pressured me. I struggled to recall all the questions in the sets.
                    </p>
                    <p>
                        A major mistake occurred when asked about my backup plan. I said I would take a drop for JEE. This showed a lack of decisiveness and clarity of direction. I left the room feeling demotivated.
                    </p>
                </div>
            </section>

            {/* GTO Tasks */}
            <section className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">GTO Days: Ground Reality</h2>
                    <div className="h-px w-20 bg-green-500"></div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'Group Discussion', text: 'Performed decently but tried to dominate too much.' },
                        { title: 'PGT & HGT', text: 'Made rule violations (threw rope) and struggled to find solutions under pressure.' },
                        { title: 'Individual Obstacles', text: 'Completed 5/10. A fall during the Tiger Jump mentally broke my momentum.' },
                        { title: 'Command Task', text: 'Called last, executed successfully. A small moment of satisfaction.' },
                    ].map((task, i) => (
                        <li key={i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl space-y-2">
                            <h4 className="font-bold text-white">{task.title}</h4>
                            <p className="text-zinc text-sm leading-relaxed">{task.text}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Rejection & Mistakes */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The Conference & Feedback</h2>
                    <p className="text-zinc max-w-xl mx-auto">4 candidates were recommended. My chest number was not among them.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
                    <div className="space-y-4 p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
                        <h3 className="font-bold text-red-400 uppercase tracking-widest">Psychology Errors</h3>
                        <ul className="space-y-2 text-zinc-400 list-disc pl-4">
                            <li>Overused government schemes</li>
                            <li>Stories lacked personal connection</li>
                            <li>Weak SDT preparation</li>
                        </ul>
                    </div>
                    <div className="space-y-4 p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
                        <h3 className="font-bold text-red-400 uppercase tracking-widest">Interview Errors</h3>
                        <ul className="space-y-2 text-zinc-400 list-disc pl-4">
                            <li>Poor recall under pressure</li>
                            <li>Weak backup plan answering</li>
                            <li>Incomplete CIQ responses</li>
                        </ul>
                    </div>
                    <div className="space-y-4 p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
                        <h3 className="font-bold text-red-400 uppercase tracking-widest">GTO Errors</h3>
                        <ul className="space-y-2 text-zinc-400 list-disc pl-4">
                            <li>Lack of reasoning clarity</li>
                            <li>Rule violations in tasks</li>
                            <li>Over-dominance in GD</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* The Turning Point */}
            <section className="space-y-8 bg-green-500/5 border border-green-500/10 p-10 md:p-16 rounded-[4rem]">
                <h2 className="text-3xl font-bold text-green-400">The Turning Point: A Strategic Shift</h2>
                <div className="text-zinc text-lg leading-relaxed space-y-6">
                    <p>
                        On the return journey, I made a critical decision. Instead of taking a drop year, I enrolled in B.Tech under MAKAUT. This provided more SSB attempts through CDS & AFCAT without losing age eligibility and opened a broader opportunity window.
                    </p>
                    <p>
                        This SSB taught me that <strong>confidence is different from competence</strong>, and that a solid backup plan is a mark of maturity. Leadership is not about dominance; it&apos;s about pressure handling and collective success.
                    </p>
                </div>
            </section>

            <footer className="pt-12 border-t border-white/5 text-center">
                <p className="text-zinc italic text-sm max-w-2xl mx-auto">
                    5 AFSB Guwahati was a mirror. It showed me my strengths, my immaturity, and my hidden potential. Even without a recommendation, those five days shaped my maturity more than any classroom ever could.
                </p>
            </footer>
        </div>
    ),
};
