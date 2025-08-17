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
      </header

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

        <figure class="post-media">
          <img src="./img/anexity/types_disorder.png"
               alt="Illustration of anxiety disorder types" 
         loading="lazy"
         onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/8055612d-6de9-4e24-963c-c3dd011ee994.png'" />
        </figure> 
      </section>

      <section class="post-section">
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
    previewImage: "./img/social_media_scroll/cover.jpeg",
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
        <img src="./img/social_media_scroll/sec.jpeg"
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

      <section class="post-section">
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
    title: "The Art of Crying for Men: Why the Strongest Men Are the Ones Who Dare to Cry",
    summary: "Society teaches men that tears are weakness. But the strongest men know the truth: vulnerability isn't fragility—it's courage, and it heals everything.",
    category: "Relationships",
    tags: ["male mental health", "emotional vulnerability", "masculinity", "crying", "emotional healing"],
    previewImage: "https://imgs.search.brave.com/Q06IpriAy25xKuu-DbJhQ11-40dv8sFAya5dQQCGVmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZXByZXNzZWQt/bWFuLWNyeWluZy1z/aWRlLXZpZXdfNzM4/OTktOTk1Ni5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw",
    date: "2025-01-16",
    readTime: "12 min read",
    content: `
    <article class="post" id="post-crying-men">
      <header class="post-header">
        <h1 class="post-title">The Art of Crying for Men</h1>
        <p class="post-meta">
          <time datetime="2025-01-16">January&nbsp;16,&nbsp;2025</time> • 12&nbsp;min read
        </p>
      </header>

      <figure class="post-hero">
        <img src="./img/crying_men/hero.png"
             alt="Man in emotional contemplation showing vulnerability" 
             loading="lazy"
             onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/ae3fc0c8-2dfa-4232-ae58-07455308ad9c.png'" />
        <figcaption class="sr-only">Professional representation of male emotional vulnerability</figcaption>
      </figure>

      <section class="post-section">
        <h2>Introduction: A Quiet Struggle</h2>
        <p>From a young age, most boys receive an unspoken rule: don't cry. Not because they don't feel pain, but because they're expected to manage it in silence. As they grow, those unspoken rules become habits. Men are often told to be strong, hold it together, and not let emotions get in the way. But inside, many men feel everything — deeply, powerfully, and painfully.</p>
        <p>It's not that they don't want to cry. It's that they've learned to control the urge so well, even they start to believe they're not supposed to feel that much.</p>
      </section>

      <section class="post-section">
        <h2>What Men Really Feel But Rarely Say</h2>
        <p>Men feel sadness just like anyone else — from losing someone, from heartbreak, from disappointment, from carrying too much. They feel pressure to succeed, guilt when they fail, fear of not being enough, and sometimes a deep loneliness that they can't explain to anyone. They feel misunderstood, overlooked, and burdened by responsibilities that no one sees.</p>
        <p>They long to be heard, to be seen, to be held without being judged. But they rarely say these things out loud. Instead, they push it down, tell themselves to "move on" or "be a man," and keep going. Not because they want to — but because they've been taught that this is the only way to survive.</p>
      </section>

      <section class="post-section">
        <h2>The Emotional Control in Public Spaces</h2>
        <p>In public, men become masters of self-control. They'll sit in a meeting after receiving devastating news. They'll smile at friends while going through a breakup. They'll joke around while quietly struggling with mental health. They know how to shift focus, change topics, and keep their expressions neutral.</p>
        <p>There's a fear that if they cry, they'll be seen as unstable or weak. So instead, they build masks — polite, professional, calm, collected. Even when their chest feels heavy and their eyes start to burn, they excuse themselves, take deep breaths, and shut it down. No one notices the storm inside, because they've gotten so good at hiding it.</p>

        <figure class="post-media">
          <img src="./img/crying_men/public_mask.png"
               alt="The contrast between public composure and private emotions" 
               loading="lazy"
               onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/f0bd9db5-fe6c-46d2-b253-160b37ab2125.png'" />
        </figure>
      </section>

      <section class="post-section">
        <h2>The Difference Behind Closed Doors</h2>
        <p>When men are alone, the story is different. That's when the silence gets louder. That's when the pressure finally has space to breathe. Some cry quietly in their rooms, in the shower, or in their cars. Others don't cry, but feel a deep emotional ache that never goes away. Some release it through music, journaling, or exercise. Others bottle it up until it becomes anger or numbness.</p>
        <p>The hardest part is that even in private, many still feel ashamed of crying. They look in the mirror and wonder, "What's wrong with me?" — not realizing that what they're feeling is normal. They're not broken. They're just human.</p>
      </section>

      <section class="post-section">
        <h2>Why They Hide Their Emotions</h2>
        <p>Men hide their emotions for many reasons. Some are afraid of being judged, especially by people they love. Others don't want to seem weak or vulnerable, because they're used to being the one who supports everyone else. Many have never learned the language of emotions, so even when they want to open up, they don't know how.</p>
        <p>Sometimes, they feel like no one would understand anyway. And often, they feel like they don't have the right to break down when others around them are also struggling. So instead of reaching out, they stay quiet. And that silence becomes their coping mechanism.</p>
      </section>

      <section class="post-section">
        <h2>The Weight of Always Being "Okay"</h2>
        <p>Being the one who always seems okay can be exhausting. Men often carry emotional weight without realizing how heavy it's become. They push through work, show up for others, and keep their emotions locked away, telling themselves they're fine. But over time, the weight builds.</p>
        <p>The nights become harder. The emotions start to show up in other ways — short tempers, anxiety, fatigue, or a general feeling of emptiness. They begin to feel disconnected — from themselves, from the people around them, even from life. And yet, they continue, because it feels safer to pretend than to be vulnerable.</p>
      </section>

      <section class="post-section">
        <h2>Why Crying is Not a Weakness But a Release</h2>
        <p>Crying isn't a loss of strength. It's a release of the pressure that's been building for too long. It's not a breakdown — it's the body's way of healing. When men allow themselves to cry, they aren't falling apart. They're finally allowing what's inside to come out, so it stops hurting them from within.</p>
        <p>It's not about falling into sadness. It's about giving sadness a place to exist so that it can pass. Crying resets the nervous system, lowers stress, and allows a deeper connection to self. It makes room for healing — the kind that can't happen when everything is locked away.</p>

      </section>

      <section class="post-section">
        <h2>Rewriting the Narrative of Strength</h2>
        <p>Strength isn't about how long someone can hide their feelings. Real strength is being honest with yourself. It's choosing to say, "I'm not okay," and trusting that it doesn't make you any less of a man. Men need spaces where they can feel — without judgment, without shame, and without pressure to be anything other than real.</p>
        <p>When a man cries, he's not breaking down — he's breaking open. That's when healing starts. That's when connection deepens. That's when the walls fall, and what's left is truth, clarity, and emotional freedom.</p>
      </section>

      <section class="post-section">
        <div class="post-text">
          <h2>Final Words: There's Nothing Wrong With Feeling</h2>

          <h3>You Are Not Alone</h3>
          <p>To every man who has held back tears in front of others… to every man who has cried quietly with no one around… to every man who feels too much but says too little — you are not alone. What you feel is real. Your emotions matter.</p>

          <h3>Permission to Feel</h3>
          <p>You don't need to hide them. You don't need to apologize for them. You don't need to pretend. The next time it rises — the tightness in your chest, the lump in your throat, the tears you try to blink away — let it out. Let yourself cry.</p>

          <h3>This Is Strength</h3>
          <p>It doesn't make you weak. It doesn't make you fragile. It makes you human. And that is powerful.</p>
        </div>
      </section>

      <section class="post-section">
        <h2>Conclusion</h2>
        <p>The art of crying for men isn't about weakness — it's about courage. It's about choosing authenticity over performance, healing over hiding, and connection over isolation. In a world that has taught men to suppress their emotions, choosing to feel and express them becomes a radical act of self-love and strength.</p>
        <p>Every tear shed in honesty is a step toward freedom. Every moment of vulnerability is a bridge to deeper connection. Every man who chooses to break the silence makes it easier for others to do the same.</p>
        <p>The strongest men aren't those who never cry — they're the ones who dare to feel everything, express it authentically, and heal openly. They're the ones who understand that being human isn't a weakness to hide, but a gift to embrace.</p>
      </section>
    </article>
  `
  },
  {
    id: 4,
    title: "Parents Being First-Time Parents: A Glimpse into Parenting Before and After the 20th Century",
    summary: "Explore how first-time parenting has transformed from communal survival strategies of the past to today’s digital age of instant information—and discover what remains timeless in the journey of raising children.",
    category: "Relationships",
    tags: ["parenting", "history", "first-time parents", "family evolution", "childcare"],
    previewImage: "./img/parenting/cover.png",
    date: "2025-08-16",
    readTime: "10 min read",
    content: `
    <article class="post" id="post-parenting-evolution">
      <header class="post-header">
        <h1 class="post-title">Parents Being First-Time Parents: A Glimpse into Parenting Before and After the 20th Century</h1>
        <p class="post-meta">
          <time datetime="2025-08-16">August&nbsp;16,&nbsp;2025</time> • 10&nbsp;min read
        </p>
      </header>

       <figure class="post-hero">
        <img src="./img/parenting/top.png"
             alt="Man in emotional contemplation showing vulnerability" 
             loading="lazy"
             onerror="this.src='https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/ae3fc0c8-2dfa-4232-ae58-07455308ad9c.png'" />
        <figcaption class="sr-only">Professional representation of male emotional vulnerability</figcaption>
      </figure>

      <section class="post-section">
        <h2>Introduction</h2>
        <p>Becoming a parent for the first time is a thrilling and nerve-wracking experience. But what if you could take a step back and look at how parenting has evolved over time? How did the expectations, resources, and practices differ before and after the 20th century? Let's take a journey through the transformation of parenthood from the struggles of the past to the advancements of today.</p>
      </section>

      <section class="post-section">
        <h2>Parenting Before the 20th Century: A Different World</h2>
        <p>Parenting in pre-20th century societies was shaped by practicality, survival, and community. In the past, the concept of "first-time parenting" wasn’t as singular as it is today. Most parents, particularly mothers, grew up in large extended families and were often surrounded by older relatives who could help guide them. The role of the family as a unit was paramount, and child-rearing was often seen as a communal responsibility, not an individual one.</p>
      </section>

      <section class="post-section">
        <h3>Limited Resources, Yet Strong Support Systems</h3>
        <p>Before the advent of modern medicine and technology, raising children was an immensely challenging task. Parents did not have the same access to information about child development or health that we do today. Many relied on intuition, tradition, and advice passed down through generations. Birth rates were high, and the risk of infant mortality was also significantly higher. A mother's first pregnancy might have been viewed with less anxiety simply because there were few modern resources to worry about it was about surviving and pushing through.</p>
        <p>But on the other hand, these parents were often more dependent on communal knowledge. In rural communities, a mother-to-be might have learned from the women around her, gaining first hand insights and advice from mothers, grandmothers, and aunts who had experienced similar circumstances.</p>
      </section>

      <section class="post-section">
        <h2>Parenting in the 20th Century: The Rise of the Expert</h2>
        <p>The 20th century ushered in significant changes, especially with the advent of modern medicine, psychology, and education. These shifts drastically altered the way parents approached raising children. First-time parents no longer just relied on their instincts and community advice; they had new options available: books, classes, and even pediatric specialists.</p>

        <h3>Medical Advances</h3>
        <p>In the early 1900s, advancements in obstetrics and pediatric care drastically reduced infant mortality rates, making childbirth safer for mothers and babies. The development of vaccines, antibiotics, and neonatal care brought about profound shifts in how parents viewed health and safety. As a result, parents began to feel a new responsibility to educate themselves, often seeking out resources to ensure they were giving their children the best possible start in life.</p>

        <h3>The Nuclear Family and Isolation</h3>
        <p>The 20th century also saw the rise of the nuclear family, particularly in the West. This structure, which emphasized the isolated family unit of mother, father, and children, left many first-time parents without the same support network that previous generations had. With fewer extended families living in close proximity, parents were often left to navigate the journey of parenthood on their own. This contributed to a rise in the feeling of "parenting anxiety," with new parents seeking guidance from books and professionals.</p>
      </section>

      <section class="post-section">
        <h2>Parenting Today: The Digital Revolution and the Quest for Balance</h2>
        <p>Fast forward to the present day, and we see an entirely different landscape for first-time parents. Technological advancements and the rise of social media have dramatically changed how we approach raising children.</p>

        <h3>Instant Information and Overwhelm</h3>
        <p>In the age of the internet, a first-time parent is bombarded with information — articles, blog posts, YouTube channels, and parenting forums are available at the touch of a button. The downside? The overload of information can be overwhelming. One parent’s solution may be another’s nightmare, and the pressure to "do it all right" has never been greater.</p>
        <p>Parents today can access professional advice instantly, sometimes from the comfort of their homes, via online consultations or parenting apps. Virtual communities have sprung up to replace the communal wisdom of extended families, but in many cases, this has led to a feeling of isolation. Despite the wealth of information available, many parents feel more uncertain and anxious than ever before, perhaps because they no longer have that face-to-face support system that older generations relied on.</p>

        <h3>Work-Life Balance</h3>
        <p>With the rise of dual-income households and the demands of modern life, many parents today are trying to juggle both work and child-rearing responsibilities. Flexible work arrangements and remote work have made it easier to balance, but the expectation to "have it all" — a successful career, a happy family, and personal well-being — is undoubtedly one of the most significant sources of stress for new parents in the 21st century.</p>

        <h3>Parenting as a Shared Experience</h3>
        <p>One positive trend in modern parenting is the increasing involvement of fathers and partners. The idea of shared parenting has gained traction, with many fathers actively participating in day-to-day care and decision-making. This shift has not only made the burden of child-rearing more balanced, but it has also helped foster stronger family dynamics and support for the mother. This type of collaborative approach was less common in earlier eras, where gender roles often assigned parenting tasks primarily to mothers.</p>
      </section>

      <section class="post-section">
        <h2>Final Thoughts: The Ever-Evolving Journey</h2>
        <p>Whether before the 20th century or in today's fast-paced, tech-driven world, parenting remains a deeply personal journey, with each generation adapting to new challenges and embracing new opportunities. While first-time parents in the past may have had different resources and experiences than we do today, the core of parenting — love, care, and devotion to your child has remained unchanged.</p>
        <p>The evolution of parenting shows us that while times may change, the journey of raising children is still as transformative and rewarding as ever. The role of the first-time parent continues to evolve, but it’s always marked by the same mix of excitement, uncertainty, and immeasurable joy. Whether you're turning to a trusted family member, a doctor, or an online forum, one thing remains certain: you're not alone on this incredible adventure.</p>
      </section>
    </article>
  `
  }
];


// Select elements
const openBtn = document.getElementById('previewBookBtn'); // trigger button
const modal = document.getElementById('pdfModal');         // overlay container
const modalContent = document.getElementById('pdfModalContent'); // modal box
const closeBtn = document.getElementById('closePdfModal'); // close button
const pdfViewer = document.getElementById('pdfViewer');
const pdfLoading = document.getElementById('pdfLoading');


let lastFocusedElement = null; // store to restore focus later

// Function to open the modal
function openModal() {
  lastFocusedElement = document.activeElement; // store the element that had focus
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('previewBookBtn').addEventListener('click', function () {
    const modal = document.getElementById('pdfModal');
    const modalContent = document.getElementById('pdfModalContent');
    modal.classList.add('active');
    modalContent.focus(); // Move keyboard focus into dialog
  });

  // Show loader, hide iframe until loaded
  pdfLoading.style.display = 'block';
  pdfViewer.style.display = 'none';

  // Reload PDF
  pdfViewer.src = 'sample.pdf';
  pdfViewer.onload = () => {
    pdfLoading.style.display = 'none';
    pdfViewer.style.display = 'block';
  };

  // Give initial focus (goes to close button for accessibility)
  setTimeout(() => closeBtn.focus(), 50);
}

// Function to close the modal  
function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.getElementById('closePdfModal').addEventListener('click', function () {
    document.getElementById('pdfModal').classList.remove('active');
    document.getElementById('previewBookBtn').focus();
  });

  // Empty iframe src to stop background fetch
  pdfViewer.src = '';

  // Restore focus back to the button that opened it
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// Open modal when the button is clicked
openBtn.addEventListener('click', openModal);

// Close modal when clicking the close button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal when pressing Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Optional: Trap focus within modal while open
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && modal.classList.contains('active')) {
    const focusableEls = modalContent.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const focusArray = Array.from(focusableEls);
    const firstEl = focusArray[0];
    const lastEl = focusArray[focusArray.length - 1];

    if (e.shiftKey && document.activeElement === firstEl) {
      e.preventDefault();
      lastEl.focus(); // go back to last focusable
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault();
      firstEl.focus(); // loop back to first
    }
  }
});


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
    <img src="${post.previewImage}" alt="${post.title
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



  // Select all share buttons
  const shareButtons = document.querySelectorAll(".share-btn");

  shareButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const currentUrl = window.location.href;
      const originalHTML = btn.innerHTML;

      // Change button text to Done!
      btn.innerHTML = originalHTML.replace(/Share|Save/, "Done!");

      // Open WhatsApp share in a new tab
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
      window.open(whatsappUrl, "_blank");

      // Show Instagram share message (replace with your preferred UI method)
      setTimeout(() => {
        alert(
          "Instagram does not support direct web sharing. Please copy the link and share it on Instagram manually."
        );
      }, 500);

      // Revert button text back after 1.5 seconds
      setTimeout(() => {
        btn.innerHTML = originalHTML;
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
