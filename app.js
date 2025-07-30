// Talk2Moon Blog Application - Complete & Working
"use strict";

// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: " Breaking the Stigma: Normalizing Anxiety in Modern Society",
    summary:
      "Normalizing anxiety starts with open conversations, empathy, and breaking the stigma around mental health. to know more click ...",
    category: "Mental Health",
    tags: ["anxiety", "mental health", "coping strategies"],
    previewImage: "img/anexity/cover.jpeg",
    date: "2025-01-15",
    readTime: "8 min read",
    content: `
    <article class="post" id="post-anxiety-understanding">
      <header class="post-header">
        <h1 class="post-title"> Breaking the Stigma: Normalizing Anxiety in Modern Society</h1>
        <p class="post-meta">
          <time datetime="2025-01-15">January&nbsp;15,&nbsp;2025</time> • 8&nbsp;min read
        </p>
      </header>

  <figure class="post-hero">
    <img src="./img/anxiety/top.png"
         alt="Symptoms of anxiety illustration" 
         loading="lazy"
         onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/3c145327-83c6-4d3e-b6da-57b711d7ef93.png'" />
    <figcaption class="sr-only">Illustration highlighting common anxiety symptoms</figcaption>
  </figure>

      <section class="post-section">
        <h2>Introduction</h2>
        <p>In today's fast-paced world, anxiety has become one of the most common mental health experiences. Yet despite its prevalence, it remains widely misunderstood and often stigmatized. People struggling with anxiety are frequently labeled as weak or overly sensitive, making it harder for them to seek the support they need. This article aims to shed light on anxiety disorders, break down the barriers to understanding, and encourage open conversations about mental health.</p>
        <p>Whether you're experiencing anxiety yourself or supporting someone who is, understanding this complex condition is the first step toward healing and building resilience.</p>
      </section>

      <section class="post-section">
        <h2>Understanding Anxiety</h2>
        <p>Anxiety is more than just feeling nervous before a big presentation or worried about an upcoming deadline. While occasional anxiety is a normal part of life, anxiety disorders involve persistent, excessive worry that interferes with daily activities. It can manifest as racing thoughts, physical symptoms like rapid heartbeat or sweating, restlessness, difficulty concentrating, or even avoidance of certain situations that may indicate an anxiety disorder that requires attention and care.</p>
        <p>Unlike temporary stress, anxiety disorders are persistent and can significantly impact your quality of life, relationships, and overall wellbeing if left untreated.</p>
      </section>

      <section class="post-section two-column">
        <div class="post-text">
          <h2>Common Types of Anxiety Disorders</h2>
          <ul class="blog-list">
            <li><strong>Generalized Anxiety Disorder (GAD):</strong> Constant, uncontrollable worry about everyday situations, often accompanied by physical symptoms like fatigue and muscle tension.</li>
            <li><strong>Panic Disorder:</strong> Sudden, intense episodes of fear or discomfort that peak within minutes, often including chest pain, shortness of breath, and dizziness.</li>
            <li><strong>Social Anxiety Disorder:</strong> Fear of being judged or embarrassed in social situations, leading to avoidance of social interactions and events.</li>
            <li><strong>Phobias:</strong> Intense fear of specific objects or situations that pose little actual danger, such as heights, spiders, or flying.</li>
            <li><strong>Separation Anxiety:</strong> Excessive fear about being apart from loved ones, not limited to children but can affect adults too.</li>
          </ul>
        </div>
        <figure class="post-media">
          <img src="./img/anexity/types_disorder.png"
               alt="Illustration of anxiety disorder types" 
         loading="lazy"
         onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/8055612d-6de9-4e24-963c-c3dd011ee994.png'" />
        </figure>
      </section>

      <section class="post-section">
        <h2>Why Is Anxiety Stigmatized?</h2>
        <ol class="blog-list">
          <li><strong>Lack of Awareness:</strong> Many people mistakenly view anxiety as a personality flaw or character weakness rather than recognizing it as a legitimate medical condition. This misunderstanding minimizes the seriousness of the issue and prevents proper support and treatment.</li>
          <li><strong>Cultural Pressure:</strong> Society often emphasizes strength, resilience, and independence while discouraging emotional vulnerability. This creates pressure to hide struggles and maintain a facade of having everything under control.</li>
          <li><strong>Fear of Judgment:</strong> The fear of criticism, discrimination, or being seen as incapable prevents individuals from opening up about their struggles. This creates a cycle of isolation where people suffer in silence.</li>
          <li><strong>Misconceptions:</strong> Common myths like "just think positive" or "everyone gets anxious sometimes" oversimplify the complex nature of anxiety disorders and make those suffering feel misunderstood.</li>
        </ol>
        <p>This stigma prevents individuals from seeking help, worsening their mental health over time and perpetuating a cycle of shame and isolation.</p>
      </section>

      <section class="post-section">
        <h2>Recognizing the Signs</h2>
        <p>Anxiety manifests differently in each person, but common signs include:</p>
        <ul class="blog-list">
          <li><strong>Physical Symptoms:</strong> Rapid heartbeat, sweating, trembling, shortness of breath, dizziness, or nausea</li>
          <li><strong>Emotional Signs:</strong> Excessive worry, restlessness, irritability, or feeling overwhelmed</li>
          <li><strong>Behavioral Changes:</strong> Avoidance of certain situations, difficulty sleeping, or changes in eating patterns</li>
          <li><strong>Cognitive Symptoms:</strong> Racing thoughts, difficulty concentrating, or catastrophic thinking patterns</li>
        </ul>
      </section>

      <section class="post-section">
        <h2>How to Help Yourself</h2>
        <ul class="blog-list">
          <li><strong>Practice Self-Compassion:</strong> Treat yourself with the same kindness you'd show a good friend. Acknowledge that having anxiety doesn't make you weak or flawed.</li>
          <li><strong>Develop Coping Strategies:</strong> Learn techniques like deep breathing, progressive muscle relaxation, or mindfulness meditation to manage symptoms in the moment.</li>
          <li><strong>Challenge Negative Thoughts:</strong> Question anxious thoughts and look for evidence that supports or contradicts them. Often our fears are worse than reality.</li>
          <li><strong>Maintain Healthy Habits:</strong> Regular exercise, adequate sleep, and a balanced diet can significantly impact your mental health and anxiety levels.</li>
          <li><strong>Seek Professional Help:</strong> Don't hesitate to reach out to a mental health professional. Therapy and medication can be highly effective treatments for anxiety disorders.</li>
        </ul>
      </section>

      <section class="post-section">
        <h2>The Importance of Breaking the Silence</h2>
        <p>Breaking the silence around anxiety creates a supportive environment where people feel safe to share their struggles and seek treatment. When anxiety is normalized and understood, several positive outcomes emerge:</p>
        <ul class="blog-list">
          <li><strong>Reduces Isolation:</strong> People realize they're not alone in their struggles and that anxiety is a common, treatable condition.</li>
          <li><strong>Promotes Early Intervention:</strong> When stigma is reduced, people are more likely to seek help early, leading to better outcomes and preventing symptoms from worsening.</li>
          <li><strong>Improves Workplace Culture:</strong> Organizations that support mental health create healthier, more productive environments for all employees.</li>
          <li><strong>Empowers Youth:</strong> Young people who grow up with mental health awareness are better equipped to recognize symptoms and seek help when needed.</li>
          <li><strong>Builds Stronger Communities:</strong> Open dialogue about mental health creates more empathetic, supportive communities where everyone can thrive.</li>
        </ul>
      </section>

      <section class="post-section side-split">
        <figure class="post-media">
          <img src="./img/anexity/coping_sad.jpg"
          loading="lazy"
         onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/b8176391-71e2-4463-8cbe-2c92343c50ec.png'"
        </figure>
        <div class="post-text">
          <h2>Moving Forward: A Message of Hope</h2>

          <h3>You Are Not Alone</h3>
          <p>If you're struggling with anxiety, know that you're not alone. Millions of people worldwide experience anxiety disorders, and there is no shame in seeking help. Your struggles are valid, and there are people who care about you and want to support your journey toward wellness.</p>

          <h3>Recovery Is Possible</h3>
          <p>Anxiety disorders are highly treatable conditions. With the right combination of therapy, support, and sometimes medication, people with anxiety can learn to manage their symptoms and live fulfilling lives. Recovery doesn't mean never feeling anxious again—it means developing the tools to cope effectively.</p>

          <h3>You Are Stronger Than You Think</h3>
          <p>Having anxiety doesn't define you or diminish your worth. You are a complete person with unique strengths, talents, and contributions to make. Many people with anxiety are highly sensitive, empathetic, and intuitive—qualities that can be tremendous assets when properly supported.</p>

          <h3>Take It One Step at a Time</h3>
          <p>Recovery is a journey, not a destination. Celebrate small victories, be patient with setbacks, and remember that every step forward, no matter how small, is progress. Practice self-compassion and remember that healing takes time.</p>
        </div>
      </section>

      <section class="post-section">
        <h2>Conclusion</h2>
        <p>Understanding anxiety is the first step toward breaking down the barriers that prevent people from getting the help they need. Anxiety is not a character flaw, a sign of weakness, or something that can be overcome through willpower alone. It's a legitimate medical condition that deserves the same attention and compassion as any physical illness.</p>
        <p>By fostering open conversations about mental health, challenging stigma, and supporting those who are struggling, we can create a world where seeking help for anxiety is seen as a sign of strength, not weakness. Together, we can build communities that prioritize mental wellbeing and ensure that no one has to face anxiety alone.</p>
        <p>If you or someone you know is struggling with anxiety, remember that help is available. Reach out to a mental health professional, trusted friend, or family member. Your mental health matters, and you deserve support on your journey toward healing and growth.</p>
      </section>
    </article>
  `,
  },
  {
    id: 2,
    title:
      "Scroll, Click, Repeat: Are Social Media Trends Controlling Our Lives?",
    summary:
      "Are we shaping social media, or is it shaping us? to know more click and read..",

    category: "Mental Health",
    tags: [
      "social media",
      "digital wellness",
      "mental health",
      "self-esteem",
      "youth psychology",
    ],
    previewImage: "/img/social_media_scroll/cover.jpeg",
    date: "2025-01-10",
    readTime: "6 min read",
    date: "2025-01-10",
    content: `
    <article class="post" id="post-social-media-control">
      <header class="post-header">
        <h1 class="post-title">Scroll, Click, Repeat: Are Social Media Trends Controlling Our Lives?</h1>
        <p class="post-meta">
          <time datetime="2025-01-10">January&nbsp;10,&nbsp;2025</time> • 30&nbsp;min read
        </p>
      </header>

      <figure class="post-hero">
        <img src="./img/social_media_scroll/sec.png"
             alt="Social media scrolling addiction illustration" />
        <figcaption class="sr-only">Illustration depicting endless social media scrolling behavior</figcaption>
      </figure>

      <section class="post-section">
        <h2>Introduction</h2>
        <p>In today's digital era, social media has become an inseparable part of our lives. From dream vacations and flawless selfies to the portrayal of affluent lifestyles, our feeds are often filled with picture-perfect moments. But how much of it reflects reality? This blog takes a closer look at the truth behind social media trends and their impact on youngsters.</p>
      </section>

      <section class="post-section">
        <h2>The Illusion of Perfection</h2>
        <p>Scrolling through Instagram or YouTube, we often see influencers flaunting designer outfits, aesthetic homes, and dream vacations. While it may seem like they have it all, the reality is often different. Behind those posts are makeup and styling tricks that rely heavily on contouring, hairstyling, and accessories to create an effortlessly glamorous look.</p>
        
        <h3>Behind the Scenes Reality</h3>
        <p>Professional makeup artists and stylists frequently work behind the scenes, making the results nearly impossible to replicate in daily life. Perfect posing and angles are also key elements that enhance visual appeal. Photos are carefully staged with specific poses and camera angles to make bodies look slimmer and features more defined.</p>
        
        <p>Hours are often spent capturing a single image, which gives the impression of natural beauty and confidence. Social media highlights only the best moments, creating highlight reels that hide struggles, failures, and imperfections. Influencers may showcase exotic vacations while dealing with personal struggles, crafting a misleading portrayal of happiness and success.</p>

        <h3>Photography and Product Promotions</h3>
        <p>Photography promotions add another layer of illusion. Many influencers collaborate with professional photographers to enhance their profiles, using expensive equipment and editing software to perfect every shot. These results often look cinematic, reinforcing the illusion of an unattainable lifestyle.</p>
        
        <p>Product promotions further amplify this effect. Influencers frequently showcase trendy products, ranging from luxury watches to fitness gear, creating a strong desire to own them. These promotions often exaggerate the benefits, making followers feel they need these items to fit in.</p>

        <h3>The Health and Beauty Trap</h3>
        <p>Trends related to healthy food and organic diets have also gained traction. Social media glorifies superfoods, detox programs, and organic products as the only way to stay fit and healthy. While such foods have benefits, many marketed products are overpriced and impractical for everyday consumption.</p>
        
        <p>Organic skincare products are promoted as miracle solutions for flawless skin. Posts highlighting these items often fail to address the importance of consistency, genetics, or professional treatments, leaving viewers chasing unrealistic beauty goals.</p>
      </section>

      <section class="post-section">
        <h2>The Pressure to Fit In</h2>
        <p>Youngsters today often face immense pressure to meet unrealistic beauty and lifestyle standards. This pressure manifests in several concerning ways:</p>
        
        <ul class="blog-list">
          <li><strong>Low Self-Esteem:</strong> Edited photos create insecurity. Many teenagers feel compelled to look like influencers and celebrities, pushing them to try risky diets, beauty treatments, or expensive makeup routines just to match unrealistic standards.</li>
          <li><strong>Mental Health Issues:</strong> The constant need to appear perfect in every post causes stress, leading to an unhealthy obsession with likes and validation.</li>
          <li><strong>Financial Stress:</strong> Trying to keep up with expensive trends often leads to overspending and debt. Many young adults buy expensive branded clothes or gadgets just to stay relevant on social media.</li>
        </ul>
      </section>

      <section class="post-section two-column">
        <div class="post-text">
          <h2>The Addiction to Scrolling</h2>
          <p>Youngsters spend an average of 3 to 4 hours daily scrolling through social media feeds without realizing how much time is wasted on unwanted content. Endless scrolling keeps them glued to their screens, consuming content that adds little value to their personal growth or well-being.</p>
          
          <p>The algorithm-driven feeds of platforms like Instagram and YouTube create a cycle of addiction by suggesting similar posts, making it hard to stop. This often leads to binge-watching videos, reading memes, or jumping from one influencer's page to another, all while losing track of time.</p>
          
          <p>Notifications and constant updates keep users engaged, creating a habit of checking phones frequently, even during work or study hours. This distraction reduces focus and productivity, leaving less time for meaningful activities like reading, exercising, or spending time with family and friends.</p>
        </div>
      </section>

      <section class="post-section">
        <h2>The Shopping Frenzy</h2>
        <p>Girls, in particular, are often influenced by social media promotions to buy cosmetics, dresses, and personal care items. Day-to-day household essentials and decorative items are also marketed heavily online. Promotions create a sense of urgency with discounts and deals, encouraging impulsive buying.</p>
        
        <h3>Manipulation Tactics</h3>
        <ul class="blog-list">
          <li><strong>Limited-Time Offers:</strong> Influencers highlight flash sales or 'only a few pieces left' to create urgency, compelling followers to buy immediately without comparing prices.</li>
          <li><strong>Unboxing Videos:</strong> Stylish packaging and attractive product displays tempt viewers to purchase items, aiming to recreate the influencer's experience.</li>
          <li><strong>Lifestyle Integration:</strong> Products are showcased as essential elements of the 'ideal' lifestyle portrayed online.</li>
        </ul>
      </section>

      <section class="post-section">
        <h2>Ways to Invest in Yourself Beyond Social Media</h2>
        
        <h3>Curate Your Feed Wisely</h3>
        <p>Follow accounts that promote authenticity and positivity. Profiles that share unfiltered images and stories about self-growth can help develop a healthier mindset.</p>
        
        <h3>Limit Screen Time</h3>
        <p>Stay grounded in reality by taking breaks from social media and engaging in offline activities like painting, journaling, or hiking to balance virtual and real-life experiences.</p>
        
        <h3>Focus on Self-Growth</h3>
        <p>Invest in hobbies, learning new skills, and spending time with real friends. Joining local communities, workshops, or volunteering groups can create meaningful experiences and boost self-esteem.</p>
        
        <h3>Question What You See</h3>
        <p>Ask whether a post reflects reality or is staged. Many travel influencers Photoshop scenic backdrops or post old vacation pictures to create illusions of constant travel.</p>
        
        <h3>Shop Smart</h3>
        <p>Compare prices online and offline before making purchases. Many products have budget-friendly alternatives that offer similar quality. Instead of falling for expensive trends, prioritize needs over wants.</p>
        
        <h3>Spread Awareness</h3>
        <p>Share your own unfiltered experiences to inspire others to embrace their true selves. Many influencers now focus on promoting self-love, breaking stereotypes, and talking openly about their struggles to inspire authenticity.</p>
      </section>

      <section class="post-section">
        <h2>Conclusion</h2>
        <p>Social media has transformed the way we perceive beauty, success, and happiness, but it's important to peel back the layers and see the truth behind the screens. By understanding the illusions created through editing, promotions, and trends, we can make conscious choices to focus on authenticity and self-growth.</p>
        
        <p>Instead of chasing virtual perfection, let's prioritize real-life connections, personal development, and mindful living. True happiness lies beyond the filters, in the genuine moments and authentic relationships that make life meaningful.</p>
        
        <p>Remember, you are enough just as you are. Your worth isn't determined by likes, followers, or how well you fit into social media trends. Embrace your authentic self and encourage others to do the same.</p>
      </section>
    </article>
  `,
  },
  {
    id: 3,
    title: "The Art of Mindful Communication",
    summary:
      "Learn how mindfulness practices can transform your relationships by improving listening skills, emotional awareness, and authentic connection.",
    category: "Relationships",
    tags: ["mindfulness", "communication", "relationships"],
    previewImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
    date: "2025-01-05",
    readTime: "7 min read",
    content: `
      <div class="post-meta" style="display: flex; gap: 16px; margin-bottom: 24px; font-size: 14px; color: var(--color-text-secondary);">
        <span class="post-date">January 5, 2025</span>
        <span class="post-read-time">7 min read</span>
        <span class="post-category" style="background: var(--color-bg-3); padding: 4px 8px; border-radius: 12px;">Relationships</span>
      </div>
      <h1 style="margin-bottom: 24px; color: var(--color-text);">The Art of Mindful Communication</h1>
      
      <p>Mindful communication involves being fully present, listening actively, and responding thoughtfully rather than reactively in our interactions with others.</p>
      
      <h2>Core Principles</h2>
      <ul>
        <li><strong>Present Moment Awareness</strong> - staying focused during conversations</li>
        <li><strong>Active Listening</strong> - truly hearing what others are saying</li>
        <li><strong>Emotional Awareness</strong> - recognizing your own emotional states</li>
        <li><strong>Non-Judgmental Approach</strong> - accepting others without immediate criticism</li>
      </ul>
      
      <h2>The Power of Presence</h2>
      <p>When we're truly present in conversations, we create space for deeper understanding and connection. This means putting away distractions and giving our full attention to the person speaking.</p>
      
      <h2>Developing Active Listening Skills</h2>
      <h3>Listen to Understand, Not to Reply</h3>
      <p>Focus on genuinely understanding the other person's perspective rather than formulating your response while they're speaking.</p>
      
      <h3>Use Reflective Listening</h3>
      <p>Paraphrase what you've heard to ensure understanding: "What I'm hearing is..." or "It sounds like you're feeling..."</p>
      
      <h3>Ask Open-Ended Questions</h3>
      <p>Encourage deeper sharing with questions that can't be answered with a simple yes or no.</p>
      
      <h2>Managing Emotional Reactions</h2>
      <p>When conversations become challenging, practice the pause-breathe-respond technique. This creates space between stimulus and response, allowing for more thoughtful communication.</p>
      
      <h2>Practical Applications</h2>
      <p>Start by practicing the pause-breathe-respond technique. Before reacting to challenging conversations, take a moment to breathe and choose your response mindfully.</p>
      
      <p>Mindful communication is a skill that improves with practice. Start with small interactions and gradually apply these principles to more challenging conversations.</p>
    `,
  },
  {
    id: 4,
    title: "Embracing Change: Psychology of Personal Growth",
    summary:
      "Understand the psychological processes behind personal transformation and learn practical strategies for embracing change as a pathway to growth.",
    category: "Personal Growth",
    tags: ["personal growth", "change", "psychology"],
    previewImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=250&fit=crop",
    date: "2024-12-28",
    readTime: "9 min read",
    content: `
      <div class="post-meta" style="display: flex; gap: 16px; margin-bottom: 24px; font-size: 14px; color: var(--color-text-secondary);">
        <span class="post-date">December 28, 2024</span>
        <span class="post-read-time">9 min read</span>
        <span class="post-category" style="background: var(--color-bg-4); padding: 4px 8px; border-radius: 12px;">Personal Growth</span>
      </div>
      <h1 style="margin-bottom: 24px; color: var(--color-text);">Embracing Change: Psychology of Personal Growth</h1>
      
      <p>Change is a fundamental part of human experience, yet many of us resist it. Understanding the psychological mechanisms behind change can help us navigate transitions more effectively.</p>
      
      <h2>Stages of Change</h2>
      <ul>
        <li><strong>Contemplation</strong> - recognizing the need for change</li>
        <li><strong>Preparation</strong> - planning and setting intentions</li>
        <li><strong>Action</strong> - implementing new behaviors</li>
        <li><strong>Maintenance</strong> - sustaining positive changes</li>
      </ul>
      
      <h2>Why We Resist Change</h2>
      <h3>Fear of the Unknown</h3>
      <p>Our brains are wired to prefer predictability. The unknown triggers our stress response, making change feel threatening even when it's beneficial.</p>
      
      <h3>Loss Aversion</h3>
      <p>We naturally focus more on what we might lose than what we might gain, making it difficult to embrace new opportunities.</p>
      
      <h3>Identity Attachment</h3>
      <p>We often tie our sense of self to our current circumstances, making change feel like a threat to our identity.</p>
      
      <h2>Strategies for Embracing Change</h2>
      <h3>Start Small</h3>
      <p>Begin with minor adjustments to build confidence and momentum. Small wins create positive associations with change.</p>
      
      <h3>Focus on Growth, Not Perfection</h3>
      <p>View setbacks as learning opportunities rather than failures. Progress is rarely linear.</p>
      
      <h3>Build Support Systems</h3>
      <p>Surround yourself with people who encourage your growth and understand your journey.</p>
      
      <h3>Practice Self-Compassion</h3>
      <p>Be patient and kind with yourself as you navigate change. Growth takes time and effort.</p>
      
      <h2>Overcoming Resistance</h2>
      <p>Common barriers include fear of the unknown, perfectionism, and lack of support. Address these by starting small, celebrating progress, and building a supportive community.</p>
      
      <p>Remember, personal growth is a lifelong journey. Embrace change as an opportunity to become the person you're meant to be.</p>
    `,
  },
  {
    id: 5,
    title: "Digital Wellness: Managing Screen Time and Mental Health",
    summary:
      "Explore the relationship between digital consumption and mental wellbeing, with practical strategies for creating healthier technology habits.",
    category: "Mental Health",
    tags: ["digital wellness", "mental health", "technology"],
    previewImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    date: "2024-12-20",
    readTime: "5 min read",
    content: `
      <div class="post-meta" style="display: flex; gap: 16px; margin-bottom: 24px; font-size: 14px; color: var(--color-text-secondary);">
        <span class="post-date">December 20, 2024</span>
        <span class="post-read-time">5 min read</span>
        <span class="post-category" style="background: var(--color-bg-1); padding: 4px 8px; border-radius: 12px;">Mental Health</span>
      </div>
      <h1 style="margin-bottom: 24px; color: var(--color-text);">Digital Wellness: Managing Screen Time and Mental Health</h1>
      
      <p>While technology offers incredible benefits, excessive screen time and social media use can negatively impact our mental health, sleep, and relationships.</p>
      
      <h2>Signs of Digital Overwhelm</h2>
      <ul>
        <li><strong>Sleep Disruption</strong> - difficulty falling asleep after screen use</li>
        <li><strong>Social Comparison</strong> - feeling inadequate after social media browsing</li>
        <li><strong>Attention Issues</strong> - difficulty concentrating without digital stimulation</li>
        <li><strong>FOMO</strong> - fear of missing out driving compulsive checking</li>
      </ul>
      
      <h2>The Impact on Mental Health</h2>
      <h3>Dopamine and Digital Addiction</h3>
      <p>Social media and apps are designed to trigger dopamine releases, creating patterns similar to addiction. Understanding this can help us make more conscious choices.</p>
      
      <h3>Comparison and Self-Esteem</h3>
      <p>Constant exposure to curated content can lead to unrealistic comparisons and decreased self-esteem, particularly among young people.</p>
      
      <h3>Sleep and Circadian Rhythms</h3>
      <p>Blue light exposure, especially in the evening, can disrupt our natural sleep patterns and overall wellbeing.</p>
      
      <h2>Creating Digital Balance</h2>
      <h3>Set Boundaries</h3>
      <p>Create technology-free zones in your home and establish specific times for checking devices.</p>
      
      <h3>Practice Mindful Consumption</h3>
      <p>Before reaching for your phone, pause and ask yourself what you're hoping to achieve. Choose intentionality over mindless scrolling.</p>
      
      <h3>Prioritize Real-World Connections</h3>
      <p>Make time for face-to-face interactions and activities that don't involve screens.</p>
      
      <h3>Use Technology Tools Wisely</h3>
      <p>Leverage apps and settings that support your digital wellness goals, such as screen time trackers and notification management.</p>
      
      <p>Establish technology-free zones, practice mindful consumption, and prioritize real-world connections and activities for improved mental wellbeing.</p>
      
      <p>Remember, the goal isn't to eliminate technology but to create a healthier relationship with it that supports your overall wellbeing.</p>
    `,
  },
  {
    id: 6,
    title: "The Power of Emotional Intelligence in Leadership",
    summary:
      "Discover how developing emotional intelligence can enhance your leadership capabilities and create more positive, productive work environments.",
    category: "Workplace",
    tags: ["emotional intelligence", "leadership", "workplace"],
    previewImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    date: "2024-12-15",
    readTime: "8 min read",
    content: `
      <div class="post-meta" style="display: flex; gap: 16px; margin-bottom: 24px; font-size: 14px; color: var(--color-text-secondary);">
        <span class="post-date">December 15, 2024</span>
        <span class="post-read-time">8 min read</span>
        <span class="post-category" style="background: var(--color-bg-2); padding: 4px 8px; border-radius: 12px;">Workplace</span>
      </div>
      <h1 style="margin-bottom: 24px; color: var(--color-text);">The Power of Emotional Intelligence in Leadership</h1>
      
      <p>Emotional intelligence (EI) is the ability to recognize, understand, and manage our own emotions while effectively responding to others' emotions.</p>
      
      <h2>Four Domains of EI</h2>
      <ul>
        <li><strong>Self-Awareness</strong> - understanding your emotional patterns</li>
        <li><strong>Self-Management</strong> - regulating emotions and reactions</li>
        <li><strong>Social Awareness</strong> - reading others' emotions and needs</li>
        <li><strong>Relationship Management</strong> - influencing and inspiring others</li>
      </ul>
      
      <h2>Why EI Matters in Leadership</h2>
      <h3>Building Trust and Rapport</h3>
      <p>Leaders with high emotional intelligence create psychological safety, making team members feel valued and understood.</p>
      
      <h3>Better Decision Making</h3>
      <p>EI helps leaders consider both logical and emotional factors when making decisions, leading to more comprehensive solutions.</p>
      
      <h3>Conflict Resolution</h3>
      <p>Emotionally intelligent leaders can navigate conflicts more effectively by understanding different perspectives and managing tensions.</p>
      
      <h2>Developing Your Emotional Intelligence</h2>
      <h3>Practice Self-Reflection</h3>
      <p>Regular self-assessment helps you understand your emotional triggers and patterns.</p>
      
      <h3>Seek Feedback</h3>
      <p>Ask trusted colleagues for honest feedback about your emotional responses and leadership style.</p>
      
      <h3>Develop Empathy</h3>
      <p>Practice putting yourself in others' shoes and trying to understand their perspectives and feelings.</p>
      
      <h3>Manage Stress Effectively</h3>
      <p>Develop healthy coping mechanisms for stress to maintain emotional balance under pressure.</p>
      
      <h2>EI in Leadership Practice</h2>
      <p>Leaders with high emotional intelligence create psychological safety, inspire trust, and foster collaboration. They demonstrate empathy, manage conflict effectively, and adapt their communication style to different team members.</p>
      
      <p>Remember, developing emotional intelligence is a lifelong journey that requires consistent practice and self-reflection. The investment in your EI will pay dividends in all areas of your life.</p>
    `,
  },
];

// Application State
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let currentTheme = prefersDark ? "dark" : "light";
let currentView = "homeView";
let currentPostId = null;
let isTransitioning = false;

// Theme Management
function applyTheme(theme) {
  document.documentElement.setAttribute("data-color-scheme", theme);
}

function toggleTheme() {
  if (isTransitioning) return;

  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.body.style.transition =
    "background-color 0.3s ease, color 0.3s ease";
  applyTheme(currentTheme);

  setTimeout(() => {
    document.body.style.transition = "";
  }, 300);
}

// Loading Management
function showLoading() {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) overlay.classList.add("show");
}

function hideLoading() {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) overlay.classList.remove("show");
}

// View Management
function updateNavState(viewName) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      (viewName === "homeView" && link.getAttribute("href") === "#home") ||
      (viewName === "postView" && link.getAttribute("href") === "#blog")
    ) {
      link.classList.add("active");
    }
  });
}

function showView(viewName, postId = null) {
  if (isTransitioning) return;

  isTransitioning = true;
  const views = ["homeView", "postView"];

  if (viewName === "postView") {
    showLoading();
  }

  views.forEach((view) => {
    const element = document.getElementById(view);
    if (element) {
      if (view === viewName) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  });

  updateNavState(viewName);
  currentView = viewName;
  if (postId) currentPostId = postId;

  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    if (viewName === "postView") {
      hideLoading();
    }
    isTransitioning = false;
  }, 300);
}

// Blog Management
function createBlogCard(post) {
  const card = document.createElement("article");
  card.className = "blog-card";
  card.setAttribute("data-post-id", post.id);

  card.innerHTML = `
    <img src="${post.previewImage}" alt="${
    post.title
  }" class="blog-card-image" loading="lazy">
    <div class="blog-card-content">
      <div class="blog-card-meta">
        <span>${post.date}</span>
        <span>${post.readTime}</span>
      </div>
      <h3 class="blog-card-title">${post.title}</h3>
      <p class="blog-card-excerpt">${post.summary}</p>
      <div class="blog-card-tags">
        ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
      openPost(post.id);
    }, 150);
  });

  return card;
}

function renderBlogCards(filter = "all") {
  const container = document.getElementById("blogCardsContainer");
  if (!container) return;

  let filteredPosts = blogPosts;
  if (filter !== "all") {
    filteredPosts = blogPosts.filter((post) => post.category === filter);
  }

  container.style.opacity = "0.5";
  container.style.transform = "translateY(16px)";

  setTimeout(() => {
    container.innerHTML = "";

    filteredPosts.forEach((post) => {
      const card = createBlogCard(post);
      container.appendChild(card);
    });

    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 200);
}

function openPost(postId) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return;

  const postContent = document.getElementById("postContent");
  if (postContent) {
    postContent.innerHTML = post.content;
  }

  updatePostNavigation(postId);
  showView("postView", postId);
}

function updatePostNavigation(currentId) {
  const currentIndex = blogPosts.findIndex((p) => p.id === currentId);
  const prevBtn = document.getElementById("prevPostBtn");
  const nextBtn = document.getElementById("nextPostBtn");

  if (prevBtn && nextBtn) {
    if (currentIndex > 0) {
      const prevPost = blogPosts[currentIndex - 1];
      prevBtn.style.display = "inline-flex";
      prevBtn.onclick = () => openPost(prevPost.id);
    } else {
      prevBtn.style.display = "none";
    }

    if (currentIndex < blogPosts.length - 1) {
      const nextPost = blogPosts[currentIndex + 1];
      nextBtn.style.display = "inline-flex";
      nextBtn.onclick = () => openPost(nextPost.id);
    } else {
      nextBtn.style.display = "none";
    }
  }
}

// Navigation Setup
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();

        if (href === "#home") {
          if (currentView !== "homeView") {
            showView("homeView");
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          return;
        }

        if (href === "#blog") {
          if (currentView !== "homeView") {
            showView("homeView");
            setTimeout(() => {
              const target = document.querySelector(href);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }, 400);
          } else {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

function setupMobileMenu() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", (e) => {
      e.preventDefault();
      nav.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!mobileToggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("show");
      }
    });

    const navLinks = nav.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  // Filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      renderBlogCards(filter);
    });
  });

  // Back button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showView("homeView");
    });
  }

  // CTA button
  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Share buttons
  const shareButtons = document.querySelectorAll(".share-btn");
  shareButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const originalText = btn.innerHTML;
      btn.innerHTML = btn.innerHTML.replace(/Share|Save/, "Done!");
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 1500);
    });
  });
}

// Initialize Application
function initApp() {
  applyTheme(currentTheme);

  setTimeout(() => {
    renderBlogCards("all");
    setupEventListeners();
    setupSmoothScrolling();
    setupMobileMenu();
    showView("homeView");
    hideLoading();

    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "1";
    }, 100);
  }, 500);
}

// Start Application
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
