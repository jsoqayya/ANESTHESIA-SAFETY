export const chaptersContent: Record<string | number, string> = {
  1: `<!-- Download Button -->
    

    <div class="part-title">PART I — Foundations of OR Safety &amp; Quality</div>
    <div class="part-title">الجزء الأول — أسس السلامة والجودة في غرفة العمليات</div>
    
    <h1>CHAPTER 1 — OR Safety: Why Harm Happens in the Theatre</h1>
    <div class="subtitle">الفصل الأول — سلامة غرفة العمليات: لماذا يحدث الضرر في غرفة العمليات<br>
    <span style="font-size: 18px;">(Harm, Risk, and Reliability in the Operating Theatre) / (الضرر، المخاطر، والموثوقية في غرفة العمليات)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد غرفة العمليات بيئة <strong>عالية المخاطر وعالية التعقيد</strong>، حتى عندما تكون الفرق خبيرة ومتحفزة.<br>
            <span class="english-term">Explain why the operating theatre is a <strong>high-risk, high-complexity</strong> environment even when teams are experienced and motivated.</span></li>
            
            <li>وصف كيف يتطور الضرر من خلال <strong>سلاسل من الإخفاقات الصغيرة</strong>، وليس كخطأ دراماتيكي واحد.<br>
            <span class="english-term">Describe how harm develops through <strong>chains of small failures</strong>, not a single dramatic mistake.</span></li>
            
            <li>التمييز بين <strong>الإخفاقات النشطة (Active failures)</strong> و <strong>الظروف الكامنة (Latent conditions)</strong>، وشرح لماذا تتنبأ الظروف الكامنة بحدوث الضرر.<br>
            <span class="english-term">Distinguish <strong>active failures</strong> from <strong>latent conditions</strong> and explain why latent conditions predict harm.</span></li>
            
            <li>تطبيق عدسة <strong>الثقافة العادلة (Just Culture)</strong> في أحداث غرفة العمليات (الخطأ البشري مقابل السلوك المحفوف بالمخاطر مقابل السلوك المتهور).<br>
            <span class="english-term">Apply a <strong>Just Culture</strong> lens in OR events (human error vs at-risk vs reckless behavior).</span></li>
            
            <li>تحديد المصادر الشائعة لفشل غرفة العمليات: فجوات التواصل، تدهور التسليم (Handoff decay)، المقاطعات، التباين في التوثيق، ضغط الوقت، فجوات جاهزية المعدات، والغموض في الأدوار.<br>
            <span class="english-term">Identify common OR failure sources: communication gaps, handoff decay, interruptions, documentation mismatch, time pressure, equipment readiness gaps, and role ambiguity.</span></li>
            
            <li>ترجمة نظرية السلامة إلى ضوابط عملية في غرفة العمليات: <strong>التوقف الإلزامي (Hard stops)، العمل القياسي (Standard work)، تصميم الحواجز (Barrier design)، قواعد التصعيد (Escalation rules)، والتوثيق الموثوق (Reliable documentation)</strong>.<br>
            <span class="english-term">Translate safety theory into practical OR controls: <strong>hard stops, standard work, barrier design, escalation rules, and reliable documentation</strong>.</span></li>
            
            <li>استخدام أدوات بسيطة: <strong>رسم خرائط المخاطر-الحواجز (Hazard–barrier mapping)</strong>، التعلم من الحوادث الوشيكة (Near-miss learning)، ولغة "إيقاف الخط" (Stop-the-line).<br>
            <span class="english-term">Use simple tools: <strong>hazard–barrier mapping</strong>, near-miss learning, and “stop-the-line” language.</span></li>
            
            <li>تحديد العلامات القابلة للقياس للأداء الآمن في غرفة العمليات باستخدام <strong>المؤشرات الاستباقية (Leading indicators)</strong>، وليس فقط نتائج الضرر.<br>
            <span class="english-term">Define measurable signs of safe OR performance using <strong>leading indicators</strong>, not only harm outcomes.</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الغرفة التي بدت مثالية"</strong><br>
        <span class="english-term">A true-to-life case: “The room that looked perfect” (Real Scientific Story)</span>
    </div>

    <p>بدأت قائمة العمليات الصباحية المزدحمة متأخرة بسبب عدم اكتمال طقم أدوات مُعارة (Loaner set). استغرقت الحالة الثانية وقتاً أطول من المتوقع. وبحلول الحالة الثالثة، كان ضغط الإنتاج (Production pressure) يُشكّل السلوكيات بهدوء: كان الجميع يريدون من الغرفة أن "تلحق بالجدول الزمني".</p>
    <p><span class="english-term">A busy morning list started late due to an incomplete loaner set. The second case ran long. By the third case, production pressure was quietly shaping behavior: everyone wanted the room to “catch up.”</span></p>

    <p>وصل المريض لإجراء عملية مجدولة (Elective procedure). تم توقيع الموافقة (Consent). بدت ورقة الحجز صحيحة. كان الجراح يعرف المريض. قام طاقم التمريض بتجهيز الغرفة. كان الفريق خبيراً. ولم يبدُ أي شيء غير آمن.</p>
    <p><span class="english-term">The patient arrived for an elective procedure. Consent was signed. The booking sheet appeared correct. The surgeon knew the patient. Nursing had prepared the room. The team was experienced. Nothing looked unsafe.</span></p>

    <div class="alert-box">
        <p><strong>ومع ذلك، كانت هناك تباينات صغيرة موجودة:</strong><br>
        <span class="english-term"><strong>Yet small mismatches existed:</strong></span></p>
        <ul>
            <li>اختلفت صياغة الإجراء عبر المستندات (الحجز مقابل ملاحظة العيادة).<br>
            <span class="english-term">Procedure wording differed across documents (booking vs clinic note).</span></li>
            <li>احتوى التصوير الطبي (Imaging) على تفصيل مهم ولكنه لم يُنطق بصوت عالٍ في الغرفة.<br>
            <span class="english-term">Imaging contained a detail that mattered but was not spoken aloud in the room.</span></li>
            <li>تم إجراء المهلة (Time-out) بسرعة، وبشكل مهذب، وروتيني—دون بناء نموذج عقلي مشترك (Shared mental model).<br>
            <span class="english-term">The time-out happened fast, polite, and routine—without building a shared mental model.</span></li>
            <li>قاطعت مشكلة في توصيل المعدات الانتباه في أكثر اللحظات حرجاً.<br>
            <span class="english-term">An equipment connection issue interrupted attention at the most critical moment.</span></li>
        </ul>
    </div>

    <p>قبل الشق الجراحي (Incision) مباشرة، سأل أحدهم: "هل يمكننا تأكيد الجهة الدقيقة وصياغة الإجراء مرة أخرى؟"</p>
    <p><span class="english-term">Just before incision, someone asked: “Can we confirm the exact side and procedure wording again?”</span></p>

    <p>توقف مؤقت. إعادة فحص. تم اكتشاف تباين (Mismatch) كان من الممكن أن يؤدي إلى ضرر الجراحة في الموقع الخاطئ (Wrong-site harm). تم إيقاف الحالة وتصحيحها قبل حدوث إصابة لا رجعة فيها.</p>
    <p><span class="english-term">A pause. A re-check. A mismatch was discovered that could have led to wrong-site harm. The case was stopped and corrected <strong>before</strong> irreversible injury.</span></p>

    <div class="concept-box">
        <p><strong>ماذا حدث: / What happened:</strong></p>
        <ul>
            <li>كان التحقق موجوداً، لكن <strong>جودة التحقق</strong> كانت ضعيفة.<br>
            <span class="english-term">Verification existed, but <strong>verification quality</strong> was weak.</span></li>
            <li>شجع ضغط الوقت السرعة على حساب الوضوح.<br>
            <span class="english-term">Time pressure encouraged speed over clarity.</span></li>
            <li>جعلت الهرمية الوظيفية (Hierarchy) البقاء صامتاً أسهل من التحدي (طرح الأسئلة).<br>
            <span class="english-term">Hierarchy made it easier to remain silent than to challenge.</span></li>
            <li>سمح النظام بمرور الغموض عبر بوابة حرجة.<br>
            <span class="english-term">The system allowed ambiguity to pass through a critical gate.</span></li>
        </ul>

        <p><strong>تحليل ما بعد الحدث: / Post-event analysis:</strong></p>
        <ul>
            <li><strong>السبب المباشر (Proximate cause):</strong> تباين في التوثيق لم يتم حله أثناء المهلة (Time-out).<br>
            <span class="english-term"><strong>Proximate cause:</strong> Documentation mismatch not resolved during time-out.</span></li>
            <li><strong>الأسباب الجذرية (Root causes):</strong>
                <ul>
                    <li>لغة حجز غير قياسية وتنسيقات توثيق غير متسقة.<br>
                    <span class="english-term">Non-standard booking language and inconsistent documentation formats.</span></li>
                    <li>أُجريت المهلة (Time-out) كطقس روتيني بدلاً من كونها حاجزاً (Barrier).<br>
                    <span class="english-term">Time-out performed as a ritual rather than a barrier.</span></li>
                    <li>لا توجد قاعدة صريحة لـ "التوقف الإلزامي" (Hard stop) عند وجود تباينات.<br>
                    <span class="english-term">No explicit “hard stop” rule for mismatches.</span></li>
                    <li>التحدث بصوت عالٍ (Speaking-up) لم يكن محمياً بالكامل من قبل الثقافة والسياسة.<br>
                    <span class="english-term">Speaking-up not fully protected by culture and policy.</span></li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="success-box">
        <p><strong>الدرس المستفاد: / Lesson learned:</strong></p>
        <p>في غرفة العمليات، لا يصل الضرر غالباً كخطأ دراماتيكي. بل يصل كـ <strong>سلسلة هادئة</strong> من نقاط الضعف المُتغاضى عنها والتي تتوافق تحت الضغط. يجب تصميم السلامة بحيث لا يمكن لعدم اليقين (Uncertainty) أن يمر دون أن يُلاحظ.</p>
        <p><span class="english-term">In the OR, harm often does not arrive as a dramatic error. It arrives as a <strong>quiet chain</strong> of tolerated weaknesses that align under pressure. Safety must be designed so that uncertainty cannot pass unnoticed.</span></p>
    </div>

    <h2>1.1 لماذا تهم السلامة في غرفة العمليات / Why OR Safety Matters</h2>
    
    <h3>1.1.1 الواقع الأخلاقي والسريري / The Ethical and Clinical Priority</h3>
    <p>غالباً ما يكون المريض غير قادر على حماية نفسه أثناء الجراحة. فهو يتخلى عن الوعي، والسيطرة، وأحياناً حتى القدرة على التنفس. هذه الحقيقة الأخلاقية وحدها تجعل سلامة غرفة العمليات أمراً غير قابل للتفاوض. من الناحية السريرية، تُركز غرفة العمليات الإجراءات عالية المخاطر: الإجراءات الغازية (Invasive procedures)، متطلبات العقامة، أجهزة الطاقة، الأدوات الحادة، الغرسات (Implants)، العينات، واتخاذ القرارات الحرجة زمنياً. عندما يحدث الضرر هنا، يمكن أن يكون فورياً وشديداً.</p>
    <p><span class="english-term">The patient is often unable to protect themselves during surgery. They surrender awareness, control, and sometimes even the ability to breathe. This moral fact alone makes OR safety non-negotiable. Clinically, the OR concentrates high-risk actions: invasive procedures, sterility requirements, energy devices, sharp instruments, implants, specimens, and time-critical decision-making. When harm happens here, it can be immediate and severe.</span></p>

    <h3>1.1.2 الواقع التنظيمي والرقابي / Governance and Accountability</h3>
    <p>يؤدي الضرر في غرفة العمليات إلى إطلاق سلسلة من التداعيات:</p>
    <p><span class="english-term">OR harm triggers:</span></p>
    <ul>
        <li>تمديد مدة الإقامة <span class="english-term">(extended length of stay)</span></li>
        <li>القبول في العناية المركزة <span class="english-term">(ICU admissions)</span></li>
        <li>إعادة الإدخال للمستشفى <span class="english-term">(readmissions)</span></li>
        <li>مخاطر التقاضي <span class="english-term">(litigation risk)</span></li>
        <li>الضرر بسمعة المؤسسة <span class="english-term">(reputational damage)</span></li>
        <li>والتدقيق من قبل جهات الاعتماد <span class="english-term">(accreditation scrutiny)</span></li>
    </ul>
    <p>الغرفة الآمنة ليست مجرد "ممارسة جيدة". إنها التزام حوكمة (Governance obligation) مع مساءلة واضحة.</p>
    <p><span class="english-term">A safe theatre is not simply “good practice.” It is a governance obligation with clear accountability.</span></p>

    <h3>1.1.3 واقع القيمة والتكلفة / Value, Waste, and the Cost of Harm</h3>
    <p>كل مضاعفة يمكن الوقاية منها تحمل تكلفة خفية:</p>
    <p><span class="english-term">Every preventable complication carries a hidden cost:</span></p>
    <ul>
        <li>اختبارات ومضادات حيوية إضافية <span class="english-term">(additional tests and antibiotics)</span></li>
        <li>العمليات الجراحية المتكررة <span class="english-term">(re-operations)</span></li>
        <li>تأخير الخروج <span class="english-term">(delayed discharge)</span></li>
        <li>الإرهاق الوظيفي للطاقم <span class="english-term">(staff burnout)</span></li>
        <li>وفقدان ثقة المريض <span class="english-term">(and loss of patient trust)</span></li>
    </ul>
    <p>السلامة ليست نقيض الكفاءة. الكفاءة الحقيقية هي <strong>التدفق الآمن (Safe flow)</strong>.</p>
    <p><span class="english-term">Safety is not the opposite of efficiency. True efficiency is <strong>safe flow</strong>.</span></p>

    <h2>1.2 غرفة العمليات كنظام عالي المخاطر / The OR as a High-Risk System</h2>
    
    <h3>1.2.1 التعقيد: أجزاء متحركة كثيرة في نفس الوقت / Complexity</h3>
    <p>غرفة العمليات ليست مهمة واحدة—إنها مهام متعددة تحدث في وقت واحد: وضعية المريض (Positioning)، التجهيز والفرش (Prepping and draping)، إدارة الحقل المعقم، إعداد الأجهزة، التخطيط للعينات، جاهزية الغرسات، التوثيق، وتواصل الفريق. يخلق التعقيد المخاطر لأن المعلومات تصبح مجزأة، والمسؤوليات تتداخل، والتغييرات الصغيرة تنتشر تأثيراتها عبر الغرفة.</p>
    <p><span class="english-term">The OR is not one task—it is multiple tasks happening simultaneously: positioning, prepping and draping, sterile field management, device setup, specimen planning, implant readiness, documentation, and team communication. Complexity creates risk because information becomes fragmented, responsibilities overlap, and small changes ripple through the room.</span></p>

    <h3>1.2.2 الترابط الوثيق: وقت محدود للاسترداد / Tight Coupling</h3>
    <p>في الترابط الوثيق، تعتمد الخطوات على التسلسل والتوقيت. بمجرد بدء التخدير واكتمال الفرش المعقم، يبدو التوقف مُكلفاً. "يسحب" النظام الفرق نحو المضي قدماً حتى عند وجود عدم يقين. يُحوّل الترابط الوثيق الأخطاء الصغيرة إلى أحداث متصاعدة.</p>
    <p><span class="english-term">In tight coupling, steps depend on sequence and timing. Once anesthesia is established and draping is complete, stopping feels expensive. The system “pulls” teams toward proceeding even when uncertainty exists. Tight coupling turns small mistakes into escalating events.</span></p>

    <h3>1.2.3 ضغط الإنتاج وتطبيع الاختصارات / Production Stress</h3>
    <p>البدايات المتأخرة، الحالات الطويلة، النواقص، وضغط الموظفين تخلق انحرافاً (Drift) يمكن التنبؤ به: يصبح التحقق أسرع، يصبح التوثيق أخف، تزداد المقاطعات، وتصبح الاختصارات "طبيعية". هذا الانحراف ليس عيباً شخصياً. إنه <strong>إشارة للنظام (System signal)</strong>.</p>
    <p><span class="english-term">Late starts, long cases, shortages, and staffing strain create a predictable drift: verification becomes faster, documentation becomes lighter, interruptions increase, and shortcuts become “normal.” This drift is not a character flaw. It is a <strong>system signal</strong>.</span></p>

    <h2>1.3 كيف يحدث الضرر عادة (سلاسل، وليست صواعق) / How Harm Usually Happens (Chains, Not Thunderbolts)</h2>

    <h3>1.3.1 سلسلة الضرر / The Harm Chain</h3>
    <p>خريطة عملية لسلامة غرفة العمليات:</p>
    <p><span class="english-term">A practical OR safety map: (Hazard → Trigger → Barrier Failure → Harm)</span></p>
    <ul>
        <li><strong>الخطر (Hazard):</strong> موجود دائماً (خطر الموقع الخاطئ، خطر العدوى، خطر العناصر المتروكة).<br>
        <span class="english-term"><strong>Hazard:</strong> always present (wrong site risk, infection risk, retained item risk).</span></li>
        <li><strong>المُحفز (Trigger):</strong> يظهر تحت الضغط (المقاطعات، ضغط الوقت، الغموض).<br>
        <span class="english-term"><strong>Trigger:</strong> appears under pressure (interruptions, time pressure, ambiguity).</span></li>
        <li><strong>ضعف الحاجز (Barrier weakness):</strong> القائمة المرجعية كطقس روتيني، ملكية غير واضحة للخطوات، توثيق غير متسق.<br>
        <span class="english-term"><strong>Barrier weakness:</strong> checklist as ritual, unclear ownership, inconsistent documentation.</span></li>
        <li><strong>فشل الحاجز (Barrier failure):</strong> تمرير التباين، عدم احتواء كسر العقامة، عدم حل العد (Counts).<br>
        <span class="english-term"><strong>Barrier failure:</strong> mismatch passes, sterility break not contained, counts not resolved.</span></li>
        <li><strong>الضرر (Harm):</strong> الخطوة النهائية.<br>
        <span class="english-term"><strong>Harm:</strong> the final step.</span></li>
    </ul>
    <p>معظم الضرر ليس خطأً واحداً. إنه سلسلة.</p>
    <p><span class="english-term">Most harm is not one mistake. It is a chain.</span></p>

    <h3>1.3.2 نموذج الجبن السويسري في غرفة العمليات / Swiss Cheese Model</h3>
    <p>تشمل حواجز (شرائح) غرفة العمليات الخاصة بك:</p>
    <p><span class="english-term">Your OR barriers (slices) include:</span></p>
    <p>التحقق من الحجز، اكتمال الموافقة، تحديد الموقع، المهلة (Time-out)، العد الجراحي (Counts)، تسمية العينات، التحقق من الغرسات، تتبع التعقيم، وقواعد التصعيد. كل حاجز به ثقوب. يحدث الضرر عندما تتراص الثقوب. عمل السلامة يقلل من الثقوب، ويضيف شرائح، ويمنع التراص.</p>
    <p><span class="english-term">booking verification, consent completeness, site marking, time-out, counts, specimen labeling, implant verification, sterilization traceability, escalation rules. Each barrier has holes. Harm happens when holes align. Safety work reduces holes, adds slices, and prevents alignment.</span></p>

    <h2>1.4 الإخفاقات النشطة مقابل الظروف الكامنة / Active Failures vs Latent Conditions</h2>

    <table>
        <thead>
            <tr>
                <th>المفهوم / Concept</th>
                <th>الوصف والأمثلة / Description &amp; Examples</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>الإخفاقات النشطة</strong><br><span class="english-term">Active failures (Frontline errors)</span></td>
                <td>
                    <p>أفعال مرئية (ما تراه).</p>
                    <p><span class="english-term">Visible actions:</span></p>
                    <ul>
                        <li>عينة مسماة بشكل خاطئ <span class="english-term">(mislabeled specimen)</span></li>
                        <li>تخطي خطوة في العد <span class="english-term">(skipped count step)</span></li>
                        <li>مهلة متسرعة <span class="english-term">(rushed time-out)</span></li>
                        <li>فحص توثيق مفقود <span class="english-term">(missing documentation check)</span></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>الظروف الكامنة</strong><br><span class="english-term">Latent conditions (System weaknesses)</span></td>
                <td>
                    <p>الدوافع الخفية (ما لا تراه).</p>
                    <p><span class="english-term">Hidden drivers:</span></p>
                    <ul>
                        <li>لغة حجز غامضة <span class="english-term">(ambiguous booking language)</span></li>
                        <li>غياب التوقف الإلزامي <span class="english-term">(missing hard stops)</span></li>
                        <li>ضعف تتبع الأدوات <span class="english-term">(poor instrument traceability)</span></li>
                        <li>أدوار غير واضحة <span class="english-term">(unclear roles)</span></li>
                        <li>إخفاقات متكررة في جاهزية المعدات <span class="english-term">(repeated equipment readiness failures)</span></li>
                        <li>نماذج توظيف تجبر على التسرع <span class="english-term">(staffing models that force rushing)</span></li>
                        <li>ثقافة تعاقب على التحدث (Speaking up) <span class="english-term">(a culture that punishes speaking up)</span></li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="alert-box">
        <p>الإخفاقات النشطة هي أعراض. الظروف الكامنة هي مُتنبئات (Predictors).</p>
        <p><span class="english-term">Active failures are symptoms. Latent conditions are predictors.</span></p>
    </div>

    <h2>1.5 الثقافة العادلة في غرفة العمليات / Just Culture in the OR</h2>

    <table>
        <thead>
            <tr>
                <th>السلوك / Behavior</th>
                <th>الاستجابة / Response</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>الخطأ البشري (زلة/هفوة)</strong><br><span class="english-term">Human error (Slip/Lapse)</span></td>
                <td>دعم الموظف، إعادة تصميم النظام، تقليل المشتتات، تبسيط الخطوات.<br><span class="english-term">Support the staff member, redesign the system, reduce distractions, simplify steps.</span></td>
            </tr>
            <tr>
                <td><strong>السلوك المحفوف بالمخاطر (اختصار تحت الضغط)</strong><br><span class="english-term">At-risk behavior (Shortcut under pressure)</span></td>
                <td>التوجيه وإعادة تصميم النظام—إزالة الحوافز للاختصارات، وجعل الطريقة الآمنة هي الطريقة السهلة.<br><span class="english-term">Coaching and system redesign—remove incentives for shortcuts, make the safe way the easy way.</span></td>
            </tr>
            <tr>
                <td><strong>السلوك المتهور (تجاهل واعي)</strong><br><span class="english-term">Reckless behavior (Conscious disregard)</span></td>
                <td>المساءلة واتخاذ إجراء تأديبي.<br><span class="english-term">Accountability and disciplinary action.</span></td>
            </tr>
        </tbody>
    </table>

    <p>الثقافة العادلة تزيد من الإبلاغ والتعلم والوقاية—دون التسامح مع المخاطرة المتهورة.</p>
    <p><span class="english-term">A Just Culture increases reporting, learning, and prevention—without tolerating reckless risk.</span></p>

    <h2>1.6 المصادر الأكثر شيوعاً لفشل غرفة العمليات / The Most Common Sources of OR Failure</h2>

    <div class="concept-box">
        <ul>
            <li><strong>1.6.1 انهيار التواصل / Communication breakdown</strong><br>
            طلبات غير واضحة، افتراضات، غياب التأكيد المغلق الحلقة (Closed-loop confirmation)، الافتقار إلى نموذج عقلي مشترك.<br>
            <span class="english-term">Unclear requests, assumptions, missing closed-loop confirmation, lack of a shared mental model.</span></li>
            
            <hr>
            
            <li><strong>1.6.2 تدهور التسليم / Handoff decay</strong><br>
            عمليات النقل (الجناح ← ما قبل الجراحة ← غرفة العمليات ← الإفاقة ← الجناح) تؤدي إلى تدهور المعلومات، خاصة حول: العينات، الغرسات، المصارف (Drains)، فئة الجرح، القيود، وخطوات المتابعة.<br>
            <span class="english-term">Ward → pre-op → OR → PACU → ward transfers degrade information, especially around: specimens, implants, drains, wound class, restrictions, follow-up steps.</span></li>
            
            <hr>
            
            <li><strong>1.6.3 المقاطعات والمشتتات / Interruptions and distractions</strong><br>
            المكالمات الهاتفية، الفجوات في الإمدادات، مشاكل المعدات، دوران الموظفين، المهام المتوازية. المقاطعات ليست "مزعجة". إنها مخاطر سريرية.<br>
            <span class="english-term">Phone calls, supply gaps, equipment issues, staff turnover, parallel tasks. Interruptions are not “annoying.” They are clinical hazards.</span></li>
            
            <hr>
            
            <li><strong>1.6.4 التباين في التوثيق / Documentation mismatch</strong><br>
            المستندات المختلفة تتعارض (الحجز، ملاحظة العيادة، الموافقة، التصوير). الغموض هو مقدمة لأحداث الجراحة في الموقع/الإجراء الخاطئ.<br>
            <span class="english-term">Different documents disagree (booking, clinic note, consent, imaging). Ambiguity is a precursor to wrong-site/procedure events.</span></li>
            
            <hr>
            
            <li><strong>1.6.5 جاهزية المعدات والتباين / Equipment readiness and variation</strong><br>
            الكابلات المفقودة، الأجهزة غير المشحونة، الأطقم المعارة غير المكتملة تفرض الارتجال. يمكن للارتجال أن ينقذ الموقف ليوم—لكن النظام الذي يعتمد على الارتجال غير آمن.<br>
            <span class="english-term">Missing cables, uncharged devices, incomplete loaner sets force improvisation. Improvisation can save a day—but a system that relies on improvisation is unsafe.</span></li>
            
            <hr>
            
            <li><strong>1.6.6 الغموض في الأدوار / Role ambiguity</strong><br>
            إذا كان "الجميع" يمتلك عملية التحقق، فلا أحد يمتلكها حقاً. يجب أن تكون الملكية صريحة.<br>
            <span class="english-term">If “everyone” owns verification, no one truly does. Ownership must be explicit.</span></li>
        </ul>
    </div>

    <h2>1.7 السلامة بالتصميم مقابل السلامة بالبطولات / Safety-by-Design vs Safety-by-Heroics</h2>

    <table>
        <thead>
            <tr>
                <th>النهج / Approach</th>
                <th>الوصف / Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>السلامة بالبطولات (الإنقاذ غير الموثوق)</strong><br><span class="english-term">Safety-by-heroics (Unreliable rescue)</span></td>
                <td>ممرضة عظيمة تكتشف تبايناً في اللحظة الأخيرة. جراح يلاحظ تبايناً قبل الشق الجراحي مباشرة. عمليات الإنقاذ هذه قيّمة—لكن لا يمكن الاعتماد عليها.<br><span class="english-term">A great nurse catches a discrepancy at the last moment. A surgeon notices mismatch just before incision. These rescues are valuable—but not dependable.</span></td>
            </tr>
            <tr>
                <td><strong>السلامة بالتصميم (حواجز موثوقة)</strong><br><span class="english-term">Safety-by-design (Reliable barriers)</span></td>
                <td>الأنظمة الهادئة: العمل القياسي، التوقف الإلزامي (Hard stops)، خطوات تحقق مملوكة بوضوح، التحدث المحمي (Protected speaking-up)، التوثيق القابل للتدقيق، وحلقات التعلم.<br><span class="english-term">Quiet systems: standard work, hard stops, owned verification steps, protected speaking-up, auditable documentation, learning loops.</span></td>
            </tr>
        </tbody>
    </table>

    <div class="success-box">
        <p>غرفة العمليات الآمنة ليست تلك التي تمتلك أفضل الأبطال. بل هي تلك التي <strong>تحتاج إلى الأبطال بمعدل أقل</strong>.</p>
        <p><span class="english-term">A safe OR is not the one with the best heroes. It is the one that <strong>needs heroes less often</strong>.</span></p>
    </div>

    <h2>1.8 "إيقاف الخط" كمهارة سريرية / “Stop the Line” as a Clinical Skill</h2>

    <h3>1.8.1 المبدأ / The principle (Stop-the-Line)</h3>
    <p>إذا كان هناك عدم يقين، فإن التوقف ليس تأخيراً—إنه حماية للمريض.</p>
    <p><span class="english-term">If uncertainty exists, stopping is not delay—it is patient protection.</span></p>

    <h3>1.8.2 لغة "إيقاف الخط" القياسية / Standard “stop-the-line” language (Safe phrases)</h3>
    <div class="quote-box">
        <ul>
            <li>"توقف من فضلك—فحص سلامة."<br><span class="english-term">“Pause please—safety check.”</span></li>
            <li>"أنا لست مرتاحاً للمضي قدماً حتى نتحقق من ____."<br><span class="english-term">“I’m not comfortable proceeding until we verify ____.”</span></li>
            <li>"لدينا تباين بين ____ و ____."<br><span class="english-term">“We have a mismatch between ____ and ____.”</span></li>
            <li>"المهلة (Time-out) غير مكتملة."<br><span class="english-term">“Time-out is not complete.”</span></li>
            <li>"العد الجراحي لم يُحل—لا يمكننا الإغلاق."<br><span class="english-term">“Counts unresolved—we cannot close.”</span></li>
        </ul>
    </div>
    <p>يجب حماية التحدث بصوت عالٍ من خلال السياسة والقيادة.</p>
    <p><span class="english-term">Speaking up must be protected by policy and leadership.</span></p>

    <h2>1.9 أدوات عملية يمكنك استخدامها اليوم / Practical Tools You Can Use Today</h2>

    <h3>1.9.1 رسم خرائط المخاطر-الحواجز (أداة من صفحة واحدة) / Hazard–Barrier Mapping</h3>
    <p><span class="english-term">Hazard: ______ Triggers: ______ Primary barriers: ______ Secondary barriers: ______ Failure modes: ______ Fix: ______ How to measure reliability: ______</span></p>
    <ul>
        <li>الخطر: ______ </li>
        <li>المُحفزات: ______ </li>
        <li>الحواجز الأولية: ______ </li>
        <li>الحواجز الثانوية: ______ </li>
        <li>أنماط الفشل: ______ </li>
        <li>الإصلاح: ______ </li>
        <li>كيفية قياس الموثوقية: ______ </li>
    </ul>

    <h3>1.9.2 سلم الموثوقية / Reliability ladder</h3>
    <p>لماذا الامتثال لمربعات الاختيار ليس كافياً (Why checkbox compliance is not enough).</p>
    <ul>
        <li><strong>المستوى 1:</strong> التعليم <span class="english-term">(Level 1: Education)</span></li>
        <li><strong>المستوى 2:</strong> التقييس <span class="english-term">(Level 2: Standardization)</span></li>
        <li><strong>المستوى 3:</strong> التذكيرات/القوائم المرجعية <span class="english-term">(Level 3: Reminders/checklists)</span></li>
        <li><strong>المستوى 4:</strong> الحواجز القهرية/التوقف الإلزامي <span class="english-term">(Level 4: Forcing functions/hard stops)</span></li>
        <li><strong>المستوى 5:</strong> الثقافة + حلقات الملاحظات <span class="english-term">(Level 5: Culture + feedback loops)</span></li>
    </ul>
    <p>يجب أن تتحرك غرفة العمليات صعوداً—لأن الضغط سيظل موجوداً دائماً.</p>
    <p><span class="english-term">The OR should move upward—because pressure will always exist.</span></p>

    <h2>1.10 قياس سلامة غرفة العمليات / Measuring OR Safety</h2>
    
    <h3>1.10.1 المؤشرات المتأخرة مقابل الاستباقية / Lagging vs leading indicators</h3>
    <p><strong>المتأخرة (الضرر):</strong> معدل عدوى الموقع الجراحي (SSI)، العناصر المتروكة، أحداث الموقع الخاطئ (نادرة ولكنها شديدة).<br>
    <span class="english-term">Lagging: SSI rate, retained items, wrong-site events (rare but severe).</span></p>
    <p><strong>الاستباقية (قوة الحاجز):</strong> جودة المهلة (Time-out)، موثوقية العد، الحوادث الوشيكة للعينات، توثيق كسر الحقل المعقم، أحداث إيقاف الخط.<br>
    <span class="english-term">Leading: time-out quality, count reliability, specimen near-misses, sterile field break documentation, stop-the-line events.</span></p>

    <h3>1.10.2 مؤشرات بداية السلامة في غرفة العمليات (لوحة قيادة عملية) / Starter OR safety indicators</h3>
    <ul>
        <li>نقاط جودة المهلة الملحوظة (وليس الإبلاغ الذاتي). <span class="english-term">(Observed time-out quality score)</span></li>
        <li>موثوقية العد: الوقت المحمي + الالتزام بخوارزمية التباين. <span class="english-term">(Count reliability: protected time + discrepancy algorithm adherence)</span></li>
        <li>معدل الحوادث الوشيكة لتسمية العينات. <span class="english-term">(Specimen labeling near-miss rate)</span></li>
        <li>كسر الحقل المعقم الموثق والمدار وفقاً للسياسة. <span class="english-term">(Sterile field breaks documented and managed per policy)</span></li>
        <li>فتحات الأبواب لكل حالة (أخذ عينات مستهدفة). <span class="english-term">(Door openings per case)</span></li>
        <li>معدل الإبلاغ عن الحوادث الوشيكة (غالباً ما يزداد مبكراً في الأنظمة الصحية). <span class="english-term">(Near-miss reporting rate)</span></li>
        <li>أحداث إيقاف الخط: العدد، الأسباب، النتائج. <span class="english-term">(Stop-the-line events: number, reasons, outcomes)</span></li>
    </ul>

    <h2>1.11 خارطة طريق التنفيذ / Implementation Roadmap</h2>
    <ol>
        <li><strong>1.11.1 اختر مسار ضرر واحد عالي القيمة:</strong> الموقع الخاطئ، العناصر المتروكة، عدوى الموقع الجراحي (SSI)، العينات، حريق غرفة العمليات، حروق أجهزة الطاقة.<br>
        <span class="english-term"><strong>Choose one high-value harm pathway:</strong> Wrong site, retained items, SSI, specimens, OR fire, energy device burns.</span></li>
        
        <li><strong>1.11.2 ارسم خريطة السلسلة وأعد تصميم الحواجز:</strong> اجعل الإجراء الآمن هو الإجراء الأسهل.<br>
        <span class="english-term"><strong>Map the chain and redesign barriers:</strong> Make the safe action the easiest action.</span></li>
        
        <li><strong>1.11.3 التدريب والتمرين:</strong> تدريبات مصغرة (10 دقائق) + محاكاة دورية للأحداث الكارثية النادرة.<br>
        <span class="english-term"><strong>Train and rehearse:</strong> Micro-drills (10 minutes) + periodic simulations for rare catastrophic events.</span></li>
        
        <li><strong>1.11.4 التدقيق، التغذية الراجعة، وإغلاق الحلقة:</strong> يجب أن ينتج عن التعلم تغييرات في النظام ضمن جداول زمنية محددة.<br>
        <span class="english-term"><strong>Audit, feedback, and close the loop:</strong> Learning must produce system changes within defined timelines.</span></li>
    </ol>

    <h2>1.12 الخرافات الشائعة التي تضعف سلامة غرفة العمليات / Common Myths That Weaken OR Safety</h2>
    
    <div class="alert-box">
        <ul>
            <li><strong>1.12.1 "الفرق الخبيرة لا تحتاج إلى قوائم تحقق."</strong><br>
            الخبرة تقلل من بعض المخاطر ولكنها تزيد من مخاطر أخرى (اختصارات الثقة المفرطة).<br>
            <span class="english-term">“Experienced teams don’t need checklists.” Experience reduces some risks but increases others (confidence shortcuts).</span></li>
            
            <li><strong>1.12.2 "ليس لدينا وقت للمهلة (Time-out)."</strong><br>
            إذا لم يكن لديك وقت للتحقق، فليس لديك وقت للضرر.<br>
            <span class="english-term">“We don’t have time for time-out.” If you don’t have time for verification, you don’t have time for harm.</span></li>
            
            <li><strong>1.12.3 "السياسة تساوي السلامة."</strong><br>
            السياسة بدون تصميم الموثوقية هي سلامة ورقية.<br>
            <span class="english-term">“Policy equals safety.” Policy without reliability design is paper safety.</span></li>
        </ul>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>غرفة العمليات هي نظام عالي المخاطر: تعقيد + ترابط وثيق.<br>
            <span class="english-term">The OR is a high-risk system: complexity + tight coupling.</span></li>
            <li>الضرر هو عادة <strong>سلسلة</strong> من نقاط الضعف المُتغاضى عنها.<br>
            <span class="english-term">Harm is usually a <strong>chain</strong> of tolerated weaknesses.</span></li>
            <li>الظروف الكامنة تتنبأ بالضرر أكثر من أخطاء الخطوط الأمامية المرئية.<br>
            <span class="english-term">Latent conditions predict harm more than visible frontline errors.</span></li>
            <li>يجب تصميم السلامة كحواجز تصمد تحت الضغط.<br>
            <span class="english-term">Safety must be designed as barriers that hold under pressure.</span></li>
            <li>السلامة بالتصميم تتفوق على السلامة بالبطولات.<br>
            <span class="english-term">Safety-by-design beats safety-by-heroics.</span></li>
            <li>التحدث بصوت عالٍ (Speaking up) هو واجب سريري—يجب توحيده وحمايته.<br>
            <span class="english-term">Speaking up is a clinical duty—standardize and protect it.</span></li>
            <li>قم بقياس قوة الحاجز وحلقات التعلم، وليس فقط مربعات الاختيار.<br>
            <span class="english-term">Measure barrier strength and learning loops, not just checkboxes.</span></li>
        </ul>
    </div>

    <h2>مُلحقات عملية لنهاية الفصل / Chapter-End Practical Inserts</h2>
    <div class="concept-box">
        <p><span class="english-term">(Ready for Your Book Template)</span></p>
        
        <p><strong>المُلحق 1 — بطاقة حائط "إيقاف الخط" / Insert 1 — “Stop-the-Line” Wall Card</strong><br>
        (استخدم العبارات الموحدة المدرجة في 1.8.2) / <span class="english-term">(Use the standardized phrases listed in 1.8.2)</span></p>
        
        <p><strong>المُلحق 2 — نموذج رسم خرائط المخاطر-الحواجز / Insert 2 — Hazard–Barrier Mapping Template</strong><br>
        (استخدم النموذج في 1.9.1) / <span class="english-term">(Use the form in 1.9.1)</span></p>
        
        <p><strong>المُلحق 3 — الفحص الذاتي لنضج سلامة غرفة العمليات (5 أسئلة) / Insert 3 — OR Safety Maturity Self-Check (5 questions)</strong></p>
        <ol>
            <li>هل لدينا توقف إلزامي (Hard stops) عند وجود التباينات؟<br>
            <span class="english-term">Do we have hard stops for mismatches?</span></li>
            <li>هل خطوات التحقق مملوكة بوضوح ويتم نطقها بصوت عالٍ؟<br>
            <span class="english-term">Are verification steps owned and spoken aloud?</span></li>
            <li>هل العد/العينات محمية من المقاطعات؟<br>
            <span class="english-term">Are counts/specimens protected from interruptions?</span></li>
            <li>هل يشعر الموظفون بالأمان للتحدث (مقاساً بشكل سري)؟<br>
            <span class="english-term">Do staff feel safe to speak up (measured anonymously)?</span></li>
            <li>هل تؤدي الحوادث الوشيكة (Near-misses) إلى تغيير في النظام خلال 30-60 يوماً؟<br>
            <span class="english-term">Do near-misses lead to system change within 30–60 days?</span></li>
        </ol>
    </div>

    <!-- Download Script -->`,
  9: `<!-- Download Button -->
    

    <div class="part-title">PART II — Preoperative Readiness and “Start-Right” Controls</div>
    <div class="part-title">الجزء الثاني — الجاهزية ما قبل العملية وضوابط "البداية الصحيحة"</div>
    
    <h1>CHAPTER 9 — VTE, Pressure Injury, and Hypothermia: OR-Driven Prevention Bundle</h1>
    <div class="subtitle">الفصل التاسع — الوقاية من الجلطات الوريدية (VTE)، إصابات الضغط، وانخفاض الحرارة: حزمة الوقاية بقيادة غرفة العمليات<br>
    <span style="font-size: 18px;">(Three “Silent Harms” • OR Responsibilities • Bundled Reliability • Handoff Continuity • Audit-Ready Documentation)<br>
    (ثلاثة "أضرار صامتة" • مسؤوليات غرفة العمليات • الموثوقية المجمعة • استمرارية التسليم • التوثيق الجاهز للتدقيق)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد <strong>الجلطات الوريدية (VTE)، وإصابات الضغط، وانخفاض الحرارة المحيط بالجراحة</strong> "أضراراً صامتة" تظهر غالباً بعد العملية—ولكن تتشكل بقوة من خلال قرارات وانضباط غرفة العمليات. (NICE; NPIAP/EPUAP; ASA)<br>
            <span class="english-term">Explain why <strong>VTE, pressure injury, and perioperative hypothermia</strong> are “silent harms” that often appear after the case—yet are strongly shaped by OR decisions and discipline. (NICE; NPIAP/EPUAP; ASA)</span></li>
            
            <li>بناء <strong>حزمة وقاية (Prevention bundle)</strong> بقيادة غرفة العمليات بملكية واضحة، وتوقيت، ومحفزات توقف إلزامي (Hard-stop triggers) عند غياب الضوابط الرئيسية. (IHI; AHRQ)<br>
            <span class="english-term">Build an OR-driven <strong>prevention bundle</strong> with clear ownership, timing, and hard-stop triggers when key controls are missing. (IHI; AHRQ)</span></li>
            
            <li>تنفيذ سير عمل عملي في غرفة العمليات لـ: جاهزية الوقاية الميكانيكية من VTE، وضعية الأمان/حماية الضغط، والتدفئة من مرحلة ما قبل العملية وحتى النقل. (NICE; NPIAP/EPUAP; AORN)<br>
            <span class="english-term">Implement practical OR workflows for: mechanical VTE prophylaxis readiness, safe positioning/pressure protection, and warming from pre-op through transfer. (NICE; NPIAP/EPUAP; AORN)</span></li>
            
            <li>التعرف على أنماط الفشل الواقعية: الجوارب/أجهزة (SCDs) المفقودة، الوضعية السيئة "المؤقتة" التي تصبح دائمة، خطر إصابات الضغط في الحالات الطويلة، انحراف برودة الغرفة، والفقدان أثناء التسليم (Handoff losses). (AHRQ; IHI)<br>
            <span class="english-term">Recognize real-life failure modes: missing stockings/SCDs, “temporary” poor positioning that becomes permanent, long-case pressure injury risk, cold OR drift, and handoff losses. (AHRQ; IHI)</span></li>
            
            <li>قياس الموثوقية باستخدام المؤشرات الاستباقية (اكتمال الحزمة، توثيق الحرارة، فحوصات الوضعية، توفر الأجهزة) وإغلاق حلقة التعلم. (IHI)<br>
            <span class="english-term">Measure reliability using leading indicators (bundle completion, temperature documentation, positioning checks, device availability) and close the learning loop. (IHI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "المضاعفة التي لم يرها أحد في غرفة العمليات"</strong><br>
        <span class="english-term">A true-to-life case: “The complication nobody saw in the OR” (Real Scientific Story)</span>
    </div>

    <p>بعض الأضرار في الجراحة تعلن عن نفسها بصوت عالٍ—النزيف، تشنج الحنجرة، انخفاض ضغط الدم. لكن بعضها الآخر هادئ. إنها لا تصرخ في المسرح الجراحي. بل تهمس لاحقاً.</p>
    <p><span class="english-term">Some harms in surgery announce themselves loudly—bleeding, laryngospasm, hypotension. Others are quiet. They don’t scream in the theatre. They whisper later.</span></p>

    <p>خضع مريض لإجراء طويل. بدا كل شيء في الغرفة "على ما يرام". شُفي الشق الجراحي. كان الجراح راضياً. وشعرت العائلة بالارتياح.</p>
    <p><span class="english-term">A patient underwent a long procedure. Everything in the room looked “fine.” The incision healed. The surgeon was satisfied. The family was relieved.</span></p>

    <p>بعد ثلاثة أيام، أُصيب المريض بألم في ربلة الساق (Calf pain) وضيق في التنفس. تم تشخيص انسداد رئوي (Pulmonary embolism - PE).</p>
    <p><span class="english-term">Three days later, the patient developed calf pain and shortness of breath. A pulmonary embolism was diagnosed.</span></p>

    <div class="alert-box">
        <p>السؤال الفوري الذي يظهر دائماً—يُقال أحياناً، ويُشعر به أحياناً أخرى—هو: <strong>"كيف حدث هذا رغم أن العملية سارت على ما يرام؟"</strong></p>
        <p><span class="english-term">The immediate question that always appears—sometimes spoken, sometimes only felt—is: <strong>“How did this happen when the operation went well?”</strong></span></p>
        
        <p>عندما تتبعنا الرحلة، وجدنا نمطاً مألوفاً:</p>
        <ul>
            <li>كان تقييم خطر VTE موجوداً على الورق، لكن جهاز الوقاية الميكانيكية لم يُطبّق مبكراً لأن الجناح كان مزدحماً وافترضت غرفة العمليات أنه سيتم لاحقاً. (NICE)</li>
            <li>في الغرفة، كانت الجوارب متاحة، لكن الجهاز الهوائي كان "مؤقتاً" غير متصل أثناء ضبط الوضعية—ثم نُسي. (IHI)</li>
            <li>لم يؤكد التسليم (Handoff) صراحةً ما إذا كانت الوقاية الميكانيكية نشطة، لذلك انقطعت الاستمرارية. (AHRQ)</li>
        </ul>
    </div>

    <p>لم يقصد أحد إحداث ضرر. لقد سمح النظام ببساطة لخطر صامت بالمرور عبر عدة بوابات دون مالك.</p>
    <p><span class="english-term">Nobody intended harm. The system simply allowed a silent risk to pass through multiple gates without ownership.</span></p>

    <div class="success-box">
        <p>علّمتني تلك الحالة مبدأً أقوم بتدريسه الآن بشكل متكرر: <strong>إذا كان الضرر صامتاً، يجب على النظام أن يتحدث نيابة عنه.</strong> يتطلب خطر VTE، وإصابة الضغط، وانخفاض الحرارة صوتاً للنظام—نقاط تحقق، نصوص، وملكية—لأن المريض لا يمكنه الشكوى حتى يفوت الأوان. (AHRQ; IHI)</p>
        <p><span class="english-term">That case taught me a principle I now teach repeatedly: <strong>If the harm is silent, the system must speak for it.</strong> VTE, pressure injury, and hypothermia require a system voice—checkpoints, scripts, and ownership—because the patient cannot complain until it is too late. (AHRQ; IHI)</span></p>
    </div>

    <h2>9.1 لماذا تنتمي هذه الأضرار الثلاثة معاً (عقلية الحزمة)</h2>
    <h3>9.1 Why These Three Harms Belong Together (A Bundle Mindset)</h3>

    <h3>9.1.1 إنها أضرار مختلفة بنفس النمط / Different harms with the same pattern</h3>
    <p>لا تتطابق الجلطات الوريدية (VTE)، وإصابات الضغط، وانخفاض الحرارة سريرياً، لكنها تشترك في نمط سلامة:</p>
    <p><span class="english-term">VTE, pressure injury, and hypothermia are not identical clinically, but they share a safety pattern:</span></p>
    <ul>
        <li>الخطر يتراكم بمرور الوقت،</li>
        <li>غرفة العمليات تضع العديد من الظروف،</li>
        <li>الضرر يظهر غالباً بعد مغادرة المريض للغرفة،</li>
        <li>والوقاية تتطلب <strong>الموثوقية (Reliability)</strong> أكثر من البطولات. (IHI)</li>
    </ul>

    <h3>9.1.2 إنها "غير مرئية" ما لم تصمم رؤيتها / “Invisible” unless you design visibility</h3>
    <p>تبدأ إصابة الضغط كنقص تروية (Ischemia) تحت الجلد. يبدأ انخفاض الحرارة كانحراف. وتبدأ VTE كجلطة تتشكل بهدوء.</p>
    <p>إذا انتظرت حتى "تلاحظ"، فستلاحظ متأخراً. ولهذا السبب تؤكد الإرشادات على <strong>حزم الوقاية الاستباقية</strong>. (NPIAP/EPUAP; NICE)</p>
    <p><span class="english-term">Pressure injury begins as ischemia under skin. Hypothermia begins as a drift. VTE begins as a clot forming quietly. If you wait to “notice,” you will notice late. That’s why guidance emphasizes proactive prevention bundles. (NPIAP/EPUAP; NICE)</span></p>

    <h3>9.1.3 الحزم تمنع التجزئة / Bundles prevent fragmentation</h3>
    <p>إذا عولجت كل مشكلة على حدة، تصبح الملكية مُخففة (Diluted). نهج الحزمة يخلق طقساً واحداً بقيادة غرفة العمليات: الجاهزية ← التنفيذ ← استمرارية التسليم. (IHI)</p>
    <p><span class="english-term">If each issue is treated separately, ownership becomes diluted. A bundle approach creates one OR-driven ritual: readiness → execution → handoff continuity. (IHI)</span></p>

    <h2>9.2 مسؤولية غرفة العمليات: ما يسيطر عليه المسرح (حتى عندما يوثق الآخرون)</h2>
    <h3>9.2 OR Responsibility: What the Theatre Controls (Even When Others Document)</h3>

    <h3>9.2.1 الوقاية من VTE: الغرفة تتحكم في التفعيل المبكر والاستمرارية</h3>
    <p>حتى لو وصف الفريق الطبي الوقاية (Prophylaxis)، فإن المسرح يتحكم فيما إذا كانت:</p>
    <ul>
        <li>الوقاية الميكانيكية مطبقة ونشطة،</li>
        <li>تبقى نشطة أثناء الإجراءات الطويلة،</li>
        <li>ويتم تسليمها بوضوح. (NICE; AHRQ)</li>
    </ul>
    <p><span class="english-term"><strong>9.2.1 VTE: the OR controls early activation and continuity</strong><br>Even if medical teams prescribe prophylaxis, the theatre controls whether: mechanical prophylaxis is applied and active, it stays active during long procedures, it is clearly handed off. (NICE; AHRQ)</span></p>

    <h3>9.2.2 إصابة الضغط: غرفة العمليات تتحكم في واقع الوضعية</h3>
    <p>ضبط الوضعية (Positioning) في المسرح ليس "تجهيزاً". إنه عمل سريري له عواقب طويلة. تؤكد إرشادات الوقاية على إعادة توزيع الضغط، حماية البروزات العظمية، وإعادة التقييم أثناء الإجراءات الطويلة. (NPIAP/EPUAP; AORN)</p>
    <p><span class="english-term"><strong>9.2.2 Pressure injury: the OR controls positioning reality</strong><br>Theatre positioning is not “setup.” It is a clinical act with long consequences. Prevention guidance emphasizes pressure redistribution, protection of bony prominences, and reassessment during long procedures. (NPIAP/EPUAP; AORN)</span></p>

    <h3>9.2.3 انخفاض الحرارة: الغرفة تتحكم في البيئة الحرارية وسير العمل</h3>
    <p>تعتمد الوقاية من انخفاض الحرارة المحيط بالجراحة على ممارسات التدفئة، تقليل التعرض، تدفئة السوائل عند الاقتضاء، ومراقبة الحرارة—خاصة في الحالات الطويلة أو عالية الخطورة. (NICE; ASA concepts)</p>

    <h2>9.3 حزمة الوقاية بقيادة غرفة العمليات (بوابة "الأضرار الصامتة الثلاثة")</h2>
    <h3>9.3 The OR-Driven Prevention Bundle (The “Three Silent Harms Gate”)</h3>

    <h3>9.3.1 لماذا تهم البوابة / Why a gate matters</h3>
    <p>في الحياة الواقعية، يفترض الناس:</p>
    <ul>
        <li>"الجناح سيقوم بوضع الجوارب،"</li>
        <li>"الإفاقة (PACU) ستقوم بتدفئة المريض،"</li>
        <li>"سنعيد ضبط الوضعية لاحقاً."</li>
    </ul>
    <p><strong>الافتراض هو عدو الموثوقية.</strong> تحول البوابة الافتراضات إلى تأكيدات. (IHI)</p>
    <p><span class="english-term">In real life, people assume: “Ward will do stockings,” “PACU will warm the patient,” “We’ll reposition later.” Assumption is the enemy of reliability. A gate turns assumptions into confirmations. (IHI)</span></p>

    <h3>9.3.2 بوابة الحزمة: الحد الأدنى للبيانات قبل الشق الجراحي / Minimum dataset</h3>
    <p>قبل الشق الجراحي (أو كامتداد للـ Time-out)، قم بتأكيد:</p>
    <div class="concept-box">
        <ul>
            <li><strong>9.3.2.1 جاهزية الوقاية الميكانيكية من VTE (عند الاستطباب):</strong>
                <ul>
                    <li>الجوارب/SCD متوفرة ومطبقة،</li>
                    <li>الجهاز متصل ويعمل كما هو مخطط،</li>
                    <li>أي موانع (Contraindication) موثقة. (NICE)</li>
                </ul>
            </li>
            <li><strong>9.3.2.2 جاهزية حماية الضغط:</strong>
                <ul>
                    <li>الوضعية المخطط لها مؤكدة،</li>
                    <li>نقاط الضغط محمية (الكعبان، العجز، المرفقان، الوجه/العينان في وضعية الانبطاح Prone)،</li>
                    <li>الدعامات الخاصة جاهزة (وسادات الجل، ألواح الذراع)،</li>
                    <li>تم الإعلان عن خطة إعادة الفحص في الحالات الطويلة. (NPIAP/EPUAP; AORN)</li>
                </ul>
            </li>
            <li><strong>9.3.2.3 الجاهزية الحرارية:</strong>
                <ul>
                    <li>تم تأكيد خطة التدفئة (الهواء القسري، بطانيات دافئة، تدفئة السوائل عند الحاجة)،</li>
                    <li>تم توثيق درجة الحرارة الأساسية (Baseline) حيثما أمكن،</li>
                    <li>تم الإعلان عن خطة مراقبة الحرارة في الحالات الطويلة. (NICE; ASA concepts)</li>
                </ul>
            </li>
        </ul>
        <p>هذا ليس "عملاً إضافياً". <strong>إنه احترافية غرفة العمليات جُعلت مرئية.</strong> (IHI)</p>
        <p><span class="english-term">This is not “extra work.” It is OR professionalism made visible. (IHI)</span></p>
    </div>

    <h2>9.4 الوقاية من VTE: نموذج الموثوقية لجانب غرفة العمليات</h2>
    <h3>9.4 VTE Prevention: The OR-Side Reliability Model</h3>

    <h3>9.4.1 الخطر شائع، والوقاية بسيطة غالباً—لكن يسهل تفويتها</h3>
    <p>تؤكد إرشادات الوقاية من VTE على تقييم المخاطر واستراتيجيات الوقاية (الميكانيكية والدوائية). من جانب غرفة العمليات، الوقاية الميكانيكية هي الضابط الأكثر وضوحاً. (NICE)</p>
    <p><span class="english-term"><strong>9.4.1 VTE risk is common, prevention is often simple—but easy to miss</strong><br>VTE prevention guidance emphasizes risk assessment and prophylaxis strategies (mechanical and pharmacologic). From the OR side, mechanical prophylaxis is the most visible control. (NICE)</span></p>

    <h3>9.4.2 أنماط فشل غرفة العمليات الشائعة (ما رأيته مراراً وتكراراً)</h3>
    <ul>
        <li>الجهاز غير متوفر في الغرفة، لذا "لاحقاً"،</li>
        <li>الجوارب مطبقة لكن جهاز SCD غير متصل،</li>
        <li>الجهاز فُصل لضبط الوضعية ولم يتم إعادة تشغيله أبداً،</li>
        <li>المريض مُغطى بالفرش وأصوات إنذار الجهاز يتم تجاهلها،</li>
        <li>التسليم (Handoff) يفشل في تأكيد حالة الوقاية. (AHRQ; IHI)</li>
    </ul>

    <div class="concept-box">
        <h3>9.4.3 2: "جهاز SCD الذي كان 'مُشغّلاً' في أذهان الجميع"</h3>
        <p>حالة طويلة. تم وضع المريض بعناية. الجوارب كانت عليه. وُضعت أكمام SCD (الضغط الهوائي). <strong>افترض الجميع أنه يعمل.</strong></p>
        <p>بعد ساعتين، لاحظت ممرضة دوارة أن الجهاز موصول بالكهرباء ولكنه غير مُشغل. كانت الأكمام صامتة. كانت الغرفة مشغولة ولم يقصد أحد نسيان ذلك.</p>
        <p>لم تقم تلك الممرضة بتشغيله بهدوء والمضي قدماً. لقد قالت بصوت عالٍ:<br>
        <strong>"جهاز VTE كان مطفأً. يتم تشغيله الآن. يرجى تدوين ذلك في السجل وفي التسليم (Handoff)."</strong></p>
        <p>كانت تلك الجملة الواحدة مهمة. لقد خلقت الوعي وصححت النظام في اللحظة—ودربت ذاكرة الفريق للحالة القادمة. (IHI)</p>
        <p><span class="english-term">Two hours later, a circulating nurse noticed the machine was plugged in but not switched on... She said out loud: “VTE device was off. Turning on now. Please note in record and handoff.” That one sentence mattered. It created awareness and corrected the system in the moment—and it trained the team’s memory for the next case. (IHI)</span></p>
    </div>

    <h3>9.4.4 ضوابط غرفة العمليات العملية للوقاية الميكانيكية من VTE</h3>
    <ul>
        <li>تأكيد توفر الجهاز عند بوابة الجاهزية، (IHI)</li>
        <li>التأكيد اللفظي للتشغيل أثناء بوابة الـ Time-out/الحزمة، (IHI)</li>
        <li>امتلاك صريح للفصل/إعادة الاتصال أثناء تغيير الوضعيات، (AORN)</li>
        <li>يشمل التسليم "الوقاية من VTE نشطة/غير نشطة والسبب." (AHRQ)</li>
    </ul>

    <h2>9.5 الوقاية من إصابات الضغط: الوضعية كإجراء سريري</h2>
    <h3>9.5 Pressure Injury Prevention: Positioning as a Clinical Procedure</h3>

    <h3>9.5.1 إصابات الضغط ليست مشاكل تمريضية؛ إنها ضرر محيط بالجراحة</h3>
    <p>تؤطر الإرشادات الحديثة إصابة الضغط كضرر يمكن الوقاية منه مع مسؤولية متعددة التخصصات. (NPIAP/EPUAP)</p>

    <h3>9.5.2 عوامل الخطر في غرفة العمليات يمكن التنبؤ بها / Predictable OR risk factors</h3>
    <ul>
        <li>مدة طويلة،</li>
        <li>انعدام الحركة تحت التخدير،</li>
        <li>وضعية الانبطاح (Prone) أو بضع الحصاة (Lithotomy)،</li>
        <li>انخفاض ضغط الدم (متعدد العوامل)،</li>
        <li>الهشاشة وضعف تحمل الأنسجة،</li>
        <li>ضغط الأجهزة (الأنابيب، الخطوط، الأقنعة). (NPIAP/EPUAP; AORN)</li>
    </ul>

    <div class="alert-box">
        <h3>9.5.3 3: "الكعب الذي لم يره أحد"</h3>
        <p>مريض مسن هش خضع لإجراء طويل. بدت الوضعية كافية. اُستخدم التوسيد (Padding)—على الأقل، هذا ما اعتقده الجميع.</p>
        <p>بعد يومين، ظهرت قرحة في الكعب. سألت عائلة المريض: <strong>"لماذا حدث هذا في المستشفى؟"</strong></p>
        <p>في المراجعة، اكتشفنا شيئاً بسيطاً ومؤلماً: كان الكعب يرتكز على حافة صلبة <strong>بعد تعديل الوضعية في منتصف الحالة</strong>، ولم يقم أحد بإعادة فحص موثقة لنقاط الضغط بعد ذلك.</p>
        <p>هذا ما أعنيه بالضرر الصامت: إنه يبدأ بهدوء في الدقيقة 40 ويصبح مرئياً في اليوم الثاني.</p>
        <p>بعد ذلك، طبقنا قاعدة: للحالات التي تتجاوز مدة معينة (Threshold)، تنادي الممرضة الدوارة بـ <strong>"فحص الوضعية" (Position check)</strong> على فترات محددة—الكعبان، العجز، الذراعان، الوجه/العينان—دون انتظار حدوث مشكلة. (NPIAP/EPUAP; AORN)</p>
        <p><span class="english-term">In the review, we discovered something painfully simple: the heel was resting against a hard edge after repositioning mid-case, and no one did a documented pressure-point recheck afterward. This is what I mean by silent harm: it begins quietly at minute 40 and becomes visible at day 2. (NPIAP/EPUAP; AORN)</span></p>
    </div>

    <h3>9.5.4 عناصر حزمة إصابة الضغط لغرفة العمليات / OR-side bundle elements</h3>
    <ul>
        <li>توثيق الوضعية المخطط لها والأجهزة الوقائية، (AORN)</li>
        <li>حماية نقاط الضغط الرئيسية عن قصد (يجب أن يكون الكعبان "عائمين/Floating" حيثما كان ذلك مناسباً)، (NPIAP/EPUAP)</li>
        <li>تجنب ضغط الأجهزة (أنابيب تحت الطرف، أربطة مشدودة)، (AORN)</li>
        <li>إعادة التقييم أثناء الحالات الطويلة وبعد إعادة التموضع الكبيرة. (NPIAP/EPUAP)</li>
    </ul>

    <h2>9.6 الوقاية من انخفاض الحرارة: انحراف الحرارة الذي يسرق التعافي</h2>
    <h3>9.6 Hypothermia Prevention: The Temperature Drift That Steals Recovery</h3>

    <h3>9.6.1 انخفاض الحرارة هو أكثر من "الشعور بالبرد"</h3>
    <p>يرتبط انخفاض الحرارة المحيط بالجراحة (Perioperative hypothermia) بزيادة المضاعفات مثل الارتعاش، وعدم الراحة، وقد يساهم في نتائج سلبية—ومن هنا يأتي تأكيد الإرشادات على التدفئة النشطة والمراقبة. (NICE; ASA concepts)</p>
    <p><span class="english-term"><strong>9.6.1 Hypothermia is more than “feeling cold”</strong><br>Perioperative hypothermia is associated with increased complications such as shivering, discomfort, and may contribute to adverse outcomes—hence guideline emphasis on active warming and monitoring. (NICE; ASA concepts)</span></p>

    <h3>9.6.2 لماذا يحدث انخفاض الحرارة حتى في "الغرف الجيدة"</h3>
    <ul>
        <li>بيئة محيطة باردة،</li>
        <li>التعرض أثناء التحضير/الفرش (Prep/drape)،</li>
        <li>سوائل وريدية غير مدفأة،</li>
        <li>مدة طويلة مع فقدان الحرارة،</li>
        <li><strong>تأخير بدء التدفئة بحجة "سنبدأ لاحقاً".</strong> (NICE)</li>
    </ul>

    <div class="concept-box">
        <h3>9.6.3 4: "المريض المرتعش الذي علمنا التوقيت"</h3>
        <p>وصل مريض إلى وحدة الإفاقة (PACU) يرتعش بعنف، في حالة ضيق، وغير قادر على الراحة. كانت الجراحة "ناجحة"، لكن تجربة المريض كانت بائسة.</p>
        <p>عندما نظرنا للوراء: بدأت التدفئة متأخراً. كانت بطانية الهواء القسري متوفرة لكن <strong>لم يتم توصيلها مبكراً</strong> لأن الفريق كان مشغولاً.</p>
        <p>بعد ذلك، غيرنا عادة واحدة: يتم تحضير التدفئة بالهواء القسري (Forced-air warming) <strong>وتفعيلها مبكراً</strong> (حسب الاقتضاء) بدلاً من الانتظار حتى يبرد المريض بالفعل. <strong>الوقاية تتفوق على الإنقاذ.</strong> (NICE)</p>
        <p><span class="english-term">After that, we changed one habit: Forced-air warming is prepared and activated early (as appropriate) rather than waiting until the patient is already cold. Prevention beats rescue. (NICE)</span></p>
    </div>

    <h3>9.6.4 عناصر الحزمة الحرارية لغرفة العمليات / OR-side thermal bundle</h3>
    <ul>
        <li>التدفئة المسبقة (Pre-warming) أو البطانيات الدافئة عند الاقتضاء، (NICE)</li>
        <li>بدء التدفئة بالهواء القسري مبكراً للحالات الطويلة أو المرضى المعرضين للخطر، (NICE)</li>
        <li>تدفئة السوائل عند توقع كميات كبيرة، (NICE)</li>
        <li>مراقبة الحرارة وتوثيقها على فترات محددة للحالات الطويلة. (ASA concepts; NICE)</li>
    </ul>

    <h2>9.7 حلقة التواصل: جعل الحزمة تنجو من عمليات التسليم (Handoffs)</h2>
    <h3>9.7 The Communication Loop: Making the Bundle Survive Handoffs</h3>

    <h3>9.7.1 تسليم غرفة العمليات-للإفاقة يجب أن يحمل حالة الحزمة</h3>
    <p>إذا كان التسليم يقول "حالة مستقرة وروتينية"، لكنه يفشل في ذكر:</p>
    <ul>
        <li>حالة جهاز VTE،</li>
        <li>خطر إصابة الضغط والوضعية المستخدمة،</li>
        <li>اتجاه الحرارة وخطة التدفئة،</li>
    </ul>
    <p>فإن الفريق التالي لا يمكنه متابعة الوقاية بشكل موثوق. (AHRQ)</p>
    <p><span class="english-term"><strong>9.7.1 The OR-to-PACU handoff must carry the bundle status</strong><br>If the handoff says “stable, routine,” but fails to mention: VTE device status, pressure injury risk and position used, temperature trend and warming plan, then the next team cannot continue prevention reliably. (AHRQ)</span></p>

    <h3>9.7.2 هيكل تسليم بسيط وموجّه للمستقبل / Simple forward-looking handoff</h3>
    <p>أضف ثلاث جمل لتسليم غرفة العمليات:</p>
    <ul>
        <li><strong>"الوقاية من VTE: ____ نشطة / غير نشطة؛ السبب ____."</strong> (NICE; AHRQ)</li>
        <li><strong>"الوضعية: ____؛ نقاط الضغط محمية؛ أي مخاوف: ____."</strong> (NPIAP/EPUAP; AHRQ)</li>
        <li><strong>"الحرارة: آخر قراءة ____؛ التدفئة مستمرة / الخطة ____."</strong> (NICE; AHRQ)</li>
    </ul>
    <p>الكلمات الصغيرة تمنع المضاعفات الكبيرة. (AHRQ; IHI)</p>

    <h2>9.8 معايير التوقف والتصعيد للحزمة (متى تتوقف)</h2>
    <h3>9.8 Stop Criteria and Escalation for the Bundle (When to Pause)</h3>

    <h3>9.8.1 عندما لا يمكن تنفيذ الحزمة، يجب على الغرفة أن تقرر بوعي</h3>
    <p>أمثلة يكون فيها التوقف منطقياً:</p>
    <ul>
        <li>الوقاية الميكانيكية مستطبة (Indicated) لكن غير متوفرة ولا توجد خطة بديلة موثقة، (NICE)</li>
        <li>وضعية عالية الخطورة مُخطط لها لكن الدعامات المطلوبة غير متوفرة، (AORN)</li>
        <li>عطل في معدات التدفئة في حالة طويلة عالية الخطورة بدون خطة تخفيف. (NICE)</li>
    </ul>
    <p>هذا ليس تشدداً (Rigidity)—إنه الصدق. يجب على غرفة العمليات أن تختار: أصلح الآن أو اقبل المخاطرة بوعي مع التصعيد والتوثيق. (IHI)</p>
    <p><span class="english-term">This is not rigidity—it is honesty. The OR must choose: fix now or accept risk consciously with escalation and documentation. (IHI)</span></p>

    <h3>9.8.2 الاستثناءات يجب أن تُحكم / Exceptions must be governed</h3>
    <p>قد تتطلب الطوارئ المضي قدماً بينما يتم ترتيب التخفيف (Mitigation). لكن الاستثناءات يجب أن توثق وتُراجع. (IHI)</p>

    <h2>9.9 أدوات عملية (جاهزة للاستخدام) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>9.9.1 الأداة 1 — بوابة "الأضرار الصامتة الثلاثة" (60-90 ثانية):</strong><br>
            قبل الشق الجراحي تأكد:
                <ul>
                    <li><strong>VTE:</strong> الجهاز مُطبق + نشط (أو مانع الاستعمال موثق). (NICE)</li>
                    <li><strong>الضغط:</strong> الوضعية مؤكدة + النقاط الرئيسية محمية + خطة إعادة فحص للحالة الطويلة. (NPIAP/EPUAP; AORN)</li>
                    <li><strong>الحرارة:</strong> طريقة التدفئة بدأت/مخططة + خطة المراقبة. (NICE)</li>
                </ul>
            </li>
            <br>
            <li><strong>9.9.2 الأداة 2 — نص موقت إعادة الفحص للحالات الطويلة (Long-Case Recheck):</strong><br>
            على فترات محددة مسبقاً (مثلاً: كل ساعتين أو بعد تعديل الوضعية):
                <ul>
                    <li>"فحص الوضعية: الكعبان/العجز/الذراعان/الوجه/العينان." (NPIAP/EPUAP; AORN)</li>
                    <li>"جهاز VTE لا يزال نشطاً؟" (NICE)</li>
                    <li>"اتجاه الحرارة؟" (NICE)</li>
                </ul>
            </li>
            <br>
            <li><strong>9.9.3 الأداة 3 — إضافة حزمة التسليم (OR→PACU):</strong><br>
            الإضافة ذات الثلاثة أسطر كما في 9.7.2. (AHRQ)</li>
            <br>
            <li><strong>9.9.4 الأداة 4 — قائمة مصغرة لجاهزية المعدات:</strong><br>
            جهاز SCD موجود ويعمل، وسادات تخفيف الضغط متوفرة للوضعيات عالية الخطورة، جهاز التدفئة جاهز + البطانية متوفرة. (NICE; NPIAP/EPUAP)</li>
        </ul>
    </div>

    <h2>9.10 القياس (كيف تثبت الموثوقية) / Measurement (How You Prove Reliability)</h2>

    <h3>9.10.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>% الحالات المؤهلة التي تم تنشيط الوقاية الميكانيكية VTE لها <strong>قبل الشق الجراحي</strong>. (NICE)</li>
        <li>% الحالات الطويلة التي تحتوي على إعادة فحص موثق لنقاط الضغط على فترات. (NPIAP/EPUAP; AORN)</li>
        <li>% الحالات التي تحتوي على مراقبة حرارة موثقة وتدفئة نشطة عند الاستطباب. (NICE)</li>
        <li>درجة اكتمال التسليم (Handoff) لعناصر الحزمة الثلاثة. (AHRQ)</li>
        <li>تسجيل إخفاقات توفر المعدات (SCD/تدفئة/دعامات الوضعية). (IHI)</li>
    </ul>

    <h3>9.10.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <p>أحداث VTE بعد العملية، نسبة حدوث إصابات الضغط (المرحلة والموقع)، ومعدلات انخفاض الحرارة في الإفاقة (PACU) ونسبة الارتعاش. (NICE; NPIAP/EPUAP concepts)</p>

    <h3>9.10.3 سرعة حلقة التعلم / Learning-loop speed</h3>
    <p>الوقت من فشل التدقيق أو الحدث ← إلى الإصلاح ← إلى إعادة التدقيق. (IHI)</p>

    <h2>9.11 تأملات الكاتب (بعد سنوات في المسرح الجراحي) / The Writer's Reflection</h2>

    <h3>9.11.1 غرفة العمليات هي المكان الذي تصبح فيه الوقاية حقيقية</h3>
    <p>العيادات تُقيّم الخطر. والسياسات تصف الوقاية. لكن المسرح هو المكان الذي تصبح فيه الوقاية مادية (Physical): أكمام متصلة، كعاب محمية، تدفئة مُفعلة.</p>
    <p><span class="english-term"><strong>9.11.1 The OR is where prevention becomes real</strong><br>Clinics assess risk. Policies describe prevention. But the theatre is where prevention becomes physical: sleeves connected, heels protected, warming activated.</span></p>

    <h3>9.11.2 هذه الأضرار هي "عقوبات هادئة" للأنظمة المتعجلة</h3>
    <p>عندما يعود المريض بجلطة، أو قرحة، أو ارتعاش لا يُحتمل، لا أحد يتذكر اللحظة المتعجلة في المسرح. <strong>لكن جسد المريض يتذكر.</strong></p>
    <p><span class="english-term"><strong>9.11.2 These harms are “quiet punishments” for rushed systems</strong><br>When a patient returns with a clot, a sore, or unbearable shivering, nobody remembers the rushed moment in theatre. <strong>But the patient’s body remembers.</strong></span></p>

    <h3>9.11.3 قاعدتي / My rule</h3>
    <p>عندما يكون الضرر صامتاً، يجب أن نكون صاخبين بوقايتنا: قلها، افحصها، وثقها، وسلّمها. (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>9.11.3 My rule</strong><br>When the harm is silent, we must be loud with our prevention: <strong>say it, check it, document it, hand it over.</strong> (AHRQ; IHI)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>VTE، إصابات الضغط، وانخفاض الحرارة هي "أضرار صامتة" تتشكل بواسطة موثوقية غرفة العمليات أكثر من التقنية الجراحية. (NICE; NPIAP/EPUAP)<br>
            <span class="english-term">VTE, pressure injury, and hypothermia are “silent harms” shaped by OR reliability more than surgical technique.</span></li>
            
            <li>استخدم بوابة حزمة بقيادة غرفة العمليات قبل الشق الجراحي: جهاز VTE نشط، حماية الضغط مؤكدة، خطة التدفئة نشطة. (IHI)<br>
            <span class="english-term">Use an OR-driven bundle gate before incision: VTE device active, pressure protection confirmed, warming plan active.</span></li>
            
            <li>تتطلب الحالات الطويلة إعادة فحص—يجب أن تستمر الوقاية، وليس فقط أن تبدأ. (NPIAP/EPUAP; NICE)<br>
            <span class="english-term">Long cases require rechecks—prevention must continue, not only start.</span></li>
            
            <li>عمليات التسليم (Handoffs) يجب أن تحمل حالة الحزمة وإلا ستنكسر الوقاية عند الانتقال. (AHRQ)<br>
            <span class="english-term">Handoffs must carry bundle status or prevention will break at the transition.</span></li>
            
            <li>قس موثوقية الحاجز بالمؤشرات الاستباقية وأغلق حلقات التعلم بسرعة. (IHI)<br>
            <span class="english-term">Measure barrier reliability with leading indicators and close learning loops quickly.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>NICE. Venous thromboembolism: reducing the risk for patients in hospital (VTE risk and prophylaxis principles).</li>
            <li>NICE. Inadvertent perioperative hypothermia: prevention and management (warming and monitoring principles).</li>
            <li>National Pressure Injury Advisory Panel (NPIAP) / European Pressure Ulcer Advisory Panel (EPUAP). Pressure injury prevention guidance.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for perioperative positioning, skin integrity protection, and perioperative practice.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (handoffs, safety culture, communication).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (bundles, measurement, learning loops).</li>
            <li>American Society of Anesthesiologists (ASA). Perioperative temperature management guidance concepts (temperature monitoring and warming practices).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  19: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 19 — OR Fire Safety and Ignition Prevention</h1>
    <div class="subtitle">الفصل التاسع عشر — سلامة غرفة العمليات من الحرائق والوقاية من الاشتعال<br>
    <span style="font-size: 18px;">(Fire Triangle • High-Risk Scenarios • Prevention Checklist • Immediate Response Protocol)<br>
    (مثلث الحريق • السيناريوهات عالية الخطورة • قائمة تحقق الوقاية • بروتوكول الاستجابة الفورية)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح حريق غرفة العمليات كـ <strong>حدث مثلث يمكن التنبؤ به (Predictable triangle event)</strong> (مؤكسد + اشتعال + وقود) ووصف كيف يمكن للطباع "الطبيعية" الصغيرة أن تكمل هذا المثلث. (ASA Practice Advisory; NFPA 99; APSF)<br>
            <span class="english-term">Explain the OR fire as a <strong>predictable triangle event</strong> (oxidizer + ignition + fuel) and describe how small “normal” habits complete the triangle. (ASA Practice Advisory; NFPA 99; APSF)</span></li>
            
            <li>تحديد <strong>السيناريوهات عالية الخطورة (High-risk scenarios)</strong> الأكثر شيوعاً (جراحة الرأس/العنق مع أكسجين إضافي، جراحة مجرى الهواء، التحضير الكحولي، فخاخ الفرش الجراحي، تفعيل الجراحة الكهربائية/الليزر). (ASA Practice Advisory; APSF; AORN)<br>
            <span class="english-term">Identify the most common <strong>high-risk scenarios</strong> (head/neck surgery with supplemental oxygen, airway surgery, alcohol-based prep, draping traps, electrosurgery/laser activation). (ASA Practice Advisory; APSF; AORN)</span></li>
            
            <li>تشغيل <strong>قائمة تحقق وقائية عملية (Practical fire prevention checklist)</strong> مدمجة في سير عمل السلامة الجراحية (الأدوار، خطة الأكسجين، وقت جفاف محلول التحضير، استراتيجية الفرش، جاهزية الأجهزة، شفط الدخان). (ASA Practice Advisory; AORN; IHI)<br>
            <span class="english-term">Run a practical <strong>fire prevention checklist</strong> integrated into the surgical safety workflow (roles, oxygen plan, prep dry-time, drape strategy, device readiness, smoke suction). (ASA Practice Advisory; AORN; IHI)</span></li>
            
            <li>تنفيذ <strong>بروتوكول استجابة فورية (Immediate response protocol)</strong> لحرائق مجرى الهواء وحرائق الحقل الجراحي (إيقاف الغازات، إزالة المواد المحترقة، إخماد الحريق، غسل المنطقة، إعادة التهوية، تقييم الإصابة، التوثيق، واستخلاص المعلومات). (ASA Practice Advisory; APSF; AORN)<br>
            <span class="english-term">Execute an <strong>immediate response protocol</strong> for airway fires and field fires (stop gases, remove burning materials, extinguish, irrigate, re-ventilate, assess injury, document and debrief). (ASA Practice Advisory; APSF; AORN)</span></li>
            
            <li>بناء برنامج حريق لغرفة العمليات: التدريبات الوهمية، عمليات التدقيق، جاهزية المعدات، وحلقات التعلم التي تقلل من الخطر والهلع في آن واحد. (IHI; AHRQ)<br>
            <span class="english-term">Build an OR fire program: drills, audits, equipment readiness, and learning loops that reduce both risk and panic. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الثانية التي حولت الروتين إلى كارثة"</strong><br>
        <span class="english-term">A true-to-life case: “The second that turned routine into disaster” (Real Scientific Story)</span>
    </div>

    <p>يمكنك إجراء مئات الحالات الجراحية بأمان وتظل على بُعد ثانية واحدة من حريق في غرفة العمليات. هذه هي طبيعته: نادر، مفاجئ، ولا يرحم.</p>
    <p><span class="english-term">You can do hundreds of cases safely and still be one second away from an OR fire. That’s the nature of it: rare, sudden, and unforgiving.</span></p>

    <p>كانت حالة جراحية في الرأس والعنق (Head-and-neck case). كان المريض يتلقى تخديراً تحت المراقبة (MAC) مع أكسجين عبر قناع وجه مفتوح. تم تنظيف الجلد باستخدام محلول تحضير يحتوي على الكحول. الفرش الجراحي غطى المريض وصنع "خيمة" صغيرة حول الرقبة. الجراح، كعادته دائماً، طلب قلم الكي (Bovie) لوقف نزيف شعيري صغير.</p>
    <p><span class="english-term">It was a head-and-neck case. The patient was receiving MAC anesthesia with supplemental oxygen via an open face mask. The skin was prepped with an alcohol-based solution. The drapes tented over the neck. The surgeon, just as they always did, asked for the Bovie to coagulate a small bleeder.</span></p>

    <div class="alert-box">
        <p>بمجرد الضغط على الزر، لم تكن هناك شرارة فقط. كان هناك وميض—<strong>صوت "ووش" (Whoosh) منخفض، واندلع لهب أزرق/برتقالي مشرق تحت الفرش الجراحي وحول عنق المريض.</strong> في أقل من ثانية، اشتعلت النيران في الفرش والشعر.</p>
        <p><span class="english-term">The moment the button was pressed, there was not just a spark. There was a flash—<strong>a low "whoosh" sound, and a bright blue/orange flame erupted under the drapes around the patient’s neck.</strong> In less than a second, the drape and hair were on fire.</span></p>
    </div>

    <p>تم تدريب الفريق. أوقف طبيب التخدير فوراً تدفق الأكسجين. مزق الجراح الفرش الجراحي المحترق لإنزاله على الأرض. وسكبت الممرضة المعقمة (Scrub nurse) وعاءً من المحلول الملحي (Saline) على عنق المريض. كل هذا حدث في أقل من ست ثوانٍ.</p>
    <p><span class="english-term">The team was trained. The anesthetist immediately shut off the oxygen flow. The surgeon ripped the burning drapes off onto the floor. The scrub nurse poured a bowl of saline over the patient’s neck. This all happened in under six seconds.</span></p>

    <p>أُصيب المريض بحروق من الدرجة الأولى والثانية لكنه نجا دون أذى في مجرى الهواء. <strong>لقد نجوا ليس لأنهم لم يرتكبوا خطأ، بل لأنهم كانوا يمتلكون بروتوكولاً فورياً جاهزاً.</strong></p>
    <p><span class="english-term">The patient suffered first- and second-degree burns but survived without airway compromise. <strong>They survived not because they didn’t make a mistake, but because they had an immediate protocol ready.</strong></span></p>

    <div class="success-box">
        <p>الدرس القاسي: الحريق في غرفة العمليات ليس "حادثاً" عشوائياً. إنه معادلة فيزيائية بسيطة: <strong>أكسجين محتجز + وقود كحولي + شرارة حرارية.</strong> إذا وفرت هذه العناصر الثلاثة، فإن الفيزياء لن تسأل عن مدى خبرتك؛ بل ستشعل الحريق. (ASA Practice Advisory; NFPA 99)</p>
        <p><span class="english-term">The harsh lesson: An OR fire is not a random "accident." It is a simple physics equation: <strong>trapped oxygen + alcohol fuel + thermal spark.</strong> If you provide the three elements, physics does not ask how experienced you are; it ignites. (ASA Practice Advisory; NFPA 99)</span></p>
    </div>

    <h2>19.1 فيزياء حرائق غرفة العمليات (المثلث)</h2>
    <h3>19.1 The Physics of OR Fires (The Triangle)</h3>

    <h3>19.1.1 مثلث الحريق الكلاسيكي</h3>
    <p>لفهم حرائق غرفة العمليات، يجب أن تفهم المكونات الثلاثة التي <em>يجب</em> أن تكون موجودة في نفس الوقت:</p>
    <ul>
        <li><strong>المؤكسد (Oxidizer):</strong> الأكسجين (O2)، أو أكسيد النيتروز (N2O). هواء الغرفة العادي يحتوي على 21% أكسجين. في غرف العمليات، غالباً ما نُغني البيئة إلى ما يزيد عن 30-100% بالقرب من مجرى الهواء. هذا يُسرّع الاشتعال ويجعل المواد العادية تحترق بشراسة.</li>
        <li><strong>مصدر الاشتعال (Ignition Source):</strong> أجهزة الجراحة الكهربائية (Bovie)، أجهزة الليزر، الأسلاك الساخنة، أو المثاقب عالية السرعة التي تولد شرراً أو حرارة.</li>
        <li><strong>الوقود (Fuel):</strong> محاليل تحضير الجلد (خاصة المعتمدة على الكحول)، الفرش الجراحي (Drapes)، الشاش، الإسفنج، شعر المريض، وأنابيب القصبة الهوائية (ET tubes). (APSF; NFPA 99; AORN)</li>
    </ul>
    <p><span class="english-term"><strong>19.1.1 The classic fire triangle</strong><br>Oxidizer (O2, N2O), Ignition Source (Electrosurgery, lasers), Fuel (Alcohol-based prep, drapes, hair, ET tubes). (APSF; NFPA 99; AORN)</span></p>

    <h3>19.1.2 المسؤولية المشتركة / Shared responsibility</h3>
    <p>في غرفة العمليات، يتحكم كل تخصص في جانب من جوانب المثلث:</p>
    <ul>
        <li><strong>طبيب التخدير</strong> يتحكم في المؤكسد.</li>
        <li><strong>الجراح</strong> يتحكم في مصدر الاشتعال.</li>
        <li><strong>التمريض</strong> يتحكم في معظم الوقود (التحضير، الفرش).</li>
    </ul>
    <p>لذلك، الوقاية من الحرائق مستحيلة بدون وعي وتواصل بين الثالوث. (IHI)</p>
    <p><span class="english-term"><strong>19.1.2 Shared responsibility</strong><br>Anesthesia controls the oxidizer. Surgeon controls the ignition. Nursing controls most fuel. Prevention is impossible without triad awareness. (IHI)</span></p>

    <h2>19.2 "مناطق الخطر" (السيناريوهات عالية الخطورة)</h2>
    <h3>19.2 The "Danger Zones" (High-Risk Scenarios)</h3>

    <h3>19.2.1 المنطقة فوق عملية الرهابة (Xiphoid) / Above the xiphoid</h3>
    <p>تحدث الأغلبية العظمى من حرائق غرفة العمليات في جراحات الرأس، الرقبة، الوجه، وأعلى الصدر. لماذا؟ لأن هذا هو المكان الذي يلتقي فيه <strong>مصدر الأكسجين</strong> (الأنف/الفم) بـ <strong>مصدر الاشتعال</strong> (أداة الجراح). (ASA Practice Advisory)</p>
    <p><span class="english-term"><strong>19.2.1 Above the xiphoid</strong><br>The vast majority of OR fires happen in head, neck, face, and upper chest surgeries. Why? Because that is where the <strong>oxygen source</strong> meets the <strong>ignition source</strong>. (ASA Practice Advisory)</span></p>

    <h3>19.2.2 جراحة مجرى الهواء المفتوح (Open airway surgery)</h3>
    <p>حالات الأنف والأذن والحنجرة (ENT) التي تستخدم الليزر أو الجراحة الكهربائية بالقرب من أو داخل مجرى الهواء تشكل خطراً شديداً لحرائق مجرى الهواء الداخلية. يجب استخدام أنابيب الرغامي (ET tubes) المقاومة لليزر والبالونات (Cuffs) المملوءة بالماء المصبوغ بأزرق الميثيلين كحواجز. (APSF)</p>

    <h3>19.2.3 فخ الفرش الجراحي "الخيمة" / The "tented" drape trap</h3>
    <p>عندما يرتدي المريض قناع أكسجين (أو قنية أنفية) تحت فرش جراحي يشبه الخيمة، يتجمع الأكسجين ويُشكل جيباً غنياً بالأكسجين. شرارة واحدة من أداة الجراحة تخترق هذا الجيب وتؤدي إلى وميض ناري فوري. (AORN)</p>
    <p><span class="english-term"><strong>19.2.3 The "tented" drape trap</strong><br>When a patient has an oxygen mask under a tented drape, oxygen pools. A spark pierces this pocket and creates an immediate flash fire. (AORN)</span></p>

    <h3>19.2.4 محاليل التحضير غير الجافة (القاتل الصامت) / Wet alcohol prep</h3>
    <p>محاليل التحضير المعتمدة على الكحول تُشكل أبخرة قابلة للاشتعال. إذا لم يُسمح لها بوقت كافٍ لتجف تماماً (عادة 3 دقائق على الأقل، وأكثر إذا تجمعت في الطيات أو السرة)، فإنها يمكن أن تشتعل بمجرد تشغيل الجراحة الكهربائية. (AORN; NFPA 99)</p>

    <h2>19.3 قائمة تحقق الوقاية (دمجها في المهلة/Time-Out)</h2>
    <h3>19.3 The Prevention Checklist (Integrating into the Time-Out)</h3>

    <h3>19.3.1 تقييم مخاطر الحريق يجب أن يكون روتينياً</h3>
    <p>لا تتطلب جميع الحالات نفس مستوى اليقظة، لكن <strong>تقييم الخطر</strong> يجب أن يتم دائماً. في كل Time-Out، يجب أن تُسأل هذه الأسئلة:</p>
    <p><span class="english-term"><strong>19.3.1 Fire risk assessment must be routine</strong><br>Not all cases require the same vigilance, but the <strong>risk assessment</strong> must always happen. In every Time-Out:</span></p>

    <div class="concept-box">
        <ul>
            <li><strong>هل هذه حالة عالية الخطورة لحريق؟</strong> (الجراحة فوق الرهابة / مجرى هواء مفتوح / أكسجين إضافي).</li>
            <li><strong>الممرضة:</strong> "تم استخدام محلول كحولي؛ لقد جف تماماً لمدة [X] دقائق، ولم يتجمع أي سائل."</li>
            <li><strong>طبيب التخدير:</strong> "الأكسجين عند أقل تركيز ممكن لدعم المريض." (تقليل FiO2 قبل استخدام الكي).</li>
            <li><strong>الجراح:</strong> "سأستخدم قلم الكي (Bovie)؛ سأضعه في الحافظة (Holster) عند عدم الاستخدام."</li>
            <li><strong>الممرضة:</strong> "المحلول الملحي المفتوح متاح على الطاولة الخلفية للإخماد السريع." (ASA Practice Advisory; AORN)</li>
        </ul>
    </div>

    <h3>19.3.2 التحكم في الأكسجين (قاعدة طبيب التخدير)</h3>
    <p>إذا كان المريض يعتمد على الأكسجين الإضافي المفتوح (MAC)، فقبل أن يستخدم الجراح الجراحة الكهربائية في منطقة الوجه/الرقبة، يجب على الجراح إخبار طبيب التخدير. يقوم طبيب التخدير بإيقاف الأكسجين، أو تقليله إلى الحد الأدنى، أو استبداله بالهواء الطبي، وينتظر دقيقة لتبدد الأكسجين المتجمع قبل إعطاء الإذن ببدء الكي. (ASA Practice Advisory)</p>

    <h2>19.4 القصة الحقيقية 2: "الفرش الجراحي الذي احتجز الأكسجين"</h2>
    <h3>19.4 Real Story 2: "The drape that trapped the oxygen"</h3>

    <div class="quote-box">
        <p>أثناء استئصال شامة صغيرة على كتف المريض، كان المريض يتلقى الأكسجين عبر قنية أنفية (Nasal cannula). وُضعت المناشف الجراحية (Drapes) فوق الرقبة والوجه، مما أدى إلى خلق جيب ضيق فوق الصدر.</p>
        <p><span class="english-term">During removal of a small mole on the patient's shoulder, the patient was receiving oxygen via nasal cannula. Surgical towels were draped over the neck and face, creating a tight pocket over the chest.</span></p>
        
        <p>بدأ الجراح في استخدام جهاز الكي. فجأة، اشتعلت حافة المنشفة. ولحسن الحظ، كان التفاعل سريعاً: تم إبعاد المنشفة وضُربت باليد لإخمادها. سأل الجراح بذهول: "كيف اشتعلت المنشفة الجافة؟"</p>
        <p><span class="english-term">The surgeon activated the cautery. Suddenly, the edge of the towel caught fire. Luckily, the reaction was quick: the towel was swept away and patted out. The surgeon asked in shock: "How did a dry towel ignite?"</span></p>
        
        <p><strong>الإجابة: الأكسجين المحتجز.</strong> الأكسجين يجعل المواد التي لا تشتعل عادة (مثل المناشف الطبية) شديدة القابلية للاشتعال.<br>
        <strong>الحل المنهجي:</strong> عند استخدام الأكسجين الإضافي المفتوح في الجزء العلوي من الجسم، يجب استخدام شفط هواء (Suction) تحت الفرش الجراحي لإخلاء الأكسجين المتراكم، أو استخدام فرش مفتوح لا يحتجز الغازات. (APSF; AORN)</p>
        <p><span class="english-term"><strong>Answer: Trapped oxygen.</strong> Oxygen makes materials that don't normally burn (like surgical towels) highly flammable. <strong>System fix:</strong> When using open supplemental oxygen on the upper body, place an active suction under the drapes to evacuate pooled oxygen, or use open draping. (APSF; AORN)</span></p>
    </div>

    <h2>19.5 بروتوكول الاستجابة الفورية (لا تفزع، تصرّف)</h2>
    <h3>19.5 Immediate Response Protocol (Do Not Panic, Act)</h3>

    <h3>19.5.1 الأهمية القصوى للثواني الأولى</h3>
    <p>في الحريق، لديك ثوانٍ قبل أن يتدمر الجلد، أو يُحرق مجرى الهواء. لا وقت للصراخ "ماذا نفعل؟". يجب أن يكون البروتوكول محفوراً في ذاكرة الفريق.</p>
    <p><span class="english-term"><strong>19.5.1 The paramount importance of the first seconds</strong><br>In a fire, you have seconds before skin is destroyed or an airway is burned. There is no time to yell "What do we do?". The protocol must be hardwired into the team's muscle memory.</span></p>

    <h3>19.5.2 بروتوكول حريق الحقل الجراحي (على المريض / الفرش)</h3>
    <div class="alert-box">
        <p>إذا كان الحريق على <strong>جسد المريض أو الفرش الجراحي</strong>:</p>
        <ol>
            <li><strong>طبيب التخدير:</strong> يوقف تدفق الأكسجين/الغازات الطبية <strong>فوراً</strong>.</li>
            <li><strong>الجراح والتمريض:</strong> يزيلون المواد المشتعلة (الفرش/الإسفنج) من على المريض ويُلقونها على الأرض.</li>
            <li><strong>التمريض:</strong> يسكب المحلول الملحي (Saline) أو الماء على المريض وأي مواد لا تزال مشتعلة. (لا تنتظر للبحث عن مطفأة الحريق لحريق صغير على الجلد).</li>
            <li>بمجرد إخماده: تقييم حالة المريض، واستئناف الرعاية وتأمين مجرى الهواء إذا لزم الأمر. (ASA Practice Advisory; AORN)</li>
        </ol>
    </div>

    <h3>19.5.3 بروتوكول حريق مجرى الهواء (داخل الأنبوب أو الحلق)</h3>
    <div class="success-box">
        <p>إذا كان الحريق <strong>داخل مجرى الهواء (Airway Fire)</strong> (مثل اشتعال أنبوب الرغامي أثناء جراحة الليزر):</p>
        <ol>
            <li><strong>الجراح أو طبيب التخدير:</strong> أزل الأنبوب الرغامي (ET tube) المشتعل <strong>فوراً</strong>. (لا تنتظر لفصل أي شيء، فقط اسحبه للخارج).</li>
            <li><strong>طبيب التخدير:</strong> أوقف الغازات الطبية وافصل دائرة التنفس (Breathing circuit).</li>
            <li><strong>الجراح/التمريض:</strong> اسكب المحلول الملحي في مجرى الهواء إذا كان لا يزال يحترق. أزل أي بقايا (إسفنج/أجزاء محترقة).</li>
            <li><strong>الإنعاش:</strong> أعد تأسيس مجرى الهواء (أنبوب جديد)، وابدأ التهوية بالهواء المحيط (Room air) (تجنب الأكسجين النقي في البداية إن أمكن لمنع إعادة الاشتعال)، وافحص بالمنظار (Bronchoscopy) لتقييم الضرر. (ASA Practice Advisory; APSF)</li>
        </ol>
    </div>

    <h2>19.6 القياس (كيف تعرف أن الوقاية تعمل)</h2>
    <h3>19.6 Measurement (How to Know Your Prevention Works)</h3>

    <h3>19.6.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية لحالات الرأس/العنق التي تتضمن توثيقاً لتقييم مخاطر الحريق في الـ Time-out. (IHI)</li>
        <li>النسبة المئوية للامتثال لترك محلول التحضير ليجف تماماً قبل الشق الجراحي. (AORN)</li>
        <li>النسبة المئوية للامتثال لاستخدام حافظة الأمان (Holster) لقلم الجراحة الكهربائية.</li>
        <li>إكمال <strong>تدريب وهمي سنوي (Annual Fire Drill)</strong> موثق لجميع موظفي غرفة العمليات. (AHRQ)</li>
    </ul>

    <h3>19.6.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>عدد حوادث الحرائق (يجب أن يكون الهدف هو صفر).</li>
        <li>عدد החوادث الوشيكة (Near-misses) المُبلغ عنها (مثل شرارة ملحوظة دون اشتعال).</li>
    </ul>

    <h2>19.7 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>19.7 The Writer's Reflection</h3>

    <h3>19.7.1 الحرائق تحدث للفرق الجيدة</h3>
    <p>لا تعتقد أبداً أن "هذا لن يحدث لنا". الحرائق تحدث للأشخاص الذين يعتبرون أن الروتين اليومي يغنيهم عن اليقظة. الغطرسة هي الوقود الرابع في حريق غرفة العمليات.</p>
    <p><span class="english-term"><strong>19.7.1 Fires happen to good teams</strong><br>Never think “it won’t happen to us.” Fires happen to people who confuse daily routine with immunity. Arrogance is the fourth fuel in an OR fire.</span></p>

    <h3>19.7.2 المحلول الملحي هو صديقك المفضل</h3>
    <p>في كل حالة، وخاصة حالات الرأس والعنق، تأكد دائماً من وجود وعاء مفتوح من المحلول الملحي أو الماء على الطاولة الخلفية (Back table). إذا اشتعلت النيران، فليس لديك الوقت لفك غطاء زجاجة جديدة. الماء المفتوح هو مطفأة الحريق الأولى والأسرع لجسد المريض. (ASA Practice Advisory)</p>
    <p><span class="english-term"><strong>19.7.2 Saline is your best friend</strong><br>In every case, especially head and neck, always have an open bowl of saline or water on the back table. If a fire starts, you do not have time to unscrew a bottle. Open water is your first and fastest fire extinguisher for a patient’s body. (ASA Practice Advisory)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>حرائق غرفة العمليات هي أحداث مثلث: مؤكسد + اشتعال + وقود. اكسر جانباً واحداً، وستمنع الحريق. (ASA Practice Advisory; NFPA 99)<br>
            <span class="english-term">OR fires are triangle events: oxidizer + ignition + fuel. Break one side, and you prevent fire.</span></li>
            
            <li>السيناريوهات عالية الخطورة يمكن التنبؤ بها—خاصة حالات الرأس/العنق التي تستخدم الأكسجين المفتوح وجراحة مجرى الهواء أو الليزر. (ASA Practice Advisory; APSF)<br>
            <span class="english-term">High-risk scenarios are predictable—especially head/neck cases with open oxygen and airway/laser surgery.</span></li>
            
            <li>الوقاية عبارة عن قائمة تحقق قصيرة وحقيقية: خطة الأكسجين، وقت جفاف التحضير، استراتيجية الفرش، الإبلاغ عن وقت الاشتعال، جاهزية المحلول الملحي. (ASA Practice Advisory; AORN; IHI)<br>
            <span class="english-term">Prevention is a short, real checklist: oxygen plan, prep dry-time, drape strategy, ignition timing communication, readiness of saline/extinguisher.</span></li>
            
            <li>يجب أن تكون الاستجابة متدرباً عليها وفورية، مع بروتوكولات مختلفة لحرائق مجرى الهواء مقابل حرائق الحقل الجراحي. (ASA Practice Advisory; APSF)<br>
            <span class="english-term">Response must be practiced and immediate, with different protocols for airway vs field fires.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>American Society of Anesthesiologists (ASA). Practice Advisory / guidance on Operating Room Fires (oxidizer management, high-risk scenarios, prevention and response concepts).</li>
            <li>Anesthesia Patient Safety Foundation (APSF). Patient safety resources on OR fire prevention and response (team behaviors, fire triangle awareness, drills concepts).</li>
            <li>National Fire Protection Association (NFPA). NFPA 99: Health Care Facilities Code (fire safety concepts relevant to healthcare environments, ignition/oxidizer/fuel controls).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (electrosurgery safety, prep/draping practices, fire prevention and intraoperative protocols).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (closed-loop communication, safety culture, debriefing, reporting systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (hard stops, drills, measurement, learning loops).</li>
            <li>ANSI Z136 (laser safety standards concepts) and local laser safety policies (controlled area, eye protection, signage).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  29: `<!-- Download Button -->
    

    <div class="part-title">PART VI — Learning, Investigation, and Continuous Improvement</div>
    <div class="part-title">الجزء السادس — التعلم، التحقيق، والتحسين المستمر</div>
    
    <h1>CHAPTER 29 — Incident Reporting, Investigation, and Corrective Actions (OR-specific)</h1>
    <div class="subtitle">الفصل التاسع والعشرون — الإبلاغ عن الحوادث، التحقيق، والإجراءات التصحيحية (خاص بغرفة العمليات)<br>
    <span style="font-size: 18px;">(What to Report • Theatre-Focused RCA • Action Tracking • Learning Loops)<br>
    (ما يجب الإبلاغ عنه • تحليل السبب الجذري المُركز على المسرح الجراحي • تتبع الإجراءات • حلقات التعلم)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>تحديد <strong>ما يجب الإبلاغ عنه (What to report)</strong> في غرفة العمليات—وخاصة الحوادث الوشيكة (Near-misses) و"الإشارات الضعيفة" (Weak signals)—بحيث يحدث التعلم قبل وقوع الضرر. (AHRQ; IHI)<br>
            <span class="english-term">Define <strong>what to report</strong> in the OR—especially near-misses and “weak signals”—so learning happens before harm. (AHRQ; IHI)</span></li>
            
            <li>إجراء <strong>تحليل سبب جذري مُركز على المسرح الجراحي (Theatre-Focused RCA)</strong> يقوم برسم خرائط لسير عمل غرفة العمليات الحقيقي (العد، العينات، العقامة، الغرسات، جاهزية المعدات، ضغط التدفق) ويحدد أسباب النظام. (AHRQ; IHI; AORN concepts)<br>
            <span class="english-term">Conduct a <strong>theatre-focused RCA</strong> that maps real OR workflows (counts, specimens, sterility, implants, equipment readiness, flow pressure) and identifies system causes. (AHRQ; IHI; AORN concepts)</span></li>
            
            <li>بناء <strong>نظام لتتبع الإجراءات (Action tracking)</strong> يُنتج تغييراً حقيقياً: مُلّاك، مواعيد نهائية، تحقق، وتكامل مع "التوقف الإلزامي/Hard stop"—وليس مجرد توصيات غامضة. (IHI)<br>
            <span class="english-term">Build <strong>action tracking</strong> that produces real change: owners, deadlines, verification, and “hard stop” integration—not vague recommendations. (IHI)</span></li>
            
            <li>إنشاء <strong>حلقات تعلم مستدامة (Sustainable learning loops)</strong> بحيث تصبح الإجراءات التصحيحية عملاً قياسياً، وليست مجرد حملات مؤقتة. (IHI; AHRQ)<br>
            <span class="english-term">Create sustainable <strong>learning loops</strong> so corrective actions become standard work, not temporary campaigns. (IHI; AHRQ)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "لا تكتبها... كيف تصبح الأنظمة عمياء"</strong><br>
        <span class="english-term">A true-to-life case: “Don’t write it... how systems become blind” (Real Scientific Story)</span>
    </div>

    <p>أول مرة فهمت فيها حقاً معنى الإبلاغ عن الحوادث في غرفة العمليات، لم يكن ذلك بسبب حدث كارثي. بل كان بسبب حادثة وشيكة (Near-miss) أراد الجميع نسيانها بسرعة.</p>
    <p><span class="english-term">The first time I truly understood incident reporting in the OR, it wasn’t because of a catastrophic event. It was because of a near-miss that everyone wanted to forget quickly.</span></p>

    <p>تم أخذ عينة خلال حالة جراحية—روتينية ومألوفة. كانت الغرفة مزدحمة، والحالة التالية كانت تنتظر بالفعل. تم تجهيز الملصق، لكن خط اليد كان متسرعاً. توقفت الممرضة الدوارة، ونظرت إلى الحاوية، وسألت سؤالاً بسيطاً:<br>
    "هل يمكنك قول اسم المريض الكامل والموقع مرة أخرى؟"</p>
    <p><span class="english-term">A specimen was taken during a case—routine, familiar. The room was busy, and the next case was already waiting. The label was prepared, but the handwriting was rushed. The circulating nurse paused, stared at the container, and asked a simple question:<br>
    “Can you say the patient’s full name and the site again?”</span></p>

    <p>ساد صمت قصير—يكفي فقط للشعور بعدم الارتياح.</p>
    <p><span class="english-term">A small silence followed—just long enough to feel uncomfortable.</span></p>

    <p>ثم كرر الجراح التفاصيل بوضوح. تم تصحيح الملصق. وغادرت العينة الغرفة بأمان. لم يحدث أي ضرر.</p>
    <p><span class="english-term">Then the surgeon repeated the details clearly. The label was corrected. The specimen left the room safely. No harm happened.</span></p>

    <div class="alert-box">
        <p>بعد الحالة، قال أحدهم: "الوضع جيد. لم يحدث شيء. لا تكتبيها."<br>
        تلك الجملة— <strong>لا تكتبيها</strong> —هي الطريقة التي تُصاب بها الأنظمة بالعمى.</p>
        <p><span class="english-term">After the case, someone said: “It’s fine. Nothing happened. Don’t write it.”<br>
        That sentence— <strong>don’t write it</strong> —is how systems become blind.</span></p>
    </div>

    <p>لأن ما أنقذ المريض لم يكن الحظ. كان حاجزاً نجح في العمل: توقف مؤقت، تحقق، لحظة تحدث بصوت عالٍ. وهذا الحاجز لن يزداد قوة أبداً ما لم نوثق الحادثة الوشيكة كدليل على نقطة ضعف في سير العمل. (AHRQ; IHI; AORN concepts)</p>
    <p><span class="english-term">Because what saved the patient wasn’t luck. It was a barrier that worked: a pause, a verification, a speak-up moment. And that barrier would never get stronger unless we captured the near-miss as evidence of a weak point in the workflow. (AHRQ; IHI; AORN concepts)</span></p>

    <div class="success-box">
        <p>على مدار سنوات عديدة، تعلمت شيئاً أقوله الآن علناً في اجتماعات قيادة غرفة العمليات:<br>
        <strong>غرفة العمليات لا تصبح أكثر أماناً بإخفاء الأحداث؛ بل تصبح أكثر أماناً بالتعلم منها أسرع من قدرة الضرر على التكرار.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">Over many years, I’ve learned something I now say openly in OR leadership meetings:<br>
        <strong>The OR does not become safer by hiding events; it becomes safer by learning from them faster than harm can repeat.</strong> (IHI; AHRQ)</span></p>
        <p>هذا الفصل هو نظامك الخاص بغرفة العمليات للإبلاغ، التحقيق، التصحيح، والحفاظ على التعلم—بدون مسرحيات إلقاء اللوم، وبدون تقديس الأوراق، وبدون "تقارير RCA" التي تموت في المجلدات.</p>
        <p><span class="english-term">This chapter is your OR-specific system for reporting, investigating, correcting, and sustaining learning—without blame theatre, without paperwork worship, and without “RCA reports” that die in folders.</span></p>
    </div>

    <h2>29.1 ما يجب الإبلاغ عنه (تقارير غرفة العمليات التي تلتقط الخطر الحقيقي)</h2>
    <h3>29.1 What to Report (OR-Specific Reporting That Captures Real Risk)</h3>

    <h3>29.1.1 يجب على غرفة العمليات الإبلاغ عن أكثر من مجرد الضرر</h3>
    <p>إذا كنت تبلغ فقط عن الأحداث التي تتضمن إصابات، فأنت تتعلم فقط بعد أن يدفع المريض الثمن. يجب على غرفة العمليات الإبلاغ عن:</p>
    <p><span class="english-term"><strong>29.1.1 The OR must report more than harm</strong><br>If you report only events with injury, you learn only after the patient pays. The OR must report:</span></p>
    <ul>
        <li><strong>أحداث الضرر (Harm events):</strong> (إصابة فعلية أو انحراف كبير).</li>
        <li><strong>أحداث بلا ضرر (No-harm events):</strong> (وقع خطأ ولكنه لم يصل للمريض أو لم يسبب إصابة).</li>
        <li><strong>الحوادث الوشيكة (Near-misses):</strong> (كاد الخطأ أن يقع لكن تم اكتشافه).</li>
        <li><strong>الظروف غير الآمنة (Unsafe conditions):</strong> (خطر موجود حتى لو لم يقع حدث بعد). (AHRQ; IHI)</li>
    </ul>
    <p>الحوادث الوشيكة قيمة بشكل خاص لأنها تكشف كيف كاد النظام أن يفشل—بينما لا تزال تمنحك هدية الوقت. (AHRQ)</p>
    <p><span class="english-term">Near-misses are especially valuable because they reveal how the system almost failed—while still giving you the gift of time. (AHRQ)</span></p>

    <h3>29.1.2 قائمة "ما يجب الإبلاغ عنه" في غرفة العمليات (عملية وعالية العائد)</h3>
    <div class="concept-box">
        <p>أبلغ عن أي حدث أو ظرف يتضمن:</p>
        <p><span class="english-term"><strong>29.1.2 The “what to report” OR list (practical, high-yield)</strong><br>Report any event or condition involving:</span></p>
        <ul>
            <li><strong>خطر المريض/الإجراء/الموقع الخاطئ:</strong> (بما في ذلك أي تباين أو عدم يقين في الـ Time-out). (Universal Protocol concepts; WHO SSC)</li>
            <li><strong>مشاكل العد الجراحي (Counts):</strong> التباينات، مقاطعات العد، اكتشاف عناصر مفقودة لاحقاً، "الحلول غير الرسمية" غير الموثقة. (AORN concepts)</li>
            <li><strong>مخاطر تسمية/التعامل مع العينات:</strong> تسمية خاطئة، غير مسماة، تسمية متأخرة، عدم تطابق الحاويات، أخطاء في المادة الحافظة (Fixative)، انقطاع سلسلة العهدة. (AORN; AHRQ)</li>
            <li><strong>إخفاقات موثوقية الحقل المعقم:</strong> اختراقات (Breaks)، مخاوف التلوث، قضايا المرور/الأبواب المرتبطة بتعرض الحقل، الإجراءات التصحيحية المتخذة. (AORN concepts)</li>
            <li><strong>الغرسات (Implants) وإخفاقات التتبع:</strong> فقدان التقاط UDI/الدفعة، اكتشاف غرسة منتهية الصلاحية، عدم تطابق بين المطلوب والمتاح، إخفاقات سير عمل الاستدعاء. (AORN concepts)</li>
            <li><strong>التعامل مع الأدوية في الحقل المعقم:</strong> أكواب/محاقن غير مسماة، حوادث LASA الوشيكة، خطر التركيز الخاطئ، أخطاء إضافات الري (Irrigation). (ISMP concepts; AORN)</li>
            <li><strong>أعطال المعدات:</strong> فشل الشفط، عطل ESU، عدم توفر إخلاء الدخان عند الحاجة، أعطال الطاقة/البطاريات، إرجاع جهاز للخدمة بدون فحص. (ECRI; AHRQ)</li>
            <li><strong>أحداث خطر حريق غرفة العمليات:</strong> أكسجين مفتوح بالقرب من مصادر الاشتعال، ترتيب الفرش الذي يحبس الأكسجين، فشل التحكم في الدخان، انحرافات سلامة الليزر. (NFPA 99 concepts; ASA/APSF fire concepts)</li>
            <li><strong>إصابات الأدوات الحادة والتعرض:</strong> أو الحوادث الوشيكة (أدوات حادة في الكتان، ملاحظة إعادة التغطية Recapping، امتلاء زائد لحاويات الحادة). (OSHA; CDC; AORN)</li>
            <li><strong>أحداث ضغط التدفق (Flow pressure) التي أجبرت على التفافات غير آمنة:</strong> استعجال المهلة (Time-out)، تداخل التنظيف مع الإعداد المعقم، إدخال المريض لغرفة غير مكتملة، نقص المتطلبات الأساسية بسبب ضغط الجدولة. (IHI; AHRQ)</li>
        </ul>
    </div>

    <h3>29.1.3 "لكن هذا يحدث كل يوم" هو بالضبط سبب وجوب الإبلاغ عنه</h3>
    <p>التطبيع (Normalization) هو العدو الهادئ. إذا كان الظرف غير الآمن متكرراً، فإن الإبلاغ عنه ليس "شكوى"—إنه <strong>بيانات</strong>. المخاطر المتكررة هي أفضل الأهداف للتحسين لأن الإصلاحات الصغيرة تنتج مكاسب سلامة كبيرة. (IHI)</p>
    <p><span class="english-term"><strong>29.1.3 “But it happens every day” is exactly why it must be reported</strong><br>Normalization is the quiet enemy. If an unsafe condition is frequent, reporting is not “complaining”—it is data. Frequent hazards are the best targets for improvement because small fixes produce large safety gains. (IHI)</span></p>

    <h3>29.1.4 ماذا يجب ألا تبلغ عنه؟ لا شيء تقريباً—إذا كان نظامك صحياً</h3>
    <p>الهدف ليس الغرق في الأوراق. الهدف هو إنشاء نظام إبلاغ: <strong>سهل الاستخدام، غير عقابي، مُفرز بذكاء، ومُوجه نحو الإجراءات (Action-oriented).</strong> (AHRQ; IHI)<br>إذا لم يُبلغ الأشخاص، فذلك يعني عادة وجود خوف، أو عبء، أو عدم إيمان بأن أي شيء سيتغير.</p>
    <p><span class="english-term"><strong>29.1.4 What not to report? Almost nothing—if your system is healthy</strong><br>The goal is not to drown in paperwork. The goal is to create a reporting system that is: easy to use, non-punitive, triaged intelligently, action-oriented. (AHRQ; IHI). If people don’t report, it usually means fear, burden, or disbelief that anything will change.</span></p>

    <h2>29.2 كيف تبلغ (اجعله سهلاً، سريعاً، وذا قيمة) / How to Report</h2>

    <h3>29.2.1 قاعدة الدقيقتين / The 2-minute rule</h3>
    <p>إذا كان الإبلاغ عن حادثة وشيكة يستغرق أكثر من دقيقتين، فلن يحدث باستمرار. يسجل نموذج الإبلاغ الجيد في غرفة العمليات:</p>
    <ul>
        <li>ماذا حدث،</li>
        <li>أين/متى،</li>
        <li>من كان متورطاً حسب الدور (ليس لللوم—بل للسياق)،</li>
        <li>ما الذي تم اكتشافه وكيف،</li>
        <li>إجراء الاحتواء الفوري (Immediate containment)،</li>
        <li>العوامل المساهمة المتصورة (ضغط الوقت، الإمدادات المفقودة، المقاطعات). (IHI)</li>
    </ul>

    <h3>29.2.2 الإبلاغ يجب أن يحمي المُبلّغ / Reporting must protect the reporter</h3>
    <p>إذا تسبب الإبلاغ في الشعور بالخجل أو العقاب، ستصبح غرفة العمليات صامتة. الصمت ليس سلامة. الصمت هو عمى. (AHRQ)</p>
    <p><span class="english-term"><strong>29.2.2 Reporting must protect the reporter</strong><br>If reporting triggers shame or punishment, the OR will become silent. Silence is not safety. Silence is blindness. (AHRQ)</span></p>

    <h3>29.2.3 يجب أن يرى المُبلّغون ملاحظات (Feedback) سريعاً</h3>
    <p>حتى الإقرار القصير—"تم الاستلام، تم الفرز، ستتم مراجعته في اجتماع السلامة"—يحسن الثقة. إذا اختفت التقارير في ثقب أسود، سيموت الإبلاغ. (IHI)</p>

    <h3>29.2.4 السرية ومنطق "الثقافة العادلة" / Confidentiality and “just culture” logic</h3>
    <p>تطبق غرفة العمليات الناضجة نهجاً عادلاً:</p>
    <ul>
        <li>قضايا النظام ← إصلاحات في النظام.</li>
        <li>سلوك محفوف بالمخاطر (At-risk) ← توجيه وإعادة تصميم.</li>
        <li>سلوك متهور (Reckless) ← مساءلة. (AHRQ “just culture” concepts)</li>
    </ul>

    <h2>29.3 الاحتواء الفوري في غرفة العمليات (أوقف الضرر الآن، تعلم لاحقاً) / Immediate Containment</h2>

    <h3>29.3.1 تحتاج غرفة العمليات إلى "رد فعل احتواء" / The OR needs a “containment reflex”</h3>
    <p>يمكن أن يستغرق التحقيق أياماً. الاحتواء يجب أن يحدث في دقائق. تشمل إجراءات الاحتواء النموذجية:</p>
    <p><span class="english-term">Investigation can take days. Containment must occur in minutes. Typical containment actions include:</span></p>
    <ul>
        <li><strong>إيقاف تقدم الإجراء (Stop procedure progression)</strong> إذا كان هناك شك في الهوية/الموقع/الإجراء. (WHO SSC; Universal Protocol concepts)</li>
        <li><strong>حجر (Quarantine)</strong> الإمدادات المشتبه بتلوثها. (AORN)</li>
        <li><strong>حجز العينة (Hold specimen)</strong> وإعادة التحقق من الهوية قبل مغادرة المسرح. (AORN)</li>
        <li><strong>التوقف وتشغيل خوارزمية تباين العد الجراحي</strong>. (AORN)</li>
        <li><strong>وضع علامة وإزالة (Tag and remove)</strong> المعدات المعطلة. (ECRI)</li>
        <li><strong>تفعيل خطوات استجابة حريق غرفة العمليات</strong> إذا حدث اشتعال أو حادثة وشيكة توحي بخطر وشيك. (NFPA 99 concepts)</li>
    </ul>

    <h3>29.3.2 توثيق إجراءات الاحتواء كجزء من الحدث</h3>
    <p>الاحتواء هو دليل على وظيفة الحاجز. تسجيله يساعد في تكرار ما نجح.</p>
    <p><span class="english-term"><strong>29.3.2 Document containment actions as part of the event</strong><br>Containment is evidence of barrier function. Capturing it helps replicate what worked.</span></p>

    <h2>29.4 تحليل السبب الجذري المُركز على المسرح (RCA يطابق واقع غرفة العمليات)</h2>
    <h3>29.4 Theatre-Focused RCA (Root Cause Analysis That Matches OR Reality)</h3>

    <h3>29.4.1 لماذا يفشل RCA العام في غرفة العمليات / Why generic RCA fails in the OR</h3>
    <p>غالباً ما تتجاهل قوالب RCA العامة تفاصيل غرفة العمليات: ديناميكيات الحقل المعقم، توتر العد، التسلسل الهرمي، ضغط الوقت، اعتمادات المعدات المعقدة، والتسليم بين فرق متعددة. يجب أن يكون RCA غرفة العمليات مُصمماً لبيئة المسرح. (AHRQ; IHI)</p>

    <h3>29.4.2 متى نقوم بـ RCA كامل مقابل "RCA مصغر" / When to do RCA vs. “mini-RCA”</h3>
    <p>ليس كل حدث يحتاج إلى RCA رسمي كامل. استخدم الفرز (Triage):</p>
    <ul>
        <li><strong>RCA كامل (Full RCA):</strong> للضرر الجسيم، الأحداث التي لا ينبغي أن تحدث (Never events)، الحوادث الوشيكة المتكررة عالية الخطورة، والمخاطر الشاملة للنظام.</li>
        <li><strong>RCA مصغر / مراجعة استخلاص (Mini-RCA / debrief review):</strong> للحوادث الوشيكة الروتينية حيث تكون الإصلاحات السريعة واضحة. (IHI)</li>
    </ul>

    <h3>29.4.3 فريق RCA لغرفة العمليات (من يجب أن يحضر) / The OR RCA team</h3>
    <p>التحقيق الفعال يشمل:</p>
    <ul>
        <li>قائد تمريض (معرفة بسير العمل).</li>
        <li>ممثل جراحين (واقع الإجراء).</li>
        <li>ممثل تخدير (الترابط).</li>
        <li>ممثل CSSD/التعقيم (لأدوات/العقامة).</li>
        <li>مُيسر جودة/سلامة (تفكير منهجي).</li>
        <li>هندسة طبية/Biomed (عندما تكون المعدات معنية). (AHRQ; IHI)</li>
    </ul>

    <h3>29.4.4 المهارة الأهم: رسم خريطة سير العمل الحقيقي / The single most important OR RCA skill</h3>
    <p>لا تبدأ بـ "لماذا فعلت الممرضة ذلك؟" ابدأ بـ: <strong>"اشرح لي الجدول الزمني من القرار إلى الشق الجراحي إلى الخروج (Sign-out)."</strong> (IHI)</p>
    <p><span class="english-term"><strong>29.4.4 The single most important OR RCA skill: mapping the real workflow</strong><br>Don’t start with “why did the nurse do that?” Start with: “Walk me through the timeline from decision to incision to sign-out.” (IHI)</span></p>

    <h2>29.5 تصنيف أحداث غرفة العمليات (صنف الأحداث بطريقة العمليات)</h2>
    <h3>29.5 The OR Event Taxonomy (Classify Events the OR Way)</h3>

    <h3>29.5.1 لماذا يهم التصنيف / Why taxonomy matters</h3>
    <p>إذا صنفت كل شيء كـ "خطأ بشري"، فلن تصلح شيئاً. يجب أن يعكس التصنيف الأنظمة:</p>
    <ul>
        <li><strong>الأشخاص (People):</strong> تدريب، إرهاق، تواصل.</li>
        <li><strong>العملية (Process):</strong> خطوات غير واضحة، بوابات مفقودة.</li>
        <li><strong>البيئة (Environment):</strong> حركة مرور، ضوضاء، تخطيط.</li>
        <li><strong>المعدات (Technology):</strong> توفر، تصميم، عطل.</li>
        <li><strong>الإمدادات (Supplies):</strong> نواقص، انتهاء صلاحية، تغليف.</li>
        <li><strong>المنظمة (Organization):</strong> توظيف، ضغط جدولة، حوكمة.</li>
        <li><strong>الخارج (External):</strong> تأخير موردين، سعة الأسرة. (AHRQ; IHI)</li>
    </ul>

    <h3>29.5.2 فصل "الأخطاء النشطة" عن "الظروف الكامنة" / Active errors vs latent conditions</h3>
    <p><strong>الأخطاء النشطة</strong> مرئية في النهاية الحادة. <strong>الظروف الكامنة</strong> هي عيوب التصميم الخفية (ثقافة التبديل المتسرع، مستويات Par منخفضة، سياسات غير واضحة). يجب أن يستهدف RCA الظروف الكامنة. (AHRQ)</p>

    <h2>29.6 طريقة RCA للمسرح الجراحي (نهج عملي) / The Theatre RCA Method</h2>

    <div class="alert-box">
        <ol>
            <li><strong>الخطوة 1 — بناء الجدول الزمني:</strong> (دقيقة بدقيقة). استخدم نقاط ارتكاز غرفة العمليات: مريض في الغرفة، Time-out، شق جراحي، أخذ العينة، مراحل العد، فتح الغرسة، Sign-out. (AORN; WHO SSC)</li>
            <li><strong>الخطوة 2 — تحديد نقاط وفشل الحواجز:</strong> اسأل: ما هي الحواجز الموجودة؟ هل كانت حاضرة؟ هل عملت؟ (مثل: منطقة محايدة، بوابة التنظيف المكتمل، خوارزمية التباين).</li>
            <li><strong>الخطوة 3 — تحديد العوامل المساهمة (عدسة العوامل البشرية):</strong> ابحث عن: مقاطعات، تعدد مهام، إرهاق، تخطيط سيء يتطلب مشياً/بحثاً، مسؤولية غير واضحة، تسلسل هرمي يمنع التحدث. (AHRQ)</li>
            <li><strong>الخطوة 4 — "لماذا 5 مرات" (5 Whys):</strong> مفيدة فقط إذا لم تتوقف مبكراً (مثال: عينة مسماة خطأ → تحضير متأخر → عدم توفر ملصقات → تغيير الموقع → لا يوجد مالك → لا توجد حوكمة). الإصلاح هنا في تصميم النظام. (IHI)</li>
            <li><strong>الخطوة 5 — تحديد أقوى الإجراءات التصحيحية:</strong>
                <ul>
                    <li><em>إجراءات قوية (تغير النظام):</em> توحيد، وظائف إجبار/توقف إلزامي، إعادة تصميم فيزيائي.</li>
                    <li><em>إجراءات ضعيفة (تعتمد على الذاكرة):</em> تذكيرات، "كن أكثر حذراً"، إعادة تثقيف فقط. (AHRQ; IHI)</li>
                </ul>
            </li>
        </ol>
    </div>

    <h2>29.7 القصة الحقيقية 1: الحادثة الوشيكة للعينة التي أصبحت انتصاراً للنظام</h2>
    <h3>29.7 Story 1 (Narrative): The specimen near-miss that became a system win</h3>

    <div class="quote-box">
        <p>وقعت حادثة وشيكة (Near-miss) في ملصق عينة. تم التقاطها قبل مغادرة المسرح. أراد الكثيرون "المضي قدماً". لكننا أصررنا على "RCA مصغر".</p>
        <p>لم تكن النتائج عن شخص واحد. لم يكن للفة الملصقات في الغرفة مكان ثابت. أثناء التبديل، كانت تنتقل. تحت ضغط الجدول الزمني، حدثت التسمية متأخراً، في لحظة تعدد مهام. الحاجز الذي أنقذ الحالة كان لحظة تحدث بصوت عالٍ (Speak-up)—لكن النظام كان يعتمد على الحظ في أن يتحدث شخص ما في كل مرة. (AHRQ)</p>
        <p><strong>الإجراءات التصحيحية كانت بسيطة وقوية:</strong></p>
        <ul>
            <li>مكان ثابت للملصقات.</li>
            <li>بند في قائمة التبديل: "الملصقات موجودة".</li>
            <li>توقف إلزامي: لا يمكن أن تغادر العينة بدون تحقق مزدوج. (AORN; AHRQ)</li>
        </ul>
        <p>في غضون أسابيع، انخفضت الحوادث الوشيكة. والأهم من ذلك، زاد الإبلاغ—لأن الموظفين رأوا أن الإبلاغ أنتج تغييراً حقيقياً.</p>
        <p><span class="english-term">Within weeks, near-misses dropped. More importantly, reporting increased—because staff saw that reporting produced real change.</span></p>
    </div>

    <h2>29.8 تتبع الإجراءات (حيث تذهب تحقيقات RCA الجيدة لتموت—أو لتعيش)</h2>
    <h3>29.8 Action Tracking (Where Good RCAs Go to Die—or to Live)</h3>

    <h3>29.8.1 القاعدة: كل إجراء يحتاج إلى مالك، موعد نهائي، وطريقة تحقق</h3>
    <p>الإجراء التصحيحي بدون مالك هو مجرد أمنية. وبدون موعد نهائي يصبح "يوماً ما". وبدون تحقق، يصبح مسرحية. (IHI)</p>
    <p><span class="english-term"><strong>29.8.1 The rule: every action needs an owner, deadline, and verification method</strong><br>A corrective action without an owner is a wish. Without a deadline, it becomes “someday.” Without verification, it becomes theatre. (IHI)</span></p>

    <h3>29.8.2 استخدم مبدأ SMART بشكل مخصص لغرفة العمليات</h3>
    <p>يجب أن تكون الإجراءات: محددة لسير العمل، قابلة للقياس السلوكي، قابلة للتحقيق بموارد حقيقية، ذات صلة بالخطر، ومقيدة بوقت. (IHI)</p>

    <h3>29.8.3 بناء "سجل إجراءات" لغرفة العمليات (Action Register)</h3>
    <p>يجب أن تحتفظ غرفة العمليات بسجل حي يحتوي على:</p>
    <ul>
        <li>معرف الحدث / فئته.</li>
        <li>وصف الإجراء.</li>
        <li>المالك (Owner).</li>
        <li>تاريخ الاستحقاق.</li>
        <li>الحالة.</li>
        <li>أدلة التحقق.</li>
        <li>تاريخ الإغلاق.</li>
        <li>خطة الاستدامة. (IHI)</li>
    </ul>

    <h3>29.8.4 طرق التحقق التي تعمل بالفعل</h3>
    <p>تدقيقات الملاحظة المباشرة (أسلوب التوجيه/Coaching)، أخذ عينات من التوثيق، عمليات تدقيق المخزون، سجلات جاهزية المعدات، والتدريبات الوهمية (Simulations) لأنماط الفشل عالية الخطورة. (IHI)</p>

    <h2>29.9 حلقات التعلم (تحويل الأحداث إلى عمل قياسي مُحسّن)</h2>
    <h3>29.9 Learning Loops (Turn Events Into Improved Standard Work)</h3>

    <h3>29.9.1 حلقة التعلم هي قلب الاستدامة</h3>
    <p>تتكون حلقة التعلم من 5 خطوات:</p>
    <ol>
        <li>الإبلاغ عن الحدث.</li>
        <li>التحقيق النسبي.</li>
        <li>تصميم إجراء تصحيحي (ضوابط قوية).</li>
        <li>تنفيذ الإجراء والتحقق منه.</li>
        <li><strong>تحديث العمل القياسي + تدريب الموظفين + إعادة القياس.</strong> (IHI)</li>
    </ol>

    <h3>29.9.2 "تحديث السياسة" ليس حلقة تعلم</h3>
    <p>السياسات لا تغير السلوك ما لم يتم دمجها في: قوائم التحقق، إعداد الغرفة، تخطيط الإمدادات، بوابات سير العمل، والتوجيه (Orientation). (IHI; AHRQ)</p>

    <h3>29.9.3 نشر التعلم عبر الغرف بدون لوم</h3>
    <p>استخدم "موجزات تعلم" مجهولة المصدر (Anonymized learning briefs) في اجتماعات غرفة العمليات: ماذا حدث، ما الذي أنقذ الموقف، ماذا غيرنا، وما الذي يجب على الجميع فعله الآن. (AHRQ)</p>

    <h2>29.10 قوالب RCA مُركزة على المسرح (ماذا تسأل؟) / Theatre-Focused RCA Templates</h2>

    <div class="success-box">
        <ul>
            <li><strong>29.10.1 بعد تباين في العد (Counts):</strong> أين تمت مقاطعة العد؟ هل اُتبعت الخوارزمية بالكامل؟ هل كان هناك ضغط وقت/تداخل؟ (AORN; AHRQ)</li>
            <li><strong>29.10.2 بعد حادثة وشيكة لعينة (Specimen):</strong> متى تمت التسمية (فورية أم متأخرة)؟ هل كان التحقق مزدوجاً؟ هل كان هناك عبء تعدد مهام؟ (AORN; AHRQ)</li>
            <li><strong>29.10.3 بعد كسر العقامة (Sterility break):</strong> كيف تم الكسر والتعافي؟ هل كان للمرور دور؟ هل كان التبديل متسرعاً؟ (AORN)</li>
            <li><strong>29.10.4 بعد عطل معدات (Equipment failure):</strong> هل اكتمل فحص الجاهزية؟ هل تم عزل الجهاز المعيب؟ هل كان البديل (Backup) معروفاً؟ (ECRI; IHI)</li>
        </ul>
    </div>

    <h2>29.11 القصة الحقيقية 2: "RCA الذي أصلح النظام—وليس الشخص"</h2>
    <h3>29.11 Story 2: “The RCA that fixed the system—not the person”</h3>

    <div class="concept-box">
        <p>تم فتح حجم غرسة خاطئ تقريباً. تم اكتشافه أثناء التحقق. رد الفعل الأولي: "من أخطأ؟"</p>
        <p>أظهر الـ RCA أن <strong>سير العمل كان يدعو للفشل</strong>: كانت بطاقات التفضيل (Preference cards) قديمة، وكانت صناديق الغرسات مخزنة بعبوات متشابهة متجاورة، وخطوة التحقق لم يكن لها نص أو مالك محدد. (AORN concepts; AHRQ)</p>
        <p><strong>الإجراءات التصحيحية كانت قوية:</strong> حوكمة لتحديث البطاقات، فصل مادي ووضع ملصقات على تخزين الغرسات، نص موحد لـ "وقفة التحقق من الغرسة"، وتدقيقات لالتقاط التتبع. (IHI)<br>لم يُفضح أحد. تعلم الجميع. هذه هي غرفة العمليات في أفضل حالاتها: متواضعة، منظمة، وأكثر أماناً.</p>
        <p><span class="english-term">No one was shamed. Everyone learned. That is the OR at its best: humble, structured, and safer.</span></p>
    </div>

    <h2>29.12 جعل الإبلاغ آمناً للناس (الضحية الثانية والسلامة النفسية)</h2>
    <h3>29.12 Making Reporting Safe for People (Second Victim and Psychological Safety)</h3>

    <h3>29.12.1 يجب على غرفة العمليات معاملة الموظفين كبشر بعد الأحداث</h3>
    <p>حتى الحوادث الوشيكة يمكن أن تخلق شعوراً بالذنب والخوف. الدعم (Second Victim Support) يقلل من الضيق طويل الأمد ويحسن الصدق. (AHRQ)</p>
    <p><span class="english-term"><strong>29.12.1 The OR must treat staff as humans after events</strong><br>Even near-misses can create guilt and fear. Support reduces long-term distress and improves honesty. (AHRQ)</span></p>

    <h3>29.12.2 إذا عاقبت الإبلاغ، فأنت تدرب على الصمت</h3>
    <p>لوحة القيادة التي تعرض "صفر حوادث" في غرفة عمليات مزدحمة لا تعني عادةً التميز. إنها تعني الخوف. (AHRQ; IHI)</p>

    <h2>29.13 التنفيذ العملي (كيف تبني النظام في 60 يوماً) / Practical Implementation</h2>

    <ol>
        <li><strong>الأسابيع 1-2:</strong> تبسيط الإبلاغ وتحديد فئات الأحداث (تدريب الموظفين على قيمة الحوادث الوشيكة). (IHI)</li>
        <li><strong>الأسابيع 3-4:</strong> بناء فرز الأحداث وعملية "RCA المصغر" (Mini-RCA). (IHI)</li>
        <li><strong>الأسابيع 5-6:</strong> إطلاق سجل الإجراءات (Action Register) وعمليات تدقيق التحقق. (IHI)</li>
        <li><strong>الأسابيع 7-8:</strong> دمج التعلم في العمل القياسي والتوجيه (Orientation). (AORN; IHI)</li>
    </ol>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>أبلغ عن الضرر، والحوادث الوشيكة، والظروف غير الآمنة—<strong>الحوادث الوشيكة هي كنز</strong> لأنها تُعلّمك بدون التسبب في إصابة. (AHRQ; IHI)<br>
            <span class="english-term">Report harm, near-misses, and unsafe conditions—near-misses are gold because they teach without injury.</span></li>
            
            <li>يجب أن يكون RCA في غرفة العمليات <strong>محلياً للمسرح</strong>: جداول زمنية، حواجز، سير عمل، عوامل بشرية—وليس للبحث عن "من نلوم". (AHRQ)<br>
            <span class="english-term">OR RCA must be theatre-native: timelines, barriers, workflow, human factors—not “who to blame.”</span></li>
            
            <li>الإجراءات التصحيحية يجب أن تكون تغييرات قوية في النظام، يتم تتبعها بملاك (Owners)، ومواعيد نهائية، وتحقق (Verification). (IHI)<br>
            <span class="english-term">Corrective actions must be strong system changes, tracked with owners, deadlines, and verification.</span></li>
            
            <li>حلقات التعلم تحول الأحداث إلى <strong>عمل قياسي (Standard work)</strong>—وبدون ذلك، تصبح تقارير RCA مجرد أوراق ويتكرر الخطر. (IHI)<br>
            <span class="english-term">Learning loops turn events into standard work—without that, RCAs become paperwork and risk repeats.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient Safety resources (incident reporting systems, human factors, psychological safety/second victim concepts, systems approach).</li>
            <li>Institute for Healthcare Improvement (IHI) — Quality improvement and reliability resources (measurement for improvement, action tracking, learning loops, strong vs weak corrective actions).</li>
            <li>Association of periOperative Registered Nurses (AORN) — Guidelines for Perioperative Practice (counts discipline, specimen handling, sterility reliability, perioperative workflow barriers).</li>
            <li>World Health Organization Surgical Safety Checklist (WHO SSC) (concepts) — Meaningful pauses, communication barriers, time-out reliability.</li>
            <li>Universal Protocol / wrong-site prevention (concepts) — Verification and site/procedure correctness barriers.</li>
            <li>ECRI (concepts) — Technology hazard and equipment failure reporting/controls.</li>
            <li>OSHA / CDC (concepts) — Staff exposure/sharps reporting as safety learning domain.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  3: `<!-- Download Button -->
    

    <div class="part-title">PART I — Foundations of OR Safety &amp; Quality</div>
    <div class="part-title">الجزء الأول — أسس السلامة والجودة في غرفة العمليات</div>
    
    <h1>CHAPTER 3 — OR Risk Map: Clinical, Operational, Environmental, Legal</h1>
    <div class="subtitle">الفصل الثالث — خريطة مخاطر غرفة العمليات: السريرية، التشغيلية، البيئية، والقانونية<br>
    <span style="font-size: 18px;">(Risk Taxonomy • Risk Matrix • High-Severity Hazards • Escalation Pathways)<br>
    (تصنيف المخاطر • مصفوفة المخاطر • المخاطر عالية الشدة • مسارات التصعيد)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>بناء <strong>تصنيف عملي لمخاطر غرفة العمليات (OR risk taxonomy)</strong> يغطي المجالات السريرية، التشغيلية، البيئية، والقانونية. (ISO 31000 concepts; AHRQ)<br>
            <span class="english-term">Build a practical <strong>OR risk taxonomy</strong> that covers clinical, operational, environmental, and legal domains. (ISO 31000 concepts; AHRQ)</span></li>
            
            <li>استخدام <strong>مصفوفة المخاطر (Risk matrix)</strong> بشكل صحيح (الاحتمالية × التأثير) وفهم قيودها فيما يتعلق بالمخاطر عالية الشدة أو "الأحداث التي لا ينبغي أن تحدث" (Never events). (ISO 31000 concepts; IHI)<br>
            <span class="english-term">Use a <strong>risk matrix</strong> correctly (likelihood × impact) and understand its limitations in high-severity “never event” hazards. (ISO 31000 concepts; IHI)</span></li>
            
            <li>تحديد أكثر <strong>مخاطر غرفة العمليات عالية الشدة (High-severity hazards)</strong> شيوعاً، وأنواع حواجزها الأقوى (التوقف الإلزامي/Hard stops، وظائف الإجبار/Forcing functions، التكرار، إمكانية التتبع). (WHO SSC; The Joint Commission; AORN)<br>
            <span class="english-term">Identify the most common <strong>high-severity OR hazards</strong> and their strongest barrier types (hard stops, forcing functions, redundancy, traceability). (WHO SSC; The Joint Commission; AORN)</span></li>
            
            <li>تصميم <strong>مسارات تصعيد (Escalation pathways)</strong> تعمل تحت الضغط الحقيقي، مع محفزات (Triggers) واضحة، وأدوار، وسلطة لـ "إيقاف الخط" (Stop the line). (The Joint Commission; IHI)<br>
            <span class="english-term">Design <strong>escalation pathways</strong> that work under real pressure, with clear triggers, roles, and authority to “stop the line.” (The Joint Commission; IHI)</span></li>
            
            <li>تحويل رسم خريطة المخاطر إلى إجراءات فعلية: ضوابط ذات أولوية، عمليات تدقيق، وحلقة تعلم (Learning loop). (IHI; AHRQ)<br>
            <span class="english-term">Convert risk mapping into action: prioritized controls, audits, and a learning loop. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "اليوم الذي تعلمت فيه غرفة العمليات المعنى الحقيقي لـ 'الخطر'"</strong><br>
        <span class="english-term">A true-to-life case: “The day the OR learned what ‘risk’ really means” (Real Scientific Story)</span>
    </div>

    <p>بدأ كأي يوم مزدحم: قائمة عمليات ممتلئة، بداية متأخرة، حالات متتالية. حدثان غير متوقعين قبل الظهر.</p>
    <p><span class="english-term">It began like any busy day: full list, late start, back-to-back cases. Two unexpected events occurred before noon.</span></p>

    <p>أولاً، حادثة قريبة (Near-miss): وصلت صينية الغرسات (Implant tray)، لكن كان هناك مكون رئيسي مفقود. اقترح أحد الموظفين استعارة جزء مشابه من طقم آخر—"يجب أن يناسب". تردد الجراح، ثم طلب التأكيد. لم يستطع أحد تأكيد التوافق بثقة.</p>
    <p><span class="english-term">First, a near-miss: an implant tray arrived, but one key component was missing. A staff member suggested borrowing a similar part from another set—“it should fit.” The surgeon hesitated, then asked for confirmation. No one could confidently confirm compatibility.</span></p>

    <p>ثانياً، عدم تطابق في التوثيق: نص الحجز على اسم إجراء معين، واستخدمت الموافقة صياغة مختلفة، وأشار تقرير التصوير إلى تفصيل دقيق غير منعكس في القائمة. التقطت المهلة (Time-out) عدم التطابق، لكن الغرفة شعرت بالضغط: "إذا توقفنا الآن، سينهار اليوم بأكمله."</p>
    <p><span class="english-term">Second, a documentation mismatch: the booking said one procedure name, the consent used different wording, and the imaging report pointed to a nuance not reflected on the list. The time-out caught the mismatch, but the room felt the pressure: “If we stop now, the whole day collapses.”</span></p>

    <p>بحلول فترة ما بعد الظهر، حدث ثالث: لوحظ خطأ في ملصق العينة—بعد أن غادرت العينة الغرفة بالفعل. ركضت الممرضة الدوارة (Circulating nurse) خلفها، وصححت السلسلة قبل أن تصبح غير قابلة للإصلاح.</p>
    <p><span class="english-term">By afternoon, a third event: a specimen label error was noticed—after the specimen had already left the room. The circulating nurse ran after it, corrected the chain before it became irreversible.</span></p>

    <div class="alert-box">
        <p>في نهاية اليوم، اجتمعت قيادة غرفة العمليات. ثلاثة أحداث—لم ينتهِ أي منها بضرر. ومع ذلك شعر الجميع بعدم الارتياح.</p>
        <p><span class="english-term">At the end of the day, the OR leadership gathered. Three events—none ended in harm. Yet everyone felt unsettled.</span></p>
    </div>

    <p>لخصت إحدى الممرضات الخبيرات الأمر ببساطة: "لقد نجونا اليوم، ولكن ليس لأن النظام كان آمناً. <strong>لقد نجونا لأننا كنا محظوظين—ولأن بضعة أشخاص أصبحوا أبطالاً</strong>."</p>
    <p><span class="english-term">One senior nurse summarized it simply: “We survived today, but not because the system was safe. <strong>We survived because we got lucky—and because a few people became heroes.</strong>”</span></p>

    <div class="success-box">
        <p>أصبحت تلك الجملة نقطة التحول. قررت غرفة العمليات التوقف عن التعامل مع السلامة كمجموعة من القواعد المتناثرة والبدء في التعامل معها كـ <strong>نظام مُدار المخاطر (Risk-managed system)</strong>: تحديد المخاطر، تقييم المخاطر، بناء الحواجز، وإنشاء قواعد تصعيد تحمي الموظفين والمرضى. (IHI; AHRQ)</p>
        <p><span class="english-term">That sentence became the turning point. The OR decided to stop treating safety as a set of scattered rules and start treating it as a <strong>risk-managed system</strong>: identify hazards, rate risks, build barriers, and create escalation rules that protect staff and patients. (IHI; AHRQ)</span></p>
    </div>

    <h2>3.1 ماذا يعني "الخطر" في غرفة العمليات (أساسيات الخطر لواقع غرفة العمليات)</h2>
    <h3>3.1 What “Risk” Means in the Operating Theatre (Risk Basics for OR Reality)</h3>

    <h3>3.1.1 الخطر ليس الخوف؛ الخطر هو الاحتمالية والعاقبة / Risk is not fear; risk is probability and consequence</h3>
    <p>في الرعاية الصحية، غالباً ما يُشعر بـ "الخطر" عاطفياً—"أنا لا أحب هذه الحالة"، "هذا يبدو غير آمن". هذا الحدس مهم، لكن الأنظمة تحتاج إلى لغة مشتركة.</p>
    <p><span class="english-term">In healthcare, “risk” is often felt emotionally—“I don’t like this case,” “this feels unsafe.” That intuition matters, but systems need a shared language.</span></p>
    
    <p>تشغيلياً، الخطر هو:</p>
    <ul>
        <li><strong>الاحتمالية (Likelihood):</strong> كم مرة يمكن أن يحدث هذا؟</li>
        <li><strong>التأثير (Impact):</strong> ما مدى السوء إذا حدث؟ (ISO 31000 concepts)</li>
    </ul>
    <p><span class="english-term">Operationally, risk is: <strong>Likelihood</strong>: how often could this happen? <strong>Impact</strong>: how bad would it be if it happens?</span></p>
    
    <p>تحتاج غرفة العمليات إلى كليهما: الحدس البشري لاكتشاف الحالات الشاذة (Anomalies) والأدوات المنظمة لمنع تطبيع الخطر. (IHI)</p>
    <p><span class="english-term">The OR needs both: human intuition to detect anomalies and structured tools to prevent normalization of danger. (IHI)</span></p>

    <h3>3.1.2 غرفة العمليات هي نظام عالي المخاطر حتى عندما يكون الضرر نادراً / The OR is a high-risk system even when harm is rare</h3>
    <p>بعض المخاطر نادرة ولكنها كارثية (الجراحة في الموقع الخاطئ، العناصر المتروكة، حريق غرفة العمليات). إذا قمت بتقييم الخطر فقط بناءً على "التكرار" (Frequency)، فسوف تقلل من حماية المخاطر عالية الشدة. (The Joint Commission; WHO SSC)</p>
    <p><span class="english-term">Some hazards are rare but catastrophic (wrong-site surgery, retained items, OR fire). If you rate risk only by “frequency,” you will under-protect high-severity hazards. (The Joint Commission; WHO SSC)</span></p>
    
    <p>لذلك، يجب أن تعامل إدارة مخاطر غرفة العمليات بعض المخاطر على أنها <strong>"مخاطر يجب ألا تحدث" (Must-not-happen hazards)</strong> حيث تكون قوة الضابط (Control strength) غير قابلة للتفاوض. (The Joint Commission)</p>
    <p><span class="english-term">Therefore, OR risk management must treat certain hazards as <strong>“must-not-happen hazards”</strong> where the control strength is non-negotiable. (The Joint Commission)</span></p>

    <h3>3.1.3 الغرض من خريطة المخاطر / The purpose of a risk map</h3>
    <p>خريطة المخاطر ليست مجرد عمل ورقي. إنها أداة اتخاذ قرار تجيب على:</p>
    <p><span class="english-term">A risk map is not paperwork. It is a decision tool that answers:</span></p>
    <ul>
        <li>ما الذي يمكن أن يؤذي المرضى أو الموظفين؟ (<strong>المخاطر / Hazards</strong>)</li>
        <li>كيف يحدث هذا هنا؟ (<strong>المحفزات المحلية / Local triggers</strong>)</li>
        <li>ما هي الحواجز القوية بما فيه الكفاية؟ (<strong>الضوابط / Controls</strong>)</li>
        <li>من لديه السلطة لإيقاف التدفق غير الآمن؟ (<strong>التصعيد / Escalation</strong>)</li>
        <li>كيف سنعرف ما إذا كنا نتحسن؟ (<strong>المقاييس / Metrics</strong>) (IHI; AHRQ)</li>
    </ul>
    <p><span class="english-term">What can hurt patients or staff? (hazards). How does it happen here? (local triggers). Which barriers are strong enough? (controls). Who has authority to stop unsafe flow? (escalation). How will we know if we are improving? (metrics).</span></p>

    <h2>3.2 تصنيف مخاطر غرفة العمليات (المجالات الأربعة) / OR Risk Taxonomy (The Four Domains)</h2>

    <div class="concept-box">
        <h3>3.2.1 الخطر السريري (ضرر المريض من العمليات السريرية) / Clinical risk</h3>
        <p>يشمل الخطر السريري:</p>
        <ul>
            <li>المريض الخاطئ / الإجراء الخاطئ / الموقع الخاطئ (The Joint Commission – Universal Protocol)</li>
            <li>عدوى الموقع الجراحي (SSI) وإخفاقات التلوث (WHO SSI; CDC SSI)</li>
            <li>العناصر الجراحية المتروكة (AORN)</li>
            <li>التسمية الخاطئة للعينات وسلسلة الأخطاء التشخيصية (AORN; AHRQ)</li>
            <li>إصابات الوضعية (الأعصاب/الضغط/العين) (AORN; NPIAP/EPUAP)</li>
            <li>تصاعد النزيف (Hemorrhage) والتأخير في الاستجابة (IHI concepts of escalation)</li>
            <li>التعامل مع الأدوية في الحقل المعقم (خارج نطاق التخدير) (ISMP; AORN)</li>
            <li>عدم تطابق الغرسات أو إخفاقات إمكانية التتبع (AORN)</li>
        </ul>
        <p><span class="english-term"><strong>Clinical risk includes:</strong> wrong patient / wrong procedure / wrong site, surgical site infection and contamination failures, retained surgical items, specimen mislabeling and diagnostic error chain, positioning injuries (nerve/pressure/eye), hemorrhage escalation and delay in response, medication handling on sterile field (non-anesthesia scope), implant mismatch or traceability failures.</span></p>

        <hr>

        <h3>3.2.2 الخطر التشغيلي (التدفق، السعة، الموظفين، إخفاقات الجاهزية) / Operational risk</h3>
        <p>يشمل الخطر التشغيلي:</p>
        <ul>
            <li>الإلغاءات التي يمكن الوقاية منها والبدايات المتأخرة (IHI)</li>
            <li>أطقم الإعارة (Loaner sets) غير المكتملة وإخفاقات جاهزية المعدات (AORN; ECRI)</li>
            <li>عبء الجدولة الزائد الذي ينتج عنه التفافات/اختصارات (Shortcuts) (IHI)</li>
            <li>نقص الموظفين وعدم تطابق مزيج المهارات (Skill-mix) (AORN)</li>
            <li>ضغط التبديل (Turnover pressure) الذي يقلل من جودة التنظيف والتحقق (AORN; WHO SSI)</li>
        </ul>
        <p>الإخفاقات التشغيلية ليست "مشاكل كفاءة فقط". في غرفة العمليات، يتحول الضغط التشغيلي إلى خطر ضرر سريري. (IHI)</p>
        <p><span class="english-term"><strong>Operational risk includes:</strong> preventable cancellations and late starts, incomplete loaner sets and equipment readiness failures, scheduling overload producing shortcuts, staff shortages and skill-mix mismatch, turnover pressure degrading cleaning and verification. Operational failures are not “efficiency problems only.” In OR, operational pressure becomes clinical harm risk.</span></p>

        <hr>

        <h3>3.2.3 الخطر البيئي والتكنولوجي (المرفق، الأجهزة، مخاطر البيئة) / Environmental and technology risk</h3>
        <p>يشمل الخطر البيئي:</p>
        <ul>
            <li>مخاطر حريق غرفة العمليات (APSF/ASA; AORN; ECRI)</li>
            <li>الحروق الجراحية الكهربائية وإخفاقات العزل (AORN; ECRI)</li>
            <li>التعرض للدخان الجراحي (NIOSH; AORN)</li>
            <li>قضايا التدفئة والتهوية والتكييف (HVAC)/الضغط/تدفق الهواء وتأثيرات حركة المرور/فتح الأبواب (AORN; WHO SSI)</li>
            <li>إخفاقات التعقيم وتلوث الأدوات (AAMI ST79; AORN)</li>
            <li>فشل الأجهزة، الإنذارات، والالتفافات (Workarounds) (ECRI)</li>
        </ul>
        <p><span class="english-term"><strong>Environmental risk includes:</strong> OR fire hazards, electrosurgical burns and insulation failures, surgical smoke exposure, HVAC/pressure/airflow issues and traffic/door opening impacts, sterilization failures and instrument contamination, device failure, alarms, and workarounds.</span></p>

        <hr>

        <h3>3.2.4 الخطر القانوني والتنظيمي (التوثيق، الموافقة، إمكانية التتبع) / Legal and regulatory risk</h3>
        <p>الخطر القانوني ليس منفصلاً عن السلامة—غالباً ما يكون مؤشراً على ضعف السلامة:</p>
        <ul>
            <li>عدم تطابق الموافقة والتوثيق غير المكتمل (The Joint Commission)</li>
            <li>الفشل في اتباع توقعات البروتوكول العالمي (Universal Protocol) (The Joint Commission)</li>
            <li>الافتقار إلى إمكانية تتبع الغرسات وتوثيقها (AORN)</li>
            <li>الإبلاغ غير المكتمل عن الحوادث والفشل في التعلم (AHRQ)</li>
            <li>مسارات التدقيق الضعيفة وعدم الالتزام بالسياسات (Joint Commission survey practices concepts)</li>
        </ul>
        <p>غرفة العمليات الآمنة تكتب ما تفعله، وتفعل ما تكتبه، وتُثبت ذلك. (The Joint Commission)</p>
        <p><span class="english-term"><strong>Legal risk is not separate from safety—it is often an indicator of safety weakness:</strong> consent mismatch and incomplete documentation, failure to follow Universal Protocol expectations, lack of implant traceability and documentation, incomplete incident reporting and failure to learn, poor audit trails and policy non-adherence. A safe OR writes what it does, does what it writes, and proves it.</span></p>
    </div>

    <h2>3.3 مصفوفة المخاطر (كيف تستخدمها دون أن تُضللك) / The Risk Matrix</h2>

    <h3>3.3.1 المصفوفة الكلاسيكية (الاحتمالية × التأثير) / The classic matrix</h3>
    <p>تساعد المصفوفة البسيطة في تحديد الأولويات:</p>
    <ul>
        <li><strong>الاحتمالية (Likelihood):</strong> نادر / عرضي / متكرر</li>
        <li><strong>التأثير (Impact):</strong> طفيف / معتدل / شديد / كارثي (ISO 31000 concepts)</li>
    </ul>
    <p>لكن في غرفة العمليات، تتطلب الأحداث النادرة-الكارثية ضوابط قوية حتى لو كانت "الاحتمالية" منخفضة. (The Joint Commission)</p>
    <p><span class="english-term">A simple matrix helps prioritize: <strong>Likelihood</strong>: rare / occasional / frequent. <strong>Impact</strong>: minor / moderate / severe / catastrophic. But in OR, rare-catastrophic events require strong controls even if “likelihood” is low.</span></p>

    <h3>3.3.2 التفكير ثنائي المستويات: "مخاطر المصفوفة" مقابل "المخاطر غير القابلة للتفاوض" / Two-tier thinking</h3>
    <p>لتجنب نقص الحماية، افصل المخاطر إلى:</p>
    <p><span class="english-term">To avoid under-protection, separate hazards into:</span></p>
    <table>
        <thead>
            <tr>
                <th>الفئة / Tier</th>
                <th>الوصف والضوابط / Description &amp; Controls</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>الفئة أ (Tier A)</strong><br>مخاطر غير قابلة للتفاوض<br><span class="english-term">Non-negotiable hazards</span></td>
                <td>(أحداث لا ينبغي أن تحدث / Never events). تتطلب توقفاً إلزامياً (Hard stops) / وظائف إجبار (Forcing functions) وعمليات تدقيق قوية للحواجز. (WHO SSC; The Joint Commission; AORN)<br>
                <span class="english-term">Require hard stops/forcing functions and strong barrier audits.</span></td>
            </tr>
            <tr>
                <td><strong>الفئة ب (Tier B)</strong><br>مخاطر مُدارة بالمصفوفة<br><span class="english-term">Matrix-managed hazards</span></td>
                <td>تُعطى الأولوية حسب الاحتمالية والتأثير وتُحسّن من خلال التحسين المستمر للجودة (Continuous QI). (IHI)<br>
                <span class="english-term">Prioritize by likelihood and impact and improve through continuous QI.</span></td>
            </tr>
        </tbody>
    </table>

    <h3>3.3.3 تسجيل المخاطر ليس النهاية؛ تصميم الحواجز هو الهدف / Risk scoring is not the end</h3>
    <p>يكون تقييم الخطر مفيداً فقط إذا أدى إلى:</p>
    <ul>
        <li>حواجز محددة (defined barriers)،</li>
        <li>ملكية معينة (assigned ownership)،</li>
        <li>طرق تدقيق (audit methods)،</li>
        <li>محفزات تصعيد (escalation triggers). (IHI)</li>
    </ul>
    <p><span class="english-term">A risk score is useful only if it leads to: defined barriers, assigned ownership, audit methods, escalation triggers.</span></p>

    <h2>3.4 المخاطر عالية الشدة في غرفة العمليات (ما يجب ألا يفلت أبداً) / High-Severity Hazards in the OR</h2>

    <div class="concept-box">
        <h4>3.4.1 المريض الخاطئ / الإجراء الخاطئ / الموقع الخاطئ<br><span class="english-term">Wrong patient / wrong procedure / wrong site</span></h4>
        <ul>
            <li><strong>لماذا يحدث:</strong> عدم تطابق التوثيق، مهلة (Time-out) ضعيفة، الصمت الهرمي (Hierarchy silence)، تغييرات اللحظة الأخيرة. (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Why it happens: documentation mismatch, weak time-out, hierarchy silence, last-minute changes.</span></li>
            <li><strong>أقوى الحواجز:</strong> عناصر البروتوكول العالمي (التحقق قبل الإجراء، تحديد الموقع، Time-out). تدقيق جودة المهلة. توقف إلزامي (Hard stop) عند التباينات. (IHI; AORN)<br>
            <span class="english-term">Strongest barriers: Universal Protocol elements, time-out quality audits, hard stop for mismatches.</span></li>
        </ul>

        <hr>

        <h4>3.4.2 العناصر الجراحية المتروكة (الإسفنج، الإبر، الأدوات)<br><span class="english-term">Retained surgical items (sponges, needles, instruments)</span></h4>
        <ul>
            <li><strong>لماذا يحدث:</strong> المقاطعات أثناء العد، الإغلاق المتسرع، لحظات عد غير متسقة، التعامل غير الرسمي مع التباينات. (AORN)<br>
            <span class="english-term">Why it happens: interruptions during counts, rushed closure, inconsistent count moments, informal discrepancy handling.</span></li>
            <li><strong>أقوى الحواجز:</strong> عملية ولحظات عد موحدة. وقت عد محمي وقاعدة "عدم المقاطعة". خوارزمية التباين + محفزات التصوير + توقف إلزامي للإغلاق. (AORN)<br>
            <span class="english-term">Strongest barriers: standardized count process and moments, protected count time, discrepancy algorithm + imaging triggers + closure hard stop.</span></li>
        </ul>

        <hr>

        <h4>3.4.3 التسمية الخاطئة للعينات وفقدان السلامة التشخيصية<br><span class="english-term">Specimen mislabeling and loss of diagnostic integrity</span></h4>
        <ul>
            <li><strong>لماذا يحدث:</strong> تعدد المهام، المقاطعات، التسمية المتأخرة، أوصاف العينات غير الواضحة. (AHRQ; AORN)<br>
            <span class="english-term">Why it happens: multitasking, interruptions, delayed labeling, unclear specimen descriptions.</span></li>
            <li><strong>أقوى الحواجز:</strong> التسمية في نقطة الرعاية (Point-of-care) مع تأكيد القراءة العكسية (Read-back). وقت محمي للتعامل مع العينات. الخروج (Sign-out) يشمل التحقق من العينة. (AORN; AHRQ; WHO SSC)<br>
            <span class="english-term">Strongest barriers: point-of-care labeling with read-back confirmation, protected moment for specimen handling, sign-out includes specimen verification.</span></li>
        </ul>

        <hr>

        <h4>3.4.4 تصاعد خطر عدوى الموقع الجراحي (التلوث، اختراق العقامة)<br><span class="english-term">Surgical site infection risk escalation (contamination, breaks in sterility)</span></h4>
        <ul>
            <li><strong>لماذا يحدث:</strong> حركة المرور/فتح الأبواب، تنظيف التبديل المتسرع، اختراقات الحقل المعقم غير المدارة، إخفاقات توقيت المضادات الحيوية. (WHO SSI; CDC SSI; AORN)<br>
            <span class="english-term">Why it happens: traffic/door opening, rushed turnover cleaning, sterile field breaks not managed, antibiotic timing failures.</span></li>
            <li><strong>أقوى الحواجز:</strong> قواعد حقل معقم موحدة واستجابة واضحة للاختراقات. معايير التنظيف البيئي ومراقبتها. موثوقية عملية الوقاية بالمضادات الحيوية. (AORN; WHO SSI; CDC SSI)<br>
            <span class="english-term">Strongest barriers: standardized sterile field rules and response to breaks, environmental cleaning standards and monitoring, antibiotic prophylaxis process reliability.</span></li>
        </ul>

        <hr>

        <h4>3.4.5 حريق غرفة العمليات ومخاطر أجهزة الطاقة<br><span class="english-term">OR fire and energy device hazards</span></h4>
        <ul>
            <li><strong>لماذا يحدث:</strong> مصادر الاشتعال + بيئة غنية بالأكسجين + وقود؛ جاهزية ضعيفة للفريق للاستجابة الفورية. (APSF/ASA; AORN; ECRI)<br>
            <span class="english-term">Why it happens: ignition sources + oxygen-rich environment + fuels; poor team readiness for immediate response.</span></li>
            <li><strong>أقوى الحواجز:</strong> تقييم خطر الحريق وقائمة تحقق الوقاية. تدريبات وبروتوكول استجابة فورية. ممارسات الجراحة الكهربائية الآمنة وفحوصات المعدات. (AORN; APSF/ASA; ECRI)<br>
            <span class="english-term">Strongest barriers: OR fire risk assessment and prevention checklist, drills and immediate response protocol, safe electrosurgery practices and equipment checks.</span></li>
        </ul>

        <hr>

        <h4>3.4.6 عدم تطابق الغرسات وفشل إمكانية التتبع<br><span class="english-term">Implant mismatch and traceability failure</span></h4>
        <ul>
            <li><strong>لماذا يحدث:</strong> حجز ضعيف، فجوات في أطقم الإعارة (Loaner sets)، التفافات التوثيق، فقدان التقاط UDI (المعرف الفريد للجهاز). (AORN)<br>
            <span class="english-term">Why it happens: poor booking, loaner set gaps, documentation shortcuts, missing UDI capture.</span></li>
            <li><strong>أقوى الحواجز:</strong> توقف إلزامي (Hard stops) في الحجز لتأكيد الغرسة. سير عمل التقاط UDI والتدقيق. خطة جاهزية للاستجابة للاستدعاء (Recall). (AORN; IHI; ECRI)<br>
            <span class="english-term">Strongest barriers: booking hard stops for implant confirmation, UDI/traceability capture workflow and audit, recall response plan readiness.</span></li>
        </ul>
    </div>

    <h2>3.5 القصة الحقيقية 2: "خطر بدا تشغيلياً—لكنه كان سريرياً"</h2>
    <h3>3.5 Real Story 2: "A risk that looked operational—but was clinical"</h3>

    <div class="quote-box">
        <p><strong>3.5.1 المشهد (The scene):</strong><br>
        قائمة جراحة العظام، حجم كبير، ضغط عالٍ. تأخرت الحالة الأولى. طلب المنسق تبديلاً أسرع. الحالة الثانية احتاجت نظام غرسة معين. وصل ممثل الشركة الموردة مع طقم إعارة (Loaner set)—لكنه كان غير مكتمل. أداة صغيرة واحدة كانت مفقودة.</p>
        <p>اقترح أحد الموظفين: "دعونا نمضي قدماً ونرتجل. سنتدبر الأمر."<br>
        سأل الجراح: "هل يمكننا ضمان الانتهاء بأمان بدون هذا المكون؟"<br>
        لم يستطع أحد ذلك.</p>
        <p><span class="english-term"><strong>The scene:</strong> Orthopedics list, high volume, high pressure... The vendor representative arrived with a loaner set—but it was incomplete. One small tool was missing. A staff member suggested: “Let’s proceed and improvise. We’ll manage.” The surgeon asked: “Can we guarantee we can finish safely without that component?” No one could.</span></p>
    </div>

    <p><strong>3.5.2 الضغط (The pressure):</strong><br>
    شعر الجميع بتكلفة التوقف: ستنهار القائمة، سينتظر المرضى، سيبقى الموظفون لوقت متأخر. أصبح الضغط التشغيلي تهديداً سريرياً. (IHI)</p>
    <p><span class="english-term"><strong>The pressure:</strong> Everyone felt the cost of stopping... Operational pressure became a clinical threat.</span></p>

    <div class="alert-box">
        <p><strong>3.5.3 سلسلة الخطر (The risk chain):</strong></p>
        <ul>
            <li><strong>الخطر (Hazard):</strong> عدم اكتمال نظام الغرسة. (AORN)</li>
            <li><strong>المحفز (Trigger):</strong> ضغط الوقت + الرغبة في تجنب الإلغاء. (IHI)</li>
            <li><strong>ضعف الحاجز (Barrier weakness):</strong> لا توجد نقطة تحقق إلزامية للتأكيد قبل 24-48 ساعة. (IHI)</li>
            <li><strong>الضرر المحتمل (Potential harm):</strong> إطالة الإجراء، ملاءمة ضعيفة للغرسة، استبدال غير آمن، خطر العدوى من الوقت المطول. (WHO SSI; CDC SSI)</li>
        </ul>
        <p><span class="english-term"><strong>The risk chain:</strong> Hazard: implant system incompleteness. Trigger: time pressure + desire to avoid cancellation. Barrier weakness: no mandatory confirmation checkpoint 24–48 hours prior. Potential harm: prolonged procedure, poor implant fit, unsafe substitution, infection risk.</span></p>
    </div>

    <div class="success-box">
        <p><strong>3.5.4 الحل - تصميم النظام (The fix - system design):</strong></p>
        <p>قامت غرفة العمليات بتنفيذ:</p>
        <ul>
            <li>خطوة "التحقق من اكتمال طقم الإعارة" قبل القائمة النهائية. (AORN)</li>
            <li><strong>توقف إلزامي (Hard stop):</strong> "لا يوجد تأكيد للطقم الكامل = إعادة جدولة ما لم تكن حالة طارئة." (IHI)</li>
            <li><strong>التصعيد (Escalation):</strong> تقرر الممرضة المسؤولة + رئيس الجراحين؛ التوثيق مطلوب. (The Joint Commission)</li>
        </ul>
        <p>هذا هو الموضوع الأساسي: <strong>السلامة التشغيلية هي سلامة سريرية في ثوب مختلف.</strong> (IHI)</p>
        <p><span class="english-term"><strong>The fix:</strong> The OR implemented: a “loaner set completeness verification” step... hard stop: “No complete set confirmation = reschedule unless emergency.” escalation: charge nurse + surgeon lead decide. This is the theme: <strong>operational safety is clinical safety in disguise.</strong></span></p>
    </div>

    <h2>3.6 مسارات التصعيد (كيف تقوم غرفة العمليات الآمنة بـ "إيقاف الخط")</h2>
    <h3>3.6 Escalation Pathways (How a Safe OR “Stops the Line”)</h3>

    <h3>3.6.1 التصعيد هو حاجز، وليس موقفاً/سلوكاً / Escalation is a barrier, not an attitude</h3>
    <p>تقول العديد من غرف العمليات "يمكن لأي شخص التحدث بصوت عالٍ (Speak up)"، ولكن بدون مسار مُصمم، يعتمد التحدث على الشخصية والشجاعة. غرفة العمليات الآمنة تصمم التصعيد كـ <strong>سير عمل يمكن التنبؤ به</strong>. (IHI; AHRQ)</p>
    <p><span class="english-term">Many ORs say “anyone can speak up,” but without a designed pathway, speaking up depends on personality and courage. A safe OR designs escalation as a predictable workflow.</span></p>

    <h3>3.6.2 سُلّم التصعيد (من، متى، كيف) / The escalation ladder (who, when, how)</h3>
    <p>يتضمن سلم التصعيد العملي ما يلي:</p>
    <ul>
        <li><strong>عبارة الإيقاف الفوري (Immediate pause phrase):</strong> ("توقف—فحص سلامة / Pause—safety check.")</li>
        <li><strong>الحل المحلي (Local resolution):</strong> (تأكيد الممرضة الدوارة + المعقمة + الجراح)</li>
        <li><strong>تصعيد الممرضة المسؤولة (Charge nurse escalation):</strong> (سلطة تأخير البدء)</li>
        <li><strong>مدير المسرح / مشرف العمليات (Theatre manager / OR supervisor):</strong> (حشد الموارد)</li>
        <li><strong>قائد الخدمة الجراحية / الاستشاري المناوب (Surgical service lead / on-call consultant):</strong> (القرار السريري)</li>
        <li><strong>التصعيد للمستشفى (Hospital escalation):</strong> (إدارة المخاطر، القيادة) (IHI)</li>
    </ul>
    <p><span class="english-term">A practical escalation ladder includes: Immediate pause phrase, Local resolution, Charge nurse escalation, Theatre manager / OR supervisor, Surgical service lead / on-call consultant, Hospital escalation.</span></p>

    <h3>3.6.3 المحفزات غير القابلة للتفاوض (التصعيد التلقائي) / Non-negotiable triggers (automatic escalation)</h3>
    <div class="alert-box">
        <p>أمثلة على محفزات التصعيد التلقائي:</p>
        <ul>
            <li>عدم تطابق بين الحجز/الموافقة/تحديد الموقع (The Joint Commission)</li>
            <li>تباين في العد الجراحي لم يُحل (AORN)</li>
            <li>عدم يقين في هوية العينة (AORN; AHRQ)</li>
            <li>اختراق الحقل المعقم دون تخفيف (Mitigation) محلول (AORN; WHO SSI)</li>
            <li>مكون غرسة حيوي مفقود (AORN)</li>
        </ul>
        <p><span class="english-term">Examples of automatic escalation triggers: mismatch between booking/consent/site marking, unresolved count discrepancy, specimen identity uncertainty, sterile field break with unresolved mitigation, missing critical implant component.</span></p>
    </div>

    <h3>3.6.4 السلامة النفسية: الشرط لعمل التصعيد / Psychological safety: the condition for escalation</h3>
    <p>إذا كان الموظفون يخشون الإذلال أو العقاب، فسوف يفشل التصعيد. نموذج الثقافة العادلة (Just Culture) يدعم التصعيد من خلال فصل أنواع الأخطاء والتركيز على تحسين النظام. (AHRQ; IHI)</p>
    <p><span class="english-term">If staff fear humiliation or punishment, escalation will fail. A Just Culture model supports escalation by separating error types and focusing on system improvement.</span></p>

    <h2>3.7 أدوات عملية لبناء خريطة مخاطر غرفة العمليات الخاصة بك (جاهزة للاستخدام)</h2>
    <h3>3.7 Practical Tools for Building Your OR Risk Map (Ready-to-Use)</h3>

    <div class="concept-box">
        <p><strong>الأداة 1 — سجل مخاطر غرفة العمليات (هيكل من صفحة واحدة) / Tool 1 — OR Risk Register</strong></p>
        <p>لكل خطر: مُعرف الخطر/العنوان، المجال (Domain: سريري/تشغيلي/بيئي/قانوني)، وصف الخطر، المحفزات/العوامل المساهمة، الحواجز الحالية، تصنيف قوة الحاجز (ضعيف/معتدل/قوي)، الاحتمالية/التأثير، فئة الخطر (Tier A غير قابل للتفاوض مقابل Tier B مُدار بالمصفوفة)، المالك (Owner)، محفز التصعيد، طريقة التدقيق، الإجراءات التصحيحية وتواريخ الاستحقاق. (ISO 31000 concepts; IHI)</p>
        <p><span class="english-term">For each risk: Risk ID / title, Domain, Hazard description, Triggers / contributing factors, Existing barriers, Barrier strength rating, Likelihood / Impact, Risk tier, Owner, Escalation trigger, Audit method, Corrective actions and due dates.</span></p>

        <hr>

        <p><strong>الأداة 2 — خريطة الخطر-المحفز-الحاجز (نسخة سريعة بجانب السرير) / Tool 2 — Hazard–Trigger–Barrier Map</strong></p>
        <ul>
            <li><strong>الخطر (Hazard):</strong> ______ (مثال: الموقع الخاطئ) (The Joint Commission)</li>
            <li><strong>المحفزات (Triggers):</strong> ______ (ضغط وقت، عدم تطابق، مقاطعة) (IHI)</li>
            <li><strong>الحواجز (Barriers):</strong> ______ (تحديد موقع، Time-out، توقف إلزامي) (WHO SSC)</li>
            <li><strong>أنماط الفشل (Failure modes):</strong> ______ (Time-out طقسي، ملكية غير واضحة) (AORN)</li>
            <li><strong>الإصلاح (Fix):</strong> ______ (توحيد، تدقيق، نص تصعيد) (IHI)</li>
        </ul>
        <p><span class="english-term">Hazard: ___. Triggers: ___. Barriers: ___. Failure modes: ___. Fix: ___.</span></p>

        <hr>

        <p><strong>الأداة 3 — بطاقة التصعيد (للحائط/الجيب) / Tool 3 — Escalation Card</strong></p>
        <ul>
            <li>"توقف—فحص سلامة / Pause—safety check."</li>
            <li>"تم العثور على عدم تطابق بين ___ و ___."</li>
            <li>"لا يمكننا المضي قدماً حتى يتم الحل." (The Joint Commission; AORN)</li>
            <li><strong>التصعيد إلى (Escalate to):</strong> الممرضة المسؤولة ← مشرف العمليات ← قائد الخدمة</li>
            <li><strong>قائمة محفزات التوقف الإلزامي:</strong> (العد، الموقع، العينة، الغرسة، العقامة) (AORN)</li>
        </ul>
        <p><span class="english-term">“Pause—safety check.” “Mismatch found between ___ and ___.” “We cannot proceed until resolved.” Escalate to: Charge nurse → OR supervisor → service lead. Hard stop triggers list.</span></p>

        <hr>

        <p><strong>الأداة 4 — درجة تدقيق الحاجز (الجودة، وليس مربع الاختيار) / Tool 4 — Barrier Audit Score</strong></p>
        <p>بدلاً من "تم إنجاز الـ Time-out"، سجل: هل توقف الجميع؟ هل تم نطق الجهة (Laterality) وتأكيدها؟ هل تم حل عدم اليقين بشأن التصوير/الخطة؟ هل كانت البيئة هادئة بما يكفي للسمع؟ (WHO SSC; IHI)</p>
        <p><span class="english-term">Instead of “time-out done,” score: was everyone stopped? was laterality spoken and confirmed? was imaging/plan uncertainty resolved? was the environment quiet enough to hear?</span></p>
    </div>

    <h2>3.8 القياس: كيف تعرف أن خريطة المخاطر الخاصة بك تعمل / Measurement</h2>

    <h3>3.8.1 المؤشرات الاستباقية تعكس قوة الحاجز / Leading indicators reflect barrier strength</h3>
    <p>تتبع المقاييس التي تُظهر ما إذا كانت الحواجز موثوقة، وليس فقط ما إذا كان الضرر قد حدث. (IHI; AHRQ)</p>
    <p><span class="english-term">Track measures that show whether barriers are reliable, not only whether harm occurred.</span></p>

    <h3>3.8.2 مؤشرات الأداء المقترحة لخريطة المخاطر (المجموعة الأولية) / Suggested OR risk-map KPIs</h3>
    <ul>
        <li>درجة جودة الـ Time-out المُلاحظة (WHO SSC; AORN)</li>
        <li>معدل تباين العد الجراحي + الامتثال لخوارزمية التباين (AORN)</li>
        <li>معدل الحوادث القريبة (Near-miss) للعينات (AHRQ; AORN)</li>
        <li>معدل اكتمال تتبع الغرسات (AORN)</li>
        <li>فتحات الأبواب لكل حالة (مُعينة/Sampled) (AORN; WHO SSI)</li>
        <li>اختراقات الحقل المعقم الموثقة والمدارة (AORN)</li>
        <li>أحداث إيقاف الخط (Stop-the-line) ونتائجها (IHI)</li>
        <li>فئات الإلغاء التي يمكن الوقاية منها (IHI)</li>
    </ul>

    <h3>3.8.3 توقعات حلقة التعلم / Learning loop expectations</h3>
    <p>غرفة العمليات الناضجة تضع قاعدة: كل حادثة قريبة عالية الشدة يجب أن تؤدي إلى إجراء في النظام وإعادة تدقيق خلال فترة محددة. (IHI; AHRQ)</p>
    <p><span class="english-term">A mature OR sets a rule: every high-severity near-miss must lead to a system action and re-audit within a defined period.</span></p>

    <h2>3.9 خارطة طريق التنفيذ (من الخريطة إلى الممارسة اليومية) / Implementation Roadmap</h2>

    <ol>
        <li><strong>3.9.1 الخطوة 1 — ابنِ تصنيفك المحلي:</strong> لا تنسخ قائمة عامة. قم ببناء قائمة محلية باستخدام بيانات الحوادث والإلغاءات والشكاوى وقصص الموظفين. (AHRQ; IHI)<br>
        <span class="english-term"><strong>Step 1 — Build your local taxonomy:</strong> Do not copy a generic list. Build a local list using your incident data, cancellations, complaints, and staff stories.</span></li>
        
        <li><strong>3.9.2 الخطوة 2 — حدد "المخاطر التي يجب ألا تحدث" (Tier A):</strong> اتفق كقيادة: هذه المخاطر تتطلب حواجز وتوقفات إلزامية غير قابلة للتفاوض. (The Joint Commission)<br>
        <span class="english-term"><strong>Step 2 — Identify Tier A “must-not-happen hazards”:</strong> Agree as leadership: these hazards require non-negotiable barriers and hard stops.</span></li>
        
        <li><strong>3.9.3 الخطوة 3 — عيِّن الملكية وسلطة التصعيد:</strong> كل خطر له مالك. كل توقف إلزامي له خط سلطة. (IHI)<br>
        <span class="english-term"><strong>Step 3 — Assign ownership and escalation authority:</strong> Every risk has an owner. Every hard stop has an authority line.</span></li>
        
        <li><strong>3.9.4 الخطوة 4 — اجعل الحواجز مرئية وقابلة للتدقيق:</strong> يجب أن تكون الحواجز: بسيطة، موحدة، يصعب تجاوزها، قابلة للملاحظة، ومقاسة. (IHI)<br>
        <span class="english-term"><strong>Step 4 — Make barriers visible and auditable:</strong> Barriers must be: simple, standardized, hard to bypass, observable, measured.</span></li>
        
        <li><strong>3.9.5 الخطوة 5 — درب وتمرن على مسار التصعيد:</strong> إذا كانت المرة الأولى التي يمارس فيها الناس التصعيد هي أثناء الأزمة، فسيفشل. قم بعمل تدريبات للنصوص والأدوار. (IHI; AORN)<br>
        <span class="english-term"><strong>Step 5 — Train and drill the escalation pathway:</strong> If the first time people practice escalation is during crisis, it will fail. Drill scripts and roles.</span></li>
    </ol>

    <h2>3.10 القصة الحقيقية 3: "مثلث الحريق الذي لم يره أحد"</h2>
    <h3>3.10 Real Story 3: "The fire triangle nobody saw"</h3>

    <div class="quote-box">
        <p><strong>3.10.1 المشهد (The scene):</strong><br>
        حالة جراحة رأس ورقبة. حقل غني بالأكسجين. الفرش الجراحي (Drapes) موضوع بإحكام. استُخدم الكي الكهربائي (Electrocautery). ركز الجميع على الدقة الجراحية. حدثت شرارة صغيرة، وللحظة، ظهر لهب بالقرب من الفرش. تفاعل الفريق بسرعة. تمت السيطرة على اللهب. لم يحدث أي ضرر.</p>
        <p><span class="english-term"><strong>The scene:</strong> A head-and-neck case. Oxygen-rich field. Drapes positioned tightly. Electrocautery used. Everyone focused on surgical precision. A small spark occurred, and for a moment, flame appeared near the drapes. The team reacted quickly. The flame was controlled. No harm occurred.</span></p>
    </div>

    <div class="concept-box">
        <p><strong>3.10.2 الخطر الخفي (The hidden risk):</strong><br>
        كان مثلث الحريق موجوداً: مصدر اشتعال (الكي الكهربائي)، مؤكسد (الأكسجين)، وقود (الفرش، محلول التحضير). (APSF/ASA; AORN)</p>

        <p><strong>3.10.3 لماذا يحدث هذا (Why this happens):</strong><br>
        لأن "الحريق" يبدو نادراً، تتعامل معه الفرق كأمر نظري. لكن المخاطر النادرة-الكارثية تتطلب استجابات مُتدرب عليها وفحوصات وقائية. (AORN; APSF/ASA; ECRI)</p>

        <p><strong>3.10.4 الحل (The fix):</strong><br>
        أدخلت غرفة العمليات: خطوة تقييم خطر الحريق وقائمة تحقق الوقاية، تدريبات وتعيين أدوار وبروتوكول استجابة فورية، وتعليم حول وقت تجفيف محلول التحضير والتواصل بشأن التحكم في الأكسجين. (AORN; APSF/ASA)</p>
        
        <p><span class="english-term"><strong>The hidden risk:</strong> The fire triangle was present: ignition source, oxidizer, fuel. <strong>Why this happens:</strong> Because “fire” feels rare, teams treat it as theoretical. <strong>The fix:</strong> The OR introduced: a fire risk assessment step, drills, education on prep solution drying time.</span></p>
    </div>

    <h2>3.11 الأخطاء الشائعة في إدارة مخاطر غرفة العمليات (ما يجب تجنبه)</h2>
    <h3>3.11 Common Mistakes in OR Risk Management (What to Avoid)</h3>

    <div class="alert-box">
        <ul>
            <li><strong>3.11.1 الخطأ: "لدينا سياسات، وبالتالي تتم إدارة المخاطر"</strong><br>
            السياسات بدون عمليات تدقيق للحواجز وسلطة تصعيد تصبح حماية ورقية. (IHI)<br>
            <span class="english-term">Mistake: “We have policies, therefore risk is managed.” Policy without barrier audits and escalation authority become paper protection.</span></li>
            
            <li><strong>3.11.2 الخطأ: التعامل مع المخاطر النادرة-الكارثية كأولوية منخفضة</strong><br>
            يجب حماية الموقع الخاطئ، العناصر المتروكة، حرائق العمليات، وإخفاقات هوية العينات بغض النظر عن تكرارها. (The Joint Commission; AORN)<br>
            <span class="english-term">Mistake: treating rare-catastrophic hazards as low priority. These must be protected regardless of frequency.</span></li>
            
            <li><strong>3.11.3 الخطأ: خرائط مخاطر يبنيها المديرون فقط</strong><br>
            يرى موظفو الخطوط الأمامية الخطر أولاً. يجب بناء خريطة المخاطر بشكل مشترك مع أولئك الذين يعملون في الغرفة. (AHRQ)<br>
            <span class="english-term">Mistake: risk maps built by managers only. Frontline staff see risk first. A risk map must be co-built.</span></li>
        </ul>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>تحتاج غرفة العمليات إلى <strong>خريطة مخاطر ذات أربعة مجالات</strong>: سريرية، تشغيلية، بيئية، وقانونية. (AHRQ; ISO 31000)<br>
            <span class="english-term">The OR needs a <strong>four-domain risk map</strong>: clinical, operational, environmental, and legal.</span></li>
            
            <li>بعض المخاطر <strong>غير قابلة للتفاوض</strong>: احمها بتوقفات إلزامية وحواجز قوية بغض النظر عن التكرار. (The Joint Commission)<br>
            <span class="english-term">Some hazards are <strong>non-negotiable</strong>: protect them with hard stops and strong barriers regardless of frequency.</span></li>
            
            <li>تقييم الخطر لا فائدة منه بدون تصميم الحاجز، الملكية، التدقيق، ومحفزات التصعيد. (IHI)<br>
            <span class="english-term">A risk score is useless without barrier design, ownership, auditing, and escalation triggers.</span></li>
            
            <li>الضغط التشغيلي يصبح ضرراً سريرياً ما لم يقم النظام بتقوية الحواجز عندما ينحرف اليوم. (IHI)<br>
            <span class="english-term">Operational pressure becomes clinical harm unless the system strengthens barriers when the day slips.</span></li>
            
            <li>يجب أن يكون التصعيد <strong>سير عمل مُصمم</strong>، وليس صفة شخصية. (IHI; AHRQ)<br>
            <span class="english-term">Escalation must be a <strong>designed workflow</strong>, not a personality trait.</span></li>
        </ul>
    </div>

    <div class="concept-box">
        <h2>مُلحقات عملية لنهاية الفصل / Chapter-End Practical Inserts</h2>
        <p><span class="english-term">(Ready for your template)</span></p>
        
        <p><strong>المُلحق 1 — نموذج سجل مخاطر غرفة العمليات (صفحة واحدة) / Insert 1 — OR Risk Register Template</strong><br>
        (انظر 3.7.1) (ISO 31000 concepts; IHI)</p>
        
        <p><strong>المُلحق 2 — محفزات التوقف الإلزامي (مخاطر الفئة أ) / Insert 2 — Hard Stop Triggers (Tier A Hazards)</strong></p>
        <ul>
            <li>عدم تطابق المريض/الإجراء/الموقع ← أوقف وصعّد (The Joint Commission)</li>
            <li>تباين العد لم يُحل ← أوقف الإغلاق وصعّد (AORN)</li>
            <li>عدم يقين بهوية العينة ← أوقف الإرسال وصعّد (AORN; AHRQ)</li>
            <li>اختراق العقامة غير مُدار ← أوقف وصعّد (AORN; WHO SSI)</li>
            <li>مكون غرسة حيوي مفقود ← أوقف وصعّد (AORN)</li>
        </ul>

        <p><strong>المُلحق 3 — بطاقة سلم التصعيد / Insert 3 — Escalation Ladder Card</strong><br>
        (انظر 3.6.2) (IHI)</p>

        <p><strong>المُلحق 4 — ورقة نقاط تدقيق الحاجز / Insert 4 — Barrier Audit Score Sheet</strong><br>
        جودة الـ Time-out، موثوقية العد، موثوقية التعامل مع العينات. (WHO SSC; AORN; IHI)</p>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>The Joint Commission. National Patient Safety Goals (Hospital Program).</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety Resources (including transitions, reporting, safety culture).</li>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Reliability Resources (PDSA, run charts, human factors in improvement).</li>
            <li>ECRI. Patient Safety and Device/Technology Hazard Guidance (perioperative focus).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79: Steam Sterilization and Sterility Assurance in Health Care Facilities.</li>
            <li>Institute for Safe Medication Practices (ISMP). Medication Safety Guidance for Procedural Areas (sterile-field labeling/handling).</li>
            <li>National Institute for Occupational Safety and Health (NIOSH). Guidance on Surgical Smoke and Occupational Exposure Controls.</li>
            <li>National Pressure Injury Advisory Panel (NPIAP) / European Pressure Ulcer Advisory Panel (EPUAP). Pressure Injury Prevention Guidance.</li>
            <li>Anesthesia Patient Safety Foundation (APSF) / American Society of Anesthesiologists (ASA). Operating Room Fire Safety Guidance and Education Resources.</li>
            <li>ISO 31000. Risk Management — Guidelines (conceptual framework for taxonomy and risk process).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  13: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 13 — High-Risk Devices, Loaner Sets, and Implant Safety &amp; Traceability</h1>
    <div class="subtitle">الفصل الثالث عشر — الأجهزة عالية الخطورة، الأطقم المعارة، وسلامة الغرسات وتتبعها<br>
    <span style="font-size: 18px;">(Loaner Governance • Vendor Controls • Decontamination Risk • Readiness Timelines • Selection Verification • Expiry &amp; Storage • Barcode/UDI Workflow • Recall Response)<br>
    (حوكمة الإعارة • ضوابط الموردين • مخاطر التطهير • الجداول الزمنية للجاهزية • التحقق من الاختيار • انتهاء الصلاحية والتخزين • سير عمل الباركود/UDI • الاستجابة للاستدعاء)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تنتمي <strong>الأجهزة عالية الخطورة، والأطقم المعارة، والغرسات</strong> إلى فصل موثوقية واحد: فهي تشترك في نفس المخاطر—التعقيد، ضغط الوقت، والعواقب اللاحقة. (AORN; AAMI ST79; IHI)<br>
            <span class="english-term">Explain why <strong>high-risk devices, loaner sets, and implants</strong> belong in one reliability chapter: they share the same hazards—complexity, time pressure, and downstream consequences. (AORN; AAMI ST79; IHI)</span></li>
            
            <li>تصميم <strong>حوكمة إعارة (Loaner governance)</strong> تمنع الاختصارات غير الآمنة (الصواني المتأخرة، التوثيق المفقود، المعالجة المتسرعة) من خلال جداول زمنية واضحة، ومسؤولية، وتصعيد. (AORN; AAMI ST79; IHI)<br>
            <span class="english-term">Design <strong>loaner governance</strong> that prevents unsafe shortcuts (late trays, missing documentation, rushed processing) through clear timelines, responsibility, and escalation. (AORN; AAMI ST79; IHI)</span></li>
            
            <li>تطبيق ضوابط الموردين (Vendor controls) التي تحمي السلسلة المعقمة: نوافذ التسليم، التحقق من الاكتمال، متطلبات التنظيف، وإمكانية التتبع. (AORN; AAMI ST79)<br>
            <span class="english-term">Apply vendor controls that protect the sterile chain: delivery windows, completeness verification, cleaning requirements, and traceability. (AORN; AAMI ST79)</span></li>
            
            <li>التعرف على أنماط مخاطر التطهير (Decontamination risk) للأجهزة المعقدة والتجاويف (Lumens)—وبناء قواعد "عدم المساومة" التي تحمي فعالية التنظيف. (AAMI ST79)<br>
            <span class="english-term">Recognize decontamination risk patterns for complex devices and lumens—and build “do not compromise” rules that protect cleaning effectiveness. (AAMI ST79)</span></li>
            
            <li>تنفيذ ضوابط سلامة الغرسات (Implant safety controls): التحقق من الاختيار، سلامة التخزين وانتهاء الصلاحية، التقاط UDI/الباركود، و"شروط الإنجاز/Done-conditions" قبل مغادرة المريض لسيطرة غرفة العمليات. (AORN; FDA UDI concepts)<br>
            <span class="english-term">Implement implant safety controls: selection verification, expiry &amp; storage integrity, UDI/barcode capture, and “done-conditions” before the patient leaves OR control. (AORN; FDA UDI concepts)</span></li>
            
            <li>تشغيل استجابة <strong>استدعاء (Recall)</strong> موثوقة (التتبع العكسي/التتبع للأمام) باستخدام الحد الأدنى من مجموعات البيانات وسير العمل المتدرب عليه، وليس الهلع. (AORN; FDA UDI concepts; IHI)<br>
            <span class="english-term">Run a reliable <strong>recall response</strong> (trace-back/trace-forward) using minimum datasets and rehearsed workflows, not panic. (AORN; FDA UDI concepts; IHI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "صينية الإعارة التي وصلت في صباح يوم الجراحة"</strong><br>
        <span class="english-term">A true-to-life case: “The loaner tray that arrived on the morning of surgery” (Real Scientific Story)</span>
    </div>

    <p>كانت الساعة 7:00 صباحاً. المريض الأول على القائمة كان حالة مراجعة عمود فقري معقدة، ومجدولة للبدء في 8:00 صباحاً. دخل ممثل الشركة الموردة إلى المستشفى حاملاً خمس صواني إعارة ثقيلة (Loaner trays). لم تكن الصواني متوفرة في اليوم السابق لأنها كانت تُستخدم في مستشفى آخر في الجهة المقابلة من المدينة.</p>
    <p><span class="english-term">It was 7:00 a.m. The first patient on the list was a complex spine revision, scheduled for an 8:00 a.m. start. The vendor rep walked into the hospital carrying five heavy loaner trays. The trays hadn’t been available the day before because they were being used at another hospital across town.</span></p>

    <p>بدأ الضغط التشغيلي على الفور.</p>
    <p><span class="english-term">The operational pressure began immediately.</span></p>

    <p>لم يكن لدى قسم التعقيم المركزي (CSSD) الوقت الكافي لإجراء الفحص الروتيني، وتفكيك الأدوات، والتنظيف الدقيق، والتغليف المناسب، ودورة التعقيم الكاملة مع المؤشرات البيولوجية. كانت العمليات الحسابية مستحيلة.</p>
    <p><span class="english-term">CSSD did not have the required hours for routine inventory, breakdown, meticulous decontamination, proper wrapping, and a full terminal sterilization cycle with biological indicators. The math was impossible.</span></p>

    <p>قال الممثل: "قم بتعقيمها فورياً (Just flash it). إنها نظيفة، لقد غسلناها في المستشفى الآخر."</p>
    <p><span class="english-term">The rep said: “Just flash it. They’re clean, we washed them at the other hospital.”</span></p>

    <div class="alert-box">
        <p>كان الجراح ينتظر. وكان المريض في منطقة الانتظار. لكن الممرضة المسؤولة (Charge nurse) في ذلك اليوم فهمت شيئاً حاسماً: <strong>أن الثقة في كلمة مندوب المبيعات لتجاوز التطهير هي مقامرة بحياة المريض.</strong> (AAMI ST79; AORN)</p>
        <p><span class="english-term">The surgeon was waiting. The patient was in holding. But the charge nurse that day understood something critical: <strong>trusting a sales rep’s word to bypass decontamination is gambling with a patient’s life.</strong> (AAMI ST79; AORN)</span></p>
    </div>

    <p>أوقفت الممرضة المسؤولة الخط. قالت: "نحن لا نقوم بالتعقيم الفوري (IUSS) لأطقم الإعارة القادمة من خارج المرفق، ولا نزرع أجهزة بدون مؤشر بيولوجي. سنتأخر 4 ساعات، أو سنعيد الجدولة."</p>
    <p><span class="english-term">The charge nurse stopped the line. She said: “We do not flash externally arriving loaner sets, and we do not implant without a biological indicator. We will be delayed 4 hours, or we reschedule.”</span></p>

    <div class="success-box">
        <p>كان الجراح غاضباً في تلك اللحظة، ولكن لاحقاً تم دعم القرار من قبل الإدارة. لماذا؟ لأن <strong>الأطقم المعارة (Loaners) ليست فقط مشكلة إمداد. إنها مشكلة إدخال مخاطر حيوية إلى المستشفى</strong>. إدارتها تتطلب حوكمة صلبة كالصخر. (IHI)</p>
        <p><span class="english-term">The surgeon was furious in the moment, but later the decision was backed by the administration. Why? Because <strong>loaners are not just a supply issue. They are bio-risk importation.</strong> Managing them requires rock-solid governance. (IHI)</span></p>
    </div>

    <h2>13.1 ملف مخاطر الأطقم المعارة والغرسات (لماذا هي خطيرة)</h2>
    <h3>13.1 The Hazard Profile of Loaner Sets and Implants</h3>

    <h3>13.1.1 عدم الألفة (Unfamiliarity) والتعقيد</h3>
    <p>أطقم الإعارة (Loaner sets) (المستخدمة غالباً في جراحة العظام، والعمود الفقري، وجراحة الوجه والفكين) معقدة للغاية، وتحتوي على أدوات دقيقة متعددة الأجزاء لم يسبق لموظفي المستشفى رؤيتها من قبل. إذا لم تكن هناك تعليمات استخدام (IFU) دقيقة، يصبح التنظيف تخميناً. (AAMI ST79; AORN)</p>
    <p><span class="english-term"><strong>13.1.1 Unfamiliarity and Complexity</strong><br>Loaner sets (often used for ortho, spine, maxillofacial) are highly complex, containing multi-part, delicate instruments hospital staff may have never seen before. Without precise Instructions for Use (IFU), cleaning becomes guesswork. (AAMI ST79; AORN)</span></p>

    <h3>13.1.2 ضغط الوقت يؤدي إلى "تطبيع الانحراف"</h3>
    <p>تصل الأطقم المعارة غالباً في وقت متأخر لأنها تنتقل بين المستشفيات. هذا يخلق "حالة طوارئ مصطنعة". يتنازل CSSD وغرفة العمليات عن المعايير (إجراء IUSS، تخطي الجرد، تجاهل اختبارات الغرسات) لمجرد إبقاء الجدول الزمني متحركاً. (IHI)</p>
    <p><span class="english-term"><strong>13.1.2 Time pressure driving "normalized deviance"</strong><br>Loaners often arrive late because they travel between hospitals. This creates an "artificial emergency." CSSD and OR compromise standards (flashing, skipping inventory, skipping implant tests) just to keep the schedule moving. (IHI)</span></p>

    <h3>13.1.3 خطر العبء البيولوجي المتنقل / Traveling bioburden risk</h3>
    <p>لا تعرف المستشفيات أبداً مدى جودة تنظيف صينية الإعارة في المرفق السابق. افتراض أنها "جاهزة للتعقيم" (Ready for sterilization) دون القيام بتطهير (Decontamination) صارم محلياً هو انتهاك جسيم للسلامة. (AAMI ST79)</p>

    <h2>13.2 حوكمة الإعارة (قاعدة الـ 48-72 ساعة)</h2>
    <h3>13.2 Loaner Governance (The 48-72 Hour Rule)</h3>

    <h3>13.2.1 التوقيت هو حاجز أمان / Timing is a safety barrier</h3>
    <p>للتعامل مع الأطقم المعارة بأمان، يحتاج CSSD إلى وقت لـ: الجرد، الفحص، الفك، التنظيف، التعقيم الكامل (Terminal sterilization)، ونتائج المؤشر البيولوجي (BI). (AORN)</p>
    <p><span class="english-term"><strong>13.2.1 Timing is a safety barrier</strong><br>To process a loaner safely, CSSD needs time for: inventory, inspection, breakdown, cleaning, terminal sterilization, and BI results. (AORN)</span></p>

    <div class="concept-box">
        <h3>13.2.2 قاعدة النافذة الزمنية الصارمة / The strict window rule</h3>
        <p>يجب أن يفرض المستشفى سياسة مكتوبة:</p>
        <ul>
            <li><strong>الأطقم الروتينية (المألوفة):</strong> يجب أن تصل قبل 48 ساعة على الأقل من الإجراء المجدول.</li>
            <li><strong>الأطقم الجديدة أو غير المألوفة:</strong> يجب أن تصل قبل 72 ساعة على الأقل للسماح بمراجعة تعليمات الاستخدام (IFU) وتدريب الموظفين. (AORN; AAMI ST79)</li>
        </ul>
        <p>إذا لم يصل الطقم ضمن هذه النافذة، تتأخر الحالة أو تُلغى، ما لم تكن هناك استثناءات طوارئ موثقة بموافقة القيادة. (IHI)</p>
        <p><span class="english-term">Routine (familiar) sets must arrive at least 48 hours prior. New/unfamiliar sets must arrive at least 72 hours prior. If the set misses the window, the case is delayed or cancelled, barring documented emergency exceptions with leadership sign-off.</span></p>
    </div>

    <h3>13.2.3 التوقف الإلزامي للحجز / Booking hard stop</h3>
    <p>لا يمكن للجدولة حجز إجراء يتطلب إعارة إذا لم يتم تأكيد توافر الطقم مسبقاً. يجب أن تكون هذه البوابة في قسم الجدولة، وليس عند باب غرفة العمليات. (IHI)</p>

    <h2>13.3 ضوابط الموردين وحماية قسم التعقيم (CSSD)</h2>
    <h3>13.3 Vendor Controls and CSSD Protection</h3>

    <h3>13.3.1 الموردون زوار، وليسوا حكاماً / Vendors are guests, not rulers</h3>
    <p>ممثلو الشركات الموردة (Vendor reps) يقدمون خبرة تقنية قيمة، لكنهم لا يديرون سلامة المستشفى. يجب أن يخضعوا لسياسة المرفق الصارمة.</p>
    <p><span class="english-term"><strong>13.3.1 Vendors are guests, not rulers</strong><br>Vendor reps provide valuable technical expertise, but they do not govern hospital safety. They must be subject to strict facility policy.</span></p>

    <h3>13.3.2 ما يجب أن يقدمه المورد / What the vendor must provide</h3>
    <ul>
        <li><strong>قائمة جرد دقيقة (Inventory list):</strong> يجب التحقق من محتويات الصينية عند الاستلام وبعد الجراحة. (AORN)</li>
        <li><strong>تعليمات الاستخدام (IFU):</strong> إرشادات الشركة المصنعة المُحدثة لتنظيف وتعقيم ذلك الطقم المحدد. (AAMI ST79)</li>
        <li><strong>حدود الوزن:</strong> يجب ألا تتجاوز صواني الإعارة 25 رطلاً (حوالي 11 كجم) لمنع الإصابات المريحة (Ergonomic injuries) وضمان اختراق البخار بشكل صحيح. يجب تقسيم الصواني الثقيلة. (AAMI ST79)</li>
    </ul>

    <h2>13.4 مخاطر التطهير (الأجهزة المعقدة والتجاويف)</h2>
    <h3>13.4 Decontamination Risk (Complex Devices and Lumens)</h3>

    <h3>13.4.1 لماذا تُعد التجاويف (Lumens) والمفاصل خطيرة</h3>
    <p>الأدوات ذات التجاويف (مثل المناظير الداخلية، القسطرة، المثاقب) يمكن أن تخفي الدم والأنسجة بالداخل. إذا لم يتم تنظيفها بفرشاة بشكل صحيح وفحصها، يتم تعقيم العبء البيولوجي (Bioburden) ولكنه يظل يشكل خطر استجابة مناعية ضارة أو انتقال العدوى. (AAMI ST79; CDC SSI)</p>
    <p><span class="english-term"><strong>13.4.1 Why lumens and hinges are dangerous</strong><br>Lumen devices (e.g., endoscopes, cannulas, drills) can hide blood and tissue inside. If they are not properly brushed and flushed, the bioburden is baked on, posing a risk of adverse immune response or infection transfer. (AAMI ST79; CDC SSI)</span></p>

    <h3>13.4.2 الأجهزة التي تعمل بالطاقة (Power tools)</h3>
    <p>المثاقب (Drills) والمناشير تتطلب تفكيكاً دقيقاً. لا يمكن غمرها في الماء عادةً. تتطلب التزاماً صارماً بتعليمات الاستخدام (IFU)، والتسرع في تنظيفها بسبب "الحاجة إليها للحالة التالية" يُعد انتهاكاً جسيماً للسلامة. (AORN)</p>

    <h2>13.5 سلامة الغرسات في غرفة العمليات (الاستلام والتخزين والاختيار)</h2>
    <h3>13.5 Implant Safety in the OR (Receipt, Storage, and Selection)</h3>

    <h3>13.5.1 التحقق من انتهاء الصلاحية وسلامة التغليف</h3>
    <p>يجب فحص كل غرسة، سواء كانت من مخزون المستشفى أو أحضرها المورد، بحثاً عن: تاريخ انتهاء الصلاحية، سلامة العبوة الخارجية (لا سحقات، لا تمزقات، لا أضرار مائية)، والمؤشرات المرئية. (AORN)</p>
    <p><span class="english-term"><strong>13.5.1 Expiry and package integrity verification</strong><br>Every implant, whether hospital stock or vendor-supplied, must be inspected for: expiration date, outer package integrity, and visual indicators. (AORN)</span></p>

    <h3>13.5.2 ظروف التخزين</h3>
    <p>تتحلل الغرسات الحيوية (Biologic implants) والأنسجة إذا لم يتم تخزينها في درجات الحرارة والرطوبة الصحيحة. يجب مراقبة ثلاجات تخزين الأنسجة وتسجيلها بشكل مستمر. (AORN; The Joint Commission)</p>

    <div class="alert-box">
        <h3>13.5.3 التحقق من الاختيار قبل الفتح / Selection verification before opening</h3>
        <p>لا تفتح غرسة أبداً "للاحتياط". بمجرد فتحها، لا يمكن إعادتها وقد تتلوث.<br>
        <strong>قاعدة غرفة العمليات:</strong> يرى الجراح والممرضة المعقمة العبوة، يقرآن الحجم، الجهة، والنوع <strong>بصوت عالٍ ويؤكدان ذلك</strong> قبل الفتح. (AORN)</p>
        <p><span class="english-term"><strong>13.5.3 Selection verification before opening</strong><br>Never open an implant "just in case." Once opened, it cannot be returned and may be contaminated. <strong>OR Rule:</strong> The surgeon and scrub nurse view the package, read the size, laterality, and type <strong>out loud and confirm</strong> prior to opening. (AORN)</span></p>
    </div>

    <h2>13.6 سير عمل الباركود و UDI (المعرف الفريد للجهاز)</h2>
    <h3>13.6 Barcode / UDI Workflow (The "Done Condition")</h3>

    <h3>13.6.1 ما هو UDI؟</h3>
    <p>المعرف الفريد للجهاز (UDI) هو نظام (تفرضه هيئات مثل FDA) لتعريف الأجهزة الطبية عبر توزيعها واستخدامها، ويسمح بالتتبع الدقيق للمريض في حالة الاستدعاءات (Recalls). (FDA UDI concepts)</p>
    <p><span class="english-term"><strong>13.6.1 What is UDI?</strong><br>Unique Device Identification (UDI) is a system to adequately identify medical devices through their distribution and use, allowing exact patient matching in case of recalls. (FDA UDI concepts)</span></p>

    <h3>13.6.2 قاعدة "التقطه قبل أن يغادر" / The "Capture Before Leaving" Rule</h3>
    <p>الخطأ الأكثر شيوعاً في التتبع هو "سنقوم بتسجيل الملصقات لاحقاً". يتم فقدان الملصقات. تُرمى العبوات في سلة المهملات.</p>
    <p><strong>شرط الإنجاز (Done-condition):</strong> قبل أن يغادر المريض غرفة العمليات، يجب مسح الباركود الخاص بـ UDI أو إرفاق ملصق الغرسة الفعلي <strong>بشكل دائم وموثق</strong> في سجل المريض الإلكتروني أو الورقي. (AORN; IHI)</p>
    <p><span class="english-term"><strong>13.6.2 The "Capture Before Leaving" Rule</strong><br>The most common traceability error is "we will scan the labels later." <strong>Done-condition:</strong> Before the patient leaves the OR, the UDI barcode must be scanned or the physical implant label permanently affixed and documented in the patient’s record. (AORN; IHI)</span></p>

    <h2>13.7 الاستجابة للاستدعاء (Trace-Back / Trace-Forward)</h2>
    <h3>13.7 Recall Response (Trace-Back / Trace-Forward)</h3>

    <h3>13.7.1 الفرق بين التتبع العكسي وللأمام / The difference between Trace-back and Trace-forward</h3>
    <p>إذا فشل نظام التتبع الخاص بك في أي من الاتجاهين، فإن استجابتك للاستدعاء ستفشل. (AORN; FDA UDI concepts)</p>
    <ul>
        <li><strong>التتبع العكسي (Trace-back):</strong> يبدأ بالمريض. "تلقى هذا المريض هذه الغرسة؛ متى ومن أين جاءت ومن قام بتعقيمها؟"</li>
        <li><strong>التتبع للأمام (Trace-forward):</strong> يبدأ بالمنتج المَعيب (أو المُعقِّم المعطل). "تم استدعاء دفعة الغرسات رقم X؛ مَن مِن مرضانا تلقاها ويحتاج إلى إخطار؟"</li>
    </ul>
    <p><span class="english-term"><strong>Trace-back:</strong> Starts with the patient. "This patient received this implant; when and where did it come from and who sterilized it?"<br><strong>Trace-forward:</strong> Starts with the defective product. "Implant Batch X was recalled; which of our patients received it and needs notification?"</span></p>

    <h3>13.7.2 لا ذعر، بل سير عمل متدرب عليه / No panic, rehearsed workflow</h3>
    <p>عند حدوث استدعاء، يجب أن تحتوي غرفة العمليات على خطة مُعدة مسبقاً (Playbook):</p>
    <ul>
        <li>عزل ومصادرة (Quarantine) أي مخزون غير مستخدم فوراً.</li>
        <li>استخراج تقرير النظام باستخدام UDI لتحديد المرضى.</li>
        <li>إخطار الجراحين، الذين يقومون بدورهم بإخطار المرضى سريرياً. (IHI)</li>
    </ul>

    <h2>13.8 أدوات عملية لموثوقية الأجهزة عالية الخطورة</h2>
    <h3>13.8 Practical Tools for High-Risk Device Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>13.8.1 الأداة 1 — نموذج طلب وموافقة أطقم الإعارة:</strong><br>
            يجب أن يتضمن: اسم الإجراء، الجراح، الشركة الموردة، وقت الوصول المتوقع (يجب أن يكون &gt;48-72 ساعة)، وعدد الصواني. يُوقع من قبل CSSD للإقرار بالقدرة على المعالجة. (AORN)</li>
            <br>
            <li><strong>13.8.2 الأداة 2 — نص تصعيد "الصينية المتأخرة":</strong><br>
            إذا وصل المورد متأخراً: "وصلت الصواني متأخرة عن وقت التطهير الآمن. سيتم تأخير الحالة أو إلغاؤها ما لم يوقع المدير الطبي على استثناء طارئ." يزيل هذا النص الضغط عن موظفي الخطوط الأمامية. (IHI)</li>
            <br>
            <li><strong>13.8.3 الأداة 3 — سجل التحقق من اختيار الغرسة في الـ Time-out:</strong><br>
            إضافة خطوة إلى المهلة: "الغرسة متوفرة، وتم تأكيد النوع ونطاق الحجم بصوت عالٍ من العبوة." (WHO SSC; AORN)</li>
            <br>
            <li><strong>13.8.4 الأداة 4 — تدريب وهمي للاستدعاء (Recall Drill):</strong><br>
            مرة واحدة في السنة، اختر غرسة عشوائية اُستخدمت الشهر الماضي وتدرب على نظام التتبع للأمام وتحديد المريض في أقل من שעتين. (IHI; AORN)</li>
        </ul>
    </div>

    <h2>13.9 القياس (كيف تعرف أن النظام موثوق)</h2>
    <h3>13.9 Measurement (How You Know the System is Reliable)</h3>

    <h3>13.9.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>نسبة الامتثال لوصول أطقم الإعارة في غضون 48-72 ساعة (مؤشر قوي على الانضباط). (IHI)</li>
        <li>معدل استخدام IUSS للأطقم المعارة (يجب أن يكون صفراً تقريباً). (AAMI ST79)</li>
        <li>النسبة المئوية لالتقاط UDI أو بيانات التتبع بشكل كامل قبل مغادرة المريض للغرفة. (FDA UDI concepts)</li>
    </ul>

    <h3>13.9.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>إلغاءات في يوم الجراحة بسبب عدم توفر الغرسات أو أطقم الإعارة.</li>
        <li>وقت إغلاق استدعاءات الغرسات (الوقت المستغرق لتحديد جميع المرضى المتأثرين). (IHI)</li>
    </ul>

    <h2>13.10 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>13.10 The Writer's Reflection</h3>

    <h3>13.10.1 لا يمكنك إجراء عملية جراحية تتفوق على معالجة معقمة سيئة</h3>
    <p>مهما كانت مهارة الجراح، إذا كان المسمار (Screw) أو الصفيحة (Plate) ملوثة بعبء بيولوجي من مستشفى آخر لأن الصينية تم التسرع في تعقيمها، فإن النتيجة السريرية ستفشل.</p>
    <p><span class="english-term"><strong>13.10.1 You cannot out-operate bad sterile processing</strong><br>No matter how skilled the surgeon, if the screw or plate is contaminated with bioburden from another hospital because the tray was rushed, the clinical outcome will fail.</span></p>

    <h3>13.10.2 التتبع هو أمان مؤجل / Traceability is delayed safety</h3>
    <p>في اللحظة التي تضع فيها ملصق الغرسة في الملف، فإنك لا تعالج المريض اليوم؛ أنت تعالج المريض بعد خمس سنوات عندما يتم اكتشاف عيب تصنيعي. هذا هو التفكير المنهجي الحقيقي.</p>
    <p><span class="english-term"><strong>13.10.2 Traceability is delayed safety</strong><br>The moment you place an implant label in the chart, you are not treating the patient today; you are treating the patient five years from now when a manufacturing defect is discovered. That is true systems thinking.</span></p>

    <h3>13.10.3 قاعدتي / My rule</h3>
    <p>إذا لم يتمكن النظام من إثبات الجاهزية، فلا ندع المريض يدفع ثمن عدم يقيننا. (IHI)</p>
    <p><span class="english-term"><strong>13.10.3 My rule</strong><br>If the system cannot prove readiness, we do not let the patient pay for our uncertainty. (IHI)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الأطقم المعارة والغرسات عالية الخطورة لأن التعقيد + ضغط الوقت يخلقان اختصارات ما لم تكن الحوكمة قوية. (AORN; IHI)<br>
            <span class="english-term">Loaner sets and implants are high-risk because complexity + time pressure create shortcuts unless governance is strong.</span></li>
            
            <li>الجداول الزمنية للجاهزية والبوابات تمنع المعالجة المتسرعة غير الآمنة ومفاجآت فقدان نطاق الأحجام. (AAMI ST79; IHI)<br>
            <span class="english-term">Readiness timelines and gates prevent unsafe rushed processing and missing size range surprises.</span></li>
            
            <li>إخفاقات سلامة التغليف تتجاوز "راحة المؤشر": تمزق/رطوبة/تلف مرشح = ارفض واستبدل. (AAMI ST79; AORN)<br>
            <span class="english-term">Packaging integrity failures override “indicator comfort”: wet/tear/filter/seal compromise = reject and replace.</span></li>
            
            <li>التتبع (Traceability) هو أمان مؤجل: التقط UDI/الملصقات وأكمل التوثيق قبل أن يترك المريض تحكم غرفة العمليات. (AORN; FDA UDI concepts)<br>
            <span class="english-term">Traceability is delayed safety: capture UDI/labels and complete documentation before the patient leaves OR control.</span></li>
            
            <li>جودة الاستجابة للاستدعاء تعتمد على الحد الأدنى من مجموعات البيانات وسير العمل المتدرب عليه، وليس على الذاكرة. (IHI)<br>
            <span class="english-term">Recall response quality depends on minimum datasets and rehearsed workflows, not memory.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (loaner governance concepts, implant handling, traceability practices, OR verification).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79 (sterility assurance, packaging integrity, wet packs, processing governance concepts).</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (closed-loop communication, safety culture, speaking up).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (gates, standard work, measurement, learning loops).</li>
            <li>U.S. Food and Drug Administration (FDA). UDI (Unique Device Identification) program concepts (device identification and traceability principles).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  23: `<!-- Download Button -->
    

    <div class="part-title">PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs</div>
    <div class="part-title">الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة</div>
    
    <h1>CHAPTER 23 — Scheduling, Booking, and Theatre Allocation Rules</h1>
    <div class="subtitle">الفصل الثالث والعشرون — قواعد الجدولة، الحجز، وتخصيص المسرح الجراحي<br>
    <span style="font-size: 18px;">(Booking Discipline • Priority Rules • Add-on Cases • Capacity Alignment)<br>
    (انضباط الحجز • قواعد الأولوية • الحالات الإضافية • مواءمة السعة)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا لا تُعد الجدولة "عملاً إدارياً" بل <strong>نظام سلامة سريري (Clinical safety system)</strong> يُشكل الإرهاق، والعمل المتسرع، والإلغاءات، وخطر "الأحداث التي لا ينبغي أن تحدث" (Never-events). (IHI; AHRQ; WHO SSC concepts)<br>
            <span class="english-term">Explain why scheduling is not “administration” but a <strong>clinical safety system</strong> that shapes fatigue, rushed work, cancellations, and never-event risk. (IHI; AHRQ; WHO SSC concepts)</span></li>
            
            <li>تصميم <strong>انضباط حجز (Booking discipline)</strong> يمنع الفشل المتوقع: تقديرات المدة الخاطئة، المتطلبات المسبقة المفقودة، الجاهزية غير المكتملة للغرسات، والأطقم المعارة المتأخرة التي تجبر الفريق على اختصارات غير آمنة. (IHI; AORN concepts)<br>
            <span class="english-term">Design <strong>booking discipline</strong> that prevents predictable failure: wrong duration estimates, missing prerequisites, incomplete implant readiness, and late loaners that force unsafe shortcuts. (IHI; AORN concepts)</span></li>
            
            <li>تطبيق <strong>قواعد أولوية (Priority rules)</strong> شفافة للعمل المجدول (Elective)، والعاجل (Urgent)، والطارئ (Emergency) تحمي العدالة <em>والسلامة</em> معاً، خاصة تحت عبء العمل الزائد. (AHRQ; IHI)<br>
            <span class="english-term">Apply transparent <strong>priority rules</strong> for elective, urgent, and emergency work that protect fairness <em>and</em> safety, especially under overload. (AHRQ; IHI)</span></li>
            
            <li>إدارة <strong>الحالات الإضافية (Add-on cases)</strong> دون تدمير حواجز السلامة: بوابات الجاهزية، التوقفات الإلزامية، ومسارات التصعيد الواضحة. (IHI; AHRQ)<br>
            <span class="english-term">Manage <strong>add-on cases</strong> without destroying safety barriers: readiness gates, hard stops, and clear escalation pathways. (IHI; AHRQ)</span></li>
            
            <li>مواءمة <strong>السعة (Capacity)</strong> (الموظفين، CSSD، الأسرة، PACU، التخدير، المعدات) مع الطلب بحيث لا تُصبح "الكفاءة" اسماً حركياً لـ "الخطر". (IHI; AHRQ)<br>
            <span class="english-term">Align <strong>capacity</strong> (staffing, CSSD, beds, PACU, anesthesia, equipment) with demand so “efficiency” does not become code for “risk.” (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الحالة الإضافية التي وصلت كالعاصفة"</strong><br>
        <span class="english-term">A true-to-life case: “The add-on that arrived like a storm” (Real Scientific Story)</span>
    </div>

    <p>في العديد من المستشفيات، لا يفشل يوم غرفة العمليات لأن الجراحين غير مبالين. بل يفشل لأن الجدول الزمني غير صادق.</p>
    <p><span class="english-term">In many hospitals, the OR day does not fail because surgeons are careless. It fails because the schedule is dishonest.</span></p>

    <p>تمت إضافة حالة في منتصف النهار—"يُفترض أن تكون سريعة". كانت مذكرة الحجز ضعيفة (Thin). لم يتم تأكيد خطة الغرسة (Implant plan). لم يكمل المريض فحوصات الجاهزية. كان قسم التعقيم (CSSD) مضغوطاً بالفعل بالحالات المجدولة. وكانت وحدة الإفاقة (PACU) ممتلئة.</p>
    <p><span class="english-term">A case was added at noon—“should be quick.” The booking note was thin. No implant plan confirmed. The patient had not completed readiness checks. CSSD was already backed up with elective cases. PACU was full.</span></p>

    <p>لكن الجراح كان لديه نافذة زمنية، وكان النظام يخشى قول "لا". لذلك، تحركت الآلة. تم إرسال المريض. طُلب من الممرضات "الإسراع في تجهيز الغرفة". وتم اختصار التبديل (Turnover). وتم تجاوز المهلة (Time-out) بالكاد.</p>
    <p><span class="english-term">But the surgeon had a window, and the system was afraid to say no. So, the machine moved. The patient was sent for. Nurses were told to “rush the room.” Turnover was short-cut. The Time-out was barely a whisper.</span></p>

    <div class="alert-box">
        <p>بدأت الحالة واستمرت لثلاث ساعات بدلاً من ساعة واحدة. لم تكن الأداة الصحيحة متوفرة، مما أدى إلى ارتباك داخل العملية. تعين على الموظفين البقاء لوقت إضافي، وهم متعبون ومحبطون. وبسبب تأخر هذه الحالة، تعين إلغاء حالة روتينية أُخرى بعد أن كان المريض صائماً طوال اليوم.</p>
        <p><span class="english-term">The case started and took three hours instead of one. The correct instrument was not available, leading to intra-op scrambling. Staff had to stay on overtime, tired and frustrated. Because this case ran late, a routine elective case had to be cancelled after the patient had fasted all day.</span></p>
    </div>

    <div class="success-box">
        <p>لم يُصب أحد بضرر دائم، لكن <strong>النظام نفسه تعرض للضرر</strong>. أجبر الجدول الزمني الفريق على الاختيار بين السرعة والسلامة. هذا هو الخطر الأساسي لضعف الحوكمة التشغيلية: <strong>عندما تكذب الجدولة، تدفع السلامة الثمن.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">No one was permanently harmed, but <strong>the system itself took damage</strong>. The schedule forced the team to choose between speed and safety. This is the core danger of poor operational governance: <strong>when scheduling lies, safety pays the price.</strong> (IHI; AHRQ)</span></p>
    </div>

    <h2>23.1 المنطق السليم لسلامة الجدولة (لماذا هي ليست مسألة إدارية)</h2>
    <h3>23.1 The Safety Logic of Scheduling (Why It Is Not Administrative)</h3>

    <h3>23.1.1 الجدولة هي صانع إيقاع غرفة العمليات / Scheduling is the pacemaker</h3>
    <p>الجدول الزمني يملي وتيرة عمل كل شخص. إذا تم حجز ثلاث ساعات من العمل في فترة زمنية مدتها ساعتان، فإن النظام يعوض ذلك من خلال <strong>السرعة (Speed)</strong>. السرعة تقتل الـ Time-out، والسرعة تدمر التنظيف، والسرعة تُسكت التحدث بصوت عالٍ (Speaking up). (IHI; WHO SSC concepts)</p>
    <p><span class="english-term"><strong>23.1.1 Scheduling is the pacemaker of the OR</strong><br>The schedule dictates the pace of everyone’s work. If three hours of work are booked into a two-hour slot, the system compensates with <strong>speed</strong>. Speed kills the Time-out, speed ruins cleaning, and speed silences speaking up. (IHI; WHO SSC concepts)</span></p>

    <h3>23.1.2 "الجدولة الصادقة" كأداة للسلامة / Honest scheduling</h3>
    <p>تبني المستشفيات الآمنة الجداول الزمنية على <strong>البيانات التاريخية الفعلية (Actual historical data)</strong> لكل جراح وإجراء، وليس على التوقعات المتفائلة للجراح. الجدول الزمني الذي يخطط لـ "أفضل سيناريو" هو جدول مهيأ للفشل. (IHI)</p>
    <p><span class="english-term"><strong>23.1.2 “Honest scheduling” as a safety tool</strong><br>Safe hospitals build schedules on <strong>actual historical data</strong> for that surgeon and procedure, not on the surgeon’s optimistic guess. A schedule that plans for the “best-case scenario” is a schedule built to fail. (IHI)</span></p>

    <h2>23.2 انضباط الحجز: الحد الأدنى للبيانات لفتح الباب</h2>
    <h3>23.2 Booking Discipline: The Minimum Dataset to Open the Door</h3>

    <h3>23.2.1 الحجز هو عقد / A booking is a contract</h3>
    <p>عندما يحجز الجراح حالة، فإنه يُفعل سلسلة التوريد، والتعقيم (CSSD)، والتخدير، والأسرة. إذا كان الحجز غامضاً، فإن كل فريق لاحق سيضطر للتخمين.</p>
    <p><span class="english-term"><strong>23.2.1 A booking is a contract</strong><br>When a surgeon books a case, they trigger supply chain, CSSD, anesthesia, and beds. If the booking is vague, every downstream team has to guess.</span></p>

    <h3>23.2.2 الحد الأدنى لمجموعة بيانات الحجز (MBD) / The Minimum Booking Dataset</h3>
    <p>يجب ألا يتم قبول الحجز في النظام المجدول (Elective) ما لم يكتمل:</p>
    <div class="concept-box">
        <ul>
            <li>اسم المريض والمُعرّفات.</li>
            <li>اسم الإجراء بلغة موحدة (Standardized language) (بدون اختصارات غامضة).</li>
            <li>الجهة/الموقع/المستوى (Laterality/site/level).</li>
            <li>توقع الغرسة (نعم/لا، الشركة الموردة، نوع الطقم). (AORN concepts)</li>
            <li>احتياجات المعدات الخاصة (ليزر، مجهر، طاولة كسور).</li>
            <li>متطلبات التخدير والوضعية.</li>
            <li>متطلبات أسرة العناية المركزة (ICU) أو الرعاية اللاحقة. (IHI)</li>
        </ul>
        <p><strong>قاعدة التوقف الإلزامي:</strong> البيانات المفقودة = لا يوجد حجز مؤكد.</p>
        <p><span class="english-term"><strong>Hard stop rule:</strong> Missing data = no confirmed booking.</span></p>
    </div>

    <h3>23.2.3 صدق المدة ووقت التبديل / Duration honesty and turnover</h3>
    <p>يجب أن يشمل وقت الحجز: وقت الشق الجراحي (Cut time) + التخدير والوضعية + <strong>وقت التبديل (Turnover time) الواقعي</strong> لتنظيف الغرفة وإعادة تجهيزها. عدم تخصيص وقت للتبديل هو السبب الرئيسي لتعفن العقامة (Asepsis decay). (IHI; AORN)</p>

    <h2>23.3 قواعد الأولوية لتخصيص المسرح الجراحي (إدارة النزاعات)</h2>
    <h3>23.3 Priority Rules for Theatre Allocation (Managing Conflict)</h3>

    <h3>23.3.1 لماذا تهم الفئات / Why categories matter</h3>
    <p>عندما يتنافس جراحان على غرفة الطوارئ (Trauma/Emergency OR)، كيف تقرر الممرضة المسؤولة (Charge nurse)؟ إذا لم تكن هناك قواعد مكتوبة، سيفوز الجراح الأعلى صوتاً. هذا غير آمن. (AHRQ)</p>
    <p><span class="english-term"><strong>23.3.1 Why categories matter</strong><br>When two surgeons compete for the emergency OR, how does the charge nurse decide? If there are no written rules, the loudest surgeon wins. This is unsafe. (AHRQ)</span></p>

    <h3>23.3.2 الفئات القياسية للفرز (Standard Triage Categories)</h3>
    <p>تستخدم غرف العمليات الآمنة تصنيفاً مشابهاً لهذا:</p>
    <ul>
        <li><strong>الفئة 1 (طارئ لإنقاذ الحياة/الطرف - Life/Limb Saving):</strong> فوراً. يتوقف كل شيء آخر.</li>
        <li><strong>الفئة 2 (عاجل - Urgent):</strong> في غضون ساعتين إلى 6 ساعات. (مثل: التهاب الزائدة الدودية، كسور مفتوحة).</li>
        <li><strong>الفئة 3 (شبه عاجل - Semi-urgent):</strong> في غضون 24 ساعة.</li>
        <li><strong>الفئة 4 (مجدول/اختياري - Elective):</strong> مجدول مسبقاً. (IHI concepts)</li>
    </ul>

    <h3>23.3.3 من يفصل في التعادل؟ / Who breaks the tie?</h3>
    <p>عندما تتصادم حالتان من الفئة 1، لا يجب أن تتخذ الممرضة المسؤولة القرار السريري. يجب أن يكون هناك مسار تصعيد واضح <strong>للقائد السريري (المدير الطبي لغرفة العمليات أو رئيس الجراحة)</strong> لاتخاذ قرارات التوزيع السريري. (IHI)</p>

    <h2>23.4 إدارة الحالات الإضافية (مُعطلات التدفق)</h2>
    <h3>23.4 Managing Add-on Cases (The Flow Disruptors)</h3>

    <h3>23.4.1 الإضافات هي أكبر اختبار للحوكمة</h3>
    <p>تتجاوز الحالة الإضافية (Add-on) بوابات الجاهزية المعتادة لعدة أيام. لذلك، تحمل الإضافات أعلى مخاطر: الغرسات المفقودة، المرضى غير المحسّنين، وتجاوزات الـ Time-out. (IHI)</p>
    <p><span class="english-term"><strong>23.4.1 Add-ons are the greatest test of governance</strong><br>An add-on bypasses the normal multi-day readiness gates. Therefore, add-ons carry the highest risk of: missing implants, unoptimized patients, and time-out overrides. (IHI)</span></p>

    <div class="alert-box">
        <h3>23.4.2 "بوابة الإضافة" / The Add-on Gate</h3>
        <p>لا يُلغي الاستعجال الحاجة إلى السلامة. لكي تتم إضافة حالة غير طارئة (Non-Level 1) إلى القائمة، يجب على الجراح وفريق العمليات تأكيد:</p>
        <ol>
            <li>المعدات/الغرسات موجودة ومعقمة. (AAMI ST79)</li>
            <li>المريض طبيًا جاهز لهذه النافذة الزمنية المحددة.</li>
            <li>تتوفر سعة لمرحلة ما بعد الجراحة (PACU/ICU).</li>
        </ol>
        <p>إذا كانت الإجابة "لا" على أي من هذه، فإن الحالة ليست جاهزة، بغض النظر عن مدى رغبة الجراح في إجرائها. (IHI)</p>
        <p><span class="english-term">Urgency does not cancel safety. For a non-Level 1 case to be added, the surgeon and OR team must confirm: 1. Equipment/implants are physically present and sterile. 2. Patient is medically cleared for this window. 3. Post-op capacity (PACU/ICU) exists. If any are "no," the case is not ready.</span></p>
    </div>

    <h2>23.5 مواءمة السعة (حماية النظام بهوامش أمان)</h2>
    <h3>23.5 Capacity Alignment (Buffering the System)</h3>

    <h3>23.5.1 الكفاءة بدون هوامش أمان هي هشاشة / Efficiency without buffers is fragility</h3>
    <p>إذا قمت بجدولة غرفة العمليات لتعمل بنسبة 100% من طاقتها طوال اليوم، فإن أي تأخير بسيط لمدة 10 دقائق (التخدير استغرق وقتاً أطول، التنظيف تطلب وقتاً إضافياً) سيؤدي إلى انهيار بقية اليوم. تتطلب الموثوقية هوامش أمان (Buffers) مُصممة (تخصيص بنسبة 80-85%). (IHI)</p>
    <p><span class="english-term"><strong>23.5.1 Efficiency without buffers is fragility</strong><br>If you schedule the OR to run at 100% capacity all day, a single 10-minute delay collapses the rest of the day. Reliability requires designed buffers (80-85% utilization target). (IHI)</span></p>

    <h3>23.5.2 الاختناقات خارج غرفة العمليات / Bottlenecks outside the OR</h3>
    <p>لا يمكنك جدولة غرفة العمليات بمعزل عن غيرها. المواءمة تعني التأكد من قدرة الأقسام الأخرى على مواكبة الوتيرة:</p>
    <ul>
        <li><strong>سعة CSSD:</strong> هل يمتلك قسم التعقيم الأدوات الكافية والموظفين لمعالجة أحمال اليوم دون اللجوء إلى التعقيم الفوري (IUSS) غير الآمن؟ (AAMI ST79)</li>
        <li><strong>سعة PACU (وحدة الإفاقة):</strong> إذا كانت وحدة الإفاقة ممتلئة ولا توجد أسرة في الجناح، يتم حجز مرضى غرفة العمليات على طاولة الجراحة (PACU hold)، مما يوقف التدفق ويُجهد موظفي غرفة العمليات. (IHI)</li>
    </ul>

    <h2>23.6 القصة الحقيقية 2: "القائمة المجدولة التي سحقت حالة الطوارئ"</h2>
    <h3>23.6 Real Story 2: "The elective list that crushed the emergency case"</h3>

    <div class="quote-box">
        <p><strong>المشهد:</strong> مستشفى يعمل بسعة 95% من غرف العمليات للعمليات المجدولة (Electives). وصلت حالة طارئة (انفجار زائدة دودية) في الساعة 1:00 ظهراً. كل غرفة عمليات كانت قيد الاستخدام. وكل حالة مجدولة كانت متأخرة عن وقتها. لم تكن أي غرفة قريبة من الانتهاء.</p>
        <p><span class="english-term"><strong>The scene:</strong> A hospital ran its ORs at 95% elective capacity. An emergency case (ruptured appendix) arrived at 1:00 p.m. Every OR was in use. Every elective case was running late. No room was close to finishing.</span></p>
        
        <p><strong>الخطر:</strong> انتظر المريض الطارئ في الألم وارتفاع مخاطر الإنتان (Sepsis) لمدة أربع ساعات حتى تم الانتهاء من جراحة تجميلية (Elective) روتينية. فاز الجدول الزمني المالي على الفرز السريري.</p>
        <p><span class="english-term"><strong>The danger:</strong> The emergency patient waited in pain and rising sepsis risk for four hours while a routine cosmetic surgery finished. Financial scheduling beat clinical triage.</span></p>
        
        <p><strong>الإصلاح:</strong> تدخلت القيادة. لم يعد يُسمح للمستشفى بحجز 100% من غرفه. تم الاحتفاظ بغرفة واحدة كـ "غرفة طوارئ" مخصصة، وأصبحت الحالات الطارئة تُلغي الحالات المجدولة عند الضرورة بناءً على سياسة صارمة. <strong>الاستعداد للطوارئ هو قرار جدولة.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term"><strong>The fix:</strong> Leadership intervened. The hospital was no longer allowed to book 100% of its rooms. One room was protected as a dedicated trauma room, and emergency cases bumped electives based on a strict policy. <strong>Emergency preparedness is a scheduling decision.</strong> (IHI; AHRQ)</span></p>
    </div>

    <h2>23.7 أدوات عملية لسلامة الجدولة</h2>
    <h3>23.7 Practical Tools for Scheduling Safety</h3>

    <div class="success-box">
        <ul>
            <li><strong>23.7.1 الأداة 1 — قاعدة التوقف الإلزامي للحجز (Booking Hard Stop Rule):</strong><br>
            لا يتم تخصيص وقت لغرفة العمليات للمقترح الجراحي ما لم تكتمل متطلبات مجموعة البيانات الأساسية (MBD). يرفض مكتب الجدولة النماذج غير المكتملة. (IHI)</li>
            <br>
            <li><strong>23.7.2 الأداة 2 — مصفوفة فرز الحالات الإضافية (Add-on Triage Matrix):</strong><br>
            وثيقة من صفحة واحدة يستخدمها مدير غرفة العمليات: إذا كانت الحالة فئة 2 (عاجلة)، هل الأدوات موجودة في المبنى ومعقمة؟ إذا كانت الإجابة لا، يتم التصعيد للمدير الطبي.</li>
            <br>
            <li><strong>23.7.3 الأداة 3 — تدقيق دقة الجدولة (Scheduling Accuracy Audit):</strong><br>
            تتبع الوقت المجدول مقابل الوقت الفعلي (Cut-to-close) لكل جراح. إذا كان الجراح يقلل باستمرار من تقدير الوقت بأكثر من 20%، يتم تعديل أوقات حجزه المستقبلية برمجياً. (IHI)</li>
        </ul>
    </div>

    <h2>23.8 القياس (كيف تعرف أن التدفق آمن)</h2>
    <h3>23.8 Measurement (How to Know the Flow is Safe)</h3>

    <h3>23.8.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>حجم الحالات الإضافية كنسبة مئوية من إجمالي الحالات (الحجم الكبير يكسر الموثوقية). (IHI)</li>
        <li>النسبة المئوية للحجوزات التي تحتوي على أخطاء دقة الوقت (Over/Under booking &gt; 20%).</li>
        <li>معدل امتثال نماذج الحجز للحد الأدنى من البيانات (MBD).</li>
    </ul>

    <h3>23.8.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>ساعات العمل الإضافي (Overtime) للموظفين (مؤشر قوي على إرهاق النظام).</li>
        <li>الإلغاءات في نفس اليوم بسبب التجاوزات الزمنية للحالات (Overruns). (IHI)</li>
    </ul>

    <h2>23.14 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>23.14 The Writer's Reflection</h3>
    <p><em>ملاحظة: تم تخطي الترقيم من 23.8 إلى 23.14 التزاماً بالنص الأصلي.</em></p>

    <h3>23.14.1 غرفة العمليات الهادئة هي غرفة عمليات آمنة / A quiet OR is a safe OR</h3>
    <p>في الغرفة ذات الجدولة الجيدة، يمشي الناس ولا يركضون. هناك وقت لغسل الأيدي، والقيام بالمهلة (Time-out)، وتجفيف محلول التحضير. الجدولة الجيدة تشتري لغرفة العمليات أثمن أداة أمان على الإطلاق: <strong>الوقت.</strong></p>
    <p><span class="english-term"><strong>23.14.1 A quiet OR is a safe OR</strong><br>In a well-scheduled room, people walk, they don’t run. There is time to wash hands, do the Time-out, and let the prep dry. Good scheduling buys the OR its most precious safety tool: <strong>Time.</strong></span></p>

    <h3>23.14.2 عندما يكون النظام صادقاً، يكون الفريق هادئاً / When the system is honest, the team is calm</h3>
    <p>عندما تكون الجدولة صادقة وتتوافق مع السعة، تتوقف الفرق عن الركض. تصبح قوائم التحقق ذات معنى مرة أخرى. ويعود الهدوء إلى عمليات العد. يقل التعب. ويشعر المرضى بذلك.</p>
    <p><span class="english-term"><strong>23.14.2 When the system is honest, the team is calm</strong><br>When scheduling is honest and capacity aligned, teams stop sprinting. Checklists become meaningful again. Counts become calm again. Fatigue decreases. Patients feel it.</span></p>

    <h3>23.14.3 قاعدتي / My rule</h3>
    <p>إذا كان الجدول الزمني يتطلب بطولات (Heroics) لينجح، فهو جدول غير آمن—حتى لو بدا فعالاً على الورق. (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>23.14.3 My rule</strong><br>If the schedule requires heroics to succeed, it is an unsafe schedule—even if it looks efficient on paper. (IHI; AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الجدولة والحجز هما أنظمة سلامة: فهما يشكلان ضغط الوقت، والإرهاق، وعمليات التسليم، وجودة الحواجز. (AHRQ; IHI)<br>
            <span class="english-term">Scheduling and booking are safety systems: they shape time pressure, fatigue, handoffs, and barrier quality.</span></li>
            
            <li>يتطلب انضباط الحجز حداً أدنى من البيانات ومدة زمنية صادقة؛ البيانات المفقودة تتحول إلى إلغاءات والتفافات غير آمنة. (IHI)<br>
            <span class="english-term">Booking discipline requires a minimum dataset and honest duration; missing data becomes cancellations and unsafe workarounds.</span></li>
            
            <li>يجب أن تجتاز الحالات الإضافية بوابات الجاهزية؛ الاستعجال لا يلغي حواجز السلامة. (WHO SSC concepts; IHI)<br>
            <span class="english-term">Add-ons must pass readiness gates; urgency does not cancel safety barriers.</span></li>
            
            <li>يجب أن تشمل مواءمة السعة قسم CSSD، الإفاقة (PACU)، الأسرة، الموظفين، والمعدات—هوامش الأمان (Buffers) تحمي السلامة. (IHI; AHRQ)<br>
            <span class="english-term">Capacity alignment must include CSSD, PACU, beds, staffing, and equipment—buffers protect safety.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, safety culture, systems under pressure, communication and handoffs).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (flow, standard work, constraints, measurement, learning loops).</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist resources (team communication culture supporting safe starts and meaningful pauses).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (perioperative workflow concepts, equipment readiness, safety-related operational practices).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79 (concepts). Sterility assurance and processing constraints relevant to CSSD capacity alignment and IUSS pressure signals.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  8: `<!-- Download Button -->
    

    <div class="part-title">PART II — Preoperative Readiness and “Start-Right” Controls</div>
    <div class="part-title">الجزء الثاني — الجاهزية ما قبل العملية وضوابط "البداية الصحيحة"</div>
    
    <h1>CHAPTER 8 — Antibiotic Prophylaxis and SSI Prevention Gate</h1>
    <div class="subtitle">الفصل الثامن — الوقاية بالمضادات الحيوية وبوابة الوقاية من عدوى الموقع الجراحي (SSI)<br>
    <span style="font-size: 18px;">(Right Drug • Right Time • Right Dose • Redosing • Allergy Alternatives • Sterility &amp; Environmental Reliability • Audit-Ready Documentation)<br>
    (الدواء الصحيح • الوقت الصحيح • الجرعة الصحيحة • إعادة الجرعة • بدائل الحساسية • موثوقية العقامة والبيئة • التوثيق الجاهز للتدقيق)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد الوقاية من <strong>عدوى الموقع الجراحي (SSI)</strong> ليست فعلاً منفرداً، بل نظام موثوقية يجب أن يبدأ قبل الشق الجراحي ويصمد أمام ضغط الوقت. (WHO SSI; CDC SSI; AORN)<br>
            <span class="english-term">Explain why <strong>surgical site infection (SSI)</strong> prevention is not a single action, but a reliability system that must begin before incision and survive time pressure. (WHO SSI; CDC SSI; AORN)</span></li>
            
            <li>تصميم <strong>بوابة الوقاية من SSI (SSI Prevention Gate)</strong>: نقطة تحقق أمان أخيرة تضمن جاهزية الوقاية بالمضادات الحيوية وضوابط العدوى الأساسية قبل القطع الجراحي. (WHO SSI; IHI)<br>
            <span class="english-term">Design an <strong>SSI Prevention Gate</strong>: a last safety checkpoint ensuring antibiotic prophylaxis and core infection controls are ready before the cut. (WHO SSI; IHI)</span></li>
            
            <li>تطبيق سير عمل عملي للمضادات الحيوية: العامل الصحيح، التوقيت الصحيح، الجرعة الصحيحة/تعديل الوزن، إعادة الجرعة بشكل صحيح، واستراتيجية الإيقاف الصحيحة بالتنسيق مع الفرق الجراحية. (WHO SSI; CDC SSI)<br>
            <span class="english-term">Apply a practical antibiotic workflow: right agent, right timing, correct dose/weight adjustment, correct redosing, and correct discontinuation strategy in coordination with surgical teams. (WHO SSI; CDC SSI)</span></li>
            
            <li>التعرف على أنماط الفشل الواقعية: تأخر المضادات الحيوية، العامل الخاطئ في حالة الحساسية، نسيان إعادة الجرعة، إطالة الوقاية "للاحتياط فقط"، وانهيار انضباط العقامة أثناء التبديل (Turnover). (WHO SSI; CDC SSI; AHRQ)<br>
            <span class="english-term">Recognize real-life failure modes: late antibiotics, wrong agent in allergy, forgotten redose, prolonged prophylaxis “just in case,” and breakdown of sterile discipline during turnover. (WHO SSI; CDC SSI; AHRQ)</span></li>
            
            <li>استخدام قيادة إنسانية مبنية على السرد: كيف تتحدث بصوت عالٍ، كيف توقف الخط (Stop the line)، وكيف تحمي المرضى دون تحويل غرفة العمليات إلى مجرد أعمال ورقية. (IHI; AHRQ)<br>
            <span class="english-term">Use humane, narrative-based leadership: how to speak up, how to stop the line, and how to protect patients without turning the OR into paperwork. (IHI; AHRQ)</span></li>
            
            <li>قياس ما يهم: مؤشرات موثوقية العملية (التوقيت، الامتثال لإعادة الجرعة، فتحات الأبواب، توثيق اختراقات العقامة) والنتائج (اتجاهات SSI) دون إلقاء اللوم. (IHI; WHO SSI)<br>
            <span class="english-term">Measure what matters: process reliability indicators (timing, redose compliance, door openings, sterility breaks documentation) and outcomes (SSI trends) without blame. (IHI; WHO SSI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الجرح النظيف الذي لم يعد نظيفاً"</strong><br>
        <span class="english-term">A true-to-life case: “The clean wound that wasn’t clean anymore” (Real Scientific Story)</span>
    </div>

    <p>في غرفة العمليات، نادراً ما تفشل الوقاية من العدوى بصوت عالٍ. إنها تفشل بهدوء—مثل باب يُفتح لمرة واحدة إضافية، مثل محلول تحضير الجلد (Prep) الذي لا يُترك ليجف، مثل مضاد حيوي يصل <strong>بعد</strong> الشق الجراحي لأن الغرفة متأخرة ولا أحد يريد أن يكون هو من يؤخر الجراح.</p>
    <p><span class="english-term">In the OR, infection prevention rarely fails with a loud sound. It fails quietly—like a door that opens one time too many, like a prep that isn’t allowed to dry, like an antibiotic that arrives <strong>after</strong> the incision because the room is late and nobody wants to be the one who delays the surgeon.</span></p>

    <p>لا زلت أتذكر حالة بدت مثالية على الورق. كان المريض منخفض الخطورة. الإجراء كان روتينياً. الفريق كان خبيراً. قائمة التحقق كانت "مُنجزة". الجرح كان نظيفاً.</p>
    <p><span class="english-term">I still remember a case that looked perfect on paper. The patient was low-risk. The procedure was routine. The team was experienced. The checklist was “done.” The incision was clean.</span></p>

    <p>بعد أسبوع، عاد المريض وهو يعاني من حمى وألم في الجرح. تم تشخيص عدوى عميقة في الموقع الجراحي (Deep SSI). وجه المريض—المتعب، المحبط، الخائف—يبقى في ذاكرتي لفترة أطول من أي ملف طبي.</p>
    <p><span class="english-term">A week later, the patient returned with fever and wound pain. A deep SSI was diagnosed. The patient’s face—tired, disappointed, frightened—stays with me longer than any chart.</span></p>

    <div class="alert-box">
        <p>عندما تتبعنا السلسلة، لم يظهر أي شيء دراماتيكي. بدلاً من ذلك، وجدنا مجموعة من "الأمور الطبيعية الصغيرة" (Small normals) التي تم التسامح معها:</p>
        <p><span class="english-term">When we traced the chain, nothing dramatic appeared. Instead, we found a collection of “small normals” that were tolerated:</span></p>
        <ul>
            <li>تم توثيق الوقاية بالمضادات الحيوية، لكنها أُعطيت <strong>بعد</strong> الشق الجراحي لأن الوصول الوريدي (IV) تأخر ولم يُرد الفريق التوقف. (WHO SSI; CDC SSI)</li>
            <li>كانت الغرفة متأخرة عن الجدول، لذلك تم التعجيل في تنظيف التبديل (Turnover cleaning)؛ وتم مسح المناطق عالية اللمس بشكل غير متسق. (AORN)</li>
            <li>فُتحت الأبواب بشكل متكرر لأن الإمدادات كانت مفقودة—شعروا أن كل فتحة باب كانت غير ضارة. (AORN)</li>
            <li>حدث اختراق للعقامة (Sterility break) (تلوث القفاز)، صُحح بشكل غير رسمي، ولكن لم يتم توثيقه أو يتبعه استجابة منظمة. (AORN; WHO SSI)</li>
        </ul>
    </div>

    <p>لم يبدُ أي فعل بمفرده كأنه "السبب". لكن العدوى نادراً ما تكون سبباً واحداً. العدوى هي فشل في النظام.</p>
    <p><span class="english-term">No single act looked like “the cause.” But infection is rarely one cause. Infection is a system failure.</span></p>

    <div class="success-box">
        <p>كان ذلك هو اليوم الذي بدأت فيه بوصف المضادات الحيوية بأنها <strong>الجزء المرئي</strong> من الوقاية من SSI—وبيئة غرفة العمليات بأنها <strong>الجزء غير المرئي</strong>. إذا قمت بإصلاح الجزء المرئي فقط، فإن الجزء غير المرئي سيستمر في إيذاء مرضاك. (WHO SSI; CDC SSI; AORN)</p>
        <p><span class="english-term">That was the day I began describing antibiotics as <strong>the visible part</strong> of SSI prevention—and the OR environment as <strong>the invisible part</strong>. If you fix only the visible part, the invisible part will still harm your patients. (WHO SSI; CDC SSI; AORN)</span></p>
    </div>

    <h2>8.1 الوقاية من SSI هي نظام، وليست مجرد تذكير</h2>
    <h3>8.1 SSI Prevention Is a System, Not a Reminder</h3>

    <h3>8.1.1 SSI شائعة بما يكفي لتهتم، وخطيرة بما يكفي لتتطلب الموثوقية</h3>
    <p>لا تزال عدوى الموقع الجراحي (SSIs) سبباً رئيسياً للمراضة (Morbidity) بعد العمليات، وإطالة مدة الإقامة، وإعادة الإدخال للمستشفى، والتكلفة العالية. (CDC SSI; WHO SSI)</p>
    <p><span class="english-term"><strong>8.1.1 SSI is common enough to matter and serious enough to demand reliability</strong><br>
    SSIs remain a major cause of postoperative morbidity, prolonged length of stay, readmissions, and cost. (CDC SSI; WHO SSI)</span></p>

    <h3>8.1.2 "حقيقة الحزمة" (The bundle truth): فعل واحد لا يمكن أن يعوض عن آخر</h3>
    <p>لقد رأيت فرقاً تُهوس بالمضادات الحيوية بينما تتجاهل حركة المرور (Traffic)، وانضباط العقامة، وموثوقية التبديل. الحقيقة هي: عناصر الحزمة (Bundle) تعمل معاً. الضعف في عنصر واحد يمكن أن يقوض النظام بأكمله. (WHO SSI; AORN)</p>
    <p><span class="english-term"><strong>8.1.2 The “bundle truth”: one action cannot compensate for another</strong><br>
    Clinical practice has shown teams obsess over antibiotics while ignoring traffic, sterility discipline, and turnover reliability. The reality is: bundle elements work together. Weakness in one element can undermine the whole. (WHO SSI; AORN)</span></p>

    <h3>8.1.3 مسؤولية غرفة العمليات: حماية اللحظة المعقمة</h3>
    <p>يعمل الجراحون، ويدير التخدير الفسيولوجيا، لكن نظام غرفة العمليات هو من يحمي الحقل المعقم والبيئة. الوقاية من العدوى واجب مشترك، لكن المسرح يجب أن يمتلك <strong>موثوقية العملية (Process reliability)</strong>. (AORN; WHO SSI)</p>
    <p><span class="english-term"><strong>8.1.3 The OR’s responsibility: protect the sterile moment</strong><br>
    Surgeons operate, anesthesia manages physiology, but the OR system holds the sterile field and the environment. Infection prevention is a shared duty, but the theatre must own the <strong>process reliability</strong>. (AORN; WHO SSI)</span></p>

    <h2>8.2 مبدأ الوقاية بالمضادات الحيوية (ما يعنيه "الصحيح" حقاً)</h2>
    <h3>8.2 The Antibiotic Prophylaxis Principle (What “Right” Really Means)</h3>

    <h3>8.2.1 "المضاد الحيوي الصحيح" ليس تفضيلاً—إنه قرار بروتوكول</h3>
    <p>يعتمد الاختيار على نوع الإجراء، والكائنات الدقيقة المحتملة، والمضاد الحيوي المحلي (Antibiogram)، وعوامل المريض مثل الحساسية. (WHO SSI; CDC SSI)</p>
    <p><span class="english-term"><strong>8.2.1 “Right antibiotic” is not a preference—it is a protocol decision</strong><br>
    Choice depends on procedure type, likely organisms, local antibiogram, and patient factors such as allergy. (WHO SSI; CDC SSI)</span></p>

    <h3>8.2.2 "الوقت الصحيح" هو بوابة سلامة، وليس اقتراحاً</h3>
    <p>يجب إعطاء الوقاية بالمضادات الحيوية ضمن النافذة الموصى بها قبل الشق الجراحي لضمان تركيزات كافية في الأنسجة وقت التلوث (Contamination). (WHO SSI; CDC SSI)</p>
    <p><span class="english-term"><strong>8.2.2 “Right timing” is a safety gate, not a suggestion</strong><br>
    Antibiotic prophylaxis should be administered within the recommended window before incision to ensure adequate tissue concentrations at the time of contamination. (WHO SSI; CDC SSI)</span></p>

    <h3>8.2.3 "الجرعة الصحيحة" تشمل الوزن، الاعتبارات الكلوية، وواقع إعادة الجرعة</h3>
    <p>الجرعة المنخفضة (Under-dosing) تخلق الفشل. والجرعة الزائدة تخلق الضرر. تؤكد العديد من الإرشادات على الجرعات الصحيحة وإعادة الجرعة (Redosing) بناءً على مدة العملية وفقدان الدم. (CDC SSI; WHO SSI)</p>
    <p><span class="english-term"><strong>8.2.3 “Right dose” includes weight, renal considerations, and redosing reality</strong><br>
    Under-dosing creates failure. Over-dosing creates harm. Many guidelines emphasize correct dosing and redosing based on duration and blood loss. (CDC SSI; WHO SSI)</span></p>

    <h3>8.2.4 الوقاية ليست علاجاً</h3>
    <p>الاستمرار غير الضروري للمضادات الحيوية الوقائية بعد الفترة الموصى بها يمكن أن يزيد من مقاومة البكتيريا (Resistance) والأضرار دون تحسين الوقاية من SSI. (WHO SSI; CDC SSI)</p>
    <p><span class="english-term"><strong>8.2.4 Prophylaxis is not treatment</strong><br>
    Continuing prophylactic antibiotics unnecessarily beyond the recommended period can increase resistance and harms without improving SSI prevention. (WHO SSI; CDC SSI)</span></p>

    <h2>8.3 بوابة الوقاية من SSI (التحقق الأخير قبل الشق الجراحي)</h2>
    <h3>8.3 The SSI Prevention Gate (The Last Check Before Incision)</h3>

    <h3>8.3.1 لماذا نحتاج إلى "بوابة"</h3>
    <p>في الحياة الواقعية، يمكن طلب المضادات الحيوية دون إعطائها، أو التخطيط لها بتأخير، أو إعطاؤها دون توثيق. البوابة هي وظيفة إجبارية (Forcing function): إنها تجعل كلمة "جاهز" تعني جاهزاً حقاً. (IHI)</p>
    <p><span class="english-term"><strong>8.3.1 Why we need a “gate”</strong><br>
    In real life, antibiotics can be ordered but not given, planned but delayed, or given but not documented. A gate is a forcing function: it makes “ready” mean ready. (IHI)</span></p>

    <h3>8.3.2 ما تؤكده البوابة (الحد الأدنى للبيانات) / Minimum dataset</h3>
    <p>قبل الشق الجراحي، يؤكد الفريق:</p>
    <div class="concept-box">
        <ul>
            <li><strong>8.3.2.1 الوقاية بالمضادات الحيوية تمت بشكل صحيح:</strong>
                <ul>
                    <li>تم اختيار العامل بشكل مناسب، (WHO SSI; CDC SSI)</li>
                    <li>تم تقييم الحساسية واختيار بديل عند الحاجة، (WHO SSI)</li>
                    <li>وقت الإعطاء ضمن نافذة السياسة، (WHO SSI; CDC SSI)</li>
                    <li>الجرعة مناسبة، (CDC SSI)</li>
                    <li>تم وضع خطة إعادة الجرعة للحالات الطويلة. (CDC SSI)</li>
                </ul>
            </li>
            <li><strong>8.3.2.2 جاهزية تحضير الجلد (Skin preparation):</strong>
                <ul>
                    <li>عامل التحضير الصحيح وفقاً للسياسة،</li>
                    <li>احترام وقت التجفيف (Drying time) الكافي،</li>
                    <li>طريقة إزالة الشعر المناسبة إذا لزم الأمر. (WHO SSI; CDC SSI)</li>
                </ul>
            </li>
            <li><strong>8.3.2.3 انضباط المسرح الجراحي (Theatre discipline):</strong>
                <ul>
                    <li>حركة المرور في حدها الأدنى، (AORN)</li>
                    <li>الأبواب مغلقة باستثناء الدخول الضروري، (AORN)</li>
                    <li>المعدات المطلوبة موجودة لمنع "رحلات البحث عن الإمدادات"، (IHI; AORN)</li>
                    <li>تتم إدارة اختراقات العقامة بشكل نشط وتوثيقها. (AORN)</li>
                </ul>
            </li>
        </ul>
        <p>البوابة ليست عملاً ورقياً. إنها توقف يحمي الشق الجراحي. (WHO SSC; IHI)</p>
        <p><span class="english-term">The gate is not paperwork. It is a pause that protects the incision. (WHO SSC; IHI)</span></p>
    </div>

    <h2>8.4 القصة الحقيقية 2: "المضاد الحيوي المتأخر وإغراء الزخم"</h2>
    <h3>8.4 Real Story 2: "The late antibiotic and the temptation of momentum"</h3>

    <div class="quote-box">
        <p><strong>8.4.1 المشهد (The scene):</strong><br>
        كانت القائمة متأخرة. ارتدى الجراح ملابسه المعقمة. تم وضع المريض في الوضعية. تم رفع الفرش الجراحي (Drapes). أراد الجميع البدء.<br>
        ثم لاحظت الممرضة الدوارة: لم يتم إعطاء المضاد الحيوي بعد.<br>
        قال أحدهم: "أعطه الآن—دعنا نبدأ."</p>
        <p><span class="english-term"><strong>The scene:</strong> A list was late. The surgeon was gowned. The patient was positioned. Drapes were up. Everyone wanted to start. Then the circulating nurse noticed: antibiotic not yet administered. Someone said: “Give it now—let’s start.”</span></p>
        <p>لقد سمعت هذا مرات عديدة، وأنا أفهم هذا الضغط. ولكن هنا بالذات إما أن تحمي الأنظمة المرضى أو تستسلم للزخم (Momentum).</p>
        
        <p><strong>8.4.2 القرار (The decision):</strong><br>
        توقفنا. تحدثت الممرضة بوضوح: <strong>"لم يتم اجتياز بوابة SSI. لم يتم استيفاء توقيت المضاد الحيوي."</strong><br>
        تنهد الجراح—كان منزعجاً، وليس خبيثاً—لقد كان فقط مضغوطاً بالوقت. تم إعطاء المضاد الحيوي، وانتظرنا الفترة المطلوبة وفقاً للسياسة قبل الشق الجراحي.</p>
        
        <p><strong>8.4.3 الدرس (The lesson):</strong><br>
        يجب على غرفة العمليات أن تتعامل مع التوقيت كبوابة، وليس كنقاش. <strong>إذا تفاوضنا في كل مرة، فسننتهي بالتفاوض على التخلص من السلامة.</strong> (WHO SSI; IHI)</p>
        <p><span class="english-term"><strong>The lesson:</strong> The OR must treat timing as a gate, not a debate. <strong>If we negotiate every time, we will eventually negotiate safety away.</strong> (WHO SSI; IHI)</span></p>
    </div>

    <h2>8.5 الحساسية، البدائل، وفخ "السلامة الزائفة"</h2>
    <h3>8.5 Allergy, Alternatives, and the “False Safety” Trap</h3>

    <h3>8.5.1 تاريخ الحساسية غالباً ما يكون غير مكتمل تحت ضغط الوقت</h3>
    <p>العديد من "الحساسيات" هي مجرد عدم تحمل (Intolerances)، والعديد من التواريخ الطبية غامضة، وبعضها يمثل تأقاً حقيقياً (Anaphylaxis). هذا الغموض يزيد من خطر اختيار المضاد الحيوي الخاطئ. (AHRQ)</p>
    <p><span class="english-term"><strong>8.5.1 Allergy history is often incomplete under time pressure</strong><br>
    Many “allergies” are intolerances, many histories are vague, and some are true anaphylaxis. This uncertainty increases risk of wrong antibiotic choice. (AHRQ)</span></p>

    <h3>8.5.2 تحتاج غرفة العمليات إلى مسار بديل واضح / Clear alternative pathway</h3>
    <p>يتضمن النظام الموثوق ما يلي:</p>
    <ul>
        <li>نظام بديل قياسي (Standard alternative regimen) للإجراءات الشائعة،</li>
        <li>خطوة موثقة للتحقق من الحساسية،</li>
        <li>مسار تصعيد للصيدلة/الأمراض المعدية للحالات المعقدة. (WHO SSI; CDC SSI)</li>
    </ul>

    <div class="alert-box">
        <h3>8.5.3 3: "الحساسية التي كانت 'على الأرجح لا شيء'"</h3>
        <p>قال ملف المريض "حساسية من البنسلين". بدون تفاصيل. الغرفة كانت متأخرة.<br>
        قال موظف مبتدئ: "على الأرجح مجرد طفح جلدي—أعطه سيفازولين."</p>
        <p>لكن كلمة <strong>"على الأرجح" ليست استراتيجية سلامة.</strong> توقفنا لمدة دقيقتين، سألنا المريض (الذي كان مستيقظاً في ذلك الوقت)، ووضحنا الأمر: لقد كان تورماً فورياً وصعوبة في التنفس قبل سنوات—وهو تاريخ عالي الخطورة (True high-risk history) فعلاً.</p>
        <p>اخترنا نظاماً بديلاً وفقاً للسياسة، ووثقناه، ومضينا قدماً.</p>
        <p>القصة ليست عن كونك ذكياً. إنها عن الانضباط. <strong>غرفة العمليات ليس لها الحق في المقامرة بكلمة "على الأرجح".</strong> (WHO SSI; AHRQ)</p>
        <p><span class="english-term">But “probably” is not a safety strategy... The story is not about being clever. It’s about being disciplined. <strong>The OR has no right to gamble with “probably.”</strong> (WHO SSI; AHRQ)</span></p>
    </div>

    <h2>8.6 إعادة الجرعة (Redosing): الجزء الأكثر نسياناً في الوقاية</h2>
    <h3>8.6 Redosing: The Most Forgotten Part of Prophylaxis</h3>

    <h3>8.6.1 لماذا تفشل إعادة الجرعة / Why redosing fails</h3>
    <p>تفشل إعادة الجرعة لأن الجميع مشغولون، والساعة صامتة، والحالة تبدو "روتينية". لكن طول المدة وفقدان الدم هي عوامل خطر يمكن التنبؤ بها. (CDC SSI)</p>

    <h3>8.6.2 حل النظام: تعيين المالك وإنشاء محفز / System solution</h3>
    <p>يجب ألا تعتمد إعادة الجرعة على الذاكرة. تشمل الحلول:</p>
    <ul>
        <li>تذكيراً مبنياً على الوقت في سير عمل غرفة العمليات،</li>
        <li>بياناً لفظياً صريحاً عند الـ Time-out: "إعادة الجرعة مستحقة في ___"،</li>
        <li>مطالبات التوثيق (Documentation prompts). (IHI; CDC SSI)</li>
    </ul>

    <div class="concept-box">
        <h3>8.6.3 4: "الحالة الطويلة التي تحولت إلى درس"</h3>
        <p>طالت حالة معقدة بشكل غير متوقع. ركز الفريق على التحديات الجراحية. لاحقاً، وجدت المراجعة أنه تم تفويت إعادة الجرعة (Redose).</p>
        <p>لم يقصد أحد تفويتها. كان الجميع "يبذلون قصارى جهدهم". لكن "قصارى الجهد" ليس كافياً للموثوقية.</p>
        <p>بعد هذا الحدث، أدخلت غرفة العمليات ممارسة بسيطة: أثناء الـ Time-out، تقول الممرضة الدوارة:<br>
        <strong>"تم إعطاء المضاد الحيوي في ____. إعادة الجرعة مستحقة في ____ إذا تجاوزت الحالة ____."</strong></p>
        <p>تلك الجملة الواحدة حسّنت الامتثال لإعادة الجرعة أكثر من أي محاضرة. (IHI)</p>
        <p><span class="english-term">“Antibiotic given at ____. Redose due at ____ if case exceeds ____.” That single sentence improved redosing compliance more than any lecture. (IHI)</span></p>
    </div>

    <h2>8.7 النصف غير المرئي للوقاية من SSI: البيئة والسلوك</h2>
    <h3>8.7 The Invisible Half of SSI Prevention: Environment and Behaviour</h3>

    <h3>8.7.1 الأبواب وحركة المرور: مشكلة "التلوث الصامت"</h3>
    <p>تؤكد الإرشادات المحيطة بالجراحة على التحكم في حركة المرور (Traffic) وفتح الأبواب لأنها تعطل أنماط تدفق الهواء (Airflow) وتزيد من خطر التلوث. (AORN; WHO SSI)</p>
    <p><span class="english-term"><strong>8.7.1 Doors and traffic: the “silent contamination” problem</strong><br>
    Perioperative guidance emphasizes controlling traffic and door openings because they disrupt airflow patterns and increase contamination risk. (AORN; WHO SSI)</span></p>

    <h3>8.7.2 تنظيف التبديل (Turnover): عندما تتنافس السرعة مع النظافة</h3>
    <p>التنظيف بين الحالات هو عملية لسلامة المريض. إذا تم التسرع فيها، يتراكم العبء البيولوجي (Bioburden) حيثما تلمس الأيدي: حواجز السرير، الشاشات، أسطح جهاز التخدير، المصابيح، الكابلات. (AORN)</p>

    <h3>8.7.3 اختراقات الحقل المعقم: كيف تقرر الثقافة احتواء الخطر</h3>
    <p>تحدث اختراقات العقامة (Sterile breaks). السلامة ليست الخيال بوجود "صفر اختراقات"؛ السلامة هي القدرة على الاستجابة بشكل متسق:</p>
    <ul>
        <li>توقف،</li>
        <li>صحّح،</li>
        <li>استبدل العناصر الملوثة،</li>
        <li>وثّق وتواصل. (AORN)</li>
    </ul>

    <h3>8.7.4 الدخان الجراحي وسلامة الطاقم / Surgical smoke</h3>
    <p>يعد الدخان الجراحي خطراً مهنياً، والسيطرة عليه جزء من السلامة البيئية الحديثة في غرفة العمليات. (NIOSH)</p>

    <h2>8.8 حزمة الوقاية من SSI (بتركيز غرفة العمليات)</h2>
    <h3>8.8 The SSI Prevention Bundle (OR-Side Focus)</h3>

    <h3>8.8.1 عناصر حزمة ما قبل الشق الجراحي / Pre-incision bundle</h3>
    <ul>
        <li>الوقاية بالمضادات الحيوية صحيحة وفي الوقت المحدد، (WHO SSI; CDC SSI)</li>
        <li>تحضير الجلد المناسب والتجفيف، (WHO SSI)</li>
        <li>إزالة الشعر فقط عند الحاجة وبطريقة آمنة، (CDC SSI)</li>
        <li>التحقق من الأدوات المعقمة، (AORN; AAMI ST79)</li>
        <li>تقليل حركة المرور. (AORN)</li>
    </ul>

    <h3>8.8.2 عناصر الموثوقية داخل العملية / Intraoperative reliability</h3>
    <ul>
        <li>الحفاظ على انضباط الحقل المعقم، (AORN)</li>
        <li>تقليل فتحات الأبواب، (AORN)</li>
        <li>إدارة أحداث التلوث بشكل صريح، (WHO SSI; AORN)</li>
        <li>توثيق الانحرافات والاستجابات. (The Joint Commission)</li>
    </ul>

    <h3>8.8.3 عناصر الاستمرارية بعد العملية (ضرورية للتسليم / Handoff)</h3>
    <p>يجب التأكد من أن تسليم غرفة العمليات (OR handoff) يتضمن تفاصيل ذات صلة بالعدوى:</p>
    <ul>
        <li>ملاحظات فئة الجرح/التلوث،</li>
        <li>خطة المضادات الحيوية (وقت التوقف والمبرر إذا تم التمديد)،</li>
        <li>تعليمات الضمادة (Dressing) والعلامات الحمراء. (WHO SSI; CDC SSI; AHRQ)</li>
    </ul>

    <h2>8.9 الجانب الإنساني: كيف تتحدث بصوت عالٍ دون خلق حرب</h2>
    <h3>8.9 The Humane Side: How to Speak Up Without Creating War</h3>

    <h3>8.9.1 النبرة التي تنجح / The tone that works</h3>
    <p>بعد سنوات، تعلمت أن التحدث بصوت عالٍ (Speaking up) ينجح بشكل أفضل عندما يكون مبنياً على الحقائق والنظام:</p>
    <ul>
        <li>"لم يتم اجتياز بوابة SSI."</li>
        <li>"لم يتم استيفاء توقيت المضاد الحيوي."</li>
        <li>"نحتاج إلى دقيقتين لحماية الجرح." (IHI)</li>
    </ul>
    <p>تتجنب هذه اللغة إلقاء اللوم على أي شخص وتُبقي التركيز على المريض.</p>

    <h3>8.9.2 قاعدة "اليوم المتأخر" / The rule of the late day</h3>
    <p>عندما يتأخر الجدول، يرتفع خطر العدوى لأن الاختصارات تصبح مغرية. في تلك اللحظات، يجب أن تصبح غرفة العمليات أكثر انضباطاً، وليس أقل. (IHI; AORN)</p>

    <h2>8.10 أدوات عملية (جاهزة للاستخدام) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>8.10.1 الأداة 1 — قائمة تحقق بوابة الوقاية من SSI (دقيقة واحدة):</strong><br>
            قبل الشق الجراحي، تأكد من:
                <ul>
                    <li>المضاد الحيوي: العامل، الجرعة، الوقت موثق وضمن نافذة السياسة. (WHO SSI; CDC SSI)</li>
                    <li>الحساسية: تم التحقق منها؛ البديل صحيح إذا لزم الأمر. (WHO SSI)</li>
                    <li>خطة إعادة الجرعة: مُعلنة إذا كانت الحالة قد تتجاوز الحد. (CDC SSI)</li>
                    <li>تحضير الجلد: مكتمل وتم احترام وقت التجفيف. (WHO SSI)</li>
                    <li>التحكم في حركة المرور: الأبواب مغلقة؛ الإمدادات موجودة. (AORN)</li>
                    <li>أي اختراق للعقامة تمت معالجته وتوثيقه. (AORN)</li>
                </ul>
            </li>
            <br>
            <li><strong>8.10.2 الأداة 2 — ملصق/تذكير توقيت المضادات الحيوية:</strong><br>
            إضافة لسير العمل: "أُعطي في: ____" | "الشق الجراحي في: ____" | "إعادة الجرعة مستحقة في: ____"<br>
            هذا بسيط، سهل التدقيق، ومقاوم للنسيان. (IHI)</li>
            <br>
            <li><strong>8.10.3 الأداة 3 — قائمة تحقق نظافة التبديل (Turnover Hygiene):</strong><br>
            قائمة قصيرة للأسطح عالية اللمس الموحدة بين الحالات. (AORN)</li>
            <br>
            <li><strong>8.10.4 الأداة 4 — تدقيق عينة فتح الباب (Door Opening Sampling Audit):</strong><br>
            خذ عينة من 10 حالات/شهر لكل غرفة عمليات: سجل فتحات الأبواب والأسباب. استخدم البيانات لإصلاح الأسباب الجذرية (إمدادات مفقودة، تحضير سيء). (AORN; IHI)</li>
        </ul>
    </div>

    <h2>8.11 القياس (كيف تعرف أن الوقاية من SSI أصبحت موثوقة) / Measurement</h2>

    <h3>8.11.1 المؤشرات الاستباقية (موثوقية العملية) / Leading indicators</h3>
    <ul>
        <li>نسبة المضادات الحيوية الوقائية المُعطاة ضمن نافذة السياسة. (WHO SSI; CDC SSI)</li>
        <li>نسبة إعادة الجرعة المناسبة عند الاستطباب. (CDC SSI)</li>
        <li>نقاط جودة الامتثال للـ Time-out/بوابة SSI (مُلاحظة). (WHO SSC; IHI)</li>
        <li>معدل فتح الباب (عينة/Sampled). (AORN)</li>
        <li>درجات تدقيق تنظيف التبديل (Turnover). (AORN)</li>
        <li>الالتزام بتوثيق اختراقات العقامة والاستجابة لها. (AORN)</li>
    </ul>

    <h3>8.11.2 المؤشرات المتأخرة (النتائج) / Lagging indicators</h3>
    <p>معدلات SSI حسب فئة الإجراء، SSI العميقة مقابل السطحية، وحالات إعادة الإدخال (Readmissions) بسبب SSI. (CDC SSI)</p>

    <h3>8.11.3 مؤشرات حلقة التعلم / Learning-loop indicators</h3>
    <p>الأيام من حادثة قريبة (Near-miss) متعلقة بـ SSI أو فشل تدقيق ← إلى إصلاح النظام + إعادة التدقيق. (IHI)</p>

    <h2>8.12 تأملات الكاتب (بعد سنوات في المسرح الجراحي) / The Writer's Reflection</h2>

    <h3>8.12.1 العدوى تعاقب الغرور / Infections punish arrogance</h3>
    <p>قد تبدو غرفة العمليات نظيفة، لكن الميكروبات لا تحترم الثقة بالنفس. إنها تحترم الانضباط.</p>

    <h3>8.12.2 الدقيقة الأكثر أخلاقية في الجراحة</h3>
    <p>في بعض الأحيان، الدقيقة الأكثر أخلاقية هي الدقيقة التي تتوقف فيها قبل الشق الجراحي لتأكيد المضادات الحيوية وجاهزية العقامة—لأن تلك الدقيقة يمكن أن توفر أسابيع من المعاناة لاحقاً. (WHO SSI; CDC SSI)</p>
    <p><span class="english-term"><strong>8.12.2 The most ethical minute in surgery</strong><br>
    Sometimes the most ethical minute is the minute you pause before incision to confirm antibiotics and sterility readiness—because that minute can save weeks of suffering later. (WHO SSI; CDC SSI)</span></p>

    <h3>8.12.3 البوابة ليست تأخيراً؛ البوابة هي كرامة</h3>
    <p>بالنسبة للمريض، SSI ليست مجرد إحصائية. إنها ألم، خوف، وثقة مفقودة. بوابة الوقاية هي طريقة للقول: <strong>جسدك يهمنا بما يكفي لنبطئ من أجله.</strong> (AHRQ)</p>
    <p><span class="english-term"><strong>8.12.3 The gate is not delay; the gate is dignity</strong><br>
    For the patient, SSI is not a statistic. It is pain, fear, and lost trust. A prevention gate is a way of saying: <strong>your body matters enough for us to slow down.</strong> (AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الوقاية من SSI هي <strong>نظام (System)</strong>: مضادات حيوية + عقامة + بيئة + سلوك. (WHO SSI; AORN)<br>
            <span class="english-term">SSI prevention is a <strong>system</strong>: antibiotics + sterility + environment + behavior.</span></li>
            
            <li>تعامل مع توقيت المضادات الحيوية كـ <strong>بوابة (Gate)</strong>، وليس كاقتراح قابل للتفاوض. (WHO SSI; CDC SSI; IHI)<br>
            <span class="english-term">Treat antibiotic timing as a <strong>gate</strong>, not a negotiable suggestion.</span></li>
            
            <li>إعادة الجرعة (Redosing) تفشل عندما تعتمد على الذاكرة—صمّم محفزات وملكية (Triggers and ownership). (CDC SSI; IHI)<br>
            <span class="english-term">Redosing fails when it relies on memory—design triggers and ownership.</span></li>
            
            <li>تحكم في حركة المرور، نظافة التبديل (Turnover)، واختراقات العقامة؛ النصف <strong>غير المرئي</strong> يهم. (AORN; WHO SSI)<br>
            <span class="english-term">Control traffic, turnover hygiene, and sterility breaks; the <strong>invisible</strong> half matters.</span></li>
            
            <li>قس الموثوقية باستخدام المؤشرات الاستباقية وأغلق حلقات التعلم بسرعة. (IHI)<br>
            <span class="english-term">Measure reliability with leading indicators and close learning loops fast.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Reliability Resources (reliability design, learning systems).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety Resources (communication, reporting, learning systems).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79 (sterilization and instrument readiness concepts).</li>
            <li>National Institute for Occupational Safety and Health (NIOSH). Guidance on Surgical Smoke and Occupational Exposure Controls.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  18: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 18 — Electrosurgery, Lasers, and Energy Devices Safety</h1>
    <div class="subtitle">الفصل الثامن عشر — سلامة الجراحة الكهربائية، الليزر، وأجهزة الطاقة<br>
    <span style="font-size: 18px;">(Burns Risk • Dispersive Pad • Insulation Failure • Smoke Plume Controls)<br>
    (خطر الحروق • القطب المشتت (اللوحة الراجعة) • فشل العزل • ضوابط عمود الدخان)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد أجهزة الطاقة <strong>أدوات لإنقاذ الحياة ومُولّدات للضرر الصامت</strong> في نفس الوقت، ولماذا تعتمد السلامة على الأنظمة وليس على "الحذر". (AORN; ECRI; APSF concepts)<br>
            <span class="english-term">Explain why energy devices are both <strong>life-saving tools and silent-harm generators</strong>, and why safety depends on systems, not “carefulness.” (AORN; ECRI; APSF concepts)</span></li>
            
            <li>الوقاية من <strong>مسارات الحروق الشائعة (Common burn pathways)</strong>: الحروق في مواقع بديلة (Alternate-site burns)، حروق تلامس المريض، تضخيم مثلث الحريق في غرفة العمليات، والإصابات الحرارية من الأجهزة والأسلاك. (AORN; NFPA 99; ECRI)<br>
            <span class="english-term">Prevent common <strong>burn pathways</strong>: alternate-site burns, patient contact burns, OR fire triangle amplification, and thermal injury from devices and cords. (AORN; NFPA 99; ECRI)</span></li>
            
            <li>تطبيق ممارسات موثوقة لـ <strong>القطب المشتت (اللوحة الراجعة / Dispersive pad)</strong>: الاختيار الصحيح للموقع، اعتبارات تحضير الجلد، التحقق من التلامس الكامل، واستكشاف الأخطاء وإصلاحها. (AORN)<br>
            <span class="english-term">Apply reliable <strong>dispersive electrode (return pad) practices</strong>: correct site selection, skin prep considerations, full contact verification, and troubleshooting. (AORN)</span></li>
            
            <li>التعرف على أنماط خطر <strong>فشل العزل (Insulation failure)</strong> والاقتران السعوي (Capacitive coupling)، خاصة في الجراحات طفيفة التوغل، وتنفيذ ضوابط عملية. (AORN; ECRI)<br>
            <span class="english-term">Recognize <strong>insulation failure</strong> and capacitive coupling risk patterns, especially in minimally invasive surgery, and implement practical controls. (AORN; ECRI)</span></li>
            
            <li>تنفيذ ضوابط <strong>عمود الدخان الجراحي (Smoke plume controls)</strong> كمتطلب للسلامة المهنية وسلامة المرضى في غرفة العمليات: الالتقاط من المصدر، مفاهيم الفلترة، انضباط سير العمل، وقابلية التدقيق. (AORN; NIOSH; OSHA concepts)<br>
            <span class="english-term">Implement <strong>smoke plume controls</strong> as an OR occupational and patient safety requirement: capture at the source, filtration concepts, workflow discipline, and auditability. (AORN; NIOSH; OSHA concepts)</span></li>
            
            <li>بناء "نظام حواجز لسلامة الطاقة" يتضمن مطالبات قائمة التحقق، والتوقفات الإلزامية (Hard stops)، والإبلاغ عن الحوادث، ومقاييس الجودة. (IHI; AHRQ)<br>
            <span class="english-term">Build an “energy safety barrier system” including checklist prompts, hard stops, incident reporting, and quality metrics. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الحرق الذي ظهر في مكان لم نُجرِ فيه أي عملية"</strong><br>
        <span class="english-term">A true-to-life case: “The burn that appeared where we never operated” (Real Scientific Story)</span>
    </div>

    <p>أنهى الجراح الحالة بشكل جميل. كان الشق الجراحي نظيفاً. والمريض كان مستقراً. شعر الجميع بالرضا—حتى اتصلت وحدة الإفاقة (PACU): <em>"يوجد حرق... على فخذ المريض."</em></p>
    <p><span class="english-term">The surgeon finished the case beautifully. The incision was clean. The patient was stable. Everyone felt satisfied—until PACU called: <em>“There’s a burn… on the patient’s thigh.”</em></span></p>

    <p>توقفت غرفة العمليات تماماً. كيف يمكن أن يحدث ذلك؟ كانت الجراحة في البطن. ولم يقترب أحد من الفخذ.</p>
    <p><span class="english-term">The OR came to a standstill. How could that happen? The surgery was on the abdomen. No one went near the thigh.</span></p>

    <div class="alert-box">
        <p>عندما قمنا بمراجعة الحالة (RCA)، وجدنا سلسلة الأحداث المخفية. استخدم المريض جهاز الجراحة الكهربائية أحادي القطب (Monopolar electrosurgery). تم وضع القطب المشتت (اللوحة الراجعة/Return pad) بشكل صحيح. ومع ذلك، أثناء تحضير الجلد (Prep)، سقط بعض المحلول وتجمع تحت فخذ المريض. علاوة على ذلك، كان سلك تخطيط القلب (ECG lead) موضوعاً بالقرب من المنطقة المبللة.</p>
        <p><span class="english-term">When we mapped the case (RCA), we found the hidden chain. The patient had monopolar electrosurgery used. The dispersive electrode (return pad) was placed correctly. However, during skin prep, some solution had pooled under the patient’s thigh. Furthermore, an ECG lead was positioned near the wet area.</span></p>
    </div>

    <p>وجد تيار التردد الراديوي (RF current) العالي مساراً بديلاً للعودة إلى الأرض من خلال السائل المتجمع وسلك تخطيط القلب، متجاوزاً اللوحة الراجعة. تركزت الطاقة في تلك البقعة الصغيرة، واكتملت الدائرة الكهربائية بحرق من الدرجة الثالثة. (ECRI; AORN)</p>
    <p><span class="english-term">The high radiofrequency (RF) current found an alternate pathway back to ground through the pooled fluid and the ECG lead, bypassing the return pad. Energy concentrated at that small spot, and the circuit completed itself with a third-degree burn. (ECRI; AORN)</span></p>

    <div class="success-box">
        <p>لم يكن هذا خطأ الجراح. ولم يكن خطأ التمريض. كان فشلاً في الفهم الأساسي للفيزياء داخل بيئة غرفة العمليات. <strong>الطاقة لا تختفي؛ إنها تذهب إلى حيث تخبرها الفيزياء أن تذهب.</strong> إدارة تلك الفيزياء هي علم سلامة المرضى. (AORN; ECRI)</p>
        <p><span class="english-term">It was not the surgeon’s fault. It was not the nurse’s fault. It was a failure of basic physics comprehension within the OR environment. <strong>Energy does not disappear; it goes where physics tells it to go.</strong> Managing that physics is a patient safety science. (AORN; ECRI)</span></p>
    </div>

    <h2>18.1 فيزياء الضرر في غرفة العمليات (ما يجب أن يعرفه كل موظف)</h2>
    <h3>18.1 The Physics of Harm in the OR (What Every Staff Member Must Know)</h3>

    <h3>18.1.1 الجراحة الكهربائية ليست "الكي الكهربائي" / Electrosurgery vs Electrocautery</h3>
    <p>يستخدم الكي الكهربائي (Electrocautery) تياراً مباشراً لتسخين سلك (مثل سلك ساخن) يحرق الأنسجة؛ ولا يدخل التيار إلى المريض. أما <strong>الجراحة الكهربائية (Electrosurgery)</strong> (وهي الأكثر شيوعاً) فتستخدم تياراً متناوباً عالي التردد يمر <em>عبر</em> جسم المريض لقطع الأنسجة أو تخثيرها. ولأن المريض جزء من الدائرة الكهربائية، فإن الجسد بأكمله معرض للخطر. (AORN)</p>
    <p><span class="english-term"><strong>18.1.1 Electrosurgery is not "Electrocautery"</strong><br>Electrocautery uses direct current to heat a wire (like a hot wire) that burns tissue; current does not enter the patient. <strong>Electrosurgery</strong> (most common) uses high-frequency alternating current that passes <em>through</em> the patient's body to cut or coagulate tissue. Because the patient is part of the circuit, the entire body is at risk. (AORN)</span></p>

    <h3>18.1.2 الدائرة الكاملة (The complete circuit)</h3>
    <p>في الجراحة الكهربائية أحادية القطب (Monopolar)، ينتقل التيار من المولد ← القطب النشط (القلم/Bovie) ← المريض ← القطب المشتت (اللوحة الراجعة/Return pad) ← ثم يعود إلى المولد. إذا كانت اللوحة الراجعة غير مكتملة، سيبحث التيار عن مسار آخر—غالباً ما يكون نقطة معدنية صغيرة (حامل الوريد، سلك، طاولة)، مما يؤدي إلى تركيز الحرارة وحدوث حروق. (ECRI; AORN)</p>

    <h3>18.1.3 حروق المواقع البديلة / The alternate-site burn</h3>
    <p>التيار الكهربائي يبحث دائماً عن المسار الأقل مقاومة. إذا لم تكن اللوحة الراجعة هي المسار الأسهل، فإن أي نقطة تلامس مؤرضة (Grounded) ستصبح هي المخرج.</p>
    <p><span class="english-term"><strong>18.1.3 The alternate-site burn</strong><br>Current always seeks the path of least resistance. If the return pad is not the easiest path, any grounded contact point will become the exit.</span></p>

    <h2>18.2 نظام القطب المشتت (اللوحة الراجعة)</h2>
    <h3>18.2 The Dispersive Electrode (Return Pad) System</h3>

    <h3>18.2.1 ليس "وسادة تأريض" / Not a "grounding pad"</h3>
    <p>تسميتها بـ "وسادة التأريض" (Grounding pad) هو مصطلح قديم وخاطئ. اسمها الصحيح هو القطب المشتت (Dispersive electrode). وظيفته ليست التأريض، بل <strong>تشتيت</strong> (نشر) التيار الكهربائي العائد على مساحة سطحية كبيرة بأمان بحيث لا تتركز الحرارة. (AORN)</p>
    <p><span class="english-term"><strong>18.2.1 Not a "grounding pad"</strong><br>Calling it a "grounding pad" is an old and misleading term. Its correct name is a dispersive electrode. Its job is not to ground, but to <strong>disperse</strong> (spread out) the returning electrical current safely over a large surface area so heat does not concentrate. (AORN)</span></p>

    <h3>18.2.2 قواعد اختيار الموقع / Location rules</h3>
    <p>يجب وضع اللوحة (Pad) في مكان:</p>
    <ul>
        <li>قريب من موقع الجراحة قدر الإمكان.</li>
        <li>فوق كتلة عضلية كبيرة (العضلات توصل الكهرباء بشكل أفضل، بينما الدهون تقاومها).</li>
        <li>نظيف وجاف وخالٍ من الشعر (لضمان التلامس التام).</li>
        <li>بعيداً عن البروزات العظمية، الأطراف الاصطناعية المعدنية (الغرسات)، والأنسجة الندبية (Scars). (AORN)</li>
    </ul>

    <h3>18.2.3 انضباط التطبيق (لا مساومة) / Application discipline</h3>
    <p>إذا لم تكن اللوحة متصلة بنسبة 100% (مثال: حواف متجعدة "Tenting"، أو سائل تسرب تحتها)، تنخفض مساحة التشتيت، ويزداد تركيز الحرارة. في غرفة العمليات، يجب أن يكون أي تجعد في اللوحة سبباً للرفض واستخدام لوحة جديدة. (AORN; ECRI)</p>
    <p><span class="english-term"><strong>18.2.3 Application discipline (no tenting)</strong><br>If the pad is not 100% flush (e.g., edges tenting, fluid leaked under), the dispersal area decreases, and heat concentration increases. In the OR, a wrinkled pad must be an immediate throw-away. (AORN; ECRI)</span></p>

    <h3>18.2.4 الإنذار الذي لا يجب تجاهله (REM/CQM)</h3>
    <p>تحتوي المولدات الحديثة على أنظمة مراقبة جودة التلامس (CQM/REM). <strong>إذا أصدر المولد إنذاراً، فإن توقف العمل إلزامي (Hard stop).</strong> لا تقم بإسكات الإنذار؛ لا تطلب من الجراح الاستمرار؛ أوقف العملية، وافحص اللوحة، واستبدلها إذا لزم الأمر. (ECRI)</p>
    <p><span class="english-term"><strong>18.2.4 The alarm that must never be ignored</strong><br>Modern generators have Contact Quality Monitoring (CQM/REM) systems. <strong>If the generator alarms, it is a hard stop.</strong> Do not silence it; do not ask the surgeon to keep going; stop, check the pad, and replace it if necessary. (ECRI)</span></p>

    <h2>18.3 الخطر الخفي: فشل العزل والاقتران السعوي</h2>
    <h3>18.3 The Invisible Danger: Insulation Failure &amp; Capacitive Coupling</h3>

    <h3>18.3.1 خطر الجراحة طفيفة التوغل (MIS)</h3>
    <p>في الجراحة بالمنظار (Laparoscopy)، يمر التيار عبر أدوات طويلة داخل مبازل (Trocars). لا يمكن للجراح رؤية جزء كبير من الأداة. هذا هو المكان الذي تحدث فيه الحروق الخفية للأمعاء الدقيقة. (AORN)</p>

    <div class="concept-box">
        <h3>18.3.2 آليات الضرر (كيف تتسرب الطاقة)</h3>
        <ul>
            <li><strong>فشل العزل (Insulation failure):</strong> شقوق أو ثقوب دقيقة (Micro-cracks) في غلاف الأداة تسمح للتيار بالتسرب والكي العرضي للأنسجة المجاورة (مثل الأمعاء). هذه الثقوب غالباً لا تُرى بالعين المجردة. (AAMI; ECRI)</li>
            <li><strong>الاقتران المباشر (Direct coupling):</strong> يلامس القطب النشط عن طريق الخطأ أداة معدنية أخرى (مثل منظار البطن/Laparoscope)، مما ينقل التيار إلى نسيج غير مقصود.</li>
            <li><strong>الاقتران السعوي (Capacitive coupling):</strong> ينتقل التيار الكهربائي من الأداة النشطة إلى أنبوب معدني محيط بها (مثل المبزل المعدني) <em>حتى بدون تلامس مباشر</em>، بسبب المجال الكهرومغناطيسي. إذا كان هذا المبزل يتلامس مع الأمعاء، يحدث حرق. (AORN; ECRI)</li>
        </ul>
        <p><span class="english-term"><strong>18.3.2 Mechanisms of harm (How energy leaks)</strong><br>Insulation failure: Micro-cracks in the instrument's sheath let current leak out. Direct coupling: Active electrode touches another metal instrument. Capacitive coupling: Current transfers from the active instrument to a surrounding metal tube <em>even without direct contact</em>.</span></p>
    </div>

    <h3>18.3.3 ضوابط النظام للحروق الخفية / System controls for hidden burns</h3>
    <p>الاعتماد على الحذر البصري غير مجدٍ. تحتاج غرفة العمليات إلى:</p>
    <ul>
        <li><strong>أقل طاقة فعالة (Lowest effective power):</strong> استخدم دائماً أقل إعدادات طاقة مطلوبة. (AORN)</li>
        <li><strong>فحص العزل بانتظام:</strong> يجب على قسم CSSD فحص عزل الأدوات بالمنظار بنشاط باستخدام أجهزة فحص مخصصة (Insulation testers). (AAMI; AORN)</li>
        <li><strong>مراقبة القطب النشط (AEM):</strong> استخدام التكنولوجيا التي تراقب تيارات التسرب وتقوم بإيقاف تشغيل المولد تلقائياً (تُعتبر المعيار الذهبي في بعض الإرشادات). (AORN)</li>
    </ul>

    <h2>18.4 عمود الدخان الجراحي (Smoke Plume): خطر مهني وبيئي</h2>
    <h3>18.4 Surgical Smoke (Plume): An Occupational and Environmental Hazard</h3>

    <h3>18.4.1 إنه ليس مجرد رائحة سيئة؛ إنه خطر بيولوجي (Bio-hazard)</h3>
    <p>يحتوي دخان الجراحة الكهربائية والليزر على: خلايا حية، فيروسات (بما في ذلك HPV)، غازات سامة (بنزين، سيانيد الهيدروجين)، وجسيمات دقيقة. استنشاقه يعادل تدخين السجائر ويشكل خطراً مهنياً كبيراً لموظفي غرفة العمليات. (NIOSH; AORN; OSHA concepts)</p>
    <p><span class="english-term"><strong>18.4.1 It’s not just a bad smell; it’s a bio-hazard</strong><br>Electrosurgical and laser smoke contains: viable cells, viruses (including HPV), toxic gases (benzene, hydrogen cyanide), and ultrafine particulate matter. Inhaling it is equivalent to smoking cigarettes and is a major occupational hazard. (NIOSH; AORN; OSHA concepts)</span></p>

    <h3>18.4.2 الأقنعة (Masks) لا تكفي</h3>
    <p>الأقنعة الجراحية العادية لا تفلتر الجسيمات الدقيقة في الدخان. حتى كمامات N95، رغم أنها أفضل، ليست الحل الأساسي. <strong>الالتقاط من المصدر (Source capture) هو الحل.</strong> (NIOSH; AORN)</p>
    <p><span class="english-term"><strong>18.4.2 Masks are not enough</strong><br>Standard surgical masks do not filter ultrafine smoke particles. Even N95 respirators are not the primary solution. <strong>Source capture is the solution.</strong> (NIOSH; AORN)</span></p>

    <h3>18.4.3 إخلاء الدخان الموضعي (LEV - Local Exhaust Ventilation)</h3>
    <p>تتطلب غرف العمليات الآمنة استخدام أنظمة إخلاء الدخان (Smoke evacuators) التي تلتقط الدخان في حدود 2 بوصة من موقع الجراحة. يجب دمج هذا في العمل القياسي للغرفة كقاعدة <strong>"عدم تفاوت" (Non-negotiable)</strong>. (AORN)</p>

    <h2>18.5 تضخيم مثلث الحريق بواسطة أجهزة الطاقة</h2>
    <h3>18.5 Fire Triangle Amplification by Energy Devices</h3>

    <h3>18.5.1 الطاقة هي مصدر الاشتعال الدائم</h3>
    <p>في غرفة العمليات، مثلث الحريق موجود دائماً:</p>
    <ul>
        <li><strong>المؤكسد (Oxidizer):</strong> الأكسجين، أكسيد النيتروز (من التخدير).</li>
        <li><strong>الوقود (Fuel):</strong> الفرش الجراحي، الشاش، والأهم من ذلك: محاليل تحضير الجلد الكحولية (Prep).</li>
        <li><strong>مصدر الاشتعال (Ignition):</strong> أجهزة الجراحة الكهربائية والليزر. (APSF; NFPA 99)</li>
    </ul>

    <h3>18.5.2 قاعدة الحافظة (The Holster Rule)</h3>
    <p>عندما لا يكون قلم الكي (Bovie) قيد الاستخدام الفعلي، يجب وضعه في <strong>حافظة أمان غير موصلة (Safety holster)</strong>. وضعه على صدر المريض أو على الفرش الجراحي أدى إلى عدد لا يحصى من الحرائق وحروق المرضى عندما تم الضغط على الزر عن طريق الخطأ. (AORN; ECRI)</p>
    <p><span class="english-term"><strong>18.5.2 The Holster Rule</strong><br>When not in active use, the active electrode (Bovie pencil) must be placed in a <strong>nonconductive safety holster</strong>. Resting it on the patient’s chest or drapes has caused countless fires when the button was accidentally activated. (AORN; ECRI)</span></p>

    <h2>18.6 مبادئ سلامة الليزر (موجز)</h2>
    <h3>18.6 Laser Safety Principles (Brief)</h3>

    <p>الليزر هو شكل مركز ومختلف من الطاقة، وله ضوابط خاصة به:</p>
    <ul>
        <li><strong>التحكم في الوصول:</strong> يجب إغلاق الأبواب وتغليف النوافذ ووضع لافتات تحذيرية أثناء استخدام الليزر. (ANSI Z136 concepts)</li>
        <li><strong>حماية العين:</strong> يجب أن يرتدي جميع العاملين في الغرفة (بما في ذلك المريض) نظارات واقية محددة الطول الموجي الخاص بالليزر المستخدم. (AORN)</li>
        <li><strong>الوقاية من الحريق:</strong> توفير سوائل معقمة (ماء/محلول ملحي) على الطاولة الخلفية دائماً عند استخدام الليزر للتدخل الفوري.</li>
        <li><strong>ضابط سلامة الليزر (LSO):</strong> وجود مسؤول معين لمراقبة وإدارة برنامج الليزر في المستشفى. (AORN)</li>
    </ul>

    <h2>18.7 نظام حواجز سلامة الطاقة (ضوابط غرفة العمليات العملية)</h2>
    <h3>18.7 The Energy Safety Barrier System (Practical OR Controls)</h3>

    <h3>18.7.1 إدخال الطاقة في الـ Time-Out</h3>
    <p>أثناء الـ Time-out، يجب ذكر أجهزة الطاقة:</p>
    <ul>
        <li>"سيتم استخدام الكي أحادي القطب. اللوحة الراجعة على [الموقع]."</li>
        <li>"تم السماح لمحلول التحضير بالجفاف تماماً."</li>
        <li>"جهاز إخلاء الدخان متصل وجاهز." (IHI; AORN)</li>
    </ul>

    <h3>18.7.2 التوقفات الإلزامية للطاقة / Energy Hard Stops</h3>
    <div class="success-box">
        <p>لا تتفاوض مع الفيزياء. التوقفات الإلزامية تشمل:</p>
        <ol>
            <li><strong>إنذار المولد (Generator alarm):</strong> توقف، لا تستمر أبداً، افحص الدائرة واللوحة. (ECRI)</li>
            <li><strong>محلول التحضير (Prep) لا يزال رطباً:</strong> لا تقم ببدء الجراحة الكهربائية حتى يجف تماماً لمنع الحريق. (NFPA 99)</li>
            <li><strong>قلم الكي خارج الحافظة (Pencil out of holster):</strong> إذا تُرك على الفرش، يجب على الممرضة إعادته فوراً للحافظة. (AORN)</li>
            <li><strong>إخلاء الدخان غير متوفر:</strong> يجب اعتباره أداة أساسية للسلامة المهنية (No evacuator, no surgery). (NIOSH; AORN)</li>
        </ol>
    </div>

    <h2>18.8 القصة الحقيقية 2: "الإنذار الذي تم تجاهله"</h2>
    <h3>18.8 Real Story 2: "The ignored alarm"</h3>

    <div class="quote-box">
        <p>أثناء الجراحة، استمر جهاز الكي الكهربائي (ESU) في إصدار إنذارات تنبيهية (Beeping) تشير إلى سوء جودة التلامس (CQM alarm).<br>
        قال الجراح: "هذا الجهاز مزعج اليوم، فقط استمروا في الضغط على زر إعادة الضبط (Reset)."<br>
        استجاب التمريض للطلب وأسكتوا الإنذار عدة مرات. كانوا يحاولون "مساعدة" الفريق.</p>
        <p><span class="english-term">During surgery, the ESU generator kept beeping with a contact quality monitoring alarm (CQM alarm).<br>The surgeon said, “This machine is annoying today, just keep hitting reset.”<br>The nurses complied and silenced the alarm multiple times. They were trying to “help” the team.</span></p>
        
        <p><strong>النتيجة:</strong> بعد العملية، وجدوا حرقاً شديداً تحت اللوحة الراجعة. الجهاز كان يعمل بشكل مثالي—كان <em>يخبرهم</em> أن اللوحة فقدت التلامس الجزئي. (ECRI)</p>
        <p><span class="english-term"><strong>Outcome:</strong> Post-op, they found a severe burn under the return pad. The machine was working perfectly—it was <em>telling</em> them the pad had lost partial contact. (ECRI)</span></p>
        
        <p><strong>الدرس:</strong> الآلات لا تكذب من أجل راحتنا. إيقاف إنذار السلامة دون التحقيق في السبب الجذري هو فعل خطير. <strong>الإنذار هو التوقف الإلزامي للنظام.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term"><strong>Lesson:</strong> Machines do not lie for our convenience. Silencing a safety alarm without investigating the root cause is a dangerous act. <strong>The alarm is the system's hard stop.</strong> (IHI; AHRQ)</span></p>
    </div>

    <h2>18.9 القياس (كيف تعرف أن ضوابط الطاقة موثوقة)</h2>
    <h3>18.9 Measurement (KPIs)</h3>

    <h3>18.9.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>نسبة الامتثال لاستخدام أنظمة إخلاء الدخان (Smoke evacuation). (AORN)</li>
        <li>نسبة الامتثال لاستخدام حافظة الأمان (Holster) عند عدم استخدام قلم الكي.</li>
        <li>النسبة المئوية لعمليات التحقق الموثقة للوحة الراجعة (الموقع السليم + التلامس الكامل) في سجل التمريض.</li>
        <li>نسبة الأدوات (Minimally Invasive) التي تم فحص عزلها بانتظام من قبل CSSD. (AAMI)</li>
    </ul>

    <h3>18.9.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>الأحداث الضارة: الحروق المحيطة بالجراحة (أي موقع غير موقع الشق).</li>
        <li>حوادث حرائق غرفة العمليات (يجب أن يكون الهدف دائماً صفراً).</li>
    </ul>

    <h2>18.10 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>18.10 The Writer's Reflection</h3>

    <h3>18.10.1 التكنولوجيا لا تلغي الحاجة إلى الانضباط</h3>
    <p>مهما كانت أجهزة الطاقة حديثة وذكية، فإنها تعتمد في النهاية على ممرضة تضع اللوحة بشكل صحيح، وعلى جراح يضع القلم في الحافظة، وعلى فريق لا يتجاهل الإنذار.</p>
    <p><span class="english-term"><strong>18.10.1 Technology does not remove the need for discipline</strong><br>No matter how modern and smart energy devices are, they ultimately depend on a nurse placing the pad correctly, a surgeon placing the pencil in the holster, and a team not ignoring the alarm.</span></p>

    <h3>18.10.2 الهواء الذي نتنفسه</h3>
    <p>لقد استنشقنا الدخان الجراحي لسنوات معتقدين أنه "جزء من الوظيفة". الآن نعلم أنه سمٌ بطيء. إخلاء الدخان ليس مجرد توصية جودة؛ إنه حق مهني في استنشاق هواء نظيف. (NIOSH)</p>
    <p><span class="english-term"><strong>18.10.2 The air we breathe</strong><br>We breathed surgical smoke for years thinking it was “part of the job.” Now we know it is a slow poison. Smoke evacuation is not just a quality recommendation; it is an occupational right to clean air. (NIOSH)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الجراحة الكهربائية تُخضع جسم المريض بالكامل للدائرة الكهربائية؛ اللوحة الراجعة (Dispersive pad) تشتت الطاقة لمنع الحروق. (AORN)<br>
            <span class="english-term">Electrosurgery subjects the entire patient to the circuit; the dispersive pad diffuses energy to prevent burns.</span></li>
            
            <li>لا تتجاهل إنذارات المولد أبداً—إنها <strong>توقف إلزامي (Hard stop)</strong> يفرضه الجهاز لحماية المريض. (ECRI; IHI)<br>
            <span class="english-term">Never bypass a generator alarm—it is the machine’s <strong>hard stop</strong> to protect the patient.</span></li>
            
            <li>خطر الدخان الجراحي هو خطر مهني مثبت؛ الإخلاء من المصدر (Source capture) هو المعيار العملي والمطلوب. (NIOSH; AORN)<br>
            <span class="english-term">Surgical smoke is a proven occupational hazard; capture at the source is the practical standard.</span></li>
            
            <li>ابنِ نظام حواجز لسلامة الطاقة: التخطيط، الإعداد، قواعد السلوك (الحافظة)، التوقفات الإلزامية، التوثيق، وحلقات التعلم. (IHI; AHRQ)<br>
            <span class="english-term">Build an energy safety barrier system: plan, setup, behavior rules (holster), hard stops, documentation, audits, and learning loops.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (electrosurgery safety, return electrode practices, laser safety concepts, plume evacuation practices).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). Sterile processing/maintenance concepts relevant to instrument integrity (supporting insulation inspection and device lifecycle discipline).</li>
            <li>ECRI. Health technology safety / hazard concepts (electrosurgical unit hazards, stray energy risks, device-related burn pathways).</li>
            <li>National Institute for Occupational Safety and Health (NIOSH). Guidance and resources on surgical smoke / plume exposure control (occupational exposure concepts and source capture emphasis).</li>
            <li>Occupational Safety and Health Administration (OSHA). Occupational safety concepts relevant to airborne contaminants and workplace controls (general principles supporting plume control).</li>
            <li>National Fire Protection Association (NFPA). NFPA 99: Health Care Facilities Code (fire and electrical safety concepts relevant to OR ignition sources and prep/oxygen context).</li>
            <li>ANSI Z136 (laser safety standards concepts) and facility laser safety policies (controlled area, eye protection, signage).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, communication, speaking up, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (hard stops, standard work, audit and feedback, learning loops).</li>
            <li>Anesthesia Patient Safety Foundation (APSF). Patient safety resources and perioperative fire/energy risk awareness concepts.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  28: `<!-- Download Button -->
    

    <div class="part-title">PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs</div>
    <div class="part-title">الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة</div>
    
    <h1>CHAPTER 28 — OR Quality Indicators and Dashboard Design</h1>
    <div class="subtitle">الفصل الثامن والعشرون — مؤشرات جودة غرفة العمليات وتصميم لوحة القيادة (Dashboard)<br>
    <span style="font-size: 18px;">(Core KPI Set • SSI/Never Events • Cancellations • Utilization Metrics with Interpretation)<br>
    (المجموعة الأساسية لمؤشرات الأداء الرئيسية • عدوى الموقع الجراحي/الأحداث التي لا ينبغي أن تحدث • الإلغاءات • مقاييس الاستخدام مع التفسير)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>بناء <strong>مجموعة أساسية عملية لمؤشرات الأداء الرئيسية (Core KPI set)</strong> لسلامة غرفة العمليات، والجودة، والعمليات، والتعلم—دون الغرق في المقاييس. (IHI)<br>
            <span class="english-term">Build a practical <strong>core KPI set</strong> for OR safety, quality, operations, and learning—without drowning in metrics. (IHI)</span></li>
            
            <li>تصميم لوحات قيادة (Dashboards) تتتبع <strong>عدوى الموقع الجراحي (SSI) والأحداث التي لا ينبغي أن تحدث (Never events)</strong> بطريقة تدفع نحو سلوكيات الوقاية والإبلاغ الصادق. (CDC SSI guidance concepts; WHO SSI/WHO SSC concepts; AHRQ)<br>
            <span class="english-term">Design dashboards that track <strong>SSI and never events</strong> in a way that drives prevention behaviors and honest reporting. (CDC SSI guidance concepts; WHO SSI/WHO SSC concepts; AHRQ)</span></li>
            
            <li>قياس وتفسير <strong>الإلغاءات (Cancellations)</strong> مع ترميز الأسباب (Cause coding)، بحيث تدفع لوحة القيادة نحو إصلاحات النظام بدلاً من إلقاء اللوم. (IHI; AHRQ)<br>
            <span class="english-term">Measure and interpret <strong>cancellations</strong> with cause coding, so the dashboard drives system fixes rather than blame. (IHI; AHRQ)</span></li>
            
            <li>استخدام <strong>مقاييس الاستخدام (Utilization metrics)</strong> بشكل صحيح—فهم الفخاخ وكيفية تجنب التلاعب (Gaming) والضغط غير الآمن. (IHI)<br>
            <span class="english-term">Use <strong>utilization metrics</strong> correctly—understanding the traps and how to avoid gaming and unsafe pressure. (IHI)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "لوحة القيادة التي تقيس السرعة وتتجاهل الحقيقة"</strong><br>
        <span class="english-term">A true-to-life case: “The dashboard that measures speed and ignores truth” (Real Scientific Story)</span>
    </div>

    <p>أول لوحة قيادة (Dashboard) رأيتها في قسم العمليات كانت تبدو مثيرة للإعجاب. ألوان. أهداف. نسب مئوية. خطوط اتجاه. القيادة أحبتها.</p>
    <p><span class="english-term">The first dashboard I ever saw in an operating department looked impressive. Colors. Targets. Percentages. Trend lines. Leadership loved it.</span></p>

    <p>لكن طاقم المسرح الجراحي لم يثق بها.</p>
    <p><span class="english-term">But the theatre staff didn’t trust it.</span></p>

    <div class="alert-box">
        <p>أشارت إحدى الممرضات إلى مخطط "البدء في الوقت المحدد" وقالت: "لهذا السبب نُدخل المريض إلى غرفة غير مكتملة—لأننا نُعاقب إذا كانت الساعة حمراء."<br>
        وأشار جراح إلى "الاستخدام" (Utilization) وقال: "إذن أنتم تريدوننا أن نحجز وقتاً أطول لنبدو أكثر كفاءة؟"<br>
        وأشار منسق إلى "معدل الإلغاءات" وقال: "نحن نُلغي لأن الأسرة محجوزة—ومع ذلك تلوم لوحة القيادة غرفة العمليات."</p>
        <p><span class="english-term">A nurse pointed at the “On-time start” chart and said, “This is why we bring the patient into an unfinished room—because we are punished if the clock is red.”<br>
        A surgeon pointed at “Utilization” and said, “So you want us to book longer to look efficient?”<br>
        A coordinator pointed at “Cancellation rate” and said, “We cancel because beds are blocked—yet the dashboard blames the OR.”</span></p>
    </div>

    <p>كانت لوحة القيادة تحتوي على أرقام، لكنها لم تكن تحتوي على الحقيقة. وعندما تفقد لوحة القيادة حقيقتها، تصبح خطيرة—لأنها تغير السلوك في الاتجاه الخاطئ. (AHRQ; IHI)</p>
    <p><span class="english-term">The dashboard had numbers, but it didn’t have truth. And when a dashboard loses truth, it becomes dangerous—because it changes behavior in the wrong direction. (AHRQ; IHI)</span></p>

    <div class="success-box">
        <p>بعد سنوات، تعلمت التعامل مع لوحات القيادة كأدوات سريرية: يجب أن تقلل من الضرر، وليس فقط أن تصف النشاط. لوحة قيادة غرفة العمليات الجيدة تجعل ما هو غير مرئي مرئياً: موثوقية العقامة، استقرار سير العمل، ثقافة التعلم، والأسباب الحقيقية للتأخير والإلغاءات. لوحة القيادة السيئة تخلق التلاعب (Gaming)، والاختصارات، وإلقاء اللوم.</p>
        <p>يدور هذا الفصل حول بناء لوحات قيادة <strong>تحمي السلامة بينما تحسن التدفق</strong>، ومؤشرات تخبرك بما يحدث فعلياً—دون معاقبة الأشخاص الذين يحاولون القيام بالشيء الصحيح. (IHI; AHRQ)</p>
        <p><span class="english-term">Years later, I learned to treat dashboards as clinical tools: they must reduce harm, not just describe activity. A good OR dashboard makes the invisible visible: sterility reliability, workflow stability, learning culture, and the real causes of delay and cancellations. A bad dashboard creates gaming, shortcuts, and blame.<br>
        This chapter is about building dashboards that <strong>protect safety while improving flow</strong>, and indicators that tell you what is actually happening—without punishing the people who are trying to do the right thing. (IHI; AHRQ)</span></p>
    </div>

    <h2>28.1 لماذا تهم مؤشرات غرفة العمليات (ولماذا تضر غالباً) / Why OR Indicators Matter (And Why They Often Harm)</h2>

    <h3>28.1.1 المؤشرات تغير السلوك حتى عندما لا يعترف أحد بذلك</h3>
    <p>ما تقيسه يصبح ما يحميه الناس. إذا قمت بقياس السرعة وحدها، فستحصل على السرعة—أحياناً على حساب العقامة، وانضباط العد الجراحي، وجودة قائمة التحقق. (IHI)</p>
    <p><span class="english-term"><strong>28.1.1 Indicators change behavior even when nobody admits it</strong><br>What you measure becomes what people protect. If you measure speed alone, you will get speed—sometimes at the cost of sterility, counts discipline, and checklist quality. (IHI)</span></p>

    <h3>28.1.2 يجب أن تكون مؤشرات الجودة متوازنة</h3>
    <p>لوحة القيادة الناضجة ليست رقماً واحداً. إنها رؤية متوازنة:</p>
    <p><span class="english-term"><strong>28.1.2 OR quality indicators must be balanced: safety + flow + experience + learning</strong><br>A mature dashboard is not one number. It is a balanced view:</span></p>
    <ul>
        <li><strong>نتائج السلامة (Safety outcomes):</strong> (الضرر / Harm).</li>
        <li><strong>موثوقية العملية (Process reliability):</strong> (الحواجز / Barriers).</li>
        <li><strong>تدفق العمليات (Operations flow):</strong> (الوقت والإنتاجية / Time and throughput).</li>
        <li><strong>الثقافة والتعلم (Culture and learning):</strong> (الحوادث الوشيكة، الإبلاغ، دورة التحسين). (AHRQ; IHI)</li>
    </ul>

    <h3>28.1.3 غرفة العمليات هي سلسلة متعددة الأنظمة / The OR is a multi-system chain</h3>
    <p>لوحة القيادة التي تقيس نتائج غرفة العمليات ولكنها تتجاهل قسم التعقيم (CSSD)، الأجنحة، الإفاقة (PACU)، النقل، الأشعة، وسلسلة التوريد، ستقوم بإلقاء اللوم على الأشخاص الخطأ وتُصلح المشاكل الخطأ. (IHI)</p>
    <p><span class="english-term"><strong>28.1.3 The OR is a multi-system chain</strong><br>A dashboard that measures OR outcomes but ignores CSSD, wards, PACU, transport, radiology, supply chain will blame the wrong people and fix the wrong problems. (IHI)</span></p>

    <h2>28.2 مبادئ التصميم الجيد للوحة قيادة غرفة العمليات / Principles of Good OR Dashboard Design</h2>

    <div class="concept-box">
        <ul>
            <li><strong>28.2.1 القاعدة 1: ابدأ بالهدف (Start with purpose)</strong><br>
            يجب أن يُجيب كل مؤشر (KPI) على: "ما هو القرار الذي سنتخذه بناءً على هذا؟" إذا كانت الإجابة "لا شيء"، فاحذفه. (IHI)</li>
            <br>
            <li><strong>28.2.2 القاعدة 2: إقران مقاييس السرعة بمقاييس حواجز السلامة (Pair speed metrics with safety-barrier metrics)</strong><br>
            إذا كنت تتتبع وقت التبديل (Turnover time)، فيجب عليك أيضاً تتبع عدم التوافق في العقامة (Sterility nonconformance) وجودة قائمة التحقق—بحيث لا يمكن شراء السرعة بالاختصارات. (AORN concepts; WHO SSC concepts; IHI)</li>
            <br>
            <li><strong>28.2.3 القاعدة 3: عرّف المقاييس بدقة (Define metrics precisely)</strong><br>
            "البدء في الوقت المحدد" (On-time start) يجب أن يكون له تعريف واضح: دخول العجلات (Wheels-in)؟ بدء التخدير؟ وقت الشق الجراحي؟ وما هي الاستثناءات؟ المقياس الغامض يتحول إلى سياسة. (IHI)</li>
            <br>
            <li><strong>28.2.4 القاعدة 4: استخدم مجموعة أساسية صغيرة مع إمكانيات التعمق (Use a small core set with drill-downs)</strong><br>
            يحتاج المديرون التنفيذيون إلى 10-15 مؤشراً أساسياً. يمكن لقادة الوحدات التعمق في مقاييس فرعية. مقاييس كثيرة جداً = لا يوجد تركيز. (IHI)</li>
            <br>
            <li><strong>28.2.5 القاعدة 5: أظهر دائماً المقامات والسياق (Always show denominators and context)</strong><br>
            رقم SSI (عدوى الموقع الجراحي) مفرد بدون ذكر مزيج الإجراءات، وتعديل المخاطر، والمقام (Denominator) هو رقم مضلل. (CDC SSI concepts)</li>
        </ul>
        <p><span class="english-term">Rule 1: Start with purpose. Rule 2: Pair speed metrics with safety-barrier metrics. Rule 3: Define metrics precisely (to prevent arguments and gaming). Rule 4: Use a small core set with drill-downs. Rule 5: Always show denominators and context.</span></p>
    </div>

    <h2>28.3 المجموعة الأساسية لمؤشرات الأداء الرئيسية (نموذج عملي متوازن) / The Core KPI Set (A Practical, Balanced Model)</h2>

    <p>فيما يلي <strong>مجموعة أساسية (Core set)</strong> يمكنك تكييفها. المنطق وراءها أهم من الأرقام الدقيقة.</p>
    
    <h3>28.3.1 نتائج السلامة (المؤشرات المتأخرة) / Safety outcomes (lagging indicators)</h3>
    <ul>
        <li><strong>معدل عدوى الموقع الجراحي (SSI rate)</strong> حسب فئة الإجراء (وحسب مستوى الخطر إن أمكن). (CDC SSI concepts; WHO SSI concepts)</li>
        <li><strong>الأحداث التي لا ينبغي أن تحدث / الأحداث الجسيمة المبلغ عنها (Never events)</strong> (الموقع/الجهة الخاطئة، العناصر المتروكة، إلخ). (AHRQ; Universal Protocol concepts)</li>
        <li><strong>أحداث وحوادث الحريق الوشيكة في غرفة العمليات</strong> (خاصة الرأس/العنق مع الأكسجين المفتوح). (ASA OR fire guidance concepts; APSF concepts)</li>
        <li><strong>إصابات الأدوات الحادة / حوادث تعرض الموظفين</strong> (المعدل لكل 1000 حالة). (OSHA; CDC)</li>
        <li><strong>العودة غير المخطط لها إلى غرفة العمليات (Unplanned return to OR)</strong> (حيثما يتم تتبعها وذات صلة بالخدمة الجراحية). (AHRQ)</li>
    </ul>

    <h3>28.3.2 موثوقية عملية السلامة (المؤشرات الاستباقية) / Safety process reliability (leading indicators)</h3>
    <ul>
        <li><strong>درجة جودة قائمة التحقق الجراحية (WHO SSC)</strong> (ليس فقط الإكمال/Completion). (WHO SSC; IHI)</li>
        <li><strong>الامتثال لتوقيت الوقاية بالمضادات الحيوية</strong> (كبوابة خاصة بغرفة العمليات: التوقيت الصحيح موثق). (WHO SSI concepts; CDC SSI concepts)</li>
        <li><strong>الامتثال للعد الجراحي وجودة حل التباين</strong> (بما في ذلك معدل مقاطعة العد). (AORN concepts)</li>
        <li><strong>أخطاء/الحوادث الوشيكة لتسمية العينات</strong> (مجال عدم التسامح مطلقاً Zero tolerance). (AORN; AHRQ)</li>
        <li><strong>أحداث اختراق الحقل المعقم</strong> والإجراءات التصحيحية الموثقة. (AORN concepts)</li>
    </ul>

    <h3>28.3.3 تدفق العمليات والسعة / Operations flow and capacity</h3>
    <ul>
        <li><strong>بدء الحالة الأولى في الوقت المحدد (First-case on-time start)</strong> (مقترناً بجودة قائمة التحقق). (IHI; WHO SSC concepts)</li>
        <li><strong>وقت التبديل (Turnover time)</strong> (الوسيط + التباين؛ مقترناً بموثوقية العقامة). (IHI; AORN concepts)</li>
        <li><strong>معدل الإلغاء (Cancellation rate)</strong> مع ترميز السبب (المريض، جاهزية OR، الأسرة/PACU، الجراح، CSSD، التوريد). (IHI)</li>
        <li><strong>مقاييس الاستخدام (Utilization metrics)</strong> (يتم تفسيرها بشكل صحيح؛ انظر 28.6). (IHI)</li>
    </ul>

    <h3>28.3.4 مؤشرات التعلم والثقافة / Learning and culture indicators</h3>
    <ul>
        <li><strong>معدل الإبلاغ عن الحوادث الوشيكة (Near-miss reporting rate)</strong> (توقع أن يرتفع عندما تصبح الثقافة صادقة). (AHRQ; IHI)</li>
        <li><strong>الوقت المستغرق لإغلاق الإجراءات التصحيحية</strong> من الحوادث/RCA (سرعة حلقة التعلم). (IHI)</li>
    </ul>

    <h2>28.4 عدوى الموقع الجراحي (SSI) والأحداث التي لا ينبغي أن تحدث (Never Events)</h2>
    <h3>28.4 SSI and Never Events (How to Measure Without Creating Fear or Fiction)</h3>

    <h3>28.4.1 لماذا تعتبر SSI صعبة ولماذا تستحق العناء</h3>
    <p>عدوى الموقع الجراحي (SSI) هي واحدة من أهم نتائج الجودة الجراحية ذات المغزى، لكنها تتأثر بـ:</p>
    <ul>
        <li>مزيج الإجراءات (Procedure mix)،</li>
        <li>عوامل خطر المريض،</li>
        <li>اكتمال المتابعة (Follow-up completeness)،</li>
        <li>اتساق طريقة المراقبة (Surveillance method consistency). (CDC SSI concepts)</li>
    </ul>
    <p>إذا لم توحد المراقبة، يصبح "معدل" SSI الخاص بك مجرد أداة قياس وهمية (Artifact).</p>
    <p><span class="english-term"><strong>28.4.1 SSI: why it’s hard and why it’s worth it</strong><br>If you don’t standardize surveillance, your SSI “rate” becomes a measurement artifact.</span></p>

    <h3>28.4.2 أساسيات لوحة قيادة SSI (ما يجب عرضه) / SSI dashboard essentials</h3>
    <ul>
        <li><strong>المقام (Denominator):</strong> عدد الإجراءات في كل فئة.</li>
        <li><strong>التعريف (Definition):</strong> نافذة المراقبة والمعايير التشخيصية المستخدمة. (CDC SSI concepts)</li>
        <li><strong>التقسيم الطبقي (Stratification):</strong> نوع الإجراء، الاستعجال (مجدول/طارئ)، وفئة الخطر إن وجدت.</li>
        <li><strong>الاتجاهات بمرور الوقت (Trends over time)</strong> مع تفكير مخططات التحكم (Control-chart thinking) (لا تبالغ في رد الفعل تجاه التباين العشوائي). (IHI)</li>
        <li><strong>الامتثال لحزمة الوقاية (Bundle compliance)</strong> (التوقيت، الحرارة الطبيعية، التحكم في الجلوكوز حيثما صلة، معيار تحضير الجلد، انضباط المرور). (WHO SSI concepts; AORN concepts)</li>
    </ul>

    <h3>28.4.3 الأحداث التي لا ينبغي أن تحدث: قياس "الأحداث" و"موثوقية الحاجز"</h3>
    <p>الأحداث التي لا ينبغي أن تحدث نادرة، لذلك يجب أن تتتبع لوحة القيادة أيضاً <strong>الحواجز (Barriers)</strong> التي تمنعها:</p>
    <p><span class="english-term"><strong>28.4.3 Never events: measure both “events” and “barrier reliability”</strong><br>Never events are rare, so the dashboard should also track <strong>barriers</strong> that prevent them:</span></p>
    <ul>
        <li>جودة قائمة التحقق (تحديد المهلة). (WHO SSC)</li>
        <li>جودة العد الجراحي (بما في ذلك الالتزام بخوارزمية التباين). (AORN)</li>
        <li>انضباط تسمية العينات. (AORN)</li>
        <li>اكتمال تتبع الغرسات. (AORN concepts)</li>
    </ul>

    <div class="concept-box">
        <h3>28.4.4 القصة وراء المقياس (سرد) / The story behind the metric (Narrative)</h3>
        <p>رأيت مستشفى يحتفل بـ "صفر عناصر متروكة لمدة عامين". ثم، خلال جولة سلامة، اكتشفنا أن عمليات العد (Counts) كانت غالباً متسرعة وأن التباينات كانت تُحل "بشكل غير رسمي" دون توثيق.</p>
        <p>لم يكن لديهم خطر صفري. كان لديهم <strong>إبلاغ صفري</strong>.</p>
        <p>بعد تنفيذ معيار توثيق التباين وتدقيقات التوجيه (Coaching audits)، زادت التباينات المُبلغ عنها في البداية—ثم انخفض الخطر الحقيقي للعناصر المتروكة لأن النظام أخيرًا رأى نقاط ضعفه. هكذا تتحسن الموثوقية: من خلال الرؤية والوضوح (Visibility)، وليس الصمت. (AHRQ; IHI; AORN concepts)</p>
        <p><span class="english-term">They didn’t have zero risk. They had zero reporting... That is how reliability improves: through visibility, not silence. (AHRQ; IHI; AORN concepts)</span></p>
    </div>

    <h2>28.5 الإلغاءات (تحويل لوحة القيادة من اللوم إلى إصلاح النظام)</h2>
    <h3>28.5 Cancellations (Turn the Dashboard From Blame to System Repair)</h3>

    <h3>28.5.1 لماذا يُعد معدل الإلغاء مؤشراً قوياً للجودة</h3>
    <p>تعكس الإلغاءات جاهزية النظام. إنها تُهدر ثقة المريض، تخلق خسارة مالية، وغالباً ما تشير إلى جدولة غير آمنة أو ضعف في البوابات قبل العملية. (IHI)</p>
    <p><span class="english-term"><strong>28.5.1 Why cancellation rate is a powerful quality indicator</strong><br>Cancellations reflect system readiness. They waste patient trust, create financial loss, and often signal unsafe scheduling or weak pre-op gating. (IHI)</span></p>

    <h3>28.5.2 يجب تصنيف الإلغاءات (ترميز الأسباب) / Cancellation must be categorized (cause coding)</h3>
    <p>معدل الإلغاء الواحد بدون ترميز السبب لا فائدة منه. يجب عليك فصل:</p>
    <ul>
        <li><strong>متعلق بالمريض (Patient-related):</strong> عدم الحضور، الرفض، مرض حاد.</li>
        <li><strong>الجاهزية الطبية (Medical readiness):</strong> أمراض مصاحبة غير محسنة، عدم وجود تصريح طبي.</li>
        <li><strong>جاهزية غرفة العمليات (OR readiness):</strong> معدات/صينية مفقودة، موظفون غير متاحين.</li>
        <li><strong>متعلق بالجراح (Surgeon-related):</strong> قرار متأخر، تغيير الجدول.</li>
        <li><strong>السعة اللاحقة (Capacity downstream):</strong> لا يوجد سرير PACU/جناح، العناية المركزة (ICU) غير متاحة.</li>
        <li><strong>سلسلة التوريد / CSSD:</strong> أداة غير جاهزة، غرسة غير متاحة. (IHI; AHRQ)</li>
    </ul>

    <h3>28.5.3 عدسة "قابلية المنع" / The cancellation “preventability lens”</h3>
    <p>يجب وضع علامة (Tag) على كل فئة إلغاء على النحو التالي:</p>
    <ul>
        <li>يمكن الوقاية منه <em>اليوم</em> بإجراء من غرفة العمليات.</li>
        <li>يمكن الوقاية منه من خلال إعادة تصميم العمليات <em>المبكرة</em> (Upstream).</li>
        <li>لا يمكن الوقاية منه (تغيير سريري حقيقي). (IHI)</li>
    </ul>

    <div class="alert-box">
        <h3>28.5.4 مثال على التفسير / Interpretation example</h3>
        <p>إذا ارتفعت الإلغاءات وكان السبب الرئيسي هو "عدم وجود سرير"، فإن غرفة العمليات لا تفشل—بل إن <strong>تدفق المستشفى (Hospital flow)</strong> هو من يفشل. الإجراء التصحيحي هو إدارة الأسرة وتخطيط الخروج، وليس معاقبة موظفي المسرح الجراحي. (AHRQ; IHI)</p>
        <p><span class="english-term">If cancellations rise and the top cause is “no bed,” the OR is not failing—hospital flow is failing. The corrective action is bed management and discharge planning, not punishing theatre staff. (AHRQ; IHI)</span></p>
    </div>

    <h2>28.6 مقاييس الاستخدام (أكثر مؤشرات غرفة العمليات تعرضاً لسوء الاستخدام)</h2>
    <h3>28.6 Utilization Metrics (The Most Misused OR KPI)</h3>

    <h3>28.6.1 لماذا يكون الاستخدام مُغرياً / Why utilization is seductive</h3>
    <p>إنه يبدو كمقياس نظيف للكفاءة. ولكنه واحد من أسهل مؤشرات الأداء التي يمكن التلاعب بها (Gaming). (IHI)</p>
    <p><span class="english-term"><strong>28.6.1 Why utilization is seductive</strong><br>It looks like a clean measure of efficiency. But it is one of the easiest KPIs to game. (IHI)</span></p>

    <h3>28.6.2 حدد أي نوع من الاستخدام تقصد / Define what kind of utilization you mean</h3>
    <p>تشمل الأنواع الشائعة:</p>
    <ul>
        <li><strong>الاستخدام الخام للغرفة (Raw room utilization):</strong> (الوقت الذي تُستخدم فيه الغرفة للحالات) ÷ (الوقت المتاح للموظفين).</li>
        <li><strong>استخدام أوقات الذروة (Prime-time utilization):</strong> ضمن الساعات المجدولة فقط.</li>
        <li><strong>استخدام الكتل (Block utilization):</strong> ضمن وقت الكتلة (Block time) المخصص للتخصص.</li>
        <li><strong>دقة وقت الحالة (Case time accuracy):</strong> الوقت المخطط مقابل الوقت الفعلي (يؤثر على الاستخدام المتصور). (IHI)</li>
    </ul>
    <p>إذا لم تقم بتحديده، ستصبح النقاشات لا نهائية.</p>

    <h3>28.6.3 فخاخ التفسير (The traps) / Interpretation pitfalls</h3>
    <ul>
        <li><strong>الاستخدام المرتفع يمكن أن يكون سيئاً</strong> إذا كان يعني عدم وجود هوامش أمان (Buffers): يصبح اليوم هشاً، يرتفع العمل الإضافي، وتضعف حواجز السلامة. (IHI; AHRQ)</li>
        <li><strong>الاستخدام المنخفض يمكن أن يكون مضللاً</strong> إذا كانت الإلغاءات مدفوعة بنقص الأسرة أو CSSD، وليس بإنتاجية غرفة العمليات. (IHI)</li>
        <li><strong>التلاعب من خلال الحجز المفرط للأوقات</strong> يجعل الاستخدام يبدو جيداً ولكنه يدمر صدق الجدول الزمني. (IHI)</li>
        <li><strong>الاستخدام بدون أخذ مزيج الحالات (Case mix) في الاعتبار</strong> يُعاقب الخدمات المعقدة بشكل غير عادل.</li>
    </ul>

    <h3>28.6.4 استخدام مقاييس الاستخدام مع مؤشرات "الاستقرار"</h3>
    <p>إقران الاستخدام (Utilization) بـ:</p>
    <p><span class="english-term"><strong>28.6.4 Use utilization with “stability” indicators</strong><br>Pair utilization with:</span></p>
    <ul>
        <li>ساعات العمل الإضافي (Overtime hours)،</li>
        <li>الامتثال لفترات راحة الموظفين (Staff breaks compliance)،</li>
        <li>أسباب البدء المتأخر (Late start causes)،</li>
        <li>تباين التبديل (Turnover variation)،</li>
        <li>أسباب الإلغاء (Cancellation causes)،</li>
        <li>جودة حواجز السلامة. (AHRQ; IHI)</li>
    </ul>

    <div class="concept-box">
        <h3>28.6.5 عقلية "الاستخدام الصحي" / A practical “healthy utilization” mindset</h3>
        <p>غرفة العمليات الصحية ليست تلك المستغلة بنسبة 100%. إنها تلك التي تكون <strong>منتجة بشكل موثوق</strong> مع هوامش أمان (Buffers) تحمي السلامة. في العديد من الأنظمة الحقيقية، بعض "الركود/Slack" ليس هدراً—إنه مرونة (Resilience). (IHI)</p>
        <p><span class="english-term"><strong>28.6.5 A practical “healthy utilization” mindset</strong><br>A healthy OR is not one that is 100% utilized. It is one that is <strong>reliably productive</strong> with buffers that protect safety. In many real systems, some slack is not waste—it is resilience. (IHI)</span></p>
    </div>

    <h2>28.7 تخطيط لوحة القيادة (ماذا تظهر، لمن، وكم مرة)</h2>
    <h3>28.7 Dashboard Layout (What to Show, to Whom, and How Often)</h3>

    <h3>28.7.1 ثلاث طبقات من لوحات القيادة (حوكمة عملية) / Three layers of dashboards</h3>
    <ul>
        <li><strong>لوحة يومية للخطوط الأمامية (الوحدة):</strong> جاهزية اليوم، الموظفين الأساسيين (Anchors)، بوابة الحالات الإضافية، حالة الأسرة، النواقص الحرجة، جاهزية الحالة الأولى.</li>
        <li><strong>لوحة قيادة تشغيلية أسبوعية:</strong> التبديل (Turnover)، البدء في الوقت المحدد، الإلغاءات مع أسبابها، أعطال المعدات، نفاد الإمدادات، تأخيرات CSSD.</li>
        <li><strong>لوحة قيادة الجودة الشهرية:</strong> SSI، حواجز الأحداث التي لا ينبغي أن تحدث، الحوادث الوشيكة لتسمية العينات/الأدوية، موثوقية العد، اكتمال التدريب، وقت إغلاق حلقة التعلم. (IHI; AHRQ)</li>
    </ul>

    <h3>28.7.2 اجعل لوحات القيادة "قابلة للتنفيذ" (Actionable)</h3>
    <p>يجب أن يحتوي كل مخطط على:</p>
    <p><span class="english-term"><strong>28.7.2 Make dashboards “actionable”</strong><br>Every chart should have:</span></p>
    <ul>
        <li>مالك (owner)،</li>
        <li>هدف (target)،</li>
        <li>الاتجاه الحالي (current trend)،</li>
        <li>وإجراء التحسين الحالي (current improvement action). (IHI)</li>
    </ul>

    <h3>28.7.3 استخدام تفكير مخططات التحكم للاستقرار / Use control-chart thinking</h3>
    <p>تجنب المبالغة في رد الفعل تجاه التقلبات في نقطة واحدة (Single-point fluctuations). أنظمة غرفة العمليات مزعجة (Noisy). استخدم قواعد الاتجاه (Trend rules)، وحقق في التحولات المستمرة. (IHI)</p>

    <h2>28.8 جودة مؤشرات الأداء (KPI): تعريفات البيانات، النظافة، والثقة</h2>
    <h3>28.8 KPI Quality: Data Definitions, Data Hygiene, and Trust</h3>

    <h3>28.8.1 الثقة هي عملة لوحات القيادة / Trust is the currency of dashboards</h3>
    <p>إذا لم يثق الموظفون في البيانات، تصبح لوحات القيادة مسرحية أداء (Performance theatre). (AHRQ)</p>
    <p><span class="english-term"><strong>28.8.1 Trust is the currency of dashboards</strong><br>If staff don’t trust data, dashboards become performance theatre. (AHRQ)</span></p>

    <h3>28.8.2 إخفاقات جودة البيانات الشائعة / Common data quality failures</h3>
    <ul>
        <li>تعريفات غير متسقة (وقت البدء، وقت الانتهاء)،</li>
        <li>طوابع زمنية (Timestamps) مفقودة،</li>
        <li>توثيق متأخر،</li>
        <li>انحياز التصنيف (اختيار أسباب الإلغاء لتجنب اللوم). (IHI)</li>
    </ul>

    <h3>28.8.3 بناء "بطاقات تعريف" لكل KPI / Build “definition cards” for each KPI</h3>
    <p>لكل KPI، اكتب تعريفاً من صفحة واحدة: البسط (Numerator)، المقام (Denominator)، الاستثناءات، مصدر البيانات، وملاحظات التفسير. هذا يمنع الجدالات التي لا نهاية لها. (IHI)</p>
    <p><span class="english-term"><strong>28.8.3 Build “definition cards” for each KPI</strong><br>For each KPI, write a one-page definition: numerator, denominator, exclusions, data source, and interpretation notes. This prevents endless debates. (IHI)</span></p>

    <h2>28.9 التدريب والاستدامة: جعل لوحة القيادة نظاماً حياً</h2>
    <h3>28.9 Training and Sustainability: Making the Dashboard a Living System</h3>

    <h3>28.9.1 تدريب القادة على <em>التفسير</em>، وليس العرض فقط</h3>
    <p>لوحة القيادة ليست تقريراً؛ إنها أداة محادثة. يجب أن يتعلم القادة:</p>
    <ul>
        <li>ما يمكن للمقياس أن يعنيه وما لا يمكنه أن يعنيه،</li>
        <li>كيفية سؤال "لماذا" بأمان،</li>
        <li>كيفية تجنب إلقاء اللوم. (AHRQ; IHI)</li>
    </ul>

    <h3>28.9.2 حماية السلامة النفسية / Protect psychological safety</h3>
    <p>إذا أدى الإبلاغ عن الحوادث إلى العقاب، فسيتبعه نقص في الإبلاغ (Underreporting). ستبدو لوحات القيادة "أفضل" بينما ينمو الخطر. (AHRQ)</p>
    <p><span class="english-term"><strong>28.9.2 Protect psychological safety</strong><br>If incident reporting leads to punishment, underreporting will follow. Dashboards will look “better” while risk grows. (AHRQ)</span></p>

    <h3>28.9.3 إغلاق الحلقة: من المقياس ← السبب الجذري ← الإجراء ← إعادة القياس</h3>
    <p>الاستدامة هي دورة التعلم. إن KPI بدون حلقة تحسين هو مجرد ضوضاء. (IHI)</p>
    <p><span class="english-term"><strong>28.9.3 Close the loop: from metric → root cause → action → re-measure</strong><br>Sustainability is the learning cycle. A KPI without an improvement loop is just noise. (IHI)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>لوحات قيادة غرفة العمليات هي أدوات سريرية: يجب أن تُحسن السلامة والتدفق، وليس خلق تلاعب (Gaming). (IHI; AHRQ)<br>
            <span class="english-term">OR dashboards are clinical tools: they must improve safety and flow, not create gaming.</span></li>
            
            <li>استخدم <strong>مجموعة متوازنة من مؤشرات الأداء (Balanced KPI set)</strong>: النتائج + موثوقية الحواجز + العمليات + التعلم. (IHI)<br>
            <span class="english-term">Use a <strong>balanced KPI set</strong>: outcomes + barrier reliability + operations + learning.</span></li>
            
            <li>يجب إقران عدوى الموقع الجراحي (SSI) والأحداث التي لا ينبغي أن تحدث مع <strong>مقاييس الحواجز</strong> ومراقبة صادقة. (CDC SSI concepts; WHO SSC; AORN concepts)<br>
            <span class="english-term">SSI and never events must be paired with barrier metrics and honest surveillance.</span></li>
            
            <li>يجب أن يتم <strong>ترميز أسباب (Cause-coded)</strong> الإلغاءات، وإلا ستلقي لوحة القيادة اللوم على النظام الخطأ. (IHI)<br>
            <span class="english-term">Cancellations must be cause-coded, or the dashboard will blame the wrong system.</span></li>
            
            <li>مقياس <strong>الاستخدام (Utilization)</strong> قوي ولكنه خطير—يجب تفسيره مع هوامش الأمان، العمل الإضافي، ومؤشرات السلامة لتجنب الضرر. (IHI; AHRQ)<br>
            <span class="english-term">Utilization is powerful but dangerous—interpret it with buffers, overtime, and safety indicators to avoid harm.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Institute for Healthcare Improvement (IHI) — Quality improvement and reliability resources (measurement for improvement, balanced metrics, control-chart thinking, KPI design).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety resources (culture, reporting systems, human factors, psychological safety, learning loops).</li>
            <li>World Health Organization Surgical Safety Checklist (WHO SSC) — Checklist quality and team communication concepts.</li>
            <li>Centers for Disease Control and Prevention (CDC) SSI guidance (concepts) — SSI surveillance definitions and prevention bundle concepts.</li>
            <li>Association of periOperative Registered Nurses (AORN) — Guidelines for Perioperative Practice (counts, sterility reliability, specimen handling, perioperative process standards).</li>
            <li>Universal Protocol / wrong-site prevention (concepts) — Time-out specificity and prevention barriers.</li>
            <li>ASA/APSF OR fire resources (concepts) — Fire risk indicators and prevention behavior concepts.</li>
            <li>OSHA / CDC occupational exposure resources (concepts) — Staff safety indicators (sharps injuries, exposure reporting) as part of OR quality.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  2: `<!-- Download Button -->
    

    <div class="part-title">PART I — Foundations of OR Safety &amp; Quality</div>
    <div class="part-title">الجزء الأول — أسس السلامة والجودة في غرفة العمليات</div>
    
    <h1>CHAPTER 2 — OR Patient Journey: From Decision to Discharge</h1>
    <div class="subtitle">الفصل الثاني — رحلة المريض في غرفة العمليات: من قرار الجراحة إلى الخروج<br>
    <span style="font-size: 18px;">(Pre-op Pathway • Day-of-Surgery Flow • Intra-op Phases • Recovery-to-Ward Handoffs — OR-side only)<br>
    (مسار ما قبل العملية • تدفق يوم الجراحة • مراحل ما داخل العملية • التسليم من الإفاقة إلى الجناح — الجانب الخاص بغرفة العمليات فقط)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>وصف رحلة المريض في غرفة العمليات كـ <strong>نظام موثوقية متصل (Connected reliability system)</strong>، وليس كخطوات معزولة. (IHI; AHRQ)<br>
            <span class="english-term">Describe the operating theatre patient journey as a <strong>connected reliability system</strong>, not isolated steps. (IHI; AHRQ)</span></li>
            
            <li>تحديد "النقاط الساخنة للفشل" (Failure hotspots) المتوقعة في كل مرحلة انتقال: <strong>قرار الجراحة، الحجز، الجاهزية، الدخول للمسرح، التنفيذ داخل العملية، من غرفة العمليات إلى الإفاقة (OR→PACU)، ومن الإفاقة إلى الجناح (PACU→ward)</strong>. (AHRQ)<br>
            <span class="english-term">Identify predictable failure hotspots at each transition: <strong>decision-to-operate, booking, readiness, theatre entry, intra-op execution, OR→PACU, PACU→ward</strong>. (AHRQ)</span></li>
            
            <li>تصميم ضوابط "البداية الصحيحة" و "النهاية الصحيحة" باستخدام <strong>بوابات الجاهزية (Readiness gates)، التوقف الإلزامي (Hard stops)، العمل القياسي (Standard work)، ومسارات التصعيد (Escalation pathways)</strong>. (The Joint Commission; IHI)<br>
            <span class="english-term">Design “start-right” and “finish-right” controls using <strong>readiness gates, hard stops, standard work, escalation pathways</strong>. (The Joint Commission; IHI)</span></li>
            
            <li>استخدام التواصل المنظم (SBAR/التسليم المنظم والتأكيد المغلق الحلقة) لتقليل تدهور المعلومات. (AHRQ; The Joint Commission)<br>
            <span class="english-term">Use structured communication (SBAR/structured handoffs and closed-loop confirmation) to reduce information decay. (AHRQ; The Joint Commission)</span></li>
            
            <li>تحديد محتوى التسليم (Handoff content) من جانب غرفة العمليات والذي ينقل <strong>الأساسيات الجراحية (Surgical essentials)</strong> بشكل موثوق (العينات، الغرسات، المصارف، فئة الجرح، القيود، محفزات المتابعة) دون تكرار محتوى التخدير. (AORN; WHO SSC)<br>
            <span class="english-term">Define OR-side handoff content that reliably communicates <strong>surgical essentials</strong> (specimens, implants, drains, wound class, restrictions, follow-up triggers) without duplicating anesthesia content. (AORN; WHO SSC)</span></li>
            
            <li>اختيار مجموعة أدنى من <strong>المؤشرات الاستباقية (Leading indicators)</strong> التي تعكس صحة المسار (الإلغاءات التي يمكن الوقاية منها، المعلومات الحرجة المفقودة، اكتمال التسليم، اكتمال التتبع، جودة المهلة/Time-out). (IHI; AHRQ)<br>
            <span class="english-term">Select a minimal set of <strong>leading indicators</strong> reflecting pathway health (preventable cancellations, missing critical info, handoff completeness, traceability completion, time-out quality). (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الخطة التي لم تنجُ في الممر"</strong><br>
        <span class="english-term">A true-to-life case: “The plan that did not survive the corridor” (Real Scientific Story)</span>
    </div>

    <p>كانت العملية بحد ذاتها غير معقدة. كانت يدا الجراح ثابتتين، وكان الحقل الجراحي نظيفاً، وتطابقت أرقام العد الجراحي (Counts). شعر الفريق بذلك الارتياح المألوف عندما يتم وضع الضمادة ويُنقل المريض إلى عربة النقل.</p>
    <p><span class="english-term">The operation itself was uncomplicated. The surgeon’s hands were steady, the field was clean, and the counts matched. The team felt that familiar relief when the dressing goes on and the patient is transferred to the trolley.</span></p>

    <p>قبل مغادرة الغرفة، تحدث الجراح بوضوح:<br>
    "أبقوا المصرف (Drain) على الشفط."<br>
    "إذا تجاوزت الكمية الخارجة X خلال ساعة، اتصلوا بي."<br>
    "استمروا في إعطاء المضادات الحيوية لمدة Y ساعة بسبب التلوث."<br>
    "يُمنع تحميل الوزن (Weight bearing) حتى يتم التقييم."<br>
    "هذه العينة عاجلة—قوموا بتسميتها وإرسالها فوراً."</p>
    <p><span class="english-term">Before leaving the room, the surgeon spoke clearly:<br>
    “Keep the drain on suction.”<br>
    “If output exceeds X in an hour, call me.”<br>
    “Continue antibiotics for Y hours because of contamination.”<br>
    “No weight bearing until review.”<br>
    “This specimen is urgent—label and send immediately.”</span></p>

    <p>في غرفة العمليات، كان لتلك الكلمات معنى—فالجميع سمعها. ولكن بعد ذلك وصل الواقع الفعلي: نُقلت شاشات المراقبة، أُمّنت الخطوط الوريدية، بدأت الأعمال الورقية، رنت الهواتف، الحالة التالية كانت بحاجة للغرفة، ودخل موظف جديد للمساعدة في النقل. كانت وحدة الإفاقة (PACU) مزدحمة. وكان جناح التنويم يعاني من نقص في الموظفين. عمل الجميع بسرعة، وعمل الجميع بنوايا حسنة.</p>
    <p><span class="english-term">In the OR, those words had meaning—everyone heard them. But then the real world arrived: monitors moved, lines secured, paperwork started, phone calls rang, the next case needed the room, and a new staff member entered to help transport. The PACU was crowded. The ward was short. Everyone worked fast, and everyone worked with good intention.</span></p>

    <div class="alert-box">
        <p>بعد بضع ساعات، عاد المريض وهو يعاني من نزيف وضمادة مشبعة بالدم. لم يتم إدارة المصرف (Drain) كما كان مقصوداً. كانت القيود (Restriction) غير واضحة. لم يتم اتباع خطة المضادات الحيوية. لم يقم أحد "بتجاهل" الخطة—<strong>ببساطة، الخطة لم تنجُ من الرحلة</strong>.</p>
        <p><span class="english-term">A few hours later the patient returned with bleeding and a soaked dressing. The drain was not managed as intended. The restriction was unclear. The antibiotic plan was not followed. Nobody “ignored” the plan— <strong>the plan simply did not survive the journey</strong>.</span></p>
    </div>

    <p>عندما تمت مراجعة الحالة، لم يكن السبب الجذري شخصاً واحداً. بل كان المسار (The pathway):</p>
    <ul>
        <li>خطة الجراحة كانت موجودة ولكن لم تكن مُهيكلة للتسليم (Handoff). (AHRQ)</li>
        <li>التوثيق كان موجوداً ولكنه لم يكن مُصمماً للاستخدام السريع. (The Joint Commission)</li>
        <li>حدث النقل تحت ضغط الإنتاج، مما أدى إلى تمييع التفاصيل الحرجة. (IHI)</li>
        <li>وافترضت غرفة العمليات أن "شخصاً آخر سيعرف".</li>
    </ul>
    <p><span class="english-term">When the case was reviewed, the root cause was not one person. It was the pathway:<br>
    the surgical plan existed but was not structured for handoff, (AHRQ)<br>
    documentation was present but not designed for rapid use, (The Joint Commission)<br>
    transfer happened under production pressure, so critical details were diluted, (IHI)<br>
    and the OR assumed “someone else will know.”</span></p>

    <div class="success-box">
        <p><strong>الدرس كان مباشراً وغير مريح:</strong> العملية الآمنة ليست مجرد شق جراحي آمن. العملية الآمنة هي <strong>رحلة آمنة</strong>. (AHRQ; IHI)</p>
        <p><span class="english-term"><strong>The lesson was direct and uncomfortable:</strong> A safe operation is not only a safe incision. A safe operation is a <strong>safe journey</strong>. (AHRQ; IHI)</span></p>
    </div>

    <h2>2.1 رحلة المريض في غرفة العمليات كنظام للسلامة (الصورة الكبرى) / The OR Patient Journey as a Safety System (The Big Picture)</h2>

    <h3>2.1.1 غرفة العمليات ليست مجرد غرفة؛ إنها سلسلة من القرارات / The OR is not a room; it is a chain of decisions</h3>
    <p>تتعامل العديد من الفرق مع السلامة على أنها شيء يحدث "داخل المسرح الجراحي". لكن الضرر الكبير في غرفة العمليات غالباً ما يبدأ في مراحل مبكرة (Upstream):</p>
    <ul>
        <li>في مرحلة اتخاذ قرار الجراحة (خطة غير واضحة)،</li>
        <li>أثناء الحجز (صياغة غامضة)،</li>
        <li>عند مرحلة الجاهزية (غرسات/أدوات مفقودة)،</li>
        <li>عند النقل (تدهور التسليم/Handoff decay). (AHRQ)</li>
    </ul>
    <p>لذلك، يجب هندسة السلامة عبر السلسلة بأكملها، وليس فقط أثناء الشق الجراحي. (IHI)</p>
    <p><span class="english-term">Many teams treat safety as something that happens “inside the theatre.” But major OR harm often starts upstream: at the decision-to-operate stage (unclear plan), during booking (ambiguous wording), at readiness (missing implants/instruments), at transfer (handoff decay). (AHRQ). Safety therefore must be engineered across the whole chain, not only during incision. (IHI)</span></p>

    <h3>2.1.2 التحولات (Transitions) هي المكان الذي تموت فيه المعلومات / Transitions are where information dies</h3>
    <p>تشير أدبيات سلامة الرعاية الصحية بشكل متكرر إلى أن عمليات التسليم (Handoffs) وانتقال الرعاية هي مناطق عالية المخاطر بسبب:</p>
    <ul>
        <li>انقسام الانتباه (Attention is divided)،</li>
        <li>تحول المسؤولية (Responsibility shifts)،</li>
        <li>وتغير شكل المعلومات (منطوقة ← مكتوبة ← مُفترضة). (AHRQ; The Joint Commission)</li>
    </ul>
    <p>في رحلة غرفة العمليات، تحدث التحولات بشكل متكرر وسريع. النظام الآمن يتوقع أن المعلومات ستتدهور ما لم تتم حمايتها بهيكل منظم. (AHRQ)</p>
    <p><span class="english-term">Healthcare safety literature repeatedly identifies handoffs and transitions of care as high-risk zones because: attention is divided, responsibility shifts, and information changes form (spoken → written → assumed). (AHRQ; The Joint Commission). In the OR journey, transitions occur frequently and rapidly. A safe system expects that information will decay unless it is protected by structure. (AHRQ)</span></p>

    <h3>2.1.3 النطاق الخاص بغرفة العمليات في هذا الكتاب (لتجنب التكرار مع التخدير) / OR-side scope in this book</h3>
    <p>يركز هذا الفصل على محتوى غرفة العمليات والمسار الجراحي:</p>
    <ul>
        <li>تحديد الإجراء وسلامة الحجز،</li>
        <li>بوابات التحقق من الموقع/الإجراء،</li>
        <li>تخطيط الأدوات/الغرسات/العينات،</li>
        <li>الجاهزية المعقمة وتخطيط التلوث (نظرة عامة على المسار)،</li>
        <li>عمليات التسليم من غرفة العمليات إلى الإفاقة (OR-to-PACU) ومن الإفاقة إلى الجناح (PACU-to-ward) التي تؤكد على <strong>الأساسيات الجراحية</strong>. (AORN; WHO SSC)</li>
    </ul>
    <p><span class="english-term">This chapter focuses on the OR and surgical pathway content: procedure definition and booking integrity, site/procedure verification gates, instrument/implant/specimen planning, sterile readiness and contamination planning (high-level pathway view), OR-to-PACU and PACU-to-ward handoffs that emphasize <strong>surgical essentials</strong>. (AORN; WHO SSC)</span></p>

    <h2>2.2 خريطة الرحلة (من القرار إلى الخروج) (إطار عملي) / The Journey Map (Decision → Discharge) (A Practical Framework)</h2>

    <h3>2.2.1 المرحلة 1 — قرار الجراحة (بوابة القرار) / Stage 1 — Decision-to-operate (Decision Gate)</h3>
    <p><strong>الغرض:</strong> تحويل النية السريرية إلى خطة قابلة للتنفيذ وغير غامضة. إذا كانت الخطة غير واضحة، فإن كل حاجز سلامة تالٍ سيصبح أضعف. (IHI)</p>
    <p>يجب أن يشمل الحد الأدنى من الوضوح في هذه البوابة:</p>
    <ul>
        <li>الإجراء المقصود بدقة والجهة/الموقع (Laterality/site) عند الاقتضاء، (The Joint Commission – Universal Protocol)</li>
        <li>الغرسات/الأجهزة المتوقعة وما إذا كانت أطقم الإعارة (Loaner sets) مطلوبة، (AORN)</li>
        <li>العينات المتوقعة (ما هي، كم عددها، تعامل خاص)، (AORN; CAP concepts)</li>
        <li>اعتبارات خطر العدوى (مثل تخطيط الحالات الملوثة)، (WHO SSI; CDC SSI)</li>
        <li>القيود المتوقعة بعد العملية والوجهة النهائية للمريض. (AORN)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Convert clinical intent into an executable, unambiguous plan. If the plan is unclear, every downstream safety barrier becomes weaker. (IHI). Minimum clarity at this gate should include: the exact intended procedure and laterality/site when applicable, expected implants/devices and whether loaner sets are required, expected specimens (what, how many, special handling), infection risk considerations, anticipated post-op restrictions and destination.</span></p>

    <h3>2.2.2 المرحلة 2 — الحجز والجدولة (بوابة الحجز) / Stage 2 — Booking and scheduling (Booking Gate)</h3>
    <p><strong>الغرض:</strong> تحويل الخطة إلى سجل حجز موحد وقابل للتدقيق.</p>
    <p>الحجز ليس مجرد عمل إداري—إنه <strong>حاجز سلامة</strong>. (The Joint Commission)</p>
    <p>يجب أن يلتقط الحجز بشكل موثوق:</p>
    <ul>
        <li>المعرفات (Identifiers)،</li>
        <li>اسم الإجراء بلغة موحدة،</li>
        <li>الجهة/الموقع،</li>
        <li>الجراح والخدمة العلاجية،</li>
        <li>متطلبات الغرسات/الأدوات المعارة،</li>
        <li>احتياجات المعدات الخاصة (مثل التصوير، الليزر)،</li>
        <li>احتياجات العزل / علامات مكافحة العدوى،</li>
        <li>العينات المتوقعة وخطة التسمية،</li>
        <li>الوجهة المخطط لها بعد العملية. (AORN; The Joint Commission)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Turn the plan into a standardized, auditable booking record. Booking is not administration—it is a safety barrier. (The Joint Commission). The booking must reliably capture: identifiers, procedure name in standardized language, laterality/site, surgeon and service, implant/loaner requirements, special equipment needs (e.g., imaging, laser), isolation needs / infection control flags, anticipated specimens and labeling plan, planned post-op destination. (AORN; The Joint Commission)</span></p>

    <h3>2.2.3 المرحلة 3 — التحضير ما قبل الجراحة (بوابة الجاهزية) / Stage 3 — Pre-op preparation (Readiness Gate)</h3>
    <p><strong>الغرض:</strong> التأكد من أن المريض والنظام جاهزان <strong>فعلياً اليوم</strong>.</p>
    <p>هذه هي المرحلة التي يتم فيها إما منع الإلغاءات التي يمكن تجنبها والبدايات غير الآمنة—أو السماح بها بصمت. (IHI)</p>
    <p>تشمل الجاهزية:</p>
    <ul>
        <li>اكتمال الموافقة (Consent) وتطابقها مع صياغة الحجز/الإجراء، (The Joint Commission)</li>
        <li>جاهزية تحديد الموقع (Site marking)، (The Joint Commission – Universal Protocol)</li>
        <li>جاهزية الأدوات والإمدادات المعقمة (سلامتها وقابلية تتبعها)، (AORN; AAMI ST79)</li>
        <li>توفر الغرسات وجاهزية تتبعها، (AORN)</li>
        <li>ملكية توقيت الوقاية بالمضادات الحيوية وخطة توثيقها، (WHO SSI; CDC SSI)</li>
        <li>خطوات سير العمل للوقاية من الجلطات (VTE)/تقرحات الضغط/انخفاض الحرارة من جانب غرفة العمليات، (NICE guidance)</li>
        <li>مسار التصعيد عند فشل الجاهزية. (IHI)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Confirm that both patient and system are truly ready <strong>today</strong>. This is the stage where preventable cancellations and unsafe starts are either prevented—or silently allowed. (IHI). Readiness includes: consent completeness and match with booking/procedure wording, site marking readiness, instrument and sterile supply readiness (integrity and traceability), implant availability and traceability readiness, antibiotic prophylaxis timing ownership and documentation plan, VTE/pressure/hypothermia prevention workflow steps from OR side, escalation path for readiness failure.</span></p>

    <h3>2.2.4 المرحلة 4 — تدفق يوم الجراحة (بوابة التدفق) / Stage 4 — Day-of-surgery flow (Flow Gate)</h3>
    <p><strong>الغرض:</strong> البدء بأمان تحت أخطر الظروف: <strong>ضغط الوقت (Time pressure)</strong>.</p>
    <p>ضغط البدء المتأخر أمر يمكن التنبؤ به؛ لذلك يجب أن تزداد قوة الحاجز—لا أن تنقص—عندما يتأخر الجدول الزمني. (IHI)</p>
    <p>تشمل ضوابط بوابة التدفق:</p>
    <ul>
        <li>التحقق قبل المسرح الذي يتم إجراؤه <strong>قبل</strong> دخول المريض إلى الغرفة، (The Joint Commission)</li>
        <li>إجراء المهلة (Time-out) كـ <strong>محادثة جماعية</strong>، وليس كطقس سردي، (WHO SSC; AORN)</li>
        <li>حماية المهام المحمية (العد الجراحي، التسمية) من المقاطعات، (AORN)</li>
        <li>قواعد واضحة لتغييرات الخطة في اللحظة الأخيرة. (The Joint Commission)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Start safely under the most dangerous condition: <strong>time pressure</strong>. Late start pressure is predictable; therefore barrier strength must increase—not decrease—when the schedule slips. (IHI). Flow gate controls include: pre-theatre verification done before the patient enters the room, time-out performed as a <strong>team conversation</strong>, not a recital, protected tasks (counts, labeling) protected from interruptions, clear rules for last-minute plan changes.</span></p>

    <h3>2.2.5 المرحلة 5 — مراحل التنفيذ داخل العملية (بوابة التنفيذ) / Stage 5 — Intra-op phases (Execution Gate)</h3>
    <p><strong>الغرض:</strong> الحفاظ على السلامة أثناء الإجراءات الأعلى خطورة.</p>
    <p>العمل داخل العملية هو تسلسل من المراحل، لكل منها مخاطر يمكن التنبؤ بها:</p>
    <ul>
        <li>الدخول/وضعية المريض (Positioning)،</li>
        <li>تأسيس الحقل المعقم،</li>
        <li>الخطوات الحرجة (الغرسات، خطوات الأوعية الدموية، العينات)،</li>
        <li>الإغلاق والعد الجراحي (Counts)،</li>
        <li>الخروج (Sign-out) واكتمال التوثيق. (AORN; WHO SSC)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Maintain safety during the highest-risk actions. Intra-op work is a sequence of phases, each with predictable hazards: entry/positioning, sterile field establishment, critical steps (implants, vascular steps, specimens), closure and counts, sign-out and documentation completeness. (AORN; WHO SSC)</span></p>

    <h3>2.2.6 المرحلة 6 — النقل من العمليات إلى الإفاقة (بوابة النقل) / Stage 6 — OR to PACU transfer (Transfer Gate)</h3>
    <p><strong>الغرض:</strong> ضمان نجاة الخطة الجراحية من الحركة والضوضاء.</p>
    <p>عمليات التسليم المنظمة تقلل من الحذف (Omission) والغموض. (AHRQ)</p>
    <p>يجب أن ينقل هذا التسليم بشكل موثوق:</p>
    <ul>
        <li>ما تم القيام به (الإجراء الدقيق، الجهة/الموقع)،</li>
        <li>ما يجب مراقبته (نزيف، فحوصات عصبية وعائية، مشاكل الجرح)،</li>
        <li>ما يجب القيام به (مصارف، ضمادات، مضادات حيوية، خطة VTE)،</li>
        <li>ما يجب <strong>ألا</strong> يتم القيام به (القيود/Restrictions)،</li>
        <li>حالة تتبع العينات والغرسات،</li>
        <li>محفزات التصعيد (Escalation triggers) وبمن يجب الاتصال. (AORN; AHRQ)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Ensure the surgical plan survives movement and noise. Structured handoffs reduce omission and ambiguity. (AHRQ). This handoff must reliably communicate: what was done (exact procedure, side/site), what must be watched (bleeding, neurovascular checks, wound issues), what must be done (drains, dressing, antibiotics, VTE plan), what must not be done (restrictions), specimens and implants traceability status, escalation triggers and who to call.</span></p>

    <h3>2.2.7 المرحلة 7 — من الإفاقة إلى الجناح (بوابة الاستمرارية) / Stage 7 — PACU to ward (Continuation Gate)</h3>
    <p><strong>الغرض:</strong> استدامة التعافي الآمن بعد وحدة الإفاقة (PACU).</p>
    <p>يجب أن تكون خطة الجناح قابلة للاستخدام وصريحة:</p>
    <ul>
        <li>المصارف (النوع، الشفط، العتبات/Thresholds، متى يتم الاتصال)،</li>
        <li>خطة الضمادة،</li>
        <li>استمرار المضادات الحيوية إذا لزم الأمر،</li>
        <li>القيود والحركة (Mobilization)،</li>
        <li>اختبارات المتابعة وتوقيتها،</li>
        <li>علامات التحذير ومسار التصعيد. (AHRQ; The Joint Commission)</li>
    </ul>
    <p><span class="english-term"><strong>Purpose:</strong> Sustain safe recovery beyond PACU. A ward plan must be usable and explicit: drains (type, suction, thresholds, when to call), dressing plan, antibiotics continuation if applicable, restrictions and mobilization, follow-up tests and timing, warning signs and escalation pathway. (AHRQ; The Joint Commission)</span></p>

    <h2>2.3 أين يحدث الضرر فعلياً (النقاط الساخنة للفشل حسب المرحلة) / Where Harm Actually Happens (Failure Hotspots by Stage)</h2>

    <div class="concept-box">
        <h3>2.3.1 الغموض المبدئي: عندما يصبح "شبه الواضح" أمراً خطيراً / Upstream ambiguity</h3>
        <p>"شبه الواضح" ليس واضحاً بما يكفي للجراحة. الغموض يتصرف مثل العدوى: إنه ينتشر.</p>
        <p><strong>أمثلة:</strong> اسمين مختلفين لنفس الإجراء (الحجز مقابل ملاحظة العيادة)، "يسار" في مكان و "ثنائي الجانب" في مكان آخر، غرسة مذكورة في العيادة ولكنها مفقودة في الحجز. (The Joint Commission; AORN)</p>
        <p><span class="english-term">“Almost clear” is not clear enough for surgery. Ambiguity behaves like infection: it spreads. Examples: two names for the same procedure (booking vs clinic note), “left” in one place, “bilateral” in another, implant mentioned in clinic but missing in booking.</span></p>

        <h3>2.3.2 التباين: كلمات مختلفة، معاني مختلفة / Variability: different words, different meaning</h3>
        <p>التباين في المصطلحات ينتج عنه عدم تطابق (Mismatch). تستخدم غرفة العمليات الموثوقة أسماء إجراءات ونماذج موحدة. (IHI; The Joint Commission)</p>
        <p><span class="english-term">Variability in terminology produces mismatch. A reliable OR uses standardized procedure names and templates.</span></p>

        <h3>2.3.3 الالتفافات على النظام (Workarounds): السُم الصامت للمسار / Workarounds: the silent pathway toxin</h3>
        <p>الالتفافات تبدو مفيدة في البداية: "سنوضح ذلك في المسرح"، "سنقوم بتسمية العينات لاحقاً"، "سنستعير الأدوات". لكن الالتفافات تنقل المخاطر إلى اللحظات الأكثر ضغطاً وتُطبع الانحراف (Normalize deviance). (IHI)</p>
        <p><span class="english-term">Workarounds feel helpful: “We’ll clarify in theatre,” “We’ll label specimens later,” “We’ll borrow instruments.” But workarounds move risk into the most pressured moments and normalize deviance.</span></p>

        <h3>2.3.4 المقاطعات عند الخطوات الحرجة / Interruptions at critical steps</h3>
        <p>العد الجراحي، تسمية العينات، والتحقق هي إجراءات عرضة للمقاطعات. الموثوقية تتطلب <strong>وقتاً محمياً (Protected time)</strong>، تسلسلاً موحداً، وملكية واضحة. (AORN)</p>
        <p><span class="english-term">Counts, specimen labeling, and verification are vulnerable to interruptions. Reliability requires protected time, standardized sequence, and clear ownership.</span></p>

        <h3>2.3.5 تدهور التسليم: الخطة تصبح مجرد إشاعة / Handoff decay: the plan becomes a rumor</h3>
        <p>بدون هيكلة، تصبح عمليات التسليم غامضة: "مستقر، حالة روتينية." "لا شيء خاص." لكن في الجراحة، كلمة "لا شيء خاص" تقتل التفاصيل: تعليمات المصرف، القيود، التلوث، إلحاح العينة، تتبع الغرسة. (AHRQ; AORN)</p>
        <p><span class="english-term">Without structure, handoffs become vague: “Stable, routine case.” “Nothing special.” But in surgery, “nothing special” kills details: drain instructions, restriction, contamination, specimen urgency, implant traceability.</span></p>
    </div>

    <h2>2.4 تصميم السلامة مرحلة بمرحلة (ما يجب بناؤه في النظام) / Stage-by-Stage Safety Design (What to Build into the System)</h2>

    <h3>2.4.1 ضوابط بوابة القرار (ابدأ بالوضوح) / Decision Gate controls (Start with clarity)</h3>
    <p><strong>2.4.1.1 تعريف الإجراء القياسي قبل الحجز:</strong> استخدم قاموساً موحداً لأسماء الإجراءات أو نموذجاً للخدمة بحيث يتم التعبير عن الخطة بنفس الطريقة عبر ملاحظة العيادة، الموافقة، والحجز. (The Joint Commission; IHI)<br>
    <span class="english-term"><strong>Standard procedure definition before booking:</strong> Use a standard procedure naming dictionary or service-line template so that the plan is expressed the same way across clinic note, consent, and booking.</span></p>
    
    <p><strong>2.4.1.2 استراتيجية صريحة للغرسات (Implants):</strong> إذا كان من المحتمل استخدام غرسة، يجب أن تحدد الخطة: نوع الغرسة والشركة المصنعة، نطاق الحجم المتوقع، احتياجات أطقم الإعارة (Loaner sets)، والجدول الزمني للتأكيد. هذه الخطوة التصميمية الواحدة تمنع الارتجال في اللحظة الأخيرة، وتلغي الحالات، والاستبدال غير الآمن. (AORN; IHI)<br>
    <span class="english-term"><strong>Explicit implant strategy:</strong> If an implant might be used, the plan must specify: implant type and vendor, expected size range, loaner set needs, confirmation timeline. This single design step prevents last-minute improvisation, case cancellations, and unsafe substitution.</span></p>
    
    <p><strong>2.4.1.3 استراتيجية العينات كجزء من خطة العملية:</strong> أخطاء العينات شائعة لأن العينات هي "أشياء صغيرة ذات عواقب كبيرة". يجب أن تحدد الخطة: ما هي العينات المتوقعة، التعامل الخاص (طازج، مجمد، ميكروبيولوجي)، الإلحاح ومتطلبات التسمية. (AORN; AHRQ)<br>
    <span class="english-term"><strong>Specimen strategy as part of the operation plan:</strong> Specimen errors are common because specimens are “small objects with big consequences.” The plan should define: what specimens are expected, special handling (fresh, frozen, microbiology), urgency and labeling requirements.</span></p>

    <h3>2.4.2 ضوابط بوابة الحجز (اجعل الحجز حاجز سلامة) / Booking Gate controls (Make booking a safety barrier)</h3>
    <p><strong>2.4.2.1 الحد الأدنى لمجموعة بيانات الحجز (Minimum Booking Dataset - MBD):</strong> الحجز "آمن" فقط عندما تكون الحقول الحرجة مكتملة: معرفات المريض، اسم الإجراء الموحد، الجهة/الموقع، الجراح، متطلبات الغرسة، متطلبات المعدات، خطة العينات، علامات العزل، والوجهة المتوقعة بعد العملية. (AORN; The Joint Commission)<br>
    <span class="english-term"><strong>Minimum Booking Dataset (MBD):</strong> A booking is “safe” only when critical fields are complete: patient identifiers, standardized procedure name, laterality/site, surgeon/service, implant requirement, equipment requirements, specimen plan, isolation flags, anticipated post-op destination.</span></p>

    <p><strong>2.4.2.2 دور التحقق من الحجز (الملكية):</strong> تعيين دور (مثل منسق الحجز أو ممرضة مسؤولة) مسؤول عن التحقق من الاكتمال وحل الغموض <strong>قبل</strong> يوم الجراحة. (IHI)<br>
    <span class="english-term"><strong>Booking verification role (ownership):</strong> Assign a role (e.g., booking coordinator or charge nurse) responsible for verifying completeness and resolving ambiguity before the day of surgery.</span></p>

    <p><strong>2.4.2.3 قواعد التوقف الإلزامي (Hard-stop) للحقول الحرجة المفقودة:</strong> إذا كانت الجهة/الموقع مطلوبة، فإن فقدانها هو توقف إلزامي. إذا كانت الغرسة مطلوبة، فإن عدم تأكيد الغرسة هو توقف إلزامي. قواعد التوقف الإلزامي ليست بيروقراطية؛ إنها <strong>حماية هندسية للمريض</strong>. (The Joint Commission; IHI)<br>
    <span class="english-term"><strong>Hard-stop rules for missing critical fields:</strong> If laterality/site is required, missing laterality is a hard stop. If implant is required, missing implant confirmation is a hard stop. Hard stops are not bureaucracy; they are engineered patient protection.</span></p>

    <h3>2.4.3 ضوابط بوابة الجاهزية (إيقاف البدايات غير الآمنة) / Readiness Gate controls (Stop unsafe starts)</h3>
    <p><strong>2.4.3.1 قائمة التحقق من الجاهزية المنجزة قبل الدخول للمسرح:</strong> يجب أن تتم قائمة التحقق من الجاهزية في وقت مبكر بما يكفي لتصحيح المشاكل دون "التسرع في الدخول إلى المسرح". (AORN)<br>
    <span class="english-term"><strong>Readiness checklist performed before theatre entry:</strong> The readiness checklist must happen early enough to correct problems without “rushing into theatre.”</span></p>

    <p><strong>2.4.3.2 مسار التصعيد عند فشل الجاهزية:</strong> إذا فشلت الجاهزية، يجب أن يكون هناك تحديد لـ: من يقرر التأخير مقابل المضي قدماً، من يتواصل مع المريض/العائلة، من يحل مشكلة المعدات المفقودة، ومن يوثق القرار. (IHI; The Joint Commission)<br>
    <span class="english-term"><strong>Escalation pathway when readiness fails:</strong> If readiness fails, there must be: who decides delay vs proceed, who communicates to patient/family, who resolves missing equipment, who documents the decision.</span></p>

    <p><strong>2.4.3.3 مراجعة الإلغاءات التي يمكن الوقاية منها كبرنامج سلامة:</strong> يجب تصنيف الإلغاءات: يمكن الوقاية منها مقابل لا يمكن الوقاية منها، وفئة السبب الجذري (غرسات، توثيق، جاهزية المريض، موظفين، معدات). <strong>الإلغاءات التي يمكن الوقاية منها هي إنذارات مبكرة—إشارات سلامة ترتدي ثوباً تشغيلياً</strong>. (IHI)<br>
    <span class="english-term"><strong>Preventable cancellation review as a safety program:</strong> Cancellations should be classified: preventable vs non-preventable, root cause category. Preventable cancellations are early warnings—safety signals in operational clothing.</span></p>

    <h3>2.4.4 ضوابط تدفق يوم الجراحة (حماية لحظة البدء) / Day-of-surgery Flow controls (Protect the start moment)</h3>
    <p><strong>2.4.4.1 التحقق قبل الحركة:</strong> انقل المريض إلى المسرح <strong>فقط</strong> بعد حل عدم التطابق الحرج. يتماشى هذا مع فلسفة الوقاية من الجراحة في الموقع الخاطئ. (The Joint Commission – Universal Protocol)<br>
    <span class="english-term"><strong>Verify before movement:</strong> Move the patient into theatre only after critical mismatches are resolved. This aligns with wrong-site prevention philosophy.</span></p>

    <p><strong>2.4.4.2 جودة المهلة (Time-out quality):</strong> تكون المهلة (Time-out) فعالة عندما: يتوقف الجميع، يشارك الجميع، يتم حل التباينات، ويشكل الفريق نموذجاً عقلياً مشتركاً (Shared mental model). (WHO SSC; AORN)<br>
    <span class="english-term"><strong>Time-out quality (not time-out existence):</strong> A time-out is effective when: everyone stops, everyone participates, mismatches are resolved, and the team forms a shared mental model.</span></p>

    <p><strong>2.4.4.3 "اللحظات الدقيقة عالية المخاطر" المحمية:</strong> حدد لحظات محمية (Protected moments): العد الجراحي، تسمية العينات، التحقق من الغرسات. خلال اللحظات المحمية: لا مكالمات هاتفية، لا أسئلة غير ذات صلة، لا تعدد مهام (Multitasking). (AORN)<br>
    <span class="english-term"><strong>Protected “high-risk micro-moments”:</strong> Define protected moments: counts, specimen labeling, implant verification. During protected moments: no phone calls, no unrelated questions, no multitasking.</span></p>

    <h3>2.4.5 ضوابط التنفيذ داخل العملية (موثوقية المرحلة) / Intra-op Execution controls (Phase reliability)</h3>
    <ul>
        <li><strong>المرحلة 1 — الدخول والوضعية (Positioning):</strong> الوضعية ليست "تجهيزاً"؛ إنها إجراء سلامة سريري. الوقاية من تقرحات الضغط وإصابات الأعصاب تعتمد على: الخطة، نقاط الحماية، التوثيق. (AORN; NPIAP)</li>
        <li><strong>المرحلة 2 — تأسيس الحقل المعقم:</strong> تعتمد موثوقية العقامة على: التحكم في حركة المرور (Traffic control)، الاستجابة الواضحة للاختراقات (Breaks)، وعمليات التنظيف والإعداد المتسقة. (AORN; WHO SSI; CDC SSI)</li>
        <li><strong>المرحلة 3 — الخطوات الحرجة و"الانتباه المعقم" (Sterile attention):</strong> عند الوصول إلى خطوات حرجة (إدخال الغرسة، أخذ العينة، تحرير الملقط الوعائي)، يجب تقليل الضوضاء والمشتتات في الغرفة. هذا تطبيق عملي للعوامل البشرية. (IHI; AHRQ)</li>
        <li><strong>المرحلة 4 — الإغلاق، العد الجراحي (Counts)، والخروج (Sign-out):</strong> العد هو <strong>نظام حاجز</strong>، وليس مجرد مهمة. تتطلب التباينات (Discrepancies) خوارزمية محددة وتوقفاً إلزامياً (Hard stop). (AORN) يجب أن يضمن الـ Sign-out اكتمال توثيق العينات والغرسات قبل مغادرة المريض لغرفة العمليات. (WHO SSC)</li>
    </ul>
    <p><span class="english-term"><strong>Intra-op Execution controls (Phase reliability):</strong><br>
    Phase 1 — Entry and positioning is not “setup”; it is a clinical safety action. (AORN)<br>
    Phase 2 — Sterile field establishment reliability depends on traffic control and clear response to breaks. (WHO SSI)<br>
    Phase 3 — Critical steps and “sterile attention” require reducing noise and distraction. (IHI; AHRQ)<br>
    Phase 4 — Closure, counts, sign-out: Counts are a barrier system. Discrepancies need a defined algorithm and hard stop. Sign-out ensures specimen and implant documentation completeness. (WHO SSC; AORN)</span></p>

    <h3>2.4.6 ضوابط بوابة النقل (OR → PACU) / Transfer Gate controls</h3>
    <p><strong>التسليم الجراحي المنظم (Structured surgical handoff):</strong> عمليات التسليم المنظمة تقلل الحذف وتحسن الاستمرارية. (AHRQ)<br>
    <strong>التوثيق الذي يطابق الكلام:</strong> يجب أن تتطابق الخطة المنطوقة مع الأوامر المكتوبة والملاحظات المنطوقة. عندما يتباعد التوثيق عن الكلام، سيتبع الجناح الخيار الخاطئ. (The Joint Commission)<br>
    <strong>عناصر المراقبة الصريحة ومحفزات التصعيد:</strong> "اتصل إذا لزم الأمر" ليست خطة. الخطة الآمنة تحدد: ما يجب مراقبته، العتبات (Thresholds)، وبمن يجب الاتصال. (AHRQ)<br>
    <span class="english-term"><strong>Transfer Gate controls (OR → PACU):</strong> Structured surgical handoffs reduce omissions. Documentation must match speech. Explicit watch-outs and escalation triggers: “Call if needed” is not a plan. A safe plan defines what to watch, thresholds, and who to call. (AHRQ)</span></p>

    <h3>2.4.7 ضوابط بوابة الاستمرارية (PACU → Ward) / Continuation Gate controls</h3>
    <p><strong>مجموعة بيانات الاستمرارية الجراحية المكررة والمؤكدة:</strong> كرر التفاصيل الجراحية الأساسية لضمان نجاتها من النقل. (AHRQ)<br>
    <strong>اكتمال التتبع قبل انتهاء التسليم:</strong> يجب إكمال تسمية العينات وتتبع الغرسات كـ <strong>شرط انتهاء (Done condition)</strong> قبل أن يغادر المريض مسؤولية المسرح بالكامل. (AORN)<br>
    <span class="english-term"><strong>Continuation Gate controls (PACU → Ward):</strong> Surgical continuity dataset repeated and confirmed. Traceability completion before handoff ends (specimen labeling and implant traceability). (AORN)</span></p>

    <h2>2.5 القصة الحقيقية 2: "الإلغاء الذي كان يمكن تفاديه والذي كاد أن يتحول إلى حدث ضار"</h2>
    <h3>2.5 Real Story 2: "The preventable cancellation that nearly became a harm event"</h3>

    <div class="quote-box">
        <p><strong>2.5.1 المشهد (The scene):</strong><br>
        وصل مريض صائماً، قلقاً، ومستعداً تماماً. أخذ أفراد العائلة إجازة من العمل. رتب الجناح وسيلة النقل. كانت قائمة عمليات غرفة العمليات مزدحمة. عند الفحص النهائي، أدركت الممرضة الدوارة (Circulating nurse) أن طقم الغرسة المطلوب غير متوفر. ذكرت ملاحظة الحجز "احتمال استخدام غرسة"، لكن لم يؤكد أحد أي غرسة. لم يتم التأكيد مع المورد. ولم يتم طلب طقم إعارة (Loaner set) في الوقت المناسب.</p>
        <p>اقترح موظف مبتدئ: "ربما يمكننا المضي قدماً واستخدام ما لدينا."<br>
        أوقفت الممرضة المسؤولة الغرفة. وطرحت سؤالاً بسيطاً: <strong>"هل لدينا نطاق الغرسات الصحيح للانتهاء بأمان إذا بدأنا؟"</strong><br>
        صمت.</p>
        <p>نظر الجراح إلى الأطقم المتاحة وأدرك أن خيارات الأحجام غير مكتملة. لو بدأوا واكتشفوا عدم تطابق أثناء العملية، لكانوا أُجبروا على ارتجال غير آمن أو إطالة الحالة. تم إلغاء الحالة.</p>
        <p><span class="english-term"><strong>The scene:</strong> A patient arrived fasting, anxious, and fully prepared... the circulating nurse realized the required implant set was not available... A junior staff member suggested: “Maybe we can proceed and use what we have.” The charge nurse paused the room. She asked a simple question: “Do we have the right implant range to finish safely if we start?”... The case was cancelled.</span></p>
    </div>

    <div class="concept-box">
        <p><strong>2.5.2 ماذا شعر الفريق (What the team felt):</strong><br>
        شعرت الغرفة بالإحباط—الإلغاء مكلف عاطفياً: خيبة أمل المريض، اضطراب الجدول، انزعاج الموظفين، "إهدار الوقت". هذا الألم العاطفي غالباً ما يدفع الأنظمة إلى <strong>بدايات غير آمنة</strong>.</p>
        
        <p><strong>2.5.3 ما هو الخطر الحقيقي (What the real risk was):</strong><br>
        المضي قدماً كان سيزيد من: وقت العملية، خطر النزيف، خطر العدوى (تعرض أطول)، احتمالية استبدال الغرسة، الضغط لقبول معدات "شبه مناسبة". (AORN; WHO SSI; CDC SSI)</p>

        <p><strong>2.5.4 السبب الجذري - حقيقة النظام (The root cause - the system truth):</strong><br>
        السبب الجذري لم يكن ممرضة أو جراح. كان <strong>المسار (The pathway)</strong>: لم يتم تحديد تخطيط الغرسة عند القرار/الحجز (AORN)، فشل نموذج الحجز في فرض حقول الغرسة (IHI)، لا توجد بوابة جاهزية لتأكيد أطقم الإعارة قبل 24-72 ساعة (IHI)، وشجع ضغط الإنتاج على الالتفافات (IHI).</p>

        <p><strong>2.5.5 الحل - السلامة بالتصميم (The fix - Safety-by-design):</strong><br>
        أدخل المستشفى: حقل حجز إلزامي ("هل الغرسة مطلوبة؟ نعم/لا؛ النوع؛ نطاق الحجم؛ المورد؛ تاريخ التأكيد") (AORN)، نقطة تحقق جاهزية قبل 48 ساعة من الجراحة (IHI)، وقاعدة تصعيد: "لا يوجد تأكيد للغرسة = لا توجد قائمة نهائية." (IHI). <strong>انخفضت الإلغاءات—والأهم من ذلك، انخفضت البدايات غير الآمنة.</strong></p>
        
        <p><span class="english-term"><strong>The fix (Safety-by-design):</strong> The hospital introduced: a mandatory booking field: “Implant required? Y/N; type; sizing range; vendor; confirmation date,” (AORN) a readiness checkpoint 48 hours before surgery, (IHI) an escalation rule: “No implant confirmation = no final list.” (IHI) Cancellations decreased—and, more importantly, unsafe starts decreased.</span></p>
    </div>

    <h2>2.6 القصة الحقيقية 3: "ارتباك العينات—عندما يتحول ملصق صغير إلى حدث ضخم"</h2>
    <h3>2.6 Real Story 3: "Specimen confusion—when a tiny label becomes a massive event"</h3>

    <div class="quote-box">
        <p><strong>2.6.1 المشهد (The scene):</strong><br>
        تم أخذ عينتين خلال حالة. كان الحقل الجراحي مزدحماً. طلب الجراح "العينة أ" ثم "العينة ب"، ولكل منهما أهمية سريرية مختلفة. وضعت الممرضة المعقمة (Scrub nurse) الحاويات على الطاولة. أعدت الممرضة الدوارة الملصقات. في تلك اللحظة، رن هاتف العمليات: وصل المريض التالي مبكراً، وسأل المنسق عن وقت التبديل (Turnover).<br>
        مقاطعة صغيرة. تسرع صغير.<br>
        تم وضع الملصقات—وهي تبدو صحيحة ظاهرياً.<br>
        لاحقاً، اتصل قسم علم الأمراض: هوية العينة لا تتطابق مع الصورة السريرية.<br>
        واجه المريض فحوصات متكررة وتأخراً في العلاج.</p>
        <p><span class="english-term"><strong>The scene:</strong> Two specimens were taken... The scrub nurse placed containers on the table. The circulating nurse prepared labels. At that moment, the OR phone rang... A small interruption. A small rush. The labels were placed—seemingly correct. Later, pathology called: the specimen identity did not match the clinical picture.</span></p>
    </div>

    <div class="concept-box">
        <p><strong>2.6.2 لماذا تحدث أخطاء العينات بسهولة جداً؟ (Why specimen errors happen so easily):</strong><br>
        التعامل مع العينات ضعيف بسبب: المهام تحدث عند الحدود بين الحقل المعقم والتوثيق (AORN)، الغرفة صاخبة ومقاطَعة (AHRQ)، يمكن أن يتم وضع الملصقات بتسرع، والعواقب متأخرة، لذا يبدو الخطر أقل إلحاحاً.</p>
        
        <p><strong>2.6.3 تصميم الحاجز لسلامة العينات (Barrier design for specimen safety):</strong><br>
        تتعامل غرفة العمليات الآمنة مع تسمية العينات كـ "خطوة حرجة": <strong>وقت محمي</strong> (AORN)، <strong>تأكيد القراءة العكسية (Read-back)</strong> لهوية المريض + وصف العينة (AHRQ)، تسمية فورية في نقطة الرعاية (لا توجد كلمة "لاحقاً") (AORN)، والخروج (Sign-out) يشمل "تم التحقق من العينات وإرسالها". (WHO SSC)</p>
        <p><span class="english-term"><strong>Barrier design for specimen safety:</strong> A safe OR treats specimen labeling like a “critical step”: protected time, (AORN) read-back confirmation of patient ID + specimen description, (AHRQ) immediate labeling at point-of-care (no “later”), (AORN) sign-out includes “specimens verified and sent.” (WHO SSC)</span></p>
    </div>

    <h2>2.7 عمليات التسليم الخاصة بغرفة العمليات (بدون تكرار التخدير): ما يجب قوله دائماً</h2>
    <h3>2.7 OR-side Handoffs (Without duplicating anesthesia): What must always be said</h3>

    <h3>2.7.1 لماذا تفشل عمليات التسليم الجراحية تحت الضغط / Why surgical handoffs fail under pressure</h3>
    <p>معظم عمليات التسليم الجراحية تفشل لأنها: غير مهيكلة، تنظر للوراء ("ماذا حدث") بدلاً من النظر للأمام ("ما يجب أن يحدث تالياً") (AHRQ)، طويلة جداً بحيث لا يستطيع المستمع الاحتفاظ بها، وتفتقر إلى "عناصر المراقبة" ومحفزات التصعيد.</p>

    <h3>2.7.2 الحد الأدنى لمجموعة بيانات التسليم الجراحي (OR → PACU) / The OR Surgical Handoff Minimum Dataset</h3>
    <p>مجموعة البيانات المهيكلة تقلل الحذف (Omission). (AHRQ)</p>
    <div class="concept-box">
        <ul>
            <li><strong>وضوح الإجراء (Procedure clarity):</strong> الإجراء الدقيق الذي تم إجراؤه (اسم قياسي)، تأكيد الجهة/الموقع. (The Joint Commission; WHO SSC)</li>
            <li><strong>تفاصيل الجرح والعدوى (Wound and infection):</strong> فئة الجرح (إذا استُخدمت)، نوع الضمادة والجهة، حدث التلوث وخطوات التخفيف. (WHO SSI; CDC SSI; AORN)</li>
            <li><strong>المصارف والأنابيب والأجهزة (Drains, tubes, and devices):</strong> نوع المصرف/موقعه/إعداد الشفط، التوقعات للمخرجات وعتبات العمل، تعليمات القسطرة/Wound vac/الثغرة (Stoma). (AORN)</li>
            <li><strong>العينات (Specimens):</strong> العينات المأخوذة وتأكيد الملصقات، طلب علم الأمراض العاجل إن وجد. (AORN; WHO SSC)</li>
            <li><strong>الغرسات (Implants):</strong> نوع الغرسة واكتمال التتبع، القيود أو الاحتياطات المتعلقة بالغرسة. (AORN)</li>
            <li><strong>القيود وإعادة التأهيل (Restrictions and rehabilitation):</strong> قيود الأطراف، قيود الوضعية، خطة الحركة. (AORN)</li>
            <li><strong>عناصر المراقبة ومحفزات التصعيد (Watch-outs and escalation triggers):</strong> ما يجب مراقبته (النزيف، الحالة العصبية الوعائية)، عتبات الاتصال بالجراح/فريق العمليات. (AHRQ)</li>
        </ul>
        <p><span class="english-term"><strong>The OR Surgical Handoff Minimum Dataset (OR → PACU):</strong> Procedure clarity, Wound and infection-relevant details, Drains, tubes, and devices, Specimens, Implants, Restrictions and rehabilitation, Watch-outs and escalation triggers. (AHRQ; The Joint Commission; WHO SSC; AORN)</span></p>
    </div>

    <h3>2.7.3 مجموعة بيانات الاستمرارية (PACU → Ward) / PACU → Ward continuity dataset</h3>
    <p>يكرر تسليم الجناح ويؤكد على: خطة المصرف، خطة الضمادة والجرح، استمرار المضادات الحيوية (إذا لزم الأمر)، القيود، اختبارات المتابعة، محفزات التصعيد. (AHRQ)</p>

    <h2>2.8 أدوات عملية (مُلحقات جاهزة للاستخدام بملكية غرفة العمليات) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>2.8.1 الأداة 1 — خريطة بوابات رحلة المريض في غرفة العمليات (صفحة واحدة):</strong> (القرار ← الحجز ← الجاهزية ← الدخول للمسرح ← Time-out ← التنفيذ ← Sign-out ← النقل ← استمرارية الجناح). لكل خطوة: المالك، الحد الأدنى للبيانات، شروط التوقف الإلزامي، مسار التصعيد، وطريقة التدقيق. (IHI)</li>
            <br>
            <li><strong>2.8.2 الأداة 2 — قائمة تحقق بوابة الجاهزية (قبل المسرح):</strong> الموافقة تتطابق مع صياغة الحجز (The Joint Commission)، تحديد الجهة/الموقع (The Joint Commission)، الغرسات مؤكدة (AORN)، الأدوات المعقمة متاحة وتم تأكيد سلامتها (AORN; AAMI)، تأكيد خطة المضادات الحيوية (WHO SSI)، تأكيد خطة العينات (AORN)، علامات العزل واضحة (WHO SSI).</li>
            <br>
            <li><strong>2.8.3 الأداة 3 — نص التسليم الجراحي (OR → PACU):</strong> (نص مهيكل يقلل الحذف). (AHRQ)<br>
            "الإجراء والجهة: ___."<br>
            "الجرح/الضمادة/التلوث: ___."<br>
            "المصارف/الأجهزة والعتبات: ___."<br>
            "العينات: ___؛ تم تأكيد الملصقات: نعم/لا."<br>
            "الغرسات: ___؛ تم التتبع: نعم/لا."<br>
            "القيود: ___."<br>
            "عناصر المراقبة ومحفزات الاتصال: ___."</li>
            <br>
            <li><strong>2.8.4 الأداة 4 — سجل النقاط الساخنة للفشل (أداة تعلم للجنة العمليات):</strong> لكل حادثة قريبة/إلغاء: مرحلة الرحلة (IHI)، نوع الفشل، الحاجز الذي فشل، الإجراء التصحيحي والمالك، تاريخ الإغلاق وخطة إعادة التدقيق. (IHI)</li>
        </ul>
        <p><span class="english-term"><strong>Practical Tools:</strong> Tool 1 — OR Patient Journey Gate Map. Tool 2 — Readiness Gate Checklist. Tool 3 — Surgical Handoff Script (OR → PACU). Tool 4 — Failure Hotspot Log.</span></p>
    </div>

    <h2>2.9 القياس (كيف تعرف أن الرحلة تتحسن) / Measurement (How to know the journey is improving)</h2>

    <h3>2.9.1 لماذا تهم المؤشرات الاستباقية / Why leading indicators matter</h3>
    <p>مقاييس الضرر الناتجة (SSI، الأحداث التي لا ينبغي أن تحدث/Never events) ضرورية ولكنها متأخرة. تعكس المؤشرات الاستباقية (Leading indicators) قوة الحاجز وتسمح بالتصحيح المبكر. (IHI; AHRQ)</p>

    <h3>2.9.2 مؤشرات الأداء الرئيسية المقترحة للرحلة (حد أدنى ولكن بقيمة عالية) / Suggested journey KPIs</h3>
    <ul>
        <li>معدل الإلغاءات التي يمكن الوقاية منها (وأهم الأسباب). (IHI)</li>
        <li>معدل حقول الحجز الحرجة المفقودة. (The Joint Commission; IHI)</li>
        <li>معدل اجتياز بوابة الجاهزية بدون استثناءات. (IHI)</li>
        <li>نقاط جودة الـ Time-out المُلاحظة (وليس مجرد الإنجاز). (WHO SSC; AORN)</li>
        <li>معدل الحوادث القريبة (Near-miss) لتسمية العينات. (AORN; AHRQ)</li>
        <li>معدل اكتمال تتبع الغرسات. (AORN)</li>
        <li>درجة اكتمال التسليم (OR→PACU) (البيانات الجراحية). (AHRQ)</li>
        <li>العودة إلى غرفة العمليات خلال 24-48 ساعة (كإشارات). (IHI)</li>
    </ul>

    <h3>2.9.3 إغلاق الحلقة: تحويل القياس إلى سلامة / Closing the loop</h3>
    <p>يجب أن تؤدي لوحة القيادة (Dashboard) إلى تحفيز الإجراءات: ردود فعل خلال وقت محدد، تغييرات في النظام، إعادة تدقيق. (IHI)</p>

    <h2>2.10 خارطة طريق التنفيذ (كيف تبني المسار في مستشفاك) / Implementation Roadmap</h2>
    <ol>
        <li><strong>ارسم خريطة سير العمل الحقيقي، وليس سير عمل السياسة:</strong> راقب يوماً كاملاً: التأخيرات، المقاطعات، الالتفافات. الخرائط الحقيقية هي الخرائط الصادقة. (IHI)</li>
        <li><strong>حدد أهم ثلاث نقاط ساخنة للفشل:</strong> عادة ما تكون: غموض الحجز، فشل جاهزية الغرسة/الأداة، تدهور التسليم. (AHRQ; AORN)</li>
        <li><strong>ابنِ بوابات مع الملاك والتوقفات الإلزامية:</strong> كل بوابة تتطلب: ملكية، مجموعة بيانات، توقفات إلزامية، وتصعيد. (IHI; The Joint Commission)</li>
        <li><strong>جرب، حسّن، انشر:</strong> جرب على مسار خدمة واحد (Pilot)، حسّن الأدوات، ثم انشر. (IHI)</li>
        <li><strong>دقق في الجودة، وليس فقط في وجود الأوراق:</strong> دقق في جودة المهلة، اكتمال التسليم، واكتمال التتبع—وليس فقط في النماذج المكتملة. (WHO SSC; IHI)</li>
    </ol>
    <p><span class="english-term"><strong>Implementation Roadmap:</strong> Map the real workflow, not the policy workflow. Identify top three failure hotspots. Build gates with owners and hard stops. Pilot, refine, scale. Audit quality, not paperwork presence. (IHI; The Joint Commission; WHO SSC)</span></p>

    <h2>2.11 الخرافات الشائعة التي تضر بالرحلة / Common Myths That Damage the Journey</h2>
    <div class="alert-box">
        <ul>
            <li><strong>"الرحلة هي وظيفة الجميع، لذلك فهي لا تخص أحداً."</strong><br>
            <strong>الحقيقة:</strong> المسؤولية الموزعة تتطلب <strong>ملكية صريحة (Explicit ownership)</strong> عند كل بوابة. (IHI)</li>
            
            <li><strong>"إذا كان التوثيق موجوداً في مكان ما، فنحن آمنون."</strong><br>
            <strong>الحقيقة:</strong> تتطلب السلامة معلومات <strong>مهيكلة وقابلة للاستخدام</strong> في نقطة القرار. (The Joint Commission)</li>
            
            <li><strong>"عمليات التسليم (Handoffs) هي مجرد حس سليم (Common sense)."</strong><br>
            <strong>الحقيقة:</strong> الحس السليم يفشل تحت الضغط؛ الهيكلة <strong>تمنع الحذف</strong>. (AHRQ)</li>
        </ul>
        <p><span class="english-term"><strong>Myths vs Reality:</strong> “The journey is everyone’s job...” Reality: distributed responsibility requires explicit ownership. “If documentation exists somewhere, we are safe.” Reality: safety requires usable structured information. “Handoffs are common sense.” Reality: common sense fails under pressure; structure prevents omission. (IHI; The Joint Commission; AHRQ)</span></p>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>العملية الآمنة ليست مجرد شق جراحي آمن؛ إنها <strong>رحلة آمنة (Safe journey)</strong>. (AHRQ)</li>
            <li>يتركز الضرر عند التحولات (Transitions): الحجز، الجاهزية، التحقق، النقل، واستمرارية الجناح. (AHRQ)</li>
            <li>ابنِ <strong>بوابات (Gates)</strong> مع الملاك، مجموعات البيانات، التوقفات الإلزامية (Hard stops)، ومسارات التصعيد. (IHI; The Joint Commission)</li>
            <li>يجب أن تكون عمليات التسليم مهيكلة، تنظر للمستقبل، وتركز على الأساسيات الجراحية. (AHRQ; AORN)</li>
            <li>قس قوة الحاجز وموثوقية المسار باستخدام المؤشرات الاستباقية (Leading indicators)، وليس النتائج وحدها. (IHI)</li>
        </ul>
        <p><span class="english-term">A safe case is not only a safe incision; it is a <strong>safe journey</strong>. Harm concentrates at transitions. Build <strong>gates</strong> with owners, datasets, hard stops, and escalation routes. Handoffs must be structured, forward-looking, and focused on surgical essentials. Measure barrier strength with leading indicators.</span></p>
    </div>

    <div class="concept-box">
        <h2>مُلحقات عملية لنهاية الفصل / Chapter-End Practical Inserts</h2>
        <p><span class="english-term">(Ready for your template)</span></p>
        
        <p><strong>المُلحق 1 — بطاقة بوابة رحلة غرفة العمليات / Insert 1 — OR Journey Gate Card</strong><br>
        ضع قائمة بالمراحل السبع مع المالك + شروط التوقف الإلزامي. (IHI)</p>
        
        <p><strong>المُلحق 2 — قائمة تحقق بوابة الجاهزية / Insert 2 — Readiness Gate Checklist</strong><br>
        (انظر 2.8.2) (AORN; The Joint Commission)</p>

        <p><strong>المُلحق 3 — نص التسليم الجراحي (OR → PACU) / Insert 3 — Surgical Handoff Script</strong><br>
        (انظر 2.8.3) (AHRQ)</p>

        <p><strong>المُلحق 4 — سجل النقاط الساخنة للفشل / Insert 4 — Failure Hotspot Log</strong><br>
        (انظر 2.8.4) (IHI)</p>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>The Joint Commission. National Patient Safety Goals (Hospital Program).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety: Handoffs and Transitions of Care Resources.</li>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Measurement Resources (PDSA, reliability, run charts).</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79: Comprehensive Guide to Steam Sterilization and Sterility Assurance in Health Care Facilities.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  12: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 12 — CSSD Interface: From Decontamination to Point-of-Use</h1>
    <div class="subtitle">الفصل الثاني عشر — واجهة قسم التعقيم المركزي (CSSD): من التطهير إلى نقطة الاستخدام<br>
    <span style="font-size: 18px;">(Instrument Lifecycle • Packaging Integrity • Indicators • Traceability Essentials)<br>
    (دورة حياة الأداة • سلامة التغليف • المؤشرات • أساسيات التتبع)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>وصف <strong>دورة حياة الأداة (Instrument lifecycle)</strong> من التعامل في نقطة الاستخدام عبر التطهير، والفحص، والتغليف، والتعقيم، والتخزين، والفتح في نقطة الاستخدام—دون كسر السلسلة. (AAMI ST79; AORN)<br>
            <span class="english-term">Describe the <strong>instrument lifecycle</strong> from point-of-use handling through decontamination, inspection, packaging, sterilization, storage, and point-of-use opening—without breaking the chain. (AAMI ST79; AORN)</span></li>
            
            <li>شرح لماذا تُعد واجهة OR–CSSD <strong>نظاماً لسلامة المرضى (Patient safety system)</strong>، وليست نظام إمداد، ولماذا تظهر الإخفاقات كعدوى، وتأخيرات، والتفافات غير آمنة. (AAMI ST79; WHO SSI; IHI)<br>
            <span class="english-term">Explain why the OR–CSSD interface is a <strong>patient safety system</strong>, not a supply system, and why failures show up as infections, delays, and unsafe workarounds. (AAMI ST79; WHO SSI; IHI)</span></li>
            
            <li>تطبيق قواعد عملية لـ <strong>سلامة التغليف (Packaging integrity)</strong> (الحزم الرطبة، التمزقات، المرشحات، الأختام، العقامة المرتبطة بالحدث) واتخاذ قرار سريع متى يجب رفض طقم الأدوات. (AAMI ST79; AORN)<br>
            <span class="english-term">Apply practical rules for <strong>packaging integrity</strong> (wet packs, tears, filters, seals, event-related sterility) and decide quickly when to reject a set. (AAMI ST79; AORN)</span></li>
            
            <li>فهم <strong>مؤشرات التعقيم (Sterilization indicators)</strong> (الميكانيكية، الكيميائية، البيولوجية) وما تعنيه في نقطة الاستخدام—دون التظاهر بأنها تحل محل التحكم السليم في العملية. (AAMI ST79)<br>
            <span class="english-term">Understand <strong>sterilization indicators</strong> (mechanical, chemical, biological) and what they mean at the point of use—without pretending they replace proper process control. (AAMI ST79)</span></li>
            
            <li>بناء "الحد الأدنى الموثوق" لـ <strong>أساسيات التتبع (Traceability essentials)</strong> للأطقم والغرسات: من قام بمعالجة ماذا، أي حمولة (Load)، أي مريض، وكيفية الاستجابة للاستدعاءات (Recalls). (AAMI ST79; AORN; FDA UDI concepts)<br>
            <span class="english-term">Build the “minimum reliable” <strong>traceability essentials</strong> for sets and implants: who processed what, which load, which patient, and how to respond to recalls. (AAMI ST79; AORN; FDA UDI concepts)</span></li>
            
            <li>تنفيذ مجموعة أدوات واجهة جاهزة لغرفة العمليات: بوابات الجاهزية، مسار عدم المطابقة (Nonconformance)، قواعد التصعيد، وعمليات التدقيق التي تؤدي إلى إصلاحات في النظام. (IHI; AHRQ)<br>
            <span class="english-term">Implement an OR-ready interface toolkit: readiness gates, nonconformance pathway, escalation rules, and audits that lead to system fixes. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الصينية التي بدت معقمة—حتى اللحظة الحاسمة"</strong><br>
        <span class="english-term">A true-to-life case: “The tray that looked sterile—until the moment it mattered” (Real Scientific Story)</span>
    </div>

    <p>بعد سنوات كافية، تتوقف عن الخوف فقط من الحوادث الدراماتيكية في غرفة العمليات. تبدأ في الخوف من الأشياء الهادئة الصغيرة التي تكسر حواجز السلامة دون أن يلاحظها أحد.</p>
    <p><span class="english-term">After enough years, you stop fearing only the dramatic emergencies in the OR. You start fearing the quiet, tiny things that break safety barriers unnoticed.</span></p>

    <p>كانت حالة عظام كبيرة. تم تجهيز الغرفة. تم فتح الصواني (Trays). تغير لون المؤشرات الكيميائية بامتياز. بدا التغليف سليماً. تم إعداد الطاولة الخلفية (Back table) بأكملها، وكان المريض نائماً.</p>
    <p><span class="english-term">It was a major orthopedic case. The room was set. The trays were opened. The chemical indicators had turned perfectly. The packaging appeared intact. The entire back table was set up, and the patient was asleep.</span></p>

    <p>عندما التقطت الممرضة المعقمة حاوية صلبة (Rigid container) لنقلها، لاحظت شيئاً لم تلتقطه عند الفتح الأولي: <strong>تمزق صغير، يكاد يكون غير مرئي في مرشح (Filter) الحاوية الصلبة.</strong> ربما حدث أثناء النقل، أو أثناء التخزين، أو أثناء الاندفاع لإعداد الغرفة.</p>
    <p><span class="english-term">As the scrub nurse picked up a rigid container to move it, she noticed something she hadn't caught on the initial opening: <strong>a tiny, almost invisible tear in the rigid container's filter.</strong> It might have happened during transport, or storage, or during the rush to set up the room.</span></p>

    <div class="alert-box">
        <p>شعرت الممرضة بثقل اللحظة. لقد كانت أمام خيارين:<br>
        1. تتجاهل الأمر. بعد كل شيء، كانت المؤشرات الداخلية اجتازت الاختبار. الأدوات <em>تبدو</em> نظيفة. إيقاف الحالة الآن سيؤدي إلى تأخير كبير، وغضب الجراح، وإحباط القيادة.<br>
        2. تتحدث بصوت عالٍ، وتُعلن تلوث الطاولة بأكملها (لأن الحاوية وُضعت عليها)، وتطلب صواني جديدة. (AORN)</p>
        <p><span class="english-term">The nurse felt the weight of the moment. She had two choices:<br>
        1. Ignore it. After all, the internal indicators passed. The instruments <em>looked</em> clean. Stopping the case now would mean a massive delay, an angry surgeon, and frustrated leadership.<br>
        2. Speak up, declare the entire table contaminated (since the container was placed on it), and request new trays. (AORN)</span></p>
    </div>

    <p>اختارت الخيار الثاني. كانت الدقائق العشر التالية مشحونة بالتوتر. كان الجراح مستاءً. لكنها صمدت، مدعومة بسياسة المستشفى: <strong>"التمزق يعني التلوث. لا استثناءات."</strong></p>
    <p><span class="english-term">She chose the second. The next ten minutes were tense. The surgeon was unhappy. But she held firm, backed by hospital policy: <strong>"A tear means contamination. No exceptions."</strong></span></p>

    <div class="success-box">
        <p>هذا هو معنى <strong>سلامة التغليف (Packaging integrity)</strong>. التعقيم ليس حالة؛ إنه <strong>سلسلة من العهدة (Chain of custody)</strong>. إذا انكسرت أي حلقة في تلك السلسلة—حتى لو كانت ثقباً صغيراً في مرشح—فقد ضاع ضمان التعقيم بأكمله. يجب أن يُصمم النظام ليجعل هذا الرفض آمناً وقياسياً، وليس معركة شخصية. (AAMI ST79; AHRQ)</p>
        <p><span class="english-term">This is what <strong>packaging integrity</strong> means. Sterility is not a state; it is a <strong>chain of custody</strong>. If any link in that chain breaks—even a pinhole in a filter—the entire assurance is gone. The system must be designed to make that rejection safe and standard, not a personal battle. (AAMI ST79; AHRQ)</span></p>
    </div>

    <h2>12.1 دورة حياة الأداة: سلسلة السلامة المتصلة</h2>
    <h3>12.1 The Instrument Lifecycle: The Connected Safety Chain</h3>

    <h3>12.1.1 الفجوة الخطيرة (لماذا تحدث الإخفاقات)</h3>
    <p>تتعامل العديد من المستشفيات مع معالجة الأدوات كإجراء "خلف الكواليس". هذه فجوة خطيرة. دورة حياة الأداة هي رحلة مستمرة، وإذا فشلت خطوة واحدة، فإن نقطة الاستخدام (المريض) تتحمل المخاطرة. (IHI)</p>
    <p><span class="english-term"><strong>12.1.1 The dangerous disconnect (why failures happen)</strong><br>Many hospitals treat instrument processing as a “back-of-house” transaction. This is a dangerous disconnect. The instrument lifecycle is a continuous journey, and if one step fails, the point-of-use (the patient) absorbs the risk. (IHI)</span></p>

    <h3>12.1.2 خطوات دورة الحياة / The Lifecycle Steps</h3>
    <div class="concept-box">
        <ul>
            <li><strong>1. التعامل في نقطة الاستخدام (Point-of-use handling):</strong> مسؤولية غرفة العمليات. إبقاء الأدوات رطبة (ليس بمحلول ملحي/Saline)، ومسح الدم. لا يمكنك تعقيم الدم الجاف. (AORN)</li>
            <li><strong>2. التطهير (Decontamination):</strong> حيث يتم التنظيف اليدوي والآلي. هذه هي <em>الخطوة الأكثر أهمية</em>. لا يمكن تعقيم أداة غير نظيفة.</li>
            <li><strong>3. الفحص والتجميع (Inspection and Assembly):</strong> التحقق من النظافة والوظيفة تحت التكبير (Magnification).</li>
            <li><strong>4. التغليف (Packaging):</strong> استخدام الأغلفة (Wraps)، أو الأكياس (Pouches)، أو الحاويات الصلبة (Rigid containers) التي تسمح باختراق المُعقم وتحافظ على العقامة. (AAMI ST79)</li>
            <li><strong>5. التعقيم (Sterilization):</strong> تطبيق العملية (بخار، حرارة منخفضة، إلخ).</li>
            <li><strong>6. التخزين والنقل (Storage and Transport):</strong> الحفاظ على سلامة التغليف بعيداً عن الغبار، والرطوبة، والسحق (Crushing).</li>
            <li><strong>7. الفتح في نقطة الاستخدام (Point-of-use opening):</strong> فحص غرفة العمليات النهائي للمؤشرات وسلامة التغليف قبل الاستخدام. (AORN)</li>
        </ul>
        <p><span class="english-term">1. Point-of-use handling: OR responsibility. Keeping instruments moist (not saline), wiping gross soil. You cannot sterilize dried blood. (AORN) 2. Decontamination: <em>The most critical step.</em> 3. Inspection and Assembly. 4. Packaging. (AAMI ST79) 5. Sterilization. 6. Storage and Transport. 7. Point-of-use opening. (AORN)</span></p>
    </div>

    <h2>12.2 سلامة التغليف: الحارس الصامت</h2>
    <h3>12.2 Packaging Integrity: The Silent Guardian</h3>

    <h3>12.2.1 العقامة المرتبطة بالحدث (وليس بالوقت)</h3>
    <p>تاريخ انتهاء الصلاحية (Expiration date) على الصينية أقل أهمية من <strong>الحدث (Event)</strong> الذي تعرضت له. إذا تمزق الغلاف، أو تبلل، أو سُحق، فقد فُقدت العقامة، بغض النظر عن التاريخ. (AORN; AAMI ST79)</p>
    <p><span class="english-term"><strong>12.2.1 Event-related sterility (not time-related)</strong><br>An expiration date on a tray is less important than the <strong>event</strong> it experienced. If a wrap is torn, wet, or crushed, sterility is lost, regardless of the date. (AORN; AAMI ST79)</span></p>

    <h3>12.2.2 الحزم الرطبة (Wet Packs) = أطقم ملوثة</h3>
    <p>الرطوبة داخل الصينية بعد التعقيم (حزمة رطبة) تعني أن البكتيريا يمكن أن تنتقل عبر التغليف وتلوث الأدوات (خاصية الـ Wicking).<br>
    <strong>القاعدة:</strong> إذا فتحت صينية ووجدت رطوبة—حتى قطرات قليلة—ارفض الطقم بأكمله. (AAMI ST79)</p>
    <p><span class="english-term"><strong>12.2.2 Wet Packs = Contaminated Sets</strong><br>Moisture inside a tray after sterilization (a wet pack) means bacteria can wick through the packaging and contaminate the instruments.<br><strong>Rule:</strong> If you open a tray and find moisture—even a few drops—reject the entire set. (AAMI ST79)</span></p>

    <h3>12.2.3 الثقوب، التمزقات، والأختام المكسورة / Punctures, tears, and broken seals</h3>
    <p>قبل وضع أي صينية على الحقل المعقم، يجب على الممرضة الدوارة فحص:</p>
    <ul>
        <li>الزوايا بحثاً عن الثقوب من الأدوات الثقيلة.</li>
        <li>المرشحات (Filters) في الحاويات الصلبة بحثاً عن تمزقات صغيرة.</li>
        <li>الأقفال المانعة للعبث (Tamper-evident locks) للتأكد من أنها سليمة.</li>
    </ul>
    <p>أي عيب يعني أن الصينية غير معقمة. (AORN)</p>
    <p><span class="english-term"><strong>12.2.3 Punctures, tears, and broken seals</strong><br>Before presenting any tray to the sterile field, the circulating nurse must inspect: corners for punctures from heavy instruments, filters in rigid containers for micro-tears, tamper-evident locks to ensure they are intact. Any defect means the tray is unsterile. (AORN)</span></p>

    <h2>12.3 مؤشرات التعقيم: ما تعنيه (وما لا تعنيه)</h2>
    <h3>12.3 Sterilization Indicators: What They Mean (And Don't Mean)</h3>

    <h3>12.3.1 المؤشرات لا "تُثبت" أن الأداة نظيفة</h3>
    <p>المؤشرات (Indicators) تُثبت أن معلمات (Parameters) معينة (مثل الحرارة، والوقت، والبخار) قد تم الوصول إليها داخل المُعقم. إنها <strong>لا</strong> تُثبت أن الأداة تم تنظيفها من الدم أولاً. (AAMI ST79)</p>
    <p><span class="english-term"><strong>12.3.1 Indicators do not "prove" the instrument is clean</strong><br>Indicators prove that certain parameters (like heat, time, and steam) were met inside the sterilizer. They <strong>do not</strong> prove the instrument was scrubbed free of blood first. (AAMI ST79)</span></p>

    <h3>12.3.2 أنواع المؤشرات في نقطة الاستخدام / Indicator types</h3>
    <div class="alert-box">
        <ul>
            <li><strong>المؤشرات الخارجية (External):</strong> (مثل الشريط اللاصق). تُظهر فقط أن العنصر <em>خضع</em> لعملية التعقيم. لا تثبت تعقيم المحتوى الداخلي.</li>
            <li><strong>المؤشرات الداخلية (Internal):</strong> (الفئة 5 أو 6). موضوعة داخل الصينية، في المنطقة الأصعب لاختراق البخار. تُظهر أن المعلمات الحرجة قد وصلت إلى الداخل.</li>
            <li><strong>المؤشرات البيولوجية (Biological):</strong> أشرطة جراثيم (Spore strips). ضرورية لأحمال الغرسات (Implants). تُثبت القتل الفعلي للميكروبات. (AAMI ST79)</li>
        </ul>
        <p><span class="english-term">External indicators (e.g., tape) only show the item <em>went through</em> the process. Internal indicators (Class 5 or 6) show critical parameters reached the inside. Biological indicators (spore strips) prove actual microbial kill and are required for implant loads. (AAMI ST79)</span></p>
    </div>

    <h3>12.3.3 قاعدة الفحص المزدوج للغرسات / The double-check rule for implants</h3>
    <p>لا ينبغي استخدام أي غرسة (Implant) قبل التحقق من نتائج المؤشر البيولوجي (BI)، ما لم تكن حالة طوارئ موثقة (والتي تتطلب سياسة وإذن قيادة). (AORN; AAMI ST79)</p>
    <p><span class="english-term"><strong>12.3.3 The double-check rule for implants</strong><br>No implant should be used before the biological indicator (BI) result is verified, unless it is a documented emergency (which requires policy and leadership sign-off). (AORN; AAMI ST79)</span></p>

    <h2>12.4 أساسيات التتبع: الاستعداد للأسوأ</h2>
    <h3>12.4 Traceability Essentials: Preparing for the Worst</h3>

    <h3>12.4.1 لماذا يهم التتبع (كابوس الاستدعاء) / Why traceability matters</h3>
    <p>تخيل اكتشاف أن معقماً (Sterilizer) كان معطلاً لمدة أسبوع. هل يمكنك تحديد <strong>أي مرضى</strong> تلقوا أدوات من تلك الآلة؟ إذا لم تستطع، فإن فشل الآلة البسيط يصبح أزمة للمستشفى بأكمله. التتبع الدقيق يعزل الخطر. (AHRQ; AAMI ST79)</p>
    <p><span class="english-term"><strong>12.4.1 Why traceability matters (The recall nightmare)</strong><br>Imagine discovering a sterilizer was malfunctioning for a week. Can you identify <strong>which patients</strong> received instruments from that specific machine? If you cannot, a simple machine failure becomes a hospital-wide crisis. Precise traceability isolates the risk. (AHRQ; AAMI ST79)</span></p>

    <h3>12.4.2 الحد الأدنى للبيانات (The Minimum Dataset)</h3>
    <p>يجب أن يُسجل في ملف المريض لكل صينية/طقم مستخدم:</p>
    <ul>
        <li>معرف الطقم (Set ID/Name)،</li>
        <li>رقم المُعقم (Sterilizer ID)،</li>
        <li>رقم الحمولة (Load number)،</li>
        <li>تاريخ التعقيم (Date of sterilization). (AORN)</li>
    </ul>

    <h3>12.4.3 المعرف الفريد للجهاز (UDI) للغرسات / UDI for implants</h3>
    <p>الغرسات تتطلب تتبعاً أكثر صرامة. يجب تسجيل المعرف الفريد للجهاز (UDI) أو رقم الدفعة/اللوت (Lot/Batch number) لكل غرسة تُترك في المريض، للرجوع إليها في حالة استدعاءات الشركة المصنعة. (FDA UDI concepts; AORN)</p>

    <h2>12.5 واجهة OR–CSSD: الانتقال من إلقاء اللوم إلى الشراكة</h2>
    <h3>12.5 The OR–CSSD Interface: Moving from Blame to Partnership</h3>

    <h3>12.5.1 كسر صوامع التفكير (Breaking the silos)</h3>
    <p>عندما تصل صينية متسخة أو مفقودة، غالباً ما تلوم غرفة العمليات قسم التعقيم. عندما تصل أداة جافة ومغطاة بالدم إلى CSSD، يلوم قسم التعقيم غرفة العمليات. هذا الخلل الوظيفي يضر بالمرضى. (IHI)</p>
    <p><span class="english-term"><strong>12.5.1 Breaking the silos</strong><br>When a tray arrives dirty or missing, the OR blames CSSD. When a dry, blood-caked instrument arrives in CSSD, they blame the OR. This dysfunction hurts patients. (IHI)</span></p>

    <h3>12.5.2 مسار عدم المطابقة (Nonconformance pathway)</h3>
    <p>يجب ألا يتم التعامل مع الأخطاء (مثل أداة مكسورة، شعر في الصينية، حزمة رطبة) بالصراخ عبر الهاتف. يجب أن تؤدي إلى "تقرير عدم مطابقة" (Nonconformance report) مهيكل:</p>
    <ul>
        <li>ما الذي تم العثور عليه؟</li>
        <li>متى؟</li>
        <li>ما هي الصينية/الحمولة؟</li>
        <li>الإجراء الفوري المتخذ (مثال: سحب الصينية). (AHRQ; AAMI ST79)</li>
    </ul>

    <div class="concept-box">
        <h3>12.5.3 2: "الشعر الذي غيّر النظام"</h3>
        <p>استمرت غرفة العمليات في العثور على شعيرات دقيقة داخل الصواني المعقمة. كانوا غاضبين وأعادوا الصواني. كان CSSD محبطاً.</p>
        <p>بدلاً من الجدال، قاموا بمراجعة مشتركة (Joint review). اكتشفوا أن الشعيرات لم تكن من الموظفين؛ كانت أليافاً من المناشف المستخدمة في غرفة العمليات والتي تم غسلها وإعادتها للاستخدام في التغليف.</p>
        <p>تم حل المشكلة بتغيير نوع المناشف. الشراكة تحل المشاكل التي لا يستطيع اللوم حلها. (IHI)</p>
        <p><span class="english-term">Instead of arguing, they did a joint review. They discovered the hairs were not from staff; they were fibers from reusable towels... Partnership solves problems that blame cannot. (IHI)</span></p>
    </div>

    <h2>12.6 أدوات عملية لواجهة غرفة العمليات وقسم التعقيم</h2>
    <h3>12.6 Practical Tools for the OR–CSSD Interface</h3>

    <div class="success-box">
        <ul>
            <li><strong>12.6.1 الأداة 1 — قائمة الفحص عند نقطة الاستخدام (Point-of-Use Check):</strong><br>
            قبل فتح أي صينية في الغرفة:<br>
            [ ] الغلاف الخارجي سليم (لا تمزقات، لا رطوبة).<br>
            [ ] الأقفال/الأختام (Locks/Seals) سليمة.<br>
            [ ] المؤشر الخارجي تغيّر.<br>
            (إذا فشل أي منها: ارفض الطقم). (AORN)</li>
            <br>
            <li><strong>12.6.2 الأداة 2 — فحص المؤشر الداخلي (Internal Indicator Check):</strong><br>
            بمجرد الفتح، يجب على الممرضة المعقمة قراءة المؤشر الداخلي <strong>بصوت عالٍ</strong> وتأكيد اجتيازه <em>قبل</em> وضع أي أداة على الطاولة المعقمة. (WHO SSC; AORN)</li>
            <br>
            <li><strong>12.6.3 الأداة 3 — بطاقة الإبلاغ عن عيب في صينية (Tray Defect Card):</strong><br>
            نموذج بسيط يعلق على الصينية المرفوضة: نوع العيب (رطوبة، أداة مفقودة، مادة عضوية، مؤشر فاشل) + تفاصيل الحمولة (Load details) لإرجاعها إلى CSSD للتحقيق. (AAMI ST79)</li>
        </ul>
    </div>

    <h2>12.7 القياس (كيف تعرف أن الواجهة موثوقة)</h2>
    <h3>12.7 Measurement (How You Know the Interface is Reliable)</h3>

    <h3>12.7.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>معدل الحزم الرطبة / عيوب التغليف المكتشفة في غرفة العمليات. (AAMI ST79)</li>
        <li>عدد الإبلاغات عن "مادة عضوية متبقية" (Retained bioburden) في الصواني المفتوحة. (AORN)</li>
        <li>النسبة المئوية للامتثال لالتقاط المعرف الفريد للجهاز (UDI) للغرسات. (FDA UDI concepts)</li>
    </ul>

    <h3>12.7.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>حالات العدوى (SSI) المرتبطة بصواني أو أحمال معينة. (CDC SSI)</li>
        <li>إلغاءات الحالات أو التأخيرات الشديدة بسبب مشاكل توافر/تعقيم الأدوات. (IHI)</li>
    </ul>

    <h2>12.8 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>12.8 The Writer's Reflection</h3>

    <h3>12.8.1 التعقيم ليس سحراً؛ إنه انضباط</h3>
    <p>لا يوجد جهاز "أوتوكلاف" (Autoclave) في العالم يمكنه إصلاح ممارسة سيئة في غرفة العمليات، ولا يمكن لأي مهارة جراحية أن تعوض عن أداة ملوثة. السلامة هي جهد مستمر ومترابط. (AHRQ)</p>
    <p><span class="english-term"><strong>12.8.1 Sterilization is not magic; it is discipline</strong><br>No autoclave in the world can fix bad OR practice, and no surgical skill can compensate for a contaminated instrument. Safety is a continuous, linked effort. (AHRQ)</span></p>

    <h3>12.8.2 "إذا كنت في شك، فتخلص منه"</h3>
    <p>هذه هي القاعدة الذهبية لسلامة التغليف والمؤشرات. لا تُبرر التمزق، ولا تبرر مؤشراً غير واضح. في اللحظة التي تبرر فيها، فإنك تتبنى المخاطرة. (AORN)</p>
    <p><span class="english-term"><strong>12.8.2 "If in doubt, throw it out"</strong><br>This is the golden rule of packaging integrity and indicators. Do not rationalize a tear, do not rationalize an unclear indicator. The moment you rationalize, you adopt the risk. (AORN)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>دورة حياة الأداة هي <strong>سلسلة سلامة</strong>: التعامل في نقطة الاستخدام، التنظيف، الفحص، التغليف، التعقيم، التخزين، والتحقق في نقطة الاستخدام يجب أن تكون جميعها موثوقة. (AAMI ST79; AORN)<br>
            <span class="english-term">The instrument lifecycle is a safety chain: point-of-use handling, cleaning, inspection, packaging, sterilization, storage, and point-of-use verification must all be reliable.</span></li>
            
            <li>سلامة التغليف هي حاجز صارم: تمزقات، رطوبة، مرشحات تالفة، أختام مكسورة ← <strong>ارفض واستبدل</strong>. (AAMI ST79)<br>
            <span class="english-term">Packaging integrity is a hard barrier: tears, dampness, damaged filters, broken seals → reject and replace.</span></li>
            
            <li>المؤشرات تدعم مراقبة العملية لكنها <strong>لا تتجاوز</strong> إخفاقات السلامة المادية (التمزقات) أو الشكوك في العقامة. (AAMI ST79)<br>
            <span class="english-term">Indicators support process monitoring but do not override physical integrity failures or uncertain sterility.</span></li>
            
            <li>أساسيات التتبع (Traceability) تحمي المرضى أثناء الاستدعاءات والتحقيقات—التقط الحد الأدنى من البيانات بشكل موثوق ومبكر. (AAMI ST79; AORN; FDA UDI concepts)<br>
            <span class="english-term">Traceability essentials protect patients during recalls and investigations—capture the minimum dataset reliably and early.</span></li>
            
            <li>تحتاج واجهة OR–CSSD إلى تواصل مغلق الحلقة، مسارات موحدة لعدم المطابقة، وقواعد تصعيد—<strong>وليس إلقاء اللوم.</strong> (AHRQ; IHI)<br>
            <span class="english-term">The OR–CSSD interface needs closed-loop communication, standard nonconformance pathways, escalation rules, and learning loops—not blame.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79: Comprehensive guide to steam sterilization and sterility assurance in health care facilities.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (sterile integrity, handling, transport, OR practices, interface principles).</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (communication, handoffs, safety culture, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, measurement, learning loops, production pressure).</li>
            <li>U.S. Food and Drug Administration (FDA). UDI (Unique Device Identification) program concepts supporting implant/device traceability.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  32: `<!-- Download Button -->
    

    <div class="part-title">PART VI — Learning, Investigation, and Continuous Improvement</div>
    <div class="part-title">الجزء السادس — التعلم، التحقيق، والتحسين المستمر</div>
    
    <h1>CHAPTER 32 — Human Factors in the OR: Interruptions, Cognitive Load, Hierarchy, and Speaking Up</h1>
    <div class="subtitle">الفصل الثاني والثلاثون — العوامل البشرية في غرفة العمليات: المقاطعات، العبء المعرفي، التسلسل الهرمي، والتحدث بصوت عالٍ<br>
    <span style="font-size: 18px;">(Interruptions • Cognitive Load • Hierarchy • Speaking Up)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>التعرف على كيف تؤدي <strong>المقاطعات وتعدد المهام (Interruptions and multitasking)</strong> إلى تدهور حواجز السلامة في غرفة العمليات (العد الجراحي، العينات، العقامة، الغرسات، جودة قائمة التحقق). (AHRQ; AORN concepts)<br>
            <span class="english-term">Recognize how <strong>interruptions and multitasking</strong> degrade safety barriers in the OR (counts, specimens, sterility, implants, checklist quality). (AHRQ; AORN concepts)</span></li>
            
            <li>فهم <strong>العبء المعرفي (Cognitive load)</strong>—كيف يشكل الانتباه، والذاكرة العاملة، والتعب، والضوضاء احتمالية الخطأ—وكيفية تقليل هذا العبء من خلال التصميم وليس المحاضرات. (AHRQ; IHI)<br>
            <span class="english-term">Understand <strong>cognitive load</strong>—how attention, working memory, fatigue, and noise shape error probability—and how to reduce load through design, not lectures. (AHRQ; IHI)</span></li>
            
            <li>تحديد كيف يمنع <strong>التسلسل الهرمي (Hierarchy - تدرج السلطة)</strong> الحقيقة ويؤخر التوقفات الإلزامية، وتطبيق تدابير مضادة عملية تنجح في الفرق الحقيقية. (AHRQ; TeamSTEPPS concepts)<br>
            <span class="english-term">Identify how <strong>hierarchy (authority gradient)</strong> blocks truth and delays hard stops, and apply practical countermeasures that work in real teams. (AHRQ; TeamSTEPPS concepts)</span></li>
            
            <li>تنفيذ <strong>"التحدث بصوت عالٍ" (Speaking up)</strong> ككفاءة مدربة في غرفة العمليات بعبارات قياسية، ولحظات محمية، وسلوكيات قيادية تكافئ التصعيد المبكر. (AHRQ; IHI)<br>
            <span class="english-term">Implement <strong>speaking up</strong> as a trained OR competency with standard phrases, protected moments, and leadership behaviors that reward early escalation. (AHRQ; IHI)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "عندما لا تكفي المعرفة وحدها"</strong><br>
        <span class="english-term">A true-to-life case (Real Scientific Story)</span>
    </div>

    <p>إذا سألت معظم فرق غرفة العمليات عن سبب حدوث الأخطاء، فسوف يشيرون إلى المعرفة: "شخص ما لم يكن يعرف." ولكن إذا جلست بهدوء وراقبت غرفة العمليات الحقيقية ليوم كامل، فستبدأ في رؤية حقيقة مختلفة:</p>
    <p><span class="english-term">If you ask most OR teams why mistakes happen, they will point to knowledge: “Someone didn’t know.” But if you sit quietly and watch the real OR for a full day, you begin to see a different truth:</span></p>

    <div class="alert-box">
        <p><strong>معظم الإخفاقات ليست جهلاً. إنها حدود بشرية تحت ضغط النظام.</strong></p>
        <p><span class="english-term"><strong>Most failures are not ignorance. They are human limits under system pressure.</strong></span></p>
    </div>

    <p>أتذكر حالة كان فيها كل شيء "سريرياً" صحيحاً، ومع ذلك انحرفت الغرفة نحو الخطأ. كان السبب بسيطاً: الغرفة كانت غارقة في المقاطعات. مكالمات هاتفية. مساعد (Runner) يسأل عن المخزون. جراح يسأل عن الحالة التالية. شخص يفتح الباب بشكل متكرر. متدرب يطرح أسئلة في الوقت الخطأ. كانت الممرضة الدوارة (Circulating nurse) تحاول القيام بخمسة أشياء في وقت واحد—لم يكن أي منها خاطئاً، ولكن جميعها كانت تتنافس على نفس الدماغ.</p>
    <p><span class="english-term">I remember a case where everything “clinical” was correct, yet the room drifted toward error. The reason was simple: the room was flooded with interruptions. Phone calls. A runner asking about stock. A surgeon asking for the next case. Someone opening the door repeatedly. A trainee asking questions at the wrong time. The circulating nurse was trying to do five things at once—none of them wrong, but all of them competing for the same brain.</span></p>

    <p>ثم تم أخذ عينة. تم تجهيز الملصق. تم الإمساك بالحاوية. مرت لحظة صمت، وقالت ممرضة خبيرة:<br>
    <strong>"توقف. شيء واحد في كل مرة. اسم المريض، الموقع، نوع العينة."</strong></p>
    <p><span class="english-term">Then a specimen was taken. The label was prepared. The container was held. A moment of silence passed, and a senior nurse said:<br>
    <strong>“Stop. One thing at a time. Patient name, site, specimen type.”</strong></span></p>

    <p>لم يكن الأمر دراماتيكياً. ولكنه منع خطأً في التسمية كان من شأنه أن يؤذي المريض—بهدوء، لاحقاً، في قسم علم الأمراض، عندما تكون غرفة العمليات قد انتقلت بالفعل إلى حالتها التالية. (AORN; AHRQ)</p>
    <p><span class="english-term">It was not dramatic. But it prevented a labeling error that would have harmed the patient—quietly, later, in pathology, when the OR would already be on its next case. (AORN; AHRQ)</span></p>

    <div class="success-box">
        <p>عزز ذلك اليوم ما تُعلّمك إياه 25 عاماً في غرف العمليات إذا سمحت لها بذلك: <strong>غرفة العمليات ليست غير آمنة لأن الناس مهملون. إنها تصبح غير آمنة عندما نُصمم عملاً يتطلب انتباهاً خارقاً (Superhuman attention).</strong> (AHRQ; IHI)</p>
        <p><span class="english-term">That day reinforced what 25 years in theatres teaches you if you allow it to teach you: <strong>The OR is not unsafe because people are careless. It becomes unsafe when we design work that demands superhuman attention.</strong> (AHRQ; IHI)</span></p>
        <p>العوامل البشرية (Human factors) هي علم احترام الواقع: يتشتت البشر، ويتعبون، ويتجمدون تحت وطأة التسلسل الهرمي، ويخطئون في القراءة عند التحميل الزائد. وظيفتك كقائد لغرفة العمليات ليست أن تطلب من البشر أن يصبحوا مثاليين—بل هي بناء نظام غرفة عمليات <strong>يجعل السلوك الآمن هو السلوك الأسهل</strong>. (AHRQ; IHI)</p>
        <p><span class="english-term">Human factors is the science of respecting reality: humans get distracted, humans get tired, humans freeze under hierarchy, and humans misread when overloaded. Your job as an OR leader is not to ask humans to become perfect—it is to build an OR system that <strong>makes safe behavior the easiest behavior</strong>. (AHRQ; IHI)</span></p>
    </div>

    <h2>32.1 المقاطعات: الخطر الخفي في غرفة العمليات / Interruptions: The OR’s Invisible Hazard</h2>

    <h3>32.1.1 لماذا تُعد المقاطعات خطيرة في غرفة العمليات</h3>
    <p>لا تقوم المقاطعات بمجرد "إزعاج" الموظفين. إنها تكسر استمرارية المهام التي تتطلب تسلسلاً وتحققاً—وخاصة:</p>
    <p><span class="english-term"><strong>32.1.1 Why interruptions are dangerous in the OR</strong><br>Interruptions do not just “annoy” staff. They break the continuity of tasks that require sequencing and verification—especially:</span></p>
    <ul>
        <li>جودة الـ Time-out، (WHO SSC concepts)</li>
        <li>العد الجراحي (Counts) وحل التباينات، (AORN concepts)</li>
        <li>تسمية العينات وسلسلة العهدة، (AORN concepts)</li>
        <li>التحقق من الغرسات والتقاط UDI، (AORN concepts)</li>
        <li>التعرف على اختراق العقامة وإجراءات الاستعادة. (AORN concepts)</li>
    </ul>
    <p>عندما تحدث مقاطعة، يجب على الدماغ أن "يُوقف" (Park) المهمة الحالية، ويتعامل مع المهمة الجديدة، ثم يعود. خطوة <strong>العودة</strong> هي حيث تختبئ الأخطاء: نسيان خطوة تأكيد، افتراض أن شيئاً قد أُنجز، أو الاستئناف من النقطة الخطأ. (AHRQ)</p>
    <p><span class="english-term">When an interruption occurs, the brain must “park” the current task, handle the new task, then return. The return step is where errors hide: forgetting a confirmation step, assuming something was done, or resuming at the wrong point. (AHRQ)</span></p>

    <h3>32.1.2 "عناقيد المقاطعة" التي تتنبأ بالمتاعب / The “interruption clusters” that predict trouble</h3>
    <p>في غرف العمليات الحقيقية، تتجمع المقاطعات في أوقات يمكن التنبؤ بها:</p>
    <ul>
        <li>إعداد الغرفة والفتح،</li>
        <li>أثناء لحظات العينة (Specimen moments)،</li>
        <li>أثناء فتح الغرسات (Implant opening)،</li>
        <li>أثناء مراحل العد (Count phases)،</li>
        <li>أثناء ضغط التبديل وقلب الغرفة. (AORN concepts; AHRQ)</li>
    </ul>
    <p>لا يمكنك القضاء على جميع المقاطعات. <strong>لكن يمكنك حماية اللحظات التي تخلق فيها المقاطعة أعلى ضرر.</strong></p>

    <h3>32.1.3 مفهوم عملي: "لحظات قمرة القيادة المعقمة" / A practical concept: “sterile cockpit moments”</h3>
    <p>مُستعار من مجال الطيران، تحتاج غرفة العمليات إلى <strong>لحظات محمية (Protected moments)</strong> حيث تتوقف المحادثات والمهام غير الضرورية. أمثلة:</p>
    <p><span class="english-term"><strong>32.1.3 A practical concept: “sterile cockpit moments”</strong><br>Borrowed conceptually from aviation, the OR needs protected moments where non-essential conversation and tasks stop. Examples:</span></p>
    <ul>
        <li>المهلة (Time-out)،</li>
        <li>تسمية العينات،</li>
        <li>مراحل العد،</li>
        <li>وقفة التحقق من الغرسة،</li>
        <li>لحظات خطر الحريق أثناء استخدام الطاقة بالقرب من مصادر الأكسجين. (WHO SSC concepts; AORN; ASA/APSF fire concepts)</li>
    </ul>
    <p>الهدف ليس الصمت من أجل الراحة—بل <strong>الصمت من أجل الدقة (Accuracy)</strong>.</p>

    <h3>32.1.4 المقاطعة التي يجب أن تتعامل معها كخلل في النظام</h3>
    <p>إذا حدثت نفس المقاطعة يومياً—عناصر مفقودة، حجوزات غير واضحة، مكالمات هاتفية متكررة لنفس المعلومات—فإن المقاطعة ليست "جزءاً من العمل". إنها <strong>دليل على عملية مبكرة مكسورة (Broken upstream process).</strong> (IHI)</p>

    <h2>32.2 العبء المعرفي: عندما ينفد مساحة الدماغ / Cognitive Load: When the Brain Runs Out of Space</h2>

    <h3>32.2.1 العبء المعرفي ليس ذكاءً؛ إنه سعة / Cognitive load is not intelligence; it is capacity</h3>
    <p>حتى الموظفون ذوو الخبرة يمكن أن يرتكبوا أخطاء بسيطة عندما تكون الذاكرة العاملة (Working memory) محملة بشكل زائد. غرفة العمليات هي بيئة مثالية لزيادة العبء على الذاكرة العاملة لأنها تتطلب:</p>
    <p><span class="english-term"><strong>32.2.1 Cognitive load is not intelligence; it is capacity</strong><br>Even experienced staff can make simple mistakes when working memory is overloaded. The OR is a perfect environment to overload working memory because it demands:</span></p>
    <ul>
        <li>المراقبة المتوازية (Parallel monitoring)،</li>
        <li>التبديل السريع بين المهام (Rapid switching)،</li>
        <li>التنسيق عبر عدة مهنيين،</li>
        <li>عواقب وخيمة للزلات الصغيرة. (AHRQ)</li>
    </ul>

    <h3>32.2.2 أعراض العبء المعرفي الزائد التي يمكنك رؤيتها / Cognitive overload symptoms you can see</h3>
    <ul>
        <li>تخطي الخطوات "لأننا دائماً نفعلها"،</li>
        <li>الارتباك الهادئ (توقف الناس عن طرح الأسئلة)،</li>
        <li>ارتفاع التهيج والتواصل الحاد،</li>
        <li>التحقق المتكرر دون ثقة،</li>
        <li>لحظات "أين كنا؟" أثناء العد/التسمية،</li>
        <li>الاعتماد على ذاكرة شخص واحد للحصول على تفاصيل حرجة. (AHRQ)</li>
    </ul>

    <h3>32.2.3 ما الذي يزيد العبء المعرفي في المسارح الجراحي / What increases cognitive load in theatres</h3>
    <ul>
        <li>الضوضاء وفتح الأبواب المستمر، (AORN concepts)</li>
        <li>عدم وضوح ملكية الأدوار (Unclear role ownership)، (AHRQ)</li>
        <li>الإمدادات المفقودة التي تتطلب البحث، (IHI)</li>
        <li>التخطيط السيئ (المشي، الوصول، الاستدارة، الفوضى)، (IHI)</li>
        <li>ضغط الوقت والبدايات المتأخرة، (IHI; AHRQ)</li>
        <li>التعب وتفويت فترات الراحة، (AHRQ)</li>
        <li>عدم الألفة مع الفريق (توليفات جديدة). (AHRQ)</li>
    </ul>

    <div class="alert-box">
        <h3>32.2.4 المبدأ الأهم / The most important principle</h3>
        <p>عندما يرتفع العبء المعرفي، يجب أن تتحول غرفة العمليات من <strong>"الذاكرة"</strong> إلى <strong>"الهيكل" (Structure)</strong>. الهيكل يعني القوائم المرجعية (Checklists)، النصوص (Scripts)، المواقع القياسية (Standard locations)، والتوقفات المتعمدة (Deliberate pauses)—بحيث لا تعتمد السلامة على الانتباه وحده. (IHI; AHRQ)</p>
        <p><span class="english-term"><strong>32.2.4 The most important principle</strong><br>When cognitive load rises, the OR must shift from “memory” to “structure.” Structure means checklists, scripts, standard locations, and deliberate pauses—so safety does not depend on attention alone. (IHI; AHRQ)</span></p>
    </div>

    <h2>32.3 التسلسل الهرمي: تدرج السلطة الذي يُسكت الخطر / Hierarchy: The Authority Gradient That Silences Risk</h2>

    <h3>32.3.1 ماذا يفعل التسلسل الهرمي في حياة غرفة العمليات الحقيقية / What hierarchy does in real OR life</h3>
    <p>التسلسل الهرمي (Hierarchy) ليس سيئاً دائماً؛ يمكنه تنسيق العمل. الخطر يكمن في <strong>تدرج السلطة (Authority gradient)</strong> الذي يجعل الموظفين المبتدئين خائفين من التحدث عندما يكتشفون خطراً. (AHRQ)</p>
    <p>في الوقاية من الموقع الخاطئ، وخطر الحريق، وتباين العد، وتسمية العينات، تكون <strong>تكلفة الصمت مرتفعة</strong>. يجب أن تجعل غرفة العمليات من الآمن اجتماعياً أن تقول: "توقف."</p>
    <p><span class="english-term"><strong>32.3.1 What hierarchy does in real OR life</strong><br>Hierarchy is not always bad; it can coordinate action. The danger is the authority gradient that makes junior staff afraid to speak when they detect risk. (AHRQ) In wrong-site prevention, in fire risk, in counts discrepancies, and in specimen labeling, the cost of silence is high. The OR must make it socially safe to say: “Stop.”</span></p>

    <h3>32.3.2 لحظات التسلسل الهرمي الأكثر أهمية / The hierarchy moments that matter most</h3>
    <ul>
        <li>تباين في הـ Time-out ("أعتقد أن الجهة مختلفة")، (WHO SSC concepts)</li>
        <li>اختراق العقامة ("كُمي لمس سطحاً غير معقم")، (AORN concepts)</li>
        <li>تباين في العد ("لا يمكننا الإغلاق بعد")، (AORN concepts)</li>
        <li>عدم تطابق الغرسة ("هذه ليست الغرسة المخطط لها")، (AORN concepts)</li>
        <li>خطر الحريق والأكسجين/الاشتعال ("أكسجين مفتوح بالقرب من الكي"). (ASA/APSF fire concepts)</li>
    </ul>
    <p>هذه هي اللحظات التي يمكن فيها <strong>لصوت مبتدئ أن ينقذ المريض</strong>—وهي اللحظات التي يسد فيها التسلسل الهرمي هذا الصوت غالباً.</p>

    <h3>32.3.3 "مشكلة الإذن" / The “permission problem”</h3>
    <p>معظم الموظفين لا يفتقرون إلى المعرفة. <strong>إنهم يفتقرون إلى الإذن (Permission)</strong>. والإذن ليس سياسة—إنه <strong>سلوك قيادي متكرر</strong>. (AHRQ)</p>

    <h2>32.4 التحدث بصوت عالٍ: كفاءة مُدربة، وليست سمة شخصية / Speaking Up: A Trained Competency, Not a Personality Trait</h2>

    <h3>32.4.1 يجب أن يكون التحدث سهلاً / Speaking up must be made easy</h3>
    <p>تحتاج غرفة العمليات إلى عبارات قياسية (Standard phrases) تقلل من الصراع العاطفي. عندما تكون العبارة قياسية، فإنها لا تبدو كمواجهة شخصية بل كـ <strong>واجب مهني</strong>. (AHRQ; TeamSTEPPS concepts)</p>
    <p><span class="english-term"><strong>32.4.1 Speaking up must be made easy</strong><br>The OR needs standard phrases that reduce emotional conflict. When a phrase is standardized, it feels less like personal confrontation and more like professional duty. (AHRQ; TeamSTEPPS concepts)</span></p>

    <h3>32.4.2 المستويات الثلاثة للتحدث بصوت عالٍ (عملية) / The three speaking-up levels (practical)</h3>
    <ul>
        <li><strong>القلق (Concern):</strong> "أنا قلق بشأن..."</li>
        <li><strong>مشكلة سلامة (Safety issue):</strong> "هذه مشكلة سلامة لأن..."</li>
        <li><strong>توقف إلزامي (Hard stop):</strong> "توقف—من غير الآمن المضي قدماً حتى نحل..." (AHRQ; TeamSTEPPS concepts)</li>
    </ul>
    <p>درّب الموظفين على التصعيد عبر هذه المستويات إذا لم يتم الاستماع إليهم.</p>

    <h3>32.4.3 عبارات "التوقف الإلزامي" القياسية (أمثلة) / Standard “hard stop” phrases</h3>
    <ul>
        <li>"توقف إلزامي—تباين في العد." (AORN concepts)</li>
        <li>"توقف إلزامي—تسمية العينة لم يتم التحقق منها." (AORN concepts)</li>
        <li>"توقف إلزامي—اختراق العقامة؛ الحقل مخترق." (AORN concepts)</li>
        <li>"توقف إلزامي—التحقق من الغرسة غير مكتمل." (AORN concepts)</li>
        <li>"توقف—خطر حريق." (ASA/APSF fire concepts)</li>
    </ul>
    <p>الكلمات تهم لأنه في الأزمات، <strong>يحتاج الدماغ إلى نص (Script)</strong>.</p>
    <p><span class="english-term">The words matter because in crisis, the brain needs a script.</span></p>

    <h3>32.4.4 التأكيد المغلق الحلقة يحمي التحدث / Closed-loop confirmation protects speaking up</h3>
    <p>يفشل التحدث عندما تسمع الغرفة ولكنها لا تُقر. يتطلب التواصل المغلق (Closed-loop):</p>
    <p><span class="english-term">Speaking up fails when the room hears but does not acknowledge. Closed-loop requires:</span></p>
    <ol>
        <li>نداء (callout)،</li>
        <li>إقرار (acknowledgement)،</li>
        <li>تأكيد الإجراء المتخذ (confirmation of the action taken). (AHRQ; TeamSTEPPS concepts)</li>
    </ol>

    <h2>32.5 تصميم غرفة العمليات لتقليل الخطأ البشري (لا تدرب حول التصميم السيئ) / Designing the OR to Reduce Human Error</h2>

    <h3>32.5.1 المواقع القياسية: إزالة البحث، إزالة الأخطاء / Standard locations: remove searching, remove mistakes</h3>
    <p>عندما يكون للملصقات، وحاويات العينات، وأوراق العد، وأدوات UDI/ملصقات الغرسات <strong>"منازل/Homes" ثابتة</strong>، تنخفض الأخطاء والتأخيرات. البحث ليس عملية محايدة؛ إنه يستهلك الانتباه ويدعو للحذف (Omission). (IHI)</p>

    <h3>32.5.2 الإدارة المرئية: اجعل الحالة الصحيحة واضحة / Visual management</h3>
    <ul>
        <li>مؤشر "اكتمل التنظيف" (Clean complete). (AORN concepts)</li>
        <li>علامات المعدات "لا تستخدم" (Do not use) مرئية ومحترمة. (ECRI concepts)</li>
        <li>وضوح انتهاء الصلاحية وإشارات التدوير FEFO. (AORN; AAMI ST79 concepts)</li>
        <li>علامات "قمرة القيادة المعقمة" أثناء الـ Time-out/العد/العينات (سياسة محلية). (WHO SSC concepts)</li>
    </ul>

    <h3>32.5.3 قلل الخيارات حيثما تخلق الخيارات أخطاء / Reduce choices where choices create errors</h3>
    <p>قم بتوحيد:</p>
    <ul>
        <li>خطوات عملية العد. (AORN concepts)</li>
        <li>سير عمل تسمية العينات. (AORN concepts)</li>
        <li>وقفة التحقق من الغرسة. (AORN concepts)</li>
        <li>تسمية الأدوية في الحقل. (ISMP concepts)</li>
        <li>تسلسل التبديل (لا فتح معقم قبل اكتمال التنظيف). (AORN concepts)</li>
    </ul>
    <p>وجود طرق "اختيارية" كثيرة جداً للقيام بمهام حرجة يخلق تبايناً—والتباين يخلق أخطاء. (IHI)</p>
    <p><span class="english-term">Too many “optional” ways to do critical tasks creates variability—variability creates errors. (IHI)</span></p>

    <h3>32.5.4 بناء "وظائف إجبارية" (Forcing functions) حيث يكون الضرر غير مقبول</h3>
    <p>أمثلة:</p>
    <ul>
        <li>لا يمكن للعينة المغادرة دون تحقق شخصين. (AORN concepts)</li>
        <li>لا يمكن تجاوز تباين العد للإغلاق دون إكمال الخوارزمية. (AORN concepts)</li>
        <li>لا يمكن فتح الغرسة دون وقفة تحقق. (AORN concepts)</li>
        <li>لا يمكن للمريض دخول الغرفة حتى يتم اجتياز بوابة الجاهزية. (IHI)</li>
    </ul>
    <p>وظائف الإجبار <strong>تحمي المريض عندما يكون البشر متعبين</strong>.</p>
    <p><span class="english-term">Forcing functions protect the patient when humans are tired.</span></p>

    <h2>32.6 الإرهاق وفترات الراحة: مُضاعف الخطر الهادئ في غرفة العمليات / Fatigue and Breaks: The OR’s Quiet Risk Multiplier</h2>

    <h3>32.6.1 الإرهاق يغير السلوك قبل أن يغير الأداء / Fatigue changes behavior before it changes performance</h3>
    <p>يصبح الأشخاص أقل ميلاً للتحدث بصوت عالٍ، وأكثر ميلاً لقبول الاختصارات، وأكثر عرضة لقراءة الإشارات بشكل خاطئ عندما يكونون متعبين. (AHRQ)</p>
    <p><span class="english-term"><strong>32.6.1 Fatigue changes behavior before it changes performance</strong><br>People become less likely to speak up, more likely to accept shortcuts, and more likely to misread cues when tired. (AHRQ)</span></p>

    <h3>32.6.2 ثقافة السلامة التي تتخطى فترات الراحة هي ثقافة هشة / A safety culture that skips breaks is fragile</h3>
    <p>إذا كانت غرفة العمليات تعمل بالاستنزاف (Exhaustion)، فإن الحوادث الوشيكة ستزداد. الحل ليس في قول "كن قوياً". الحل يكمن في <strong>خطط التوظيف، خطط الإعفاء، ونوافذ الراحة المحمية</strong>—خاصة في الحالات الطويلة. (AHRQ; IHI)</p>

    <h3>32.6.3 التسليم أثناء فترات الراحة يجب أن يكون مُهيكلاً / Handoffs during breaks must be structured</h3>
    <p>عند حدوث إعفاء (Relief)، استخدم نصوص تسليم مصغرة لـ:</p>
    <ul>
        <li>حالة العد (Count status)،</li>
        <li>العينات المعلقة (Specimens pending)،</li>
        <li>حالة الغرسات والتتبع،</li>
        <li>مشاكل المعدات،</li>
        <li>مخاوف العقامة. (AORN concepts; AHRQ)</li>
    </ul>
    <p>التسليم غير المنظم هو خطر من عوامل بشرية. (Unstructured relief is a human factors hazard.)</p>

    <h2>32.7 دور قائد غرفة العمليات: خلق الحقيقة دون خوف / The OR Leader’s Role: Creating Truth Without Fear</h2>

    <h3>32.7.1 يجب على القادة مكافأة التحدث علناً / Leaders must reward speaking up in public</h3>
    <p>إذا قال أحد الموظفين "توقف"، يجب على القيادة الاستجابة باحترام—حتى لو تسبب ذلك في تأخير. <strong>تتعلم غرفة العمليات بسرعة ما تقدره القيادة حقاً.</strong> (AHRQ)</p>
    <p><span class="english-term"><strong>32.7.1 Leaders must reward speaking up in public</strong><br>If a staff member says “stop,” leadership must respond with respect—even if it causes delay. The OR learns quickly what leadership truly values. (AHRQ)</span></p>

    <h3>32.7.2 استبدال أسئلة اللوم بأسئلة التعلم / Replace blame questions with learning questions</h3>
    <p><strong>سؤال اللوم:</strong> "من فعل هذا؟"<br>
    <strong>أسئلة التعلم:</strong></p>
    <ul>
        <li>"ما الذي جعل القيام بهذا الخطأ أمراً سهلاً؟"</li>
        <li>"ما هي المقاطعات التي كانت موجودة؟"</li>
        <li>"ما هي آخر نقطة آمنة تم تأكيدها؟"</li>
        <li>"أي حاجز فشل—أو كان مفقوداً؟" (AHRQ; IHI)</li>
    </ul>
    <p>هكذا تحافظ على بقاء نظام الإبلاغ حياً وتُحسّن الأنظمة.</p>

    <h3>32.7.3 السلامة النفسية تشغيلية، وليست عاطفية / Psychological safety is operational, not emotional</h3>
    <p>السلامة النفسية (Psychological safety) تعني أنه يمكن للموظفين الإبلاغ عن المخاطر وإيقاف الخط دون التعرض للعقاب. إنها <strong>متطلب تشغيلي قابل للقياس</strong> للموثوقية العالية. (AHRQ; IHI)</p>

    <h2>32.8 أدوات عملية لغرفة العمليات (العوامل البشرية أصبحت واقعاً) / Practical OR Tools (Human Factors Made Real)</h2>

    <div class="success-box">
        <ul>
            <li><strong>32.8.1 الأداة 1 — قائمة "اللحظات المحمية" (قمرة القيادة المعقمة):</strong><br>
            قائمة معلقة للحظات التي تتوقف فيها المقاطعات: الـ Time-out، العينات، العد الجراحي، التحقق من الغرسات، لحظات خطر الحريق أثناء استخدام الطاقة. (WHO SSC concepts; AORN; ASA/APSF fire concepts)</li>
            <br>
            <li><strong>32.8.2 الأداة 2 — بطاقة نصوص التحدث بصوت عالٍ:</strong><br>
            بطاقة بحجم المحفظة/الباجة بها عبارات تصعيد من 3 مستويات (قلق، سلامة، توقف إلزامي). (AHRQ; TeamSTEPPS concepts)</li>
            <br>
            <li><strong>32.8.3 الأداة 3 — سجل المقاطعات (لمدة أسبوع واحد فقط):</strong><br>
            إحصاء بسيط: لماذا تحدث المقاطعات (إمدادات، مكالمات هاتفية، نقل، توثيق مفقود). استخدمه لإصلاح الأسباب الجذرية (Upstream). (IHI)</li>
            <br>
            <li><strong>32.8.4 الأداة 4 — لوحة وضوح الأدوار (Role Clarity Board):</strong><br>
            قبل الشق الجراحي: من يملك قيادة العد، العينات، الغرسات، دور المساعد (Runner). (AORN concepts; AHRQ)</li>
            <br>
            <li><strong>32.8.5 الأداة 5 — استخلاص مصغر نهاية الحالة (End-of-Case Micro Debrief):</strong><br>
            دقيقتان: "ما الذي كاد أن يسير بشكل خاطئ؟ أي مقاطعة أضرت بنا؟ ما هو الإصلاح الوحيد الذي يمكننا القيام به هذا الأسبوع؟" (IHI)</li>
        </ul>
    </div>

    <h2>32.9 قصص من الممارسة: كيف تخلق العوامل البشرية الضرر أو تمنعه / Stories from Practice: How Human Factors Creates or Prevents Harm</h2>

    <div class="concept-box">
        <h3>32.9.1 تباين العد الذي أصبح جدالاً—حتى أصبح نصاً (Script)</h3>
        <p>قبل التدريبات، كانت التباينات تثير الصراعات. بعد استخدام عبارات قياسية ودعم القيادة، أصبحت الغرفة هادئة: <strong>"توقف إلزامي—تباين."</strong> توقف الجراح عن المقاومة وبدأ في التعاون. المريض لم يستفد من معرفة جديدة، بل استفاد من <strong>هيكل سلوكي جديد (Behavior structure)</strong>. (AORN concepts; AHRQ)</p>
        
        <h3>32.9.2 الممرضة المبتدئة التي أنقذت الحالة بتحدثها بصوت عالٍ</h3>
        <p>لاحظت ممرضة مبتدئة عدم تطابق في عبوة غرسة. ترددت، ثم استخدمت النص: <strong>"أنا قلقة—هذه الغرسة لا تطابق الخطة."</strong> توقفت الغرفة، تحققت، وصححت. علّم هذا اليوم الجميع أن التحدث بصوت عالٍ هو امتياز مهني، وليس قلة احترام. (AHRQ; AORN concepts)</p>
        
        <h3>32.9.3 المقاطعة التي أزلناها من خلال إصلاح الواقع المبكر (Upstream)</h3>
        <p>كان المسرح يتلقى مكالمات يومية أثناء الـ Time-out تسأل عن توفر الأسرة وجاهزية الحالة التالية. قمنا بإنشاء <strong>اجتماع سريع قبل القائمة (Pre-list huddle)</strong> ولوحة مرئية خارج الغرف. انخفضت المقاطعات. أصبحت الـ Time-outs أنظف. تحسنت السلامة لأن النظام <strong>توقف عن سحب الانتباه</strong> في أسوأ وقت ممكن. (IHI; AHRQ)</p>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>المقاطعات، وتعدد المهام، والضوضاء ليست "حياة طبيعية في غرفة العمليات"—إنها <strong>مخاطر العوامل البشرية</strong> التي تضعف حواجز السلامة. (AHRQ; AORN concepts)<br>
            <span class="english-term">Interruptions, multitasking, and noise are not “normal OR life”—they are human factors hazards that weaken safety barriers.</span></li>
            
            <li>العبء المعرفي (Cognitive load) هو مشكلة سعة؛ عندما يرتفع، يجب أن تتحول السلامة من "الذاكرة" إلى <strong>"الهيكل"</strong> (نصوص، عمل قياسي، مواقع ثابتة، وظائف إجبارية). (IHI; AHRQ)<br>
            <span class="english-term">Cognitive load is a capacity problem; when it rises, safety must shift from memory to structure (scripts, standard work, fixed locations, forcing functions).</span></li>
            
            <li>التسلسل الهرمي يمكن أن يُسكت الخطر؛ <strong>التحدث بصوت عالٍ (Speaking up)</strong> يجب أن يُدرب، ويُكتب كنصوص، ويُحمى علناً من قبل القيادة. (AHRQ; TeamSTEPPS concepts)<br>
            <span class="english-term">Hierarchy can silence risk; speaking up must be trained, scripted, and publicly protected by leadership.</span></li>
            
            <li>غرفة العمليات الأكثر أماناً ليست تلك التي تضم أذكى الأشخاص—بل هي <strong>الغرفة المُصممة بحيث يمكن للبشر العاديين أداء سلامة استثنائية بشكل موثوق</strong>. (IHI; AHRQ)<br>
            <span class="english-term">The safest OR is not the one with the smartest people—it’s the one designed so ordinary humans can do extraordinary safety reliably.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Human factors, patient safety culture, teamwork, psychological safety, and communication improvement concepts (including TeamSTEPPS concepts).</li>
            <li>Institute for Healthcare Improvement (IHI) — Reliability science, standard work, learning systems, and design-for-safety concepts (measurement for improvement, reducing variation, forcing functions).</li>
            <li>Association of periOperative Registered Nurses (AORN) — Perioperative practice concepts related to counts, specimen handling, sterility reliability, interruption-sensitive workflows.</li>
            <li>World Health Organization Surgical Safety Checklist (WHO SSC) (concepts) — Protected pauses, checklist quality, and communication barriers.</li>
            <li>Institute for Safe Medication Practices (ISMP) (concepts) — Labeling discipline and medication safety behaviors under cognitive load.</li>
            <li>ECRI (concepts) — Technology hazard and usability concepts that interact with cognitive load and workflow design.</li>
            <li>ASA/APSF OR Fire resources (concepts) — Fire-risk recognition and the need for rapid “stop” behaviors in high-risk oxygen/ignition scenarios.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  22: `<!-- Download Button -->
    

    <div class="part-title">PART IV — Medications, Blood, and Perioperative Emergencies</div>
    <div class="part-title">الجزء الرابع — الأدوية، الدم، وحالات الطوارئ المحيطة بالجراحة</div>
    
    <h1>CHAPTER 22 — Blood and Perioperative Emergencies (OR Readiness and Response)</h1>
    <div class="subtitle">الفصل الثاني والعشرون — الدم وحالات الطوارئ المحيطة بالجراحة (جاهزية واستجابة غرفة العمليات)<br>
    <span style="font-size: 18px;">(Blood Request/Receipt Verification • Traceability • Hemorrhage Readiness • Emergency Roles &amp; Scripts • Post-Event Learning Loops)<br>
    (التحقق من طلب/استلام الدم • إمكانية التتبع • جاهزية النزيف • أدوار ونصوص الطوارئ • حلقات التعلم ما بعد الحدث)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>إنشاء نظام جاهز في غرفة العمليات <strong>لطلب الدم، استلامه، التحقق منه، وتتبعه</strong> تحت الضغط—دون اختصارات. (AHRQ)<br>
            <span class="english-term">Create an OR-ready system for blood request, receipt, verification, and traceability under pressure—without shortcuts. (AHRQ)</span></li>
            
            <li>بناء <strong>حزمة جاهزية للنزيف (Hemorrhage readiness bundle)</strong> خاصة بالمسرح الجراحي: معدات، إمدادات، أدوار، ونصوص تقلل العبء المعرفي. (IHI; ECRI concepts)<br>
            <span class="english-term">Build a theatre-side hemorrhage readiness bundle: equipment, supplies, roles, and scripts that reduce cognitive load. (IHI; ECRI concepts)</span></li>
            
            <li>توحيد <strong>استجابة غرفة العمليات لحالات الطوارئ</strong> المحيطة بالجراحة: تصعيد النزيف، التفاعلات المشابهة للتأق (Anaphylaxis)، أزمات مجرى الهواء، توقف القلب، وإخفاقات المعدات الحرجة. (AHRQ; IHI)<br>
            <span class="english-term">Standardize OR response to perioperative emergencies: hemorrhage escalation, anaphylaxis-like reactions, airway crises, cardiac arrest, and critical equipment failure interfaces. (AHRQ; IHI)</span></li>
            
            <li><strong>حماية حواجز السلامة أثناء الطوارئ</strong>: يجب أن تظل العينات، العد الجراحي (Counts)، العقامة، وهوية الأدوية موثوقة حتى عندما تكون الغرفة تحت الضغط. (AORN concepts; ISMP concepts)<br>
            <span class="english-term">Protect safety barriers during emergencies: specimens, counts, sterility, and medication identity must remain reliable even when the room is stressed. (AORN concepts; ISMP concepts)</span></li>
            
            <li>تحويل كل حالة طوارئ إلى <strong>حلقة تعلم (Learning loop)</strong>: استخلاص مصغر (Mini-debrief) ← تتبع الإجراءات ← إعادة التدريب ← تغيير مستدام. (IHI)<br>
            <span class="english-term">Convert every emergency into a learning loop: mini-debrief → action tracking → re-drill → sustained change. (IHI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "عندما تتغير شخصية الحالة"</strong><br>
        <span class="english-term">A true-to-life case (Real Scientific Story)</span>
    </div>

    <p>أخطر لحظة في المسرح الجراحي ليست دائماً الشق الأول. أحياناً تكون اللحظة التي تغير فيها الحالة من شخصيتها—عندما يصبح الإجراء الروتيني إجراءً نازفاً، عندما يصبح المريض المستقر غير مستقر، عندما تتحول القائمة "العادية" إلى مهمة إنقاذ.</p>
    <p><span class="english-term">The most dangerous moment in theatre is not always the first cut. Sometimes it is the moment the case changes its personality—when a routine procedure becomes a bleeding procedure, when a stable patient becomes unstable, when a “normal” list becomes a rescue mission.</span></p>

    <p>أتذكر حالة بدأت بهدوء. لا شيء دراماتيكي. ثم زاد النزيف—ببطء في البداية، ثم فجأة. طلب الجراح شفطاً (Suction) وضمادات (Packs). طلب طبيب التخدير دماً. اتصل شخص ما ببنك الدم. وسأل شخص آخر: "أين جهاز تدفئة الدم؟" وسأل صوت آخر: "هل لدينا بطاقة مسار النقل الحاد للدم (Massive transfusion)؟" أصبحت الممرضة الدوارة مركزاً لعشر مهام في وقت واحد.</p>
    <p><span class="english-term">I remember a case that started quietly. Nothing dramatic. Then bleeding increased—slowly at first, then suddenly. The surgeon asked for suction and packs. The anesthetist asked for blood. Someone called the blood bank. Someone else asked, “Where is the blood warmer set?” Another voice asked, “Do we have a massive transfusion pathway card?” The circulating nurse became the center of ten tasks at once.</span></p>

    <div class="alert-box">
        <p>لم يعانِ المريض من ضرر في ذلك اليوم. لكن النظام أظهر ضعفه: كانت لدينا المعرفة، لكن جاهزيتنا لم تكن مُهيكلة. لم تكن التأخيرات بسبب كسل الموظفين. بل كانت بسبب أن غرفة العمليات لم تحول الاستجابة للطوارئ إلى عمل قياسي (Standard work).</p>
        <p><span class="english-term">The patient did not suffer harm that day. But the system showed its weakness: we had knowledge, but our readiness was not structured. The delays were not because staff were lazy. The delays were because the OR had not turned emergency response into standard work.</span></p>
    </div>

    <div class="success-box">
        <p>علمني ذلك اليوم جملة أُعلمها الآن لكل قائد في غرفة العمليات:<br>
        <strong>في حالات الطوارئ المحيطة بالجراحة، يُفقد الوقت ليس لأننا لا نهتم—بل لأننا لم نُجهز المسار قبل الأزمة.</strong> (AHRQ; IHI)</p>
        <p><span class="english-term">That day taught me a sentence I now teach to every theatre leader:<br>
        <strong>In perioperative emergencies, time is lost not because we don’t care—but because we didn’t prepare the pathway before the crisis.</strong> (AHRQ; IHI)</span></p>
        <p>هذا الفصل هو ذلك المسار—من جانب غرفة العمليات، عملي، قابل للتدقيق، ومُصمم للعمل تحت الضغط.</p>
        <p><span class="english-term">This chapter is that pathway—OR-side, practical, auditable, and designed to work under stress.</span></p>
    </div>

    <h2>22.1 ما يغطيه هذا الفصل (النطاق الخاص بغرفة العمليات) / What This Chapter Covers (OR-Specific Scope)</h2>

    <h3>22.1.1 جاهزية الطوارئ من جانب غرفة العمليات ليست "للتخدير فقط"</h3>
    <p>حتى عندما يقود التخدير عملية الإنعاش، فإن لغرفة العمليات مسؤوليات حرجة:</p>
    <p><span class="english-term"><strong>22.1.1 OR-side emergency readiness is not “anesthesia only”</strong><br>Even when anesthesia leads resuscitation, the OR has critical responsibilities:</span></p>
    <ul>
        <li>سلسلة عهدة منتجات الدم (Chain-of-custody) عند نقطة الاستلام.</li>
        <li>التحكم البيئي (حركة المرور، المساحة، المناطق النظيفة).</li>
        <li>جاهزية المعدات (الشفط، أجهزة التدفئة، إخلاء الدخان عند الاقتضاء).</li>
        <li>التواصل وتعيين الأدوار.</li>
        <li>التوثيق وإمكانية التتبع.</li>
        <li>الحفاظ على انضباط العقامة والعد الجراحي. (AHRQ; AORN concepts)</li>
    </ul>

    <h3>22.1.2 المبدأ الأساسي / Core principle</h3>
    <p>الطوارئ لا تلغي السلامة. الطوارئ تغير <em>ترتيب</em> الإجراءات—لكنها لا تلغي الحاجة للتحقق. (IHI)</p>
    <p><span class="english-term"><strong>22.1.2 Core principle</strong><br>Emergency does not cancel safety. Emergency changes the order of actions—but not the need for verification. (IHI)</span></p>

    <h2>22.2 الدم في المسرح: سلسلة العهدة تحت الضغط / Blood in Theatre: The Chain of Custody Under Pressure</h2>

    <h3>22.2.1 لماذا يجب التعامل مع الدم كعنصر بمستوى الغرسات</h3>
    <p>منتجات الدم تحمل عواقب كبيرة. عدم التطابق أو التسليم غير الموثق ليس "انحرافاً في العملية"—إنه ضرر كارثي محتمل. يجب أن تتعامل غرفة العمليات مع سلسلة عهدة الدم بنفس الجدية التي تتعامل بها مع تتبع الغرسات. (AHRQ)</p>
    <p><span class="english-term"><strong>22.2.1 Why blood must be treated like an implant-level item</strong><br>Blood products carry high consequence. A mismatch or undocumented handoff is not a “process deviation”—it is potential catastrophic harm. The OR must treat blood chain-of-custody with the same seriousness as implant traceability. (AHRQ)</span></p>

    <h3>22.2.2 "مسار الدم" في المسرح (خريطة بسيطة)</h3>
    <p><strong>الطلب ← التوصيل ← الاستلام ← التحقق ← واجهة الإعطاء ← التوثيق ← التحكم في الإرجاع/التخلص ← مراجعة ما بعد الحدث</strong><br>
    إذا ضعفت أي حلقة، يصبح النظام معتمداً على الذاكرة.</p>
    <p><span class="english-term"><strong>22.2.2 The “Blood Pathway” in theatre (simple map)</strong><br>Request → Delivery → Receipt → Verification → Administration Interface → Documentation → Return/Discard Control → Post-event review.<br>If any link is weak, the system becomes dependent on memory.</span></p>

    <h3>22.2.3 طلب الدم المُنظم: الحد الأدنى للبيانات (في الحالات العاجلة)</h3>
    <p>عندما تطلب غرفة العمليات الدم بشكل عاجل، يجب أن يحمل الطلب:</p>
    <p><span class="english-term"><strong>22.2.3 Structured blood request: the minimum dataset (in urgent situations)</strong><br>When the OR requests blood urgently, the request must carry:</span></p>
    <ul>
        <li>مُعرّفين اثنين للمريض،</li>
        <li>غرفة العمليات/الموقع،</li>
        <li>نوع المنتج (RBC/FFP/صفائح/راسب كرايو حسب السياسة المحلية)،</li>
        <li>مستوى الإلحاح (STAT مقابل روتيني)،</li>
        <li>شخص الاتصال للرد،</li>
        <li>تعليمات خاصة (مثل مشعع/سالب CMV إذا انطبق حسب السياسة). (AHRQ)</li>
    </ul>
    <p>هذا يمنع التوصيل الخاطئ، وسوء الفهم، وحلقات التأخير.</p>

    <div class="alert-box">
        <h3>22.2.4 الاستلام والتحقق في المسرح: توقف غير قابل للتفاوض</h3>
        <p>يجب أن يكون التحقق من الدم منظماً ومرئياً. استخدم تحققاً مزدوجاً من شخصين عند الاستلام (حسب السياسة المحلية)، بما في ذلك:</p>
        <p><span class="english-term"><strong>22.2.4 Receipt and verification in theatre: a non-negotiable pause</strong><br>Blood verification must be structured and visible. Use a two-person verification at receipt (as per local policy), including:</span></p>
        <ul>
            <li>تطابق مُعرّفات المريض،</li>
            <li>تطابق رقم الوحدة/نوع المنتج،</li>
            <li>التحقق من انتهاء الصلاحية/وقت الخروج من التخزين المتحكم به،</li>
            <li>التحقق من السلامة (مظهر الكيس)،</li>
            <li>بدء محفز التوثيق. (AHRQ; local transfusion SOP)</li>
        </ul>
        <p><strong>توقف إلزامي (Hard stop):</strong> يجب ألا يدخل الدم في سير العمل النشط حتى يكتمل التحقق.</p>
        <p><span class="english-term"><strong>Hard stop:</strong> Blood must not enter active workflow until verification is complete.</span></p>
    </div>

    <h3>22.2.5 التتبع هو جزء من السلامة، وليس "عملاً ورقياً"</h3>
    <p>في حالات الطوارئ، غالباً ما يتدهور التوثيق. لكن التتبع هو ما يحمي:</p>
    <ul>
        <li>المريض (سجل دقيق)،</li>
        <li>بنك الدم (تسوية المخزون)،</li>
        <li>المستشفى (الاستعداد للتدقيق)،</li>
        <li>الفريق السريري (التحقيقات المستقبلية في ردود الفعل). (AHRQ)</li>
    </ul>
    <p>الحل العملي هو التقاط الحد الأدنى للبيانات بسرعة: رقم الوحدة + وقت الاستلام + توقيع التحقق + التصرف النهائي.</p>
    <p><span class="english-term"><strong>22.2.5 Traceability is part of safety, not “paperwork”</strong><br>A practical solution is a minimum dataset captured quickly: unit number + time received + verification sign-off + disposition.</span></p>

    <h3>22.2.6 الإرجاع والتحكم في درجة الحرارة</h3>
    <p>الفشل الشائع في غرفة العمليات هو ترك الدم في الخارج "للاحتياط". هذا يخلق هدراً وتعاملات غير آمنة. يجب على غرفة العمليات اتباع القواعد المحلية لتوقيت الإرجاع والتخزين المتحكم به. (Local blood bank SOP)</p>

    <h2>22.3 جاهزية النزيف: حزمة المسرح الجراحي / Hemorrhage Readiness: The Theatre-Side Bundle</h2>

    <h3>22.3.1 تُبنى جاهزية النزيف قبل الشق الجراحي</h3>
    <p>أكثر استجابات النزيف أماناً هي تلك التي تُجهز قبل الحاجة إليها:</p>
    <p><span class="english-term"><strong>22.3.1 Hemorrhage readiness is built before the incision</strong><br>The safest haemorrhage response is the one prepared before it’s needed:</span></p>
    <ul>
        <li>تأكيد جاهزية الشفط (Suction)،</li>
        <li>توفر علب (Canisters) وأنابيب كافية،</li>
        <li>أجهزة التدفئة جاهزة إذا تم استخدامها،</li>
        <li>قدرة التسريب بالضغط (حسب السياسة)،</li>
        <li>مسارات وصول واضحة (تجنب الفوضى والمعدات المسدودة)،</li>
        <li>تحديد مسار المساعد (Runner). (ECRI concepts; AORN concepts)</li>
    </ul>

    <h3>22.3.2 محفزات تصعيد النزيف (وعي غرفة العمليات)</h3>
    <p>في حين أن العتبات السريرية يقودها التخدير، يجب على فرق غرفة العمليات التعرف على المحفزات التشغيلية التي تتطلب تصعيداً:</p>
    <p><span class="english-term"><strong>22.3.2 Hemorrhage escalation triggers (OR-side awareness)</strong><br>While clinical thresholds are anesthesia-led, OR teams should recognize operational triggers that require escalation:</span></p>
    <ul>
        <li>زيادة سريعة في حجم علبة الشفط،</li>
        <li>طلبات متكررة للضمادات (Packs) والإسفنج،</li>
        <li>تغييرات متعددة في الأدوات،</li>
        <li>زيادة حركة الأبواب والاتصالات ببنك الدم،</li>
        <li>تزايد عدد الأشخاص في الغرفة (خطر الفوضى). (AHRQ)</li>
    </ul>

    <div class="concept-box">
        <h3>22.3.3 نموذج أدوار الطوارئ (أدوار المسرح التي تمنع الفوضى)</h3>
        <p>في الأحداث عالية التوتر، يجب أن تكون الأدوار صريحة:</p>
        <p><span class="english-term"><strong>22.3.3 The emergency roles model (theatre roles that prevent chaos)</strong><br>In high-stress events, roles must be explicit:</span></p>
        <ul>
            <li><strong>قائد/منسق غرفة العمليات (غالباً الممرضة الدوارة أو المسؤولة):</strong> يعلن "وضع الطوارئ"، يعين الأدوار، يحمي التوقفات الإلزامية.</li>
            <li><strong>المساعد (Runner):</strong> يتعامل مع الجلب الخارجي (استلام من بنك الدم، إمدادات إضافية)، يقلل من حركة الباب بكونه "الأيدي الخارجية".</li>
            <li><strong>الموثّق (Documenter):</strong> يلتقط الطوابع الزمنية الحرجة الدنيا وبيانات التتبع، يحرر الممرضة الدوارة من العبء المعرفي.</li>
            <li><strong>متحكم الباب/المرور (Door/Traffic Controller):</strong> يمنع الازدحام، يحافظ على المنطقة المركزية المعقمة، يحد من المقاطعات.</li>
            <li><strong>حامي الحقل (التركيز على الممرضة المعقمة/Field Protector):</strong> يحمي العقامة، يتتبع الإسفنج/الأدوات، يحافظ على انضباط العد. (AORN concepts; AHRQ)</li>
        </ul>
        <p>إذا لم تُسمَّ الأدوار، يقوم الجميع بـ "شيء ما"، وتُفقد المهام الحرجة.</p>
        <p><span class="english-term">If roles aren’t named, everyone does “something,” and critical tasks get missed.</span></p>
    </div>

    <h3>22.3.4 "وقفات التحقق المحمية" أثناء النزيف</h3>
    <p>حتى تحت ضغط النزيف، يجب على غرفة العمليات إجراء توقفات دقيقة (Micro-pauses) من أجل:</p>
    <ul>
        <li>التحقق من وحدة الدم عند الاستلام،</li>
        <li>التحقق من هوية الأدوية لأي إضافات جديدة للحقل،</li>
        <li>تحديثات حالة العد عند نقاط الإغلاق الحرجة،</li>
        <li>التحقق من تسمية العينات إذا حدثت أثناء الفوضى. (AORN concepts; ISMP concepts)</li>
    </ul>
    <p>تبدو هذه الوقفات بطيئة فقط حتى ترى الضرر الذي تمنعه.</p>
    <p><span class="english-term">These pauses feel slow only until you see the harm they prevent.</span></p>

    <h2>22.4 الأدوية ومواد الحقل أثناء الطوارئ (انضباط غرفة العمليات)</h2>
    <h3>22.4 Medications and Field Substances During Emergencies (OR-side Discipline)</h3>

    <h3>22.4.1 الطوارئ تضاعف السوائل الشفافة والمخاطر غير المسماة</h3>
    <p>أثناء النزيف، تظهر محاليل متعددة: ري (Irrigation)، مواد موضعية، إضافات مخففة. هنا يزداد خطر المادة الخاطئة أو المسار الخاطئ بشكل حاد. (ISMP concepts)</p>

    <h3>22.4.2 توقف إلزامي: لا توجد حاويات غير مسماة—حتى في الطوارئ</h3>
    <p>يجب التعامل مع الأكواب/المحاقن غير المسماة في الحقل المعقم كأخطار. الحل ليس "كن حذراً"، بل أطقم الملصقات وسير العمل القياسي. (ISMP; AORN)</p>

    <h3>22.4.3 التحضير "واحد تلو الآخر" يصبح أكثر أهمية</h3>
    <p>في حالات الطوارئ، يتسبب التحضير المتوازي في أخطاء التبديل. يجب أن يكون الانضباط: حضّر ← سمِّ ← تحقق ← ثم امضِ قدماً. (ISMP)</p>

    <h2>22.5 الحفاظ على العد الجراحي ومنع العناصر المتروكة أثناء الأزمات</h2>
    <h3>22.5 Maintaining Counts and Preventing Retained Items During Crisis</h3>

    <h3>22.5.1 النزيف يزيد من خطر العناصر المتروكة (RSI)</h3>
    <p>الحالات النازفة تتضمن غالباً: إسفنج متعدد، تغييرات سريعة في الحقل، موظفين إضافيين، إغلاق متسرع. هذه ظروف كلاسيكية تساهم في ترك عناصر إذا فقدت الغرفة انضباط العد. (AORN concepts)</p>
    <p><span class="english-term"><strong>22.5.1 Hemorrhage increases RSI risk</strong><br>Bleeding cases often involve: multiple sponges, rapid changes in field, additional staff, rushed closure. These conditions are classic contributors to retained items if the room loses count discipline. (AORN concepts)</span></p>

    <h3>22.5.2 الأزمة لا تلغي متطلبات العد</h3>
    <p>قد يتم تكييف العد حسب السياسة، لكنه يجب أن يظل موثوقاً. إذا حدث تباين:<br>
    <strong>توقف إلزامي—يجب اتباع خوارزمية التباين.</strong> (AORN concepts)</p>

    <h3>22.5.3 خطوة عملية لـ "استقرار العد" أثناء النزيف</h3>
    <p>في اللحظات الرئيسية، يجب على الممرضة المعقمة والدوارة أن تُصرحا بـ:</p>
    <ul>
        <li>وقت آخر عد صحيح،</li>
        <li>الإضافات منذ ذلك الحين،</li>
        <li>حالة إدارة الإسفنج الحالية،</li>
        <li>أي مناطق عالية الخطورة (مثل حشو التجاويف / Cavity packing). (AORN concepts)</li>
    </ul>
    <p>هذا يقلل من الارتباك لاحقاً.</p>
    <p><span class="english-term">At key moments, the scrub and circulator should state: last correct count time, additions since, current sponge management status, any high-risk areas (cavity packing). (AORN concepts). This reduces confusion later.</span></p>

    <h2>22.6 العقامة والتحكم البيئي أثناء الطوارئ</h2>
    <h3>22.6 Sterility and Environmental Control During Emergencies</h3>

    <h3>22.6.1 التحكم في الحشود هو مكافحة للعدوى / Crowd control is infection control</h3>
    <p>الطوارئ تجذب الناس. تزداد فتحات الأبواب. يصبح الحقل المعقم ضعيفاً.<br>
    قم بتعيين مُتحكم في الباب/المرور واحْمِ المنطقة المركزية المعقمة. (AORN concepts)</p>

    <h3>22.6.2 دخول معدات الطوارئ يجب أن يكون مُخططاً</h3>
    <p>إذا تم إحضار معدات بشكل عاجل (أجهزة تدفئة، شفط إضافي)، فيجب ألا تكسر الحقل المعقم أو تسد الوصول. الفوضى خطر يمكن التنبؤ به، وليست مفاجأة. (AHRQ)</p>
    <p><span class="english-term"><strong>22.6.2 Emergency equipment entry must be planned</strong><br>If equipment is brought in urgently (warmers, extra suction), it must not break the sterile field or block access. Chaos is a predictable risk, not a surprise. (AHRQ)</span></p>

    <h2>22.7 أنماط طوارئ ما حول الجراحة ونصوص استجابة غرفة العمليات</h2>
    <h3>22.7 Perioperative Emergency Patterns and OR-side Response Scripts</h3>

    <div class="success-box">
        <h3>22.7.1 نص تصعيد النزيف (جانب غرفة العمليات) / Hemorrhage escalation script (OR-side)</h3>
        <ul>
            <li>"وضع الطوارئ—تصعيد النزيف." (Emergency mode—hemorrhage escalation)</li>
            <li>"تم تعيين مساعد (Runner)."</li>
            <li>"بدء طلب الدم بالحد الأدنى من البيانات."</li>
            <li>"إنشاء منطقة التحقق عند الباب."</li>
            <li>"الموثّق يلتقط تتبع الوحدة."</li>
            <li>"التحكم في الباب نَشِط."</li>
            <li>"تم استقرار العد والتواصل بشأنه." (AHRQ; AORN concepts)</li>
        </ul>

        <hr>
        
        <h3>22.7.2 تفاعل مشابه للتأق (نص دعم غرفة العمليات) / Anaphylaxis-like reaction</h3>
        <p>حتى عندما يقود التخدير، يدعم جانب غرفة العمليات من خلال: إخلاء المساحة، التحكم في المرور والضوضاء، تحضير إمدادات الطوارئ وانضباط التسمية، وتوثيق الأوقات الرئيسية والمواد المُدخلة. (AHRQ)</p>
        <p><span class="english-term">Even when anesthesia leads, OR-side supports by: clearing space, controlling traffic and noise, preparing emergency supplies and labeling discipline, documenting key times and substances introduced. (AHRQ)</span></p>

        <hr>

        <h3>22.7.3 توقف القلب / Code Blue في المسرح / Cardiac arrest in theatre</h3>
        <p>تشمل القضايا الخاصة بغرفة العمليات: إدارة الحقل المعقم، ازدحام المعدات، والتحكم في الحشود. قائد العمليات يعين: أدوار الإنعاش/مجرى الهواء (سريرية)، التحكم في الباب، تحريك المعدات (وضعية الطاولة، الكابلات)، التوثيق. (AHRQ)</p>

        <hr>

        <h3>22.7.4 فشل المعدات الحرجة أثناء الأزمة (شفط/طاقة) / Critical equipment failure during crisis</h3>
        <p>يجب على جانب غرفة العمليات تنفيذ: توقف ← التبديل للبديل (تم فحصه مسبقاً) ← وضع علامة/عزل الجهاز الفاشل عند الاستقرار ← توثيق الفشل والإبلاغ للتعلم. (ECRI concepts; IHI)</p>
    </div>

    <h2>22.8 التوثيق تحت الضغط: الحد الأدنى للبيانات</h2>
    <h3>22.8 Documentation Under Pressure: The Minimum Dataset</h3>

    <h3>22.8.1 خطأ التوثيق في حالات الطوارئ</h3>
    <p>تطلب بعض غرف العمليات الكثير من السرد في الطوارئ—وبالتالي لا يوثق الموظفون شيئاً.<br>
    بدلاً من ذلك، حدد حداً أدنى من البيانات يكون سريعاً، منظماً، وقانونياً آمناً:</p>
    <ul>
        <li>وقت بدء الحدث.</li>
        <li>وقت طلب الدم، وقت استلام الدم.</li>
        <li>أرقام الوحدات وتوقيع التحقق.</li>
        <li>التدخلات أو الانحرافات الرئيسية.</li>
        <li>التصرف في المنتجات غير المستخدمة (تم إرجاعها/التخلص منها حسب السياسة). (AHRQ; local SOP)</li>
    </ul>
    <p><span class="english-term"><strong>22.8.1 The emergency documentation mistake</strong><br>Some ORs demand too much narrative in emergencies—then staff document nothing. Instead, define a minimum dataset that is fast, structured, and legally safe: event start time, blood requested time, blood received time, unit numbers and verification sign-off, major interventions or deviations, disposition of unused products. (AHRQ; local SOP)</span></p>

    <h3>22.8.2 يجب أن ينجو التتبع في أسوأ الأيام / Traceability must survive the worst day</h3>
    <p>إذا انهار التوثيق في الطوارئ، فهذا هو الوقت الذي تحتاجه فيه أكثر من غيره. صممه ليكون بالحد الأدنى (Minimal)، وليس الأقصى.</p>

    <h2>22.9 حلقات التعلم ما بعد الحدث: تحويل الطوارئ إلى تحسين للنظام</h2>
    <h3>22.9 Post-Event Learning Loops: Turning Emergencies into System Improvement</h3>

    <h3>22.9.1 الاستخلاص في 3 دقائق (فور الاستقرار) / The 3-minute debrief</h3>
    <p>اسأل:</p>
    <ul>
        <li>ماذا حدث؟</li>
        <li>ما الذي أبطأنا؟</li>
        <li>ما هو الإصلاح <em>الوحيد</em> الذي سيمنع التأخير في المرة القادمة؟ (IHI)</li>
    </ul>
    <p><span class="english-term"><strong>22.9.1 The 3-minute debrief (immediately after stabilization)</strong><br>Ask: What happened? What slowed us down? What one fix will prevent delay next time? (IHI)</span></p>

    <h3>22.9.2 محفزات الـ Mini-RCA (خاص بغرفة العمليات) / Mini-RCA triggers</h3>
    <p>قم بتفعيل RCA مصغر عند حدوث أي من:</p>
    <ul>
        <li>ارتباك في التحقق من الدم،</li>
        <li>فقدان أنابيب التدفئة أو المستهلكات،</li>
        <li>حشود غير مسيطر عليها/حركة باب،</li>
        <li>ظهور أدوية حقل غير مسماة،</li>
        <li>عملية العد أصبحت غير مستقرة أو حدث تباين،</li>
        <li>فجوات تتبع في التوثيق. (AHRQ; IHI)</li>
    </ul>

    <h3>22.9.3 تتبع الإجراءات والتحقق / Action tracking and verification</h3>
    <p>كل إصلاح يحتاج إلى: مالك + تاريخ استحقاق + طريقة تحقق (إعادة تدقيق أو إعادة تدريب). وإلا ستتكرر نفس التأخيرات. (IHI)</p>

    <div class="concept-box">
        <h2>أدوات عملية (مُلحقات جاهزة للاستخدام) / Practical Tools (Ready-to-Use Inserts)</h2>
        
        <p><strong>22.T1 — بطاقة أدوار طوارئ المسرح (Theatre Emergency Roles Card)</strong><br>
        قائد • مساعد • موثّق • تحكم الباب • حامي الحقل (العد/العقامة). (AHRQ)</p>
        
        <p><strong>22.T2 — قائمة تحقق استلام الدم (عند الباب) (Blood Receipt Verification Checklist)</strong><br>
        مُعرّفان • رقم المنتج/الوحدة • انتهاء الصلاحية/وقت التخزين • فحص السلامة • التوقيع. (Local SOP)</p>
        
        <p><strong>22.T3 — قائمة حزمة جاهزية النزيف (Hemorrhage Readiness Pack Checklist)</strong><br>
        شفط x2 • أنابيب/علب احتياطية • طقم تدفئة/مستهلكات • طقم تسريب ضغط (إذا استُخدم) • ملصقات/قلم • بطاقة توثيق. (ECRI concepts)</p>
        
        <p><strong>22.T4 — ورقة الحد الأدنى لتوثيق الطوارئ (Emergency Minimum Documentation Sheet)</strong><br>
        طوابع زمنية + أرقام الوحدات + تحقق + تصرف + ملاحظات رئيسية. (AHRQ)</p>

        <p><strong>22.T5 — نموذج استخلاص من 3 دقائق (3-Minute Debrief Template)</strong><br>
        ماذا حدث؟ ماذا أبطأنا؟ إصلاح واحد + مالك + تاريخ. (IHI)</p>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الطوارئ لا تلغي التحقق—إنها تتطلب توقفات إلزامية دقيقة (Micro hard stops) للدم، الأدوية، العد، والعينات. (AHRQ; AORN)<br>
            <span class="english-term">Emergency does not cancel verification—it demands micro hard stops for blood, meds, counts, and specimens.</span></li>
            
            <li>سلامة الدم في المسرح هي سلسلة عهدة (Chain-of-custody): وضوح الطلب ← التحقق عند الباب ← إمكانية التتبع ← الإرجاع/التخلص المحكوم. (AHRQ; local SOP)<br>
            <span class="english-term">Blood safety in theatre is chain-of-custody: request clarity → doorway verification → traceability → controlled return/discard.</span></li>
            
            <li>أسرع حالات الطوارئ هي الأكثر تنظيماً: أدوار، نصوص، حزم جاهزة، وبدائل مفحوصة مسبقاً. (IHI; ECRI)<br>
            <span class="english-term">The fastest emergencies are the most structured: roles, scripts, ready packs, and pre-checked backups.</span></li>
            
            <li>الاستخلاص + تتبع الإجراءات (Debrief + action tracking) يحول الحالة الصعبة إلى نظام مستقبلي أكثر أماناً. (IHI)<br>
            <span class="english-term">Debrief + action tracking turns a hard case into a safer future system.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety systems, teamwork, human factors, reporting and learning concepts.</li>
            <li>Institute for Healthcare Improvement (IHI) — Reliability science, standard work, learning loops, action tracking.</li>
            <li>Association of periOperative Registered Nurses (AORN) — Perioperative workflow concepts relevant to sterility, counts, specimens, and crisis environment control.</li>
            <li>Institute for Safe Medication Practices (ISMP) — Medication safety concepts for sterile-field labeling and LASA risks under pressure.</li>
            <li>ECRI (concepts) — Technology readiness and failure-response concepts supporting emergency equipment preparedness.</li>
            <li>Local Blood Bank SOP / Transfusion Policy — Final authority for blood request/verification/handling and return timing.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  30: `<!-- Download Button -->
    

    <div class="part-title">PART VI — Learning, Investigation, and Continuous Improvement</div>
    <div class="part-title">الجزء السادس — التعلم، التحقيق، والتحسين المستمر</div>
    
    <h1>CHAPTER 30 — Audit Programs and Compliance Readiness</h1>
    <div class="subtitle">الفصل الثلاثون — برامج التدقيق وجاهزية الامتثال<br>
    <span style="font-size: 18px;">(Audit Calendar • Tracer Method • Documentation Readiness • Closing Gaps)<br>
    (تقويم التدقيق • طريقة التتبع • جاهزية التوثيق • سد الفجوات)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>بناء <strong>تقويم تدقيق (Audit calendar)</strong> لغرفة العمليات يكون متوازناً، ومبنياً على المخاطر، وواقعياً—بحيث تصبح عمليات التدقيق موثوقية روتينية بدلاً من حالة ذعر سنوية. (IHI)<br>
            <span class="english-term">Build an OR <strong>audit calendar</strong> that is balanced, risk-based, and realistic—so audits become routine reliability, not annual panic. (IHI)</span></li>
            
            <li>استخدام <strong>طريقة التتبع (Tracer method)</strong> لتدقيق رحلات المرضى الحقيقية وسير العمل الحقيقي (العد، العينات، العقامة، الغرسات، الأدوية في الحقل، جاهزية المعدات) بدلاً من مجرد الامتثال الورقي. (AHRQ)<br>
            <span class="english-term">Use the <strong>tracer method</strong> to audit real patient journeys and real workflows (counts, specimens, sterility, implants, meds-on-field, equipment readiness) rather than paper compliance. (AHRQ)</span></li>
            
            <li>تحقيق <strong>جاهزية التوثيق (Documentation readiness)</strong> بسجلات "مضادة للتدقيق/Audit-proof" تتطابق مع الممارسة الفعلية، تحمي المريض، وتقلل من العبء على الموظفين. (AORN concepts; AHRQ)<br>
            <span class="english-term">Achieve <strong>documentation readiness</strong> with “audit-proof” records that match practice, protect the patient, and reduce staff burden. (AORN concepts; AHRQ)</span></li>
            
            <li><strong>سد الفجوات (Closing gaps)</strong> باستخدام دورة إجراءات تصحيحية منضبطة: مُلّاك (Owners)، مواعيد نهائية، تحقق، واستدامة—حتى لا تتكرر الملاحظات المكتشفة. (IHI)<br>
            <span class="english-term"><strong>Close gaps</strong> using a disciplined corrective-action cycle: owners, deadlines, verification, and sustainability—so findings don’t repeat. (IHI)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "نوعان من أيام التدقيق"</strong><br>
        <span class="english-term">A true-to-life case: “Two kinds of OR audit days” (Real Scientific Story)</span>
    </div>

    <p>لقد رأيت نوعين من أيام التدقيق في غرفة العمليات.</p>
    <p><span class="english-term">I’ve seen two kinds of OR audit days.</span></p>

    <p>في النوع الأول، يُصاب المستشفى بالذعر. يقوم الناس بطباعة السياسات في منتصف الليل. ينظف شخص ما أرففاً لم ينظر إليها أحد منذ أشهر. يقول أحدهم، "أخفِ هذا الصندوق". يصبح الموظفون متوترين، ليس لأنهم يخشون الحقيقة، بل لأن النظام درّبهم على الخوف من الانكشاف. يصل المدقق، وتتحول غرفة العمليات إلى مسرحية—ابتسامات، ومجلدات جاهزة، وإجابات مُتدرب عليها.</p>
    <p><span class="english-term">In the first kind, the hospital panics. People print policies at midnight. Someone cleans shelves that nobody looked at for months. Someone says, “Hide that box.” Staff become tense, not because they fear truth, but because the system has trained them to fear being exposed. The auditor arrives, and the OR becomes theatre—smiles, binders, and rehearsed answers.</span></p>

    <p>في النوع الثاني، تكون غرفة العمليات هادئة. لا تحتاج الممرضة إلى "الاستعداد" لأن النظام مستعد بالفعل. الصواني قابلة للتتبع. قوائم التحقق حقيقية. التوثيق متسق. عندما يسأل المُدقق: "أرني كيف تمنعون نسيان أداة جراحية (Retained item)"، لا يُجيب الموظفون بالكلمات—بل يجيبون بسير العمل.</p>
    <p><span class="english-term">In the second kind, the OR is calm. The nurse doesn’t need to “prepare” because the system is already prepared. The trays are traceable. The checklists are real. The documentation is consistent. When the auditor asks, “Show me how you prevent a retained item,” the staff don’t answer with words—they answer with workflow.</span></p>

    <div class="success-box">
        <p>بمرور الوقت، تعلمت أن الفرق ليس في الذكاء. ولا حتى في الجهد.<br>
        <strong>الفرق يكمن فيما إذا كانت عمليات التدقيق تُستخدم كـ "أحداث عقاب" أو كـ "أنظمة تعلم".</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">Over time, I learned the difference is not intelligence. It is not even effort.<br>
        It is whether audits are used as <strong>punishment events</strong> or as <strong>learning systems</strong>. (IHI; AHRQ)</span></p>
        <p>هذا الفصل يدور حول بناء برنامج تدقيق لغرفة العمليات يفعل شيئاً واحداً فوق كل شيء: <strong>يُبقي غرفة العمليات جاهزة كل يوم—بدون خوف—لأن الجاهزية مبنية في صميم طريقة عملك.</strong></p>
        <p><span class="english-term">This chapter is about building an OR audit program that does one thing above all: <strong>keeps the OR ready every day—without fear—because readiness is built into the way you work.</strong></span></p>
    </div>

    <h2>30.1 تقويم التدقيق (من التفتيش العشوائي إلى برنامج مُصمم) / Audit Calendar (From Random Inspections to a Designed Program)</h2>

    <h3>30.1.1 لماذا تحتاج غرفة العمليات إلى تقويم، وليس مجرد "تدقيقات مفاجئة"</h3>
    <p>يمكن أن تكشف التدقيقات المفاجئة عن الواقع، ولكن إذا كانت هي الطريقة الوحيدة، ستصبح غرفة العمليات دفاعية. يضمن التقويم الجيد ما يلي:</p>
    <p><span class="english-term"><strong>30.1.1 Why the OR needs a calendar, not “surprise audits only”</strong><br>Surprise audits can reveal reality, but if they are the only method, the OR becomes defensive. A good calendar ensures:</span></p>
    <ul>
        <li>يتم فحص المواضيع عالية المخاطر بانتظام.</li>
        <li>يتم فحص المواضيع منخفضة المخاطر بشكل كافٍ.</li>
        <li>يعرف الجميع أن التدقيق أمر طبيعي ومُعتاد.</li>
        <li>التحسينات قابلة للقياس بمرور الوقت. (IHI)</li>
    </ul>

    <h3>30.1.2 ابْنِ التقويم حول المخاطر، وليس الملاءمة</h3>
    <p>يُعطي التقويم العملي المبني على المخاطر الأولوية لعمليات التدقيق التي تمنع الضرر الشديد (High-severity harm):</p>
    <p><span class="english-term"><strong>30.1.2 Build the calendar around risk, not convenience</strong><br>A practical risk-based calendar prioritizes audits that prevent high-severity harm:</span></p>
    <ul>
        <li>جودة قائمة التحقق من السلامة الجراحية. (WHO SSC concepts)</li>
        <li>موثوقية العد الجراحي (Counts) وإدارة التباين. (AORN concepts)</li>
        <li>تسمية العينات وسلسلة العهدة. (AORN concepts)</li>
        <li>موثوقية الحقل المعقم والتحكم في المرور. (AORN concepts)</li>
        <li>تتبع الغرسات / التقاط UDI. (AORN concepts)</li>
        <li>تسمية الأدوية في الحقل المعقم. (ISMP concepts)</li>
        <li>جاهزية المعدات ووضع العلامات على الأعطال (Tagging). (ECRI concepts)</li>
        <li>سلوكيات السلامة من حريق غرفة العمليات وأجهزة الطاقة. (NFPA 99 concepts; AORN)</li>
    </ul>

    <h3>30.1.3 تكرار التدقيق: "بمعدل كافٍ للسيطرة على الانحراف"</h3>
    <p>بعض الممارسات تنحرف بسرعة (الملصقات، مقاطعات العد، فتح الأبواب). هذه تحتاج إلى تدقيقات قصيرة ومتكررة. البعض الآخر (الامتثال للصيانة الوقائية PM) قد يكون شهرياً أو ربع سنوي. <strong>المفتاح: يجب أن يتطابق تكرار التدقيق مع سرعة عودة الخطر.</strong> (IHI)</p>
    <p><span class="english-term"><strong>30.1.3 Audit frequency: “often enough to control drift”</strong><br>Some practices drift quickly (labels, counts interruptions, door openings). These need frequent short audits. Others (PM compliance) may be monthly/quarterly. The key is: audit frequency must match how quickly risk returns. (IHI)</span></p>

    <h3>30.1.4 قاعدة "التدقيق القصير يتفوق على التدقيق المثالي"</h3>
    <p>التدقيق الذي يستغرق 10 دقائق ويحدث أسبوعياً يُحسن الموثوقية أكثر من تدقيق مثالي يحدث مرة واحدة في السنة. (IHI)</p>
    <p><span class="english-term"><strong>30.1.4 The “short audit beats the perfect audit” rule</strong><br>An audit that takes 10 minutes and happens weekly improves reliability more than a perfect audit that happens once a year. (IHI)</span></p>

    <h3>30.1.5 من يدقق هو أمر مهم (المصداقية والتعلم) / Who audits matters</h3>
    <ul>
        <li><strong>تدقيق النظراء (Peer audits):</strong> تبني العملية والثقة.</li>
        <li><strong>التدقيق المتقاطع (Cross-functional audits):</strong> (مثل غرفة العمليات + CSSD + الجودة + الهندسة الطبية) يكشف عن مشاكل التداخل (Interface problems). (AHRQ)</li>
        <li><strong>الجولات التفقدية للقيادة (Walkround audits):</strong> تشير إلى الجدية—إذا تمت باحترام وبشكل متسق. (AHRQ)</li>
    </ul>

    <h3>30.1.6 نموذج بسيط لتقويم التدقيق في غرفة العمليات / A simple OR audit calendar model</h3>
    <div class="alert-box">
        <ul>
            <li><strong>أسبوعياً:</strong> تدقيق سريع (Spot audit) لجودة قائمة التحقق؛ تدقيق لتسمية العينات؛ فحص "الأكواب غير المسماة"؛ ملاحظة فتح الأبواب/حركة المرور.</li>
            <li><strong>شهرياً:</strong> أخذ عينات من توثيق العد الجراحي؛ أخذ عينات من تتبع الغرسات؛ أخذ عينات من سجلات جاهزية المعدات؛ ملاحظات سلامة الأدوات الحادة.</li>
            <li><strong>ربع سنوي:</strong> تدقيق التخزين المعقم / انتهاء الصلاحية؛ تدقيقات التتبع (Tracer audits)؛ تدريبات مصغرة للاستعداد للطوارئ (مثل الحريق).</li>
            <li><strong>سنوياً:</strong> مراجعة شاملة للبرنامج، مراجعة السياسات عالية الخطورة، مواءمة مراجعة الكفاءات. (IHI; AORN; ISMP)</li>
        </ul>
        <p><span class="english-term">Weekly: checklist quality spot audit; specimen labeling; “unlabeled cup” check; door openings. Monthly: counts documentation sampling; implant traceability; equipment readiness log; sharps safety. Quarterly: sterile storage/expiry; tracer audits; emergency mini-drills. Annually: full program review, high-risk policy review, competency review.</span></p>
    </div>

    <h2>30.2 طريقة التتبع / Tracer Method (Audit the Real OR, Not the Binder OR)</h2>

    <h3>30.2.1 ماذا تعني طريقة التتبع في غرفة العمليات / What tracer method means</h3>
    <p>تتبع طريقة الـ Tracer مساراً حقيقياً، وعادة ما يكون:</p>
    <ul>
        <li><strong>رحلة المريض داخل نطاق غرفة العمليات:</strong> (بوابة الجاهزية قبل العملية ← العمليات داخل الغرفة ← الخروج/Sign-out ← التسليم/Handoff).</li>
        <li><strong>رحلة العنصر (Item journey):</strong> (عينة، غرسة، صينية أدوات، دواء في الحقل المعقم). (AHRQ)</li>
    </ul>
    <p>بدلاً من أن تسأل: "هل لديكم سياسة؟" فإنك تسأل: <strong>"أرني كيف تعيشون هذه السياسة."</strong></p>
    <p><span class="english-term">Instead of asking, “Do you have a policy?” you ask, “Show me how the policy is lived.”</span></p>

    <h3>30.2.2 لماذا تُعد طريقة التتبع قوية / Why tracer method is powerful</h3>
    <p>غالباً ما يقع الضرر في غرفة العمليات عند واجهات التداخل (Interfaces):</p>
    <ul>
        <li>بين الفِرَق (التسليم/Handoffs)،</li>
        <li>بين الخطوات (التبديل إلى الإعداد)،</li>
        <li>بين الأقسام (العمليات–التعقيم، العمليات–الباثولوجي، العمليات–سلسلة التوريد).</li>
    </ul>
    <p>تدقيقات التتبع تكشف حقيقة هذه الواجهات. (AHRQ; IHI)</p>

    <div class="concept-box">
        <h3>30.2.3 أنواع التتبع الأعلى قيمة في غرفة العمليات / High-yield OR tracer types</h3>
        
        <p><strong>30.2.3.1 مُتتبع العينة (Specimen tracer):</strong><br>
        تتبع عينة واحدة من: الجمع ← وقت التسمية ← التحقق ← نوع الحاوية/المادة الحافظة ← التوثيق ← التسليم للناقل/المختبر ← تأكيد الاستلام. (AORN concepts)</p>
        
        <p><strong>30.2.3.2 مُتتبع العد الجراحي (Count tracer):</strong><br>
        راقب: العد الأولي ← الإضافات ← عد تسليم التبديل (Relief handoff) ← عد الإغلاق ← خوارزمية التباين إذا لزم الأمر ← جودة التوثيق. (AORN concepts)</p>

        <p><strong>30.2.3.3 مُتتبع الغرسات/UDI (Implant/UDI tracer):</strong><br>
        تتبع: التحقق من الاختيار ← فحص التخزين/انتهاء الصلاحية ← وقفة الفتح ← التقاط UDI/الدفعة ← التوثيق ← جاهزية الاستدعاء (هل يمكننا استرجاع قائمة المرضى في حال الاستدعاء؟). (AORN concepts)</p>

        <p><strong>30.2.3.4 مُتتبع موثوقية الحقل المعقم (Sterile field reliability tracer):</strong><br>
        راقب: توقيت الإعداد (فقط بعد "اكتمل التنظيف") ← سلوك المرور/الأبواب ← الاستجابة للاختراقات ← إجراءات استعادة الحقل. (AORN concepts)</p>

        <p><strong>30.2.3.5 مُتتبع الأدوية في الحقل (Medication-on-field tracer):</strong><br>
        راقب: تسمية الأكواب/المحاقن ← التحضير "دواء واحد في كل مرة" ← فصل المسار (موضعي مقابل ري) ← ضوابط LASA. (ISMP concepts)</p>

        <p><strong>30.2.3.6 مُتتبع جاهزية المعدات (Equipment readiness tracer):</strong><br>
        تتبع "وظيفة حرجة" (شفط/كي كهربائي/إخلاء الدخان): دليل فحص الوظيفة في بداية اليوم ← مسار الفشل (وضع علامة/عزل) ← جاهزية البديل (Backup). (ECRI concepts)</p>
    </div>

    <h3>30.2.4 كيف تدير تدقيق تتبع دون إذلال الموظفين</h3>
    <p>التتبع ليس استجواباً. إنه جولة إرشادية:</p>
    <ul>
        <li>"أرني كيف تفعل هذا عادة."</li>
        <li>"ما الذي يجعل هذا صعباً في الأيام المزدحمة؟"</li>
        <li>"أين تشعر بالضغط لاختصار الخطوات؟" (AHRQ)</li>
    </ul>
    <p>هذا النهج يخلق الحقيقة بدلاً من مسرحيات الأداء.</p>
    <p><span class="english-term">A tracer is not an interrogation. It’s a guided walk: “Show me how you do this normally.” “What makes it hard on busy days?” “Where do you feel pressured to shortcut?” (AHRQ)</span></p>

    <h3>30.2.5 "السؤال الذهبي" في التتبع / The tracer “gold question”</h3>
    <p>بعد الملاحظة، اسأل: <strong>"إذا فشل هذا الأمر الآن، ماذا سيحدث تالياً—ومن سيلاحظ أولاً؟"</strong> هذا يكشف ما إذا كانت السلامة تعتمد على الأنظمة أم على الحظ.</p>

    <h2>30.3 جاهزية التوثيق (سجلات تحمي المريض وتنجو من أي تدقيق)</h2>
    <h3>30.3 Documentation Readiness (Records That Protect the Patient and Survive Any Audit)</h3>

    <h3>30.3.1 جاهزية التوثيق ليست "المزيد من الكتابة"</h3>
    <p>إنها تتعلق بالمحاذاة (Alignment): يجب أن يعكس التوثيق سير العمل الفعلي، ويلتقط حقائق السلامة الحرجة، ويبقى متسقاً بين الموظفين. (AHRQ)</p>
    <p><span class="english-term"><strong>30.3.1 Documentation readiness is not “more writing”</strong><br>It is alignment: documentation should reflect actual workflow, capture critical safety facts, and remain consistent across staff. (AHRQ)</span></p>

    <h3>30.3.2 عما يبحث المدققون حقاً / What auditors really look for</h3>
    <p>إنهم يبحثون عن ثلاثة أشياء:</p>
    <ol>
        <li><strong>دليل على تنفيذ حواجز السلامة</strong> (وليس ادعاء ذلك فقط).</li>
        <li><strong>إمكانية التتبع (Traceability)</strong> للعناصر عالية المخاطر (العينات، الغرسات، معالجة الأدوات).</li>
        <li><strong>الاتساق (Consistency):</strong> السيناريو نفسه يُنتج نمط التوثيق نفسه. (AHRQ; AORN concepts)</li>
    </ol>

    <h3>30.3.3 أساسيات التوثيق في غرفة العمليات (التي تدر عائداً مرتفعاً) / The OR documentation “must-haves”</h3>
    <ul>
        <li>أدلة <strong>تسجيل الدخول / المهلة / تسجيل الخروج</strong> (Sign-in/time-out/sign-out) ومؤشرات الجودة المستخدمة. (WHO SSC concepts)</li>
        <li>سجلات <strong>العد الجراحي</strong> بما في ذلك الإضافات وتوثيق إدارة التباين. (AORN concepts)</li>
        <li>توثيق <strong>العينات</strong> (التحقق من الملصق، الحاوية/المادة الحافظة، التسليم). (AORN concepts)</li>
        <li><strong>تتبع الغرسات</strong> (UDI/الدفعة/التسلسل، التحقق من انتهاء الصلاحية، ربط المريض). (AORN concepts)</li>
        <li>توثيق <strong>اختراق العقامة</strong> والإجراءات التصحيحية عند حدوثها. (AORN concepts)</li>
        <li>سجل <strong>علامات عطل المعدات / العزل</strong> عند حدوث أعطال. (ECRI concepts)</li>
    </ul>

    <h3>30.3.4 إخفاقات التوثيق الشائعة (وما تعنيه) / Common documentation failures</h3>
    <div class="alert-box">
        <ul>
            <li><strong>طوابع زمنية مفقودة (Missing timestamps):</strong> تدل على فجوات في سير العمل أو تدوين متأخر (Late charting).</li>
            <li><strong>إدخالات متطابقة منسوخة وملصقة (Copy-paste identical entries):</strong> تدل على خطر "الامتثال الشكلي" (Checkbox compliance). (AHRQ)</li>
            <li><strong>العد "صحيح" بدون تفاصيل في الحالات المعقدة:</strong> يشير إلى نقص محتمل في التوثيق.</li>
            <li><strong>تسجيل عينة بدون خطوات تأكيد:</strong> ضعف في سلسلة العهدة.</li>
        </ul>
        <p>هذه ليست مجرد مخاطر تدقيق. إنها <strong>مخاطر سريرية</strong>.</p>
    </div>

    <h3>30.3.5 اجعل التوثيق سهلاً من خلال تصميم سير العمل</h3>
    <p>يتحسن التوثيق عندما:</p>
    <ul>
        <li>يتم تبسيط النماذج.</li>
        <li>تتطابق الحقول المطلوبة مع خطوات السلامة الحرجة.</li>
        <li>تُدمج قوائم التحقق في التدفق (وليس إضافتها كعبء).</li>
        <li>يتم وضع التقاط البيانات <strong>في لحظة الإجراء</strong> (مثل التقاط UDI للغرسة أثناء وقفة الفتح). (IHI)</li>
    </ul>

    <h3>30.3.6 مبدأ "المقاوم للتدقيق" / The “audit-proof” principle</h3>
    <p>إذا كان نظام التوثيق يُجبر الموظفين على الاختيار بين رعاية المريض والتدوين، فسيختارون دائماً رعاية المريض—وسيتدهور التوثيق. <strong>الحل ليس في الانضباط؛ الحل في التصميم.</strong> (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>30.3.6 The “audit-proof” principle</strong><br>If your documentation system forces staff to choose between patient care and charting, they will always choose patient care—and documentation will decay. The answer is not discipline; the answer is design. (AHRQ; IHI)</span></p>

    <h2>30.4 سد الفجوات (تحويل النتائج إلى تغيير حقيقي) / Closing Gaps</h2>

    <h3>30.4.1 الحقيقة: التدقيقات لا تُحسّن الرعاية—الإجراءات هي من تفعل / The truth: audits don’t improve care—actions do</h3>
    <p>التدقيقات تكشف فقط. يحدث التحسين فقط عندما تُترجم النتائج إلى تغيير في النظام ويتم التحقق منها. (IHI)</p>

    <h3>30.4.2 دورة سد الفجوات (العملية) / The gap-closure cycle</h3>
    <p>لكل نتيجة/ملاحظة تدقيق:</p>
    <ol>
        <li>عرّف الفجوة بوضوح (ماذا، أين، التكرار).</li>
        <li>حدد الأسباب الجذرية (سير عمل، تدريب، إمداد، بيئة، ثقافة). (AHRQ)</li>
        <li>اختر <strong>إجراءات تصحيحية قوية</strong> (التوحيد، وظائف الإجبار، إعادة التصميم). (IHI)</li>
        <li>عيّن مالكاً (Owner) + موعداً نهائياً.</li>
        <li>تحقق من التنفيذ من خلال إعادة التدقيق/الملاحظة.</li>
        <li>ادمجها في <strong>العمل القياسي</strong> وبرامج التوجيه. (IHI)</li>
    </ol>

    <h3>30.4.3 الإجراءات التصحيحية القوية مقابل الضعيفة / Strong vs weak corrective actions</h3>
    <p>في واقع غرفة العمليات:</p>
    <ul>
        <li><strong>الضعيفة:</strong> "تذكير الموظفين"، "إرسال بريد إلكتروني"، "إعادة التثقيف".</li>
        <li><strong>القوية:</strong> تغيير التخطيط الفيزيائي (Layout)، توحيد العربات، إضافة توقف إلزامي (Hard stop)، تبسيط نموذج، إنشاء بوابة جاهزية، أتمتة التتبع، إزالة التنوع غير الضروري. (IHI; AHRQ)</li>
    </ul>
    <p>التدريب مهم، لكن <strong>التدريب وحده نادراً ما يسيطر على مخاطر غرفة العمليات عالية الخطورة.</strong></p>

    <h3>30.4.4 تتبع الإجراءات الذي لا يموت / Action tracking that doesn’t die</h3>
    <p>استخدم <strong>سجل إجراءات غرفة العمليات (Action register)</strong> يحتوي على: النتيجة، مستوى الخطر، الإجراء التصحيحي، المالك، تاريخ الاستحقاق، طريقة التحقق، دليل الإغلاق، وخطة الاستدامة (كيف تصبح روتيناً). (IHI)</p>

    <h3>30.4.5 التحقق يجب أن يكون سلوكياً، وليس مجرد "اكتمل"</h3>
    <p>إذا كان الإصلاح هو "بوابة اكتمال التنظيف"، فإن التحقق يكون من خلال <strong>الملاحظة المباشرة</strong> لـ:</p>
    <ul>
        <li>عدم الفتح المعقم قبل اكتمال التنظيف، (AORN concepts)</li>
        <li>عدم وجود مريض في الغرفة قبل بوابة الجاهزية.</li>
    </ul>
    <p>وليس مجرد التحقق من "تحديث السياسة". (IHI)</p>

    <h3>30.4.6 الاستدامة: منع الانحراف / Sustainability: prevent drift</h3>
    <p>يحدث الانحراف (Drift) عند تدوير الموظفين، زيادة العبء، أو انتقال انتباه القيادة لمكان آخر. (AHRQ)<br>
    تتطلب الاستدامة: إعادة التدقيق الدوري، دمج في التوجيه (Onboarding)، تغذية راجعة مرئية، واتساق القيادة.</p>

    <h2>30.5 القصة الحقيقية 2: "الكوب غير المسمى الذي حُلّ بتغيير النظام"</h2>
    <h3>30.5 A short story from practice (Narrative)</h3>

    <div class="quote-box">
        <p>وجد تدقيق متكرر أكواباً غير مسماة في الحقل المعقم. كانت الاستجابة الأولى هي "التدريب". بعد أسبوعين، عادت المشكلة.</p>
        <p>عندما تعمقنا أكثر، كانت الأسباب الجذرية: الملصقات لم تكن دائماً مخزنة في الغرفة، لم يكن لوضع الملصقات "موطن" ثابت، وفوضى التبديل (Turnover) تسببت في هجرة الإمدادات.</p>
        <p>أصبح <strong>الإجراء التصحيحي قوياً وبسيطاً</strong>:</p>
        <ul>
            <li>مكان ثابت للملصقات.</li>
            <li>بند في قائمة التبديل: "الملصقات موجودة".</li>
            <li><strong>توقف إلزامي:</strong> يُمنع تسليم أي حاوية غير مسماة.</li>
        </ul>
        <p>بعد ذلك، استقر السلوك—ليس لأن الناس أصبحوا يهتمون فجأة، بل لأن <strong>النظام جعل السلوك الآمن هو السلوك الأسهل.</strong> (ISMP concepts; IHI; AORN concepts)</p>
        <p><span class="english-term">After that, the behavior stabilized—not because people suddenly cared more, but because the system made the safe behavior the easiest behavior. (ISMP concepts; IHI; AORN concepts)</span></p>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>يجب أن يخلق برنامج تدقيق غرفة العمليات <strong>جاهزية يومية</strong>، وليس حالة ذعر سنوية. (IHI)<br>
            <span class="english-term">An OR audit program should create <strong>everyday readiness</strong>, not annual panic.</span></li>
            
            <li>طريقة التتبع (Tracer method) تكشف حقيقة سير العمل والواجهات (Interfaces)—الامتثال الورقي ليس كافياً. (AHRQ)<br>
            <span class="english-term">Tracer method reveals the truth of workflows and interfaces—paper compliance is not enough.</span></li>
            
            <li>جاهزية التوثيق هي "المحاذاة" (Alignment): سجل ما يحمي المريض والتقط إمكانية التتبع بشكل موثوق. (AHRQ; AORN concepts)<br>
            <span class="english-term">Documentation readiness is alignment: record what protects the patient and capture traceability reliably.</span></li>
            
            <li>يتطلب سد الفجوات (Closing gaps) مُلّاك، ومواعيد نهائية، وتحقق، والدمج في العمل القياسي—وإلا ستتكرر الملاحظات. (IHI)<br>
            <span class="english-term">Closing gaps requires owners, deadlines, verification, and embedding into standard work—otherwise findings repeat.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Institute for Healthcare Improvement (IHI) — Measurement for improvement, audit-to-action cycles, reliability and sustainability concepts (standard work, verification, strong corrective actions).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety, human factors, just culture, and learning systems concepts; tracer-style thinking and psychological safety for truth-telling.</li>
            <li>Association of periOperative Registered Nurses (AORN) — Perioperative practice concepts relevant to sterility reliability, counts, specimen handling, and workflow standards used in audits.</li>
            <li>World Health Organization Surgical Safety Checklist (WHO SSC) (concepts) — Checklist quality as a measurable barrier (not only completion).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI) ST79 (concepts) — Sterile processing and storage integrity concepts relevant to sterile stock audits and traceability.</li>
            <li>Institute for Safe Medication Practices (ISMP) (concepts) — Sterile field medication labeling discipline and safe medication handling behaviors.</li>
            <li>ECRI (concepts) — Equipment readiness, technology hazard controls, and failure reporting principles.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  11: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 11 — Instrument Processing, Sterilization Assurance, and OR–CSSD Interface</h1>
    <div class="subtitle">الفصل الحادي عشر — معالجة الأدوات، ضمان التعقيم، وواجهة غرفة العمليات مع قسم التعقيم المركزي (OR–CSSD)<br>
    <span style="font-size: 18px;">(Decontamination → Inspection → Packaging → Sterilization → Storage → Point-of-Use • Loaner Sets • Immediate-Use Steam Sterilization • Sterility Assurance • Traceability • OR–CSSD Communication Loops)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا لا تُعد معالجة الأدوات "لوجستيات خلف الكواليس"، بل هي <strong>نظام لسلامة المرضى (Patient safety system)</strong> حيث يمكن أن تتحول الانحرافات الصغيرة إلى عدوى، وتأخيرات، وإلغاءات. (AAMI ST79; AORN; WHO SSI)<br>
            <span class="english-term">Explain why instrument processing is not “behind-the-scenes logistics,” but a <strong>patient safety system</strong> where small deviations can become infections, delays, and cancellations. (AAMI ST79; AORN; WHO SSI)</span></li>
            
            <li>وصف رحلة الأداة الكاملة (من متسخة ← نظيفة ← معقمة ← إلى نقطة الاستخدام) وتحديد المواضع التي تحدث فيها الانهيارات (Breakdowns) غالباً. (AAMI ST79; AORN)<br>
            <span class="english-term">Describe the full instrument journey (dirty → clean → sterile → point-of-use) and identify where breakdowns most often occur. (AAMI ST79; AORN)</span></li>
            
            <li>بناء <strong>نموذج عملي لضمان التعقيم (Sterilization assurance model)</strong>: المؤشرات، التحكم في الحمولة، التوثيق، معايير الإفراج، وإمكانية التتبع التي تصمد تحت الضغط. (AAMI ST79; AORN)<br>
            <span class="english-term">Build a practical <strong>sterilization assurance model</strong>: indicators, load control, documentation, release criteria, and traceability that survives pressure. (AAMI ST79; AORN)</span></li>
            
            <li>إدارة الحقائق عالية المخاطر: الأدوات المعقدة، التجاويف (Lumens)، الحمولات الرطبة، تلف التغليف، صواني الإعارة، الأطقم المفقودة، وإغراء "التعقيم الفوري/Flash"—دون الانجراف إلى اختصارات غير آمنة. (AAMI ST79; AORN; IHI)<br>
            <span class="english-term">Manage high-risk realities: complex instruments, lumens, wet loads, packaging damage, loaner trays, missing sets, and “flash/Immediate-Use” temptation—without drifting into unsafe shortcuts. (AAMI ST79; AORN; IHI)</span></li>
            
            <li>تصميم سير عمل لواجهة غرفة العمليات مع قسم التعقيم المركزي (OR–CSSD): بوابات الجاهزية، قواعد التصعيد، معايير التوقف، وحلقة تعلم تمنع الإخفاقات المتكررة. (IHI; AHRQ)<br>
            <span class="english-term">Design OR–CSSD interface workflows: readiness gates, escalation rules, stop criteria, and a learning loop that prevents repeated failures. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الصينية التي وصلت معقمة... وما زالت غير آمنة"</strong><br>
        <span class="english-term">A true-to-life case: “The tray that arrived sterile… and still wasn’t safe” (Real Scientific Story)</span>
    </div>

    <p>هناك لحظة في ممارسة المسرح الجراحي تبدو كأنها خيانة: تفتح صينية (Tray) ويبدو كل شيء مثالياً—التغليف سليم، الأشرطة الكيميائية متغيرة اللون، والمؤشرات الكيميائية الداخلية (Integrators) تُظهر قبولاً. تم تلبية جميع "قواعد التعقيم".</p>
    <p><span class="english-term">There is a moment in theatre practice that feels like betrayal: you open a tray and everything looks perfect—wrapping intact, chemical tapes turned, internal integrators showing a pass. All the “sterilization rules” were met.</span></p>

    <p>ثم يقوم الجراح برفع أداة العظام (Rongeur) للبدء في الاستخدام، وهناك، داخل المفصل (Hinge)، توجد قطعة صلبة وصغيرة من العظم من مريض الأسبوع الماضي.</p>
    <p><span class="english-term">Then the surgeon lifts a bone rongeur to begin the case, and there, deep inside the hinge, is a hard, tiny fragment of bone from last week’s patient.</span></p>

    <div class="alert-box">
        <p>شعرت الغرفة بالصدمة.<br>
        قال الجراح: "أعتقدت أن هذا قد تم تعقيمه!"<br>
        نظرت الممرضة المعقمة (Scrub nurse) إلى المؤشر. لقد اجتاز بنجاح. قالت: "لقد تم تعقيمه."</p>
        <p><span class="english-term">The room was stunned.<br>
        The surgeon said: “I thought this was sterilized!”<br>
        The scrub nurse looked at the indicator. It had passed. She said: “It was sterilized.”</span></p>
    </div>

    <p>كلاهما كان على حق، وكلاهما كان على خطأ. لقد خضع للصمام (Autoclave)، واجتازت البكتيريا الموجودة على السطح الخارجي للقطعة العظمية التعقيم. لكن داخل هذا العبء البيولوجي (Bioburden)—تحت المادة العضوية المخبوزة—لا يمكن لليقين بالتعقيم أن يوجد أبداً.</p>
    <p><span class="english-term">Both were right, and both were wrong. It had been through the autoclave, and the bacteria on the outside of the bone fragment had been sterilized. But inside that bioburden—underneath baked organic matter—sterility assurance can never exist.</span></p>

    <div class="success-box">
        <p>هذه هي القاعدة التأسيسية لمعالجة الأدوات: <strong>لا يمكنك تعقيم الأوساخ. (You cannot sterilize dirt.)</strong><br>
        التعقيم ليس سحراً يُطبق في النهاية. إنه نتيجة لسلسلة لا تشوبها شائبة تبدأ في اللحظة التي تُستخدم فيها الأداة في نقطة الرعاية (Point of care). (AAMI ST79; AORN)</p>
        <p><span class="english-term">That is the foundational rule of instrument processing: <strong>You cannot sterilize dirt.</strong> Sterilization is not magic applied at the end. It is the result of a flawless chain that begins the moment the instrument is used at the point of care. (AAMI ST79; AORN)</span></p>
    </div>

    <h2>11.1 قسم التعقيم المركزي (CSSD) ليس "قَبْواً"؛ إنه نظام لسلامة المرضى</h2>
    <h3>11.1 The CSSD is Not a "Basement"; It is a Patient Safety System</h3>

    <h3>11.1.1 الفجوة الخطيرة بين غرفة العمليات وقسم التعقيم / The dangerous disconnect</h3>
    <p>تتعامل العديد من المستشفيات مع قسم الإمداد المعقم المركزي (CSSD) كقسم "خدمات خلفية" (Back-of-house). يرى الجراحون والممرضون الصواني (Trays) فقط عندما تظهر على الطاولة. تخلق هذه الفجوة المخاطر. (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>11.1.1 The dangerous disconnect between OR and CSSD</strong><br>Many hospitals treat the Central Sterile Supply Department (CSSD) as a “back-of-house” service. Surgeons and nurses only see the trays when they appear on the table. This disconnect creates risk. (AHRQ; IHI)</span></p>

    <h3>11.1.2 ما هو التعقيم حقاً؟ (إنه احتمال، وليس مطلقاً)</h3>
    <p>التعقيم ليس "نعم" أو "لا" المطلقة؛ إنه مصطلح احتمالي (مستوى ضمان التعقيم - SAL). عندما ينهار التنظيف، أو تكون التعبئة رطبة، أو دورة التعقيم غير مكتملة، يتغير الاحتمال. CSSD لا يقوم بـ "غسل" الأدوات؛ بل <strong>يقوم بهندسة الموثوقية (Engineers reliability)</strong> في الأدوات. (AAMI ST79)</p>
    <p><span class="english-term"><strong>11.1.2 What is sterility, really? (It is a probability, not an absolute)</strong><br>Sterility is not an absolute "yes" or "no"; it is a probability term (Sterility Assurance Level - SAL). When cleaning breaks down, or packing is wet, or a cycle is incomplete, the probability changes. CSSD does not “wash” instruments; it <strong>engineers reliability</strong> into instruments. (AAMI ST79)</span></p>

    <h2>11.2 رحلة الأداة (حلقة "من المتسخ إلى المعقم")</h2>
    <h3>11.2 The Instrument Journey (The “Dirty-to-Sterile” Loop)</h3>

    <div class="concept-box">
        <p>إذا انكسرت إحدى الروابط، يفشل النظام بأكمله:</p>
        <p><span class="english-term">If one link breaks, the whole system fails:</span></p>
        <ol>
            <li><strong>التعامل في نقطة الاستخدام (Point-of-Use):</strong> مسؤولية غرفة العمليات. إبقاء الأدوات رطبة، وتنظيف التجاويف الإجمالي في المسرح. (AORN)</li>
            <li><strong>النقل (Transport):</strong> نقل آمن ومغلق لمنع تعرض الموظفين والبيئة.</li>
            <li><strong>التطهير (Decontamination):</strong> التنظيف الدقيق (اليدوي والآلي). <em>الخطوة الأكثر أهمية.</em></li>
            <li><strong>الفحص (Inspection):</strong> التكبير والإضاءة للتحقق من خلوها من العبء البيولوجي (Bioburden) ووظيفتها.</li>
            <li><strong>التغليف (Packaging):</strong> يجب أن يسمح التغليف باختراق المُعقِّم ويحافظ على العقامة أثناء التخزين.</li>
            <li><strong>التعقيم (Sterilization):</strong> البخار، أكسيد الإيثيلين، بيروكسيد الهيدروجين، إلخ.</li>
            <li><strong>التخزين (Storage):</strong> بيئة يتم التحكم في درجة حرارتها/رطوبتها لتجنب تدهور الحدث (Event-related degradation).</li>
            <li><strong>التسليم في نقطة الاستخدام (Point-of-Use Delivery):</strong> فحص غرفة العمليات النهائي للتغليف، والمؤشرات، والرطوبة. (AAMI ST79; AORN)</li>
        </ol>
    </div>

    <h2>11.3 التعامل في نقطة الاستخدام (مسؤولية غرفة العمليات)</h2>
    <h3>11.3 Point-of-Use Handling (The OR’s Responsibility)</h3>

    <h3>11.3.1 الدم يجف مثل الغراء / Blood dries like glue</h3>
    <p>إذا لم تكن الأداة نظيفة، فلا يمكن تعقيمها. الدم والبروتينات والأملاح والأنسجة التي يُسمح لها بالجفاف على الأدوات، وخاصة داخل التجاويف (Lumens) أو المفاصل (Hinges)، تصبح شديدة المقاومة للتنظيف في CSSD. (AORN; AAMI ST79)</p>
    <p><span class="english-term"><strong>11.3.1 Blood dries like glue</strong><br>If an instrument is not clean, it cannot be sterile. Blood, proteins, salts, and tissue allowed to dry on instruments, especially inside lumens or hinges, become highly resistant to cleaning in CSSD. (AORN; AAMI ST79)</span></p>

    <h3>11.3.2 العمل القياسي لغرفة العمليات / The OR’s standard work</h3>
    <p>يجب على ممرضات المسرح:</p>
    <ul>
        <li>مسح الأدوات بالماء المعقم (ليس محلول ملحي Saline، الذي يسبب التآكل) أثناء الحالة.</li>
        <li>رش رغوة إنزيمية (Enzymatic foam) أو وضع جل/منشفة مبللة في نهاية الحالة للحفاظ على رطوبتها.</li>
        <li>تفكيك (Disassemble) الأدوات متعددة الأجزاء في نقطة الاستخدام لمنع الضرر. (AORN)</li>
    </ul>
    <p>إن إلقاء صينية دموية في المصعد دون تحضيرها ليس كفاءة؛ <strong>إنه تخريب لسلامة المريض التالي.</strong> (IHI; AHRQ)</p>
    <p><span class="english-term">Throwing a bloody tray into the elevator without prep is not efficiency; <strong>it is sabotaging the next patient’s safety.</strong> (IHI; AHRQ)</span></p>

    <h2>11.4 ضمان التعقيم (كيف "تُثبت" أنه معقم)</h2>
    <h3>11.4 Sterilization Assurance (How You “Prove” It’s Sterile)</h3>

    <h3>11.4.1 مثلث الضمان / The assurance triangle</h3>
    <p>يتم إثبات العقامة من خلال التقارب بين তিনটি مؤشرات (Indicators):</p>
    <p><span class="english-term"><strong>11.4.1 The assurance triangle</strong><br>Sterility is proven by the convergence of three indicators:</span></p>
    <ul>
        <li><strong>المؤشرات الفيزيائية (Physical):</strong> مطبوعات الآلة (الوقت، درجة الحرارة، الضغط).</li>
        <li><strong>المؤشرات الكيميائية (Chemical):</strong> الأشرطة الخارجية، والمتكاملات الداخلية (Integrators) من الفئة 5 أو 6 التي تتفاعل مع المعايير.</li>
        <li><strong>المؤشرات البيولوجية (Biological):</strong> أشرطة الجراثيم (Spore strips) التي تُثبت قتل الميكروبات (مطلوبة للغرسات). (AAMI ST79; AORN)</li>
    </ul>

    <h3>11.4.2 الحزم الرطبة (Wet Packs): لا مجال للتفاوض</h3>
    <p>إذا تم فتح صينية وكانت الحشوة الداخلية أو الأدوات رطبة، <strong>فهي ملوثة.</strong> الرطوبة تسحب الميكروبات من البيئة عبر التغليف (Wicking).<br>
    يجب أن يكون رد فعل غرفة العمليات توقفاً إلزامياً (Hard stop): <strong>لا تُستخدم. يجب الإبلاغ عنها وإعادتها.</strong> (AAMI ST79; AORN)</p>
    <p><span class="english-term"><strong>11.4.2 Wet packs: Non-negotiable</strong><br>If a tray is opened and the inner liner or instruments are wet, <strong>it is contaminated.</strong> Moisture pulls microbes from the environment through the packaging (wicking). The OR reaction must be a hard stop: <strong>Do not use. Report and return.</strong> (AAMI ST79; AORN)</span></p>

    <h3>11.4.3 سلامة التغليف وتدهور الحدث / Packaging integrity</h3>
    <p>تتم صيانة العقامة استناداً إلى "الأحداث" (Event-related)، وليس "الوقت". ينهي التمزق الصغير، أو الحواف المتضررة، أو البقع المائية العقامة فوراً. (AORN)</p>

    <h2>11.5 إغراء الـ IUSS (التعقيم الفوري - "Flash")</h2>
    <h3>11.5 The IUSS Temptation (Immediate-Use Steam Sterilization)</h3>

    <h3>11.5.1 متى يكون IUSS مناسباً (ومتى لا يكون)</h3>
    <p>التعقيم الفوري (IUSS) ليس للراحة، ولا لضعف الجدولة، ولا لتعويض نقص المخزون.<br>
    إنه <strong>مخصص للطوارئ فقط</strong> (مثال: سقوط أداة فريدة ومخصصة أثناء الجراحة). (AAMI ST79; AORN; The Joint Commission)</p>
    <p><span class="english-term"><strong>11.5.1 When IUSS is appropriate (and when it is not)</strong><br>IUSS is not for convenience, not for poor scheduling, and not for making up for inventory shortages. It is <strong>for emergencies only</strong> (e.g., dropping a unique, custom instrument during surgery). (AAMI ST79; AORN; The Joint Commission)</span></p>

    <div class="alert-box">
        <h3>11.5.2 مخاطر الـ IUSS / The risk of IUSS</h3>
        <p>يتم تخطي خطوات التطهير الصارمة (Decontamination)، ولا يوجد تغليف لحماية الأداة أثناء النقل، ووقت التبريد غير كافٍ (خطر الحروق). الاستخدام العالي للـ IUSS هو <strong>إشارة إنذار (Red flag) لفشل النظام</strong>. (IHI; AHRQ)</p>
        <p><span class="english-term"><strong>11.5.2 The risk of IUSS</strong><br>Rigorous decontamination steps are rushed, there is no packaging to protect the instrument during transport, and cooling time is insufficient (burn risk). High IUSS use is a <strong>red flag for system failure</strong>. (IHI; AHRQ)</span></p>
    </div>

    <h2>11.6 أطقم الإعارة وصواني الموردين (المخاطر الخارجية)</h2>
    <h3>11.6 Loaner Sets and Vendor Trays (The Outsourced Risk)</h3>

    <h3>11.6.1 كابوس أطقم الإعارة / The loaner set nightmare</h3>
    <p>تصل أطقم الإعارة (Loaner sets)، خاصة لجراحات العظام والعمود الفقري، غالباً معقدة، غير مألوفة، وفي وقت متأخر. قد يتطلب طقم واحد لتغيير المفصل معالجة 10 صواني ضخمة. (AORN)</p>
    <p><span class="english-term"><strong>11.6.1 The loaner set nightmare</strong><br>Loaner sets, especially for orthopedics and spine, arrive often complex, unfamiliar, and late. A single total joint revision might require 10 massive trays to be processed. (AORN)</span></p>

    <h3>11.6.2 قاعدة الـ 48-72 ساعة / The 48-72 hour rule</h3>
    <p>تتطلب الحوكمة الآمنة وصول أطقم الإعارة إلى قسم CSSD <strong>قبل 48 ساعة على الأقل من الجراحة (72 ساعة للأطقم الجديدة)</strong> للسماح بالجرد والتنظيف والتعقيم والاختبار البيولوجي. (AORN; IHI)</p>

    <div class="concept-box">
        <h3>11.6.3 التوقف الإلزامي للأطقم المعارة / The loaner hard stop</h3>
        <p>إذا لم يصل الطقم في الوقت المحدد لعملية معالجة مناسبة، <strong>لا يتم إجراء الجراحة</strong>. الاستثناءات العاجلة (الكسور) تتطلب موافقة القيادة؛ وتخضع الاستثناءات المجدولة (الروتينية) للإلغاء المسبق. (The Joint Commission; IHI)</p>
        <p><span class="english-term"><strong>11.6.3 The loaner hard stop</strong><br>If the set does not arrive in time for proper processing, <strong>the surgery does not happen</strong>. Urgent exceptions (trauma) require leadership approval; elective exceptions trigger a pre-cancellation. (The Joint Commission; IHI)</span></p>
    </div>

    <h2>11.7 واجهة OR–CSSD (التواصل والحوكمة)</h2>
    <h3>11.7 The OR–CSSD Interface (Communication &amp; Governance)</h3>

    <h3>11.7.1 حرب اللوم / The blame war</h3>
    <p>غرفة العمليات تصرخ: "أين صوانينا؟"<br>
    قسم CSSD يصرخ: "أنتم لم تخبرونا، وأرسلتموها مغطاة بالدم!"<br>
    هذه ديناميكية خلل وظيفي (Dysfunctional) كلاسيكية تؤذي المرضى. الموثوقية تتطلب الشراكة. (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>11.7.1 The blame war</strong><br>The OR yells: “Where are our trays?”<br>The CSSD yells: “You didn’t tell us, and you sent them down covered in blood!”<br>This is a classic dysfunctional dynamic that hurts patients. Reliability requires partnership. (AHRQ; IHI)</span></p>

    <h3>11.7.2 بناء حلقة تواصل (Communication loops)</h3>
    <ul>
        <li><strong>الجدولة:</strong> يجب أن يتلقى CSSD جدول غرفة العمليات النهائي، بما في ذلك متطلبات الغرسات. (AORN)</li>
        <li><strong>الاجتماع السريع (Huddle):</strong> ممثل CSSD يحضر اجتماع الجاهزية (Readiness huddle) في غرفة العمليات لمعالجة النواقص قبل يوم الجراحة. (IHI)</li>
        <li><strong>التصعيد:</strong> مسار واضح للتعامل مع "صينية مفقودة" دون اللجوء إلى IUSS الروتيني. (AHRQ)</li>
    </ul>

    <h2>11.8 القصة الحقيقية 2: "الشريحة العظمية التي تطلبت IUSS"</h2>
    <h3>11.8 Real Story 2: "The Bone Flap That Required IUSS"</h3>

    <div class="quote-box">
        <p><strong>11.8.1 المشهد (The scene):</strong><br>
        أثناء جراحة أعصاب معقدة، أُسقطت شريحة عظمية (Bone flap) خاصة بالمريض (جمجمة) على الأرض. لا يمكنك طلب بديل من المخزن. لا يمكنك الانتظار 3 ساعات لمعالجة قياسية.</p>
        <p><span class="english-term"><strong>The scene:</strong> During a complex neurosurgery, the patient's own bone flap (skull) was dropped on the floor. You cannot order a replacement from stores. You cannot wait 3 hours for standard processing.</span></p>
        
        <p><strong>11.8.2 النقاش (The debate):</strong><br>
        أراد البعض نقعها في المطهر. أصرت قيادة غرفة العمليات على التعقيم الفوري (IUSS) وفقاً لبروتوكول صارم: تنظيف دقيق في المسرح (Decontamination)، ووضعها في حاوية IUSS معتمدة، ودورة كاملة موثقة، ونقل آمن للعودة إلى الحقل.</p>
        <p><span class="english-term"><strong>The debate:</strong> Some wanted to soak it in antiseptic. OR leadership insisted on IUSS under strict protocol: meticulous cleaning in theatre, placed in an approved IUSS rigid container, full cycle documented, and safe transport back to the field.</span></p>
        
        <p><strong>11.8.3 النظام، وليس العادة (The system, not the habit):</strong><br>
        تم إجراء IUSS وتم إنقاذ الشريحة بأمان. <strong>هذا هو الغرض الحقيقي من IUSS.</strong> لاحقاً، قمنا بمراجعة الحدث ليس كـ "خطأ في IUSS" ولكن كـ "حدث سقوط أداة". (AAMI ST79; IHI)</p>
        <p><span class="english-term"><strong>The system, not the habit:</strong> The IUSS was performed and the flap safely rescued. <strong>This is what IUSS is actually for.</strong> Later, we reviewed the event not as an "IUSS error" but as a "dropped item event." (AAMI ST79; IHI)</span></p>
    </div>

    <h2>11.9 أدوات عملية لموثوقية واجهة OR–CSSD</h2>
    <h3>11.9 Practical Tools for OR–CSSD Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>11.9.1 الأداة 1 — قائمة تحقق استخدام الأداة لغرفة العمليات (Point-of-Use):</strong><br>
            "هل تم تنظيف التجويف؟ هل تم وضع رغوة الإنزيم؟ هل تم عزل الأدوات الحادة؟" يتم التحقق منها قبل خروج الصينية من غرفة العمليات. (AORN)</li>
            <br>
            <li><strong>11.9.2 الأداة 2 — سجل استثناءات الأطقم المعارة (Loaner Exception Log):</strong><br>
            أي طقم إعارة يصل متأخراً يتطلب توقيع القيادة للمضي قدماً. يقلل هذا من الالتفافات (Workarounds). (IHI)</li>
            <br>
            <li><strong>11.9.3 الأداة 3 — قائمة الفحص النهائي (The Last Check):</strong><br>
            قبل فتح أي صينية في غرفة العمليات، يجب على الممرضة قراءة المؤشرات بصوت عالٍ: "الأشرطة تغيرت، التغليف سليم، المؤشر الداخلي مقبول، لا توجد رطوبة." (AORN; WHO SSC)</li>
            <br>
            <li><strong>11.9.4 الأداة 4 — سجل أحداث IUSS:</strong><br>
            كل دورة IUSS يجب أن توثق: اسم المريض، الأداة، السبب (سقطت، غير كافية، إلخ)، والتوقيعات. <strong>الاستخدام المرتفع للـ IUSS = فشل في الشراء أو الجدولة.</strong> (AAMI ST79; IHI)</li>
        </ul>
    </div>

    <h2>11.10 القياس (المؤشرات الاستباقية لموثوقية التعقيم)</h2>
    <h3>11.10 Measurement (Leading Indicators of Sterilization Reliability)</h3>

    <h3>11.10.1 المؤشرات الاستباقية / Leading Indicators</h3>
    <ul>
        <li>معدل الامتثال لمعالجة نقطة الاستخدام (Point-of-use compliance). (AORN)</li>
        <li>النسبة المئوية للأطقم المعارة التي تصل ضمن نافذة الـ 48-72 ساعة. (IHI)</li>
        <li>معدل استخدام IUSS (كـ % من إجمالي الإجراءات). (AAMI ST79)</li>
        <li>معدل الحزم الرطبة / عيوب التغليف المكتشفة في غرفة العمليات. (AAMI ST79)</li>
    </ul>

    <h3>11.10.2 إغلاق حلقة التعلم / Closing the loop</h3>
    <p>عندما تعيد غرفة العمليات صينية متسخة، يجب ألا تُخفى كـ "شكوى". يجب تتبعها كحادث جودة (Quality incident) لحل السبب الجذري. (AHRQ; IHI)</p>

    <h2>11.11 تأملات الكاتب (بعد سنوات في المسرح الجراحي)</h2>
    <h3>11.11 The Writer's Reflection</h3>

    <h3>11.11.1 أنت لا تثق في المؤشر؛ أنت تثق في العملية</h3>
    <p>اللون الذي يتغير على شريط كيميائي يخبرك فقط أن الحرارة وصلت إلى تلك البقعة. إنه لا يخبرك أن الأداة تم تنظيفها من الدم قبل وضعها في الآلة. <strong>الموثوقية تكمن في الأشخاص والعملية، وليس فقط في الآلة.</strong></p>
    <p><span class="english-term"><strong>11.11.1 You don’t trust the indicator; you trust the process</strong><br>A color changing on a chemical tape only tells you heat reached that spot. It does not tell you the instrument was scrubbed free of blood before it went into the machine. <strong>Reliability is in the people and the process, not just the machine.</strong></span></p>

    <h3>11.11.2 حماية فريق CSSD هو حماية لغرفة العمليات</h3>
    <p>إذا قمت بالضغط على قسم التعقيم (CSSD) للتسرع، فإنك تجبرهم على تقليل جودة الفحص. إن التسرع في التنظيف يؤدي مباشرة إلى سرير المريض. (IHI)</p>
    <p><span class="english-term"><strong>11.11.2 Protecting the CSSD team protects the OR</strong><br>If you pressure CSSD to rush, you force them to reduce inspection quality. Rushing the wash goes straight to the patient’s bed. (IHI)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>معالجة الأدوات هي نظام لسلامة المرضى: التنظيف ← الفحص ← التغليف ← التعقيم ← التخزين ← نقطة الاستخدام، ويجب أن تكون جميعها موثوقة. (AAMI ST79; AORN)<br>
            <span class="english-term">Instrument processing is a patient safety system: cleaning → inspection → packaging → sterilization → storage → point-of-use must all be reliable.</span></li>
            
            <li>الحزم الرطبة (Wet packs)، تلف التغليف، والمؤشرات غير المؤكدة هي <strong>عدم مطابقة (Nonconformities)</strong>—لا تتفاوض؛ استبدلها وصعّد. (AAMI ST79)<br>
            <span class="english-term">Wet packs, packaging damage, and uncertain indicators are nonconformities—do not negotiate; replace and escalate.</span></li>
            
            <li>الـ IUSS ليس حلاً روتينياً؛ الاستخدام المتكرر يشير إلى ضعف في النظام يجب إصلاحه مبكراً (Upstream). (AAMI ST79; IHI)<br>
            <span class="english-term">IUSS is not a routine solution; frequent use signals system weakness that must be fixed upstream.</span></li>
            
            <li>تتطلب الأطقم المعارة بوابات جاهزية مبكرة ونوافذ وصول صارمة لمنع الضغط غير الآمن على CSSD. (IHI; AORN)<br>
            <span class="english-term">Loaner sets require early readiness gates and strict arrival windows to prevent unsafe pressure on CSSD.</span></li>
            
            <li>تحتاج واجهة OR–CSSD إلى تواصل مغلق الحلقة (Closed-loop)، قواعد تصعيد، وحلقة تعلم—وليس إلقاء اللوم. (AHRQ; IHI)<br>
            <span class="english-term">OR–CSSD interface needs closed-loop communication, escalation rules, and a learning loop—not blame.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79: Comprehensive guide to steam sterilization and sterility assurance in health care facilities.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (sterile processing interface, point-of-use handling, sterile integrity checks, OR practices).</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (handoffs, communication, safety culture, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, measurement, learning loops, production pressure management).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  31: `<!-- Download Button -->
    

    <div class="part-title">PART VI — Learning, Investigation, and Continuous Improvement</div>
    <div class="part-title">الجزء السادس — التعلم، التحقيق، والتحسين المستمر</div>
    
    <h1>CHAPTER 31 — Simulation, Drills, and Safety-Critical Competency Maintenance</h1>
    <div class="subtitle">الفصل الحادي والثلاثون — المحاكاة، التدريبات، والحفاظ على الكفاءات الحرجة للسلامة<br>
    <span style="font-size: 18px;">(Fire Drills • Count Discrepancy Drills • Sterility Breach Drills • Crisis Teamwork in OR)<br>
    (تدريبات الحريق • تدريبات تباين العد • تدريبات اختراق العقامة • العمل الجماعي وقت الأزمات في غرفة العمليات)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>بناء برنامج محاكاة عملي لغرفة العمليات يعزز <strong>الكفاءات الحرجة للسلامة (Safety-critical competencies)</strong> بمرور الوقت، وليس فقط في مرحلة التوجيه (Orientation). (IHI; AHRQ)<br>
            <span class="english-term">Build a practical OR simulation program that strengthens <strong>safety-critical competencies</strong> over time, not just at orientation. (IHI; AHRQ)</span></li>
            
            <li>تشغيل <strong>تدريبات الحريق (Fire drills)</strong> تُعلّم بوضوح تام الأدوار، وتمييز المخاطر، وسلوكيات الاستجابة الفورية في السيناريوهات عالية الخطورة. (NFPA 99 concepts; ASA/APSF fire concepts)<br>
            <span class="english-term">Run <strong>fire drills</strong> that teach real role clarity, hazard recognition, and immediate response behaviors in high-risk scenarios. (NFPA 99 concepts; ASA/APSF fire concepts)</span></li>
            
            <li>تشغيل <strong>تدريبات تباين العد الجراحي (Count discrepancy drills)</strong> لحماية التواصل الهادئ، الاستخدام الصحيح للخوارزمية، انضباط التوثيق، والتصعيد بدون نزاعات. (AORN concepts; AHRQ)<br>
            <span class="english-term">Run <strong>count discrepancy drills</strong> that protect calm communication, correct algorithm use, documentation discipline, and escalation without conflict. (AORN concepts; AHRQ)</span></li>
            
            <li>تشغيل <strong>تدريبات اختراق العقامة (Sterility breach drills)</strong> لتوحيد الاكتشاف، الإجراءات التصحيحية الفورية، واستعادة الحقل—بدون خجل أو إنكار. (AORN concepts)<br>
            <span class="english-term">Run <strong>sterility breach drills</strong> that standardize detection, immediate corrective actions, and field recovery—without shame or denial. (AORN concepts)</span></li>
            
            <li>تدريب <strong>العمل الجماعي وقت الأزمات (Crisis teamwork)</strong> باستخدام التواصل المغلق الحلقة (Closed-loop communication)، التحدث بصوت عالٍ (Speaking up)، وعادات الإيجاز/الاستخلاص المنظمة التي تصمد تحت الضغط. (AHRQ; TeamSTEPPS concepts)<br>
            <span class="english-term">Train <strong>crisis teamwork in OR</strong> using closed-loop communication, speaking up, and structured brief/debrief habits that survive stress. (AHRQ; TeamSTEPPS concepts)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "عندما ينقذ التدريب الموقف الهادئ"</strong><br>
        <span class="english-term">A true-to-life case: “When training rescues the calm moment” (Real Scientific Story)</span>
    </div>

    <p>غرفة العمليات مكان غريب: يمكن أن تبدو هادئة حتى الثانية التي تسبق فقدان هذا الهدوء. وعندما تأتي تلك الثانية، فإنك لا ترتقي إلى مستوى نواياك—بل تنخفض إلى مستوى تدريبك. (AHRQ; IHI)</p>
    <p><span class="english-term">The OR is a strange place: it can look calm right up to the second it isn’t. And when that second arrives, you do not rise to the level of your intentions—you fall to the level of your training. (AHRQ; IHI)</span></p>

    <p>أتذكر لحظة في سنواتي الأولى عندما ظهر خيط دخان صغير بالقرب من الفرش الجراحي. توقف الجراح. قال أحدهم، "هذا لا شيء". لكن صوتاً آخر—هادئاً ولكن حازماً—قال، "توقف. خطر حريق." تردد الفريق للحظة، وتلك اللحظة كانت الفارق بين استجابة مُحكمة وبين الهلع.</p>
    <p><span class="english-term">A documented clinical case: when a small wisp of smoke appeared near the drapes. The surgeon paused. Someone said, “It’s nothing.” Another voice—quiet but firm—said, “Stop. Fire risk.” The team hesitated for a heartbeat, and that heartbeat was the difference between a controlled response and panic.</span></p>

    <div class="alert-box">
        <p>ما صنع الفارق لم يكن الشجاعة. كان الألفة. لقد تدربت الغرفة على ما يجب فعله. الأدوار كانت معروفة. الكلمات كانت معروفة. ترتيب الإجراءات كان معروفاً. وعندما تعرف غرفة العمليات السيناريو (Script)، يمكنها التصرف دون ضوضاء. (NFPA 99 concepts; ASA/APSF fire concepts)</p>
        <p><span class="english-term">What made the difference was not courage. It was familiarity. The room had practiced what to do. Roles were known. Words were known. The order of actions was known. And when the OR knows the script, it can act without noise. (NFPA 99 concepts; ASA/APSF fire concepts)</span></p>
    </div>

    <div class="success-box">
        <p>لهذا السبب يُعد هذا الفصل مهماً. السياسات لا تعمل في حالات الطوارئ. <strong>الأشخاص هم من يعملون.</strong> والأشخاص يعملون بناءً على رد فعل (Reflex) مُتدرب عليه—خاصة تحت الضغط، والتسلسل الهرمي، والضوضاء، وضغط الوقت. <strong>المحاكاة والتدريبات هي الطريقة التي تبني بها ردود الفعل التي تحمي المرضى والموظفين.</strong> (AHRQ)</p>
        <p><span class="english-term">That is why this chapter matters. Policies do not run in emergencies. <strong>People do.</strong> And people run on practiced reflex—especially under stress, hierarchy, noise, and time pressure. <strong>Simulation and drills are how you build the reflexes that protect patients and staff.</strong> (AHRQ)</span></p>
    </div>

    <h2>31.1 لماذا تُعد المحاكاة والتدريبات حواجز سلامة (وليست "تدريباً إضافياً") / Why Simulation and Drills Are OR Safety Barriers</h2>

    <h3>31.1.1 الكفاءة تتدهور دون تعزيز / Competence decays without reinforcement</h3>
    <p>المهارات تنحرف. الناس ينسون. الفِرَق تتغير. المعدات تتغير. سير العمل يتغير. إذا لم يتم تحديث الكفاءة، تُصبح غرفة العمليات بهدوء أقل موثوقية—حتى عندما يشعر الجميع بأنهم خبراء. (AHRQ)</p>
    <p><span class="english-term"><strong>31.1.1 Competence decays without reinforcement</strong><br>Skills drift. People forget. Teams change. Equipment changes. Workflow changes. If competency is not refreshed, the OR quietly becomes less reliable—even while everyone feels experienced. (AHRQ)</span></p>

    <h3>31.1.2 غرفة العمليات هي بيئة فريق؛ والكفاءة تكون جماعية / The OR is a team environment; competence is partly collective</h3>
    <p>العديد من إخفاقات غرفة العمليات ليست "عدم كفاءة فنية". بل هي انهيارات في تنسيق الفريق: قيادة غير واضحة، الصمت تحت وطأة التسلسل الهرمي، المقاطعات، والارتباك في الأدوار أثناء الضغط. المحاكاة تدرب الفريق بأكمله، وليس الفرد فقط. (AHRQ; TeamSTEPPS concepts)</p>
    <p><span class="english-term"><strong>31.1.2 The OR is a team environment; competence is partly collective</strong><br>Many OR failures are not “technical incompetence.” They are breakdowns in team coordination: unclear leadership, silence under hierarchy, interruptions, and role confusion during pressure. Simulation trains the team, not only the individual. (AHRQ; TeamSTEPPS concepts)</span></p>

    <h3>31.1.3 التدريبات تخلق لغة مشتركة / Drills create shared language</h3>
    <p>في الأزمات الحقيقية، تحتاج الغرفة إلى عبارات مشتركة تحفز الإجراءات:</p>
    <p><span class="english-term">In real crises, the room needs shared phrases that trigger action:</span></p>
    <ul>
        <li>"توقف—خطر حريق / Stop—fire risk"</li>
        <li>"توقف إلزامي—تباين في العد / Hard stop—count discrepancy"</li>
        <li>"اختراق العقامة—الحقل مخترق / Sterility breach—field compromised"</li>
    </ul>
    <p>اللغة المشتركة تقلل من التأخير والنقاش. (AHRQ; AORN concepts)</p>

    <h3>31.1.4 الهدف ليس الكمال؛ بل الاستجابة الموثوقة تحت الضغط / The goal is not perfection</h3>
    <p>المحاكاة ليست اختباراً لإذلال الموظفين. إنها ممارسة لجعل السلوك الآمن تلقائياً (Automatic). (AHRQ)</p>

    <h2>31.2 تصميم برنامج محاكاة لغرفة العمليات يعمل حقاً / Designing an OR Simulation Program That Actually Works</h2>

    <h3>31.2.1 اجعله قصيراً، متكرراً، وواقعياً / Make it short, frequent, and realistic</h3>
    <p>لا يمكن لغرفة العمليات أن تتحمل فترات طويلة في الفصول الدراسية بشكل متكرر. النموذج الأكثر استدامة هو:</p>
    <p><span class="english-term">The OR cannot tolerate long classroom blocks repeatedly. The most sustainable model is:</span></p>
    <ul>
        <li>تدريبات قصيرة (10-20 دقيقة).</li>
        <li>في البيئة الفعلية كلما أمكن (In-situ).</li>
        <li>التركيز على سلوك واحد حرج للسلامة في كل مرة. (IHI; AHRQ)</li>
    </ul>

    <h3>31.2.2 استخدم تقويم تدريب مبني على المخاطر / Use a risk-based drill calendar</h3>
    <p>أعط الأولوية للتدريبات التي تمنع الضرر شديد الخطورة:</p>
    <ul>
        <li>حريق غرفة العمليات (OR fire).</li>
        <li>العناصر المتروكة / تباين العد الجراحي.</li>
        <li>اختراقات العقامة واستعادة الحقل.</li>
        <li>التسمية الخاطئة للعينات / الحوادث الوشيكة في سلسلة العهدة.</li>
        <li>الاستجابة لعطل المعدات الحرجة (شفط/ESU/طاقة) حيثما ينطبق. (AORN concepts; NFPA 99 concepts; ECRI concepts)</li>
    </ul>

    <h3>31.2.3 ابْنِ السلامة النفسية في التصميم / Build psychological safety into the design</h3>
    <p>إذا خاف الموظفون من التدريبات، فإنهم سيؤدونها فقط للمظهر، وليس للحقيقة. ضع قاعدة واضحة: <strong>"التدريبات مخصصة لتعلم النظام؛ وهي ليست أدوات تأديبية."</strong> (AHRQ)</p>
    <p><span class="english-term"><strong>31.2.4 Build psychological safety into the design</strong><br>If staff fear drills, they will perform for appearance, not for truth. Make a clear rule: “Drills are for system learning; they are not disciplinary tools.” (AHRQ)</span></p>

    <h3>31.2.4 درّب المُدربين / Train the trainers</h3>
    <p>ينهار برنامج التدريب عندما يكون المُيسرون (Facilitators) غير مستعدين. يحتاجون إلى نص (Script) بسيط: ضع السيناريو، راقب، أوقف في اللحظة الرئيسية، استخلص المعلومات (Debrief)، ووثّق إجراء تحسين واحداً. (IHI)</p>

    <h2>31.3 تدريبات الحريق (أزمة غرفة العمليات الأكثر حرجاً للوقت) / Fire Drills (The OR’s Most Time-Critical Crisis)</h2>

    <h3>31.3.1 لماذا يجب ممارسة تدريبات الحريق، وليس تدريسها فقط / Why fire drills must be practiced</h3>
    <p>أحداث الحريق نادرة ولكنها سريعة. إذا تردد الفريق، فإن البيئات الغنية بالأكسجين ومصادر الاشتعال يمكن أن تخلق تصعيداً سريعاً. (ASA/APSF fire concepts; NFPA 99 concepts)</p>

    <h3>31.3.2 أهداف تدريب الحريق (ما يجب أن تبنيه) / Fire drill goals</h3>
    <p><strong>التعرف المبكر (Early recognition):</strong> على ظروف خطر الحريق (إثراء الأكسجين، مصدر اشتعال، وقود).<br>
    <strong>سلوكيات الإيقاف الفوري:</strong> إيقاف الطاقة، التحكم في الأكسجين، إزالة الوقود.<br>
    <strong>وضوح الدور:</strong> من يفعل ماذا.<br>
    <strong>التواصل الهادئ.</strong> (ASA/APSF fire concepts; AHRQ)</p>
    <p><span class="english-term">early recognition of fire risk conditions, immediate stop behaviors, role clarity, calm communication.</span></p>

    <h3>31.3.3 تصميم السيناريوهات (سيناريوهات عالية العائد) / Scenario design (high-yield OR fire scenarios)</h3>
    <div class="concept-box">
        <ul>
            <li><strong>31.3.3.1 جراحة الرأس/العنق مع توصيل أكسجين مفتوح:</strong> قم بمحاكاة "رائحة دخان" بالقرب من الفرش أثناء استخدام الكي مع توصيل الأكسجين. الهدف: توقف، تحكم في الأكسجين، احمِ مجرى الهواء، أدر الفرش بأمان. (ASA/APSF fire concepts)</li>
            <li><strong>31.3.3.2 تحضير كحولي غير جاف + اشتعال:</strong> قم بمحاكاة خطر اشتعال وشيك: يجب على الفريق تأكيد وقت الجفاف ومنع تنشيط الطاقة حتى يصبح آمناً. (AORN concepts; NFPA 99 concepts)</li>
            <li><strong>31.3.3.3 حالة ليزر/طاقة مع عمود دخان وعلامات خطر:</strong> قم بمحاكاة غياب حماية العين أو فشل إخلاء الدخان، مما يُجبر على التصعيد والتوقف الإلزامي. (AORN concepts; NIOSH concepts)</li>
        </ul>
    </div>

    <h3>31.3.4 وضوح الدور في الاستجابة للحريق / Role clarity in fire response (OR-side focus)</h3>
    <p>في التدريبات، حدد بوضوح إجراءات الأدوار:</p>
    <ul>
        <li>من يُعلن "خطر حريق"؟</li>
        <li>من يُوقف مصدر الاشتعال؟</li>
        <li>من يُدير الفرش/إزالة الوقود؟</li>
        <li>من يُفعّل الإنذار ويُحضر الطفاية إذا لزم الأمر؟ (NFPA 99 concepts; AHRQ)</li>
    </ul>

    <div class="alert-box">
        <h3>31.3.5 المقياس الأهم لتدريب الحريق / The most important fire drill metric</h3>
        <p><strong>وقت رد الفعل + التسلسل الصحيح</strong> (Reaction time + correct sequence). ليس "هل عرفت النظرية"، بل "هل قام الفريق بالخطوات الصحيحة دون ارتباك". (ASA/APSF fire concepts)</p>
    </div>

    <h2>31.4 تدريبات تباين العد (منع العناصر المتروكة عبر خوارزميات هادئة) / Count Discrepancy Drills</h2>

    <h3>31.4.1 لماذا تصبح تباينات العد خطيرة بدون ممارسة / Why count discrepancies become dangerous without practice</h3>
    <p>التباين يثير التوتر: الجراح يريد الإغلاق، الفريق يشعر بالضغط، والتواصل يمكن أن يصبح حاداً. هذا هو بالضبط الوقت الذي يقوم فيه الأشخاص بـ "الحل" بشكل غير رسمي. الحل غير الرسمي هو بذرة العناصر المتروكة. (AORN concepts; AHRQ)</p>
    <p><span class="english-term"><strong>31.4.1 Why count discrepancies become dangerous without practice</strong><br>A discrepancy triggers stress: the surgeon wants closure, the team feels pressure, and communication can become sharp. This is exactly when people “resolve” informally. Informal resolution is the seed of retained items. (AORN concepts; AHRQ)</span></p>

    <h3>31.4.2 أهداف التدريب / Drill goals</h3>
    <ul>
        <li>تشغيل خوارزمية التباين (Discrepancy algorithm) خطوة بخطوة.</li>
        <li>حماية التواصل الهادئ وسلطة التوقف الإلزامي (Hard stop authority).</li>
        <li>ممارسة التوثيق والتحقق المغلق الحلقة. (AORN concepts)</li>
    </ul>

    <h3>31.4.3 سيناريوهات التدريب / Scenarios to drill</h3>
    <div class="concept-box">
        <ul>
            <li><strong>31.4.3.1 إسفنجة مفقودة أثناء الإغلاق:</strong> يجب أن يجبر التدريب الفريق على: التوقف، إعادة العد، البحث المنهجي، والتصعيد. (AORN concepts)</li>
            <li><strong>31.4.3.2 سيناريو "المقاطعات":</strong> محاكاة تباين مع حدوث مشتتات متعددة (رنين هاتف، سؤال من عامل نظافة). الهدف: التحكم في المقاطعات وحماية سلامة العد. (AHRQ)</li>
            <li><strong>31.4.3.3 تعقيد تسليم الإعفاء (Relief handoff complication):</strong> محاكاة تبديل الموظفين في منتصف الحالة؛ ثم يظهر التباين. الهدف: التحقق من طريقة التسليم ومنع عمليات التسليم الغامضة. (AHRQ; AORN concepts)</li>
        </ul>
    </div>

    <h2>31.5 تدريبات اختراق العقامة (إيقاف الإنكار، وتوحيد الاستعادة) / Sterility Breach Drills</h2>

    <h3>31.5.1 لماذا لا يُبلغ عن اختراقات العقامة / Why sterility breaches are underreported</h3>
    <p>العديد من الاختراقات تكون دقيقة: كُم يلامس سطحاً غير معقم، فتح حزمة مبكراً جداً، أداة تسقط ويتم "إنقاذها". يخاف الناس من الإحراج، لذا ينكرون أو يقللون من الأهمية. الإنكار هو صديق التلوث. (AORN concepts; AHRQ)</p>
    <p><span class="english-term"><strong>31.5.1 Why sterility breaches are underreported</strong><br>Many breaches are subtle: a sleeve brushes a non-sterile surface, a pack is opened too early, a sterile item drops and is “rescued.” People fear embarrassment, so they deny or minimize. Denial is contamination’s friend. (AORN concepts; AHRQ)</span></p>

    <h3>31.5.2 أهداف التدريب / Drill goals</h3>
    <p>تعليم الفريق التعرف على الاختراقات بسرعة، ممارسة الإجراء التصحيحي الفوري ("استعادة الحقل/Field recovery")، ممارسة التحدث دون خجل. (AORN concepts)</p>

    <h3>31.5.3 سيناريوهات للتدريب / Scenarios to drill</h3>
    <ul>
        <li>تمزق قفاز أو تلوث الكم.</li>
        <li>سقوط أداة معقمة وكادت أن تُستخدم مجدداً.</li>
        <li>فتح معقم مبكر جداً أثناء التبديل (Turnover). (AORN concepts; IHI)</li>
    </ul>

    <div class="success-box">
        <h3>31.5.4 القاعدة الاجتماعية لتدريب اختراق العقامة / The sterility breach drill “social rule”</h3>
        <p>القاعدة الأهم هي قاعدة ثقافية: <strong>الشخص الذي يتحدث (Speak up) يُمدح، ولا يُعاقب.</strong> (AHRQ)</p>
        <p><span class="english-term"><strong>31.5.4 The sterility breach drill “social rule”</strong><br>The most important rule is cultural: The person who speaks up is praised, not punished. (AHRQ)</span></p>
    </div>

    <h2>31.6 العمل الجماعي وقت الأزمات (المهارات التي تُنجح كل التدريبات) / Crisis Teamwork in OR</h2>

    <h3>31.6.1 التواصل المغلق الحلقة هو أكسجين غرفة العمليات أثناء الأزمة</h3>
    <p>المغلق الحلقة (Closed-loop) يعني: نداء ← إقرار ← تأكيد. يمنع عبارة "اعتقدت أن شخصاً آخر فعل ذلك." (AHRQ; TeamSTEPPS concepts)</p>
    <p><span class="english-term"><strong>31.6.1 Closed-loop communication is the OR’s oxygen during crisis</strong><br>Closed-loop means: callout → acknowledgment → confirmation. It prevents “I thought someone else did it.” (AHRQ; TeamSTEPPS concepts)</span></p>

    <h3>31.6.2 الإيجاز والاستخلاص (Brief and debrief) كأبسط تقنيات العمل الجماعي</h3>
    <ul>
        <li><strong>الإيجاز (Brief):</strong> "ما هي مخاطر اليوم؟ من هي المرساة؟ ما هي التوقفات الإلزامية؟" (WHO SSC concepts; AHRQ)</li>
        <li><strong>الاستخلاص (Debrief):</strong> "ماذا سار جيداً؟ ماذا كاد أن يفشل؟ ما الذي سنغيره؟" (IHI)</li>
    </ul>

    <h2>31.7 بناء جلسة التدريب (صيغة بسيطة وقابلة للتكرار) / Building the Drill Session</h2>

    <h3>31.7.1 الإيجاز المسبق (2 دقائق) / Pre-brief</h3>
    <p>"هذا تدريب للتعلم، وليس عقاباً." حدد هدفاً واحداً (استجابة حريق / خوارزمية تباين). (AHRQ)</p>
    
    <h3>31.7.2 السيناريو (5-10 دقائق) / Scenario</h3>
    <p>شغل السيناريو حتى تظهر نقطة القرار الرئيسية. راقب السلوك، وليس النظرية.</p>

    <h3>31.7.3 الاستخلاص (10 دقائق، مُهيكل) / Debrief</h3>
    <p>اسأل 3 أسئلة:</p>
    <ol>
        <li>ماذا حدث؟</li>
        <li>ما الذي ساعدنا على النجاح أو كاد يفشلنا؟</li>
        <li>ما هو <strong>التغيير الوحيد</strong> الذي سنطبقه فوراً؟ (IHI)</li>
    </ol>
    <p>كل تدريب يجب أن ينتج إجراء تحسين ملموس (مالك + تاريخ استحقاق). (IHI)</p>

    <h2>31.8 الحفاظ على الكفاءة (كيف تُبقي المهارات حية لسنوات) / Competency Maintenance</h2>

    <h3>31.8.1 نموذج مستدام (A sustainable model)</h3>
    <ul>
        <li>تدريبات مصغرة ربع سنوية للحريق.</li>
        <li>تدريبات تباين العد شهرية (لفرق متناوبة).</li>
        <li>تدريبات اختراق العقامة شهرية (مرتبطة بتدقيق التبديل). (IHI)</li>
    </ul>

    <h3>31.8.2 استخدم "علامات الكفاءة" المرتبطة بالأداء المُثبت / Competency tags</h3>
    <p>احتفظ بسجل كفاءات لغرفة العمليات: مَن يمكنه قيادة خوارزمية التباين، مَن مُدرب على قيادة الاستجابة للحريق. يجب أن تكون الكفاءة مُثبتة، وليست مُفترضة. (AHRQ; AORN concepts)</p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>التدريبات تبني رد الفعل (Reflex). تحت الضغط، تعود الفرق إلى سلوكياتها المُدربة—وليس لنواياها الحسنة. (AHRQ)<br>
            <span class="english-term">Drills build reflex. Under stress, teams fall to trained behaviors—not to good intentions.</span></li>
            
            <li>تُعد تدريبات الحريق، وتباين العد، واختراق العقامة حواجز سلامة يجب ممارستها في ظروف غرفة العمليات الواقعية. (NFPA 99 concepts; AORN concepts)<br>
            <span class="english-term">Fire drills, count discrepancy drills, and sterility breach drills are safety barriers that must be practiced in realistic OR conditions.</span></li>
            
            <li>العمل الجماعي وقت الأزمات (الحلقة المغلقة، وضوح الدور، التحدث بصوت عالٍ، الاستخلاص) هو المحرك الذي يُنجح جميع التدريبات الفنية. (AHRQ; TeamSTEPPS concepts)<br>
            <span class="english-term">Crisis teamwork (closed-loop, role clarity, speaking up, brief/debrief) is the engine that makes technical drills succeed.</span></li>
            
            <li>يخلق برنامج التدريب الجيد حلقات تعلم: كل تدريب ينتج تحسيناً صغيراً في النظام بمالك، وموعد نهائي، وتحقق. (IHI)<br>
            <span class="english-term">A good drill program creates learning loops: every drill produces a small system improvement with an owner, deadline, and verification.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety and teamwork resources (human factors under stress, psychological safety, reporting culture, TeamSTEPPS concepts).</li>
            <li>Institute for Healthcare Improvement (IHI) — Reliability, sustainability, and learning-loop resources (standard work, audit-to-action cycles, measurement for improvement).</li>
            <li>Association of periOperative Registered Nurses (AORN) — Perioperative practice concepts (sterile technique reliability, counts discipline, breach recovery behaviors).</li>
            <li>National Fire Protection Association (NFPA) 99 (concepts) — Health care facilities fire/electrical safety concepts relevant to OR fire response and preparedness.</li>
            <li>American Society of Anesthesiologists (ASA) / Anesthesia Patient Safety Foundation (APSF) OR Fire resources (concepts) — OR fire prevention and response concepts (fire triangle in OR context, high-risk scenarios).</li>
            <li>Institute for Safe Medication Practices (ISMP) (concepts) — Medication safety behaviors relevant to simulation of labeling and sterile-field handling.</li>
            <li>ECRI (concepts) — Technology hazard and device-readiness concepts supporting equipment-failure drill design.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  21: `<!-- Download Button -->
    

    <div class="part-title">PART IV — Medications, Blood, and Perioperative Emergencies</div>
    <div class="part-title">الجزء الرابع — الأدوية، الدم، وحالات الطوارئ المحيطة بالجراحة</div>
    
    <h1>CHAPTER 21 — Medication Handling Inside the OR (Non-Anesthesia Scope)</h1>
    <div class="subtitle">الفصل الحادي والعشرون — التعامل مع الأدوية داخل غرفة العمليات (خارج نطاق التخدير)<br>
    <span style="font-size: 18px;">(Topical/Irrigation Meds • Sterile Meds on Field • Labelling • Look-Alike/Sound-Alike Risks)<br>
    (الأدوية الموضعية/الري • الأدوية المعقمة في الحقل • التسمية • مخاطر الأدوية المتشابهة في الشكل والصوت)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد "الأدوية غير التخديرية في غرفة العمليات" مجالاً عالي الخطورة حيث يمكن <strong>لاختصارات التسمية الصغيرة</strong> أن تتحول إلى أضرار الدواء الخاطئ/الطريق الخاطئ/المريض الخاطئ. (ISMP; AHRQ; The Joint Commission)<br>
            <span class="english-term">Explain why “non-anesthesia meds in the OR” are a high-risk domain where <strong>small labeling shortcuts</strong> can become wrong drug/wrong route/wrong patient harm. (ISMP; AHRQ; The Joint Commission)</span></li>
            
            <li>بناء سير عمل آمن لـ <strong>الأدوية الموضعية وسوائل الري (Topical and irrigation medications)</strong> (المضادات الحيوية الموضعية، المطهرات، مقبضات الأوعية، مرقئات النزيف، المخدرات الموضعية المستخدمة من قبل الجراحين) مع تحكم واضح في مسار الإعطاء وصفر غموض. (AORN; ISMP)<br>
            <span class="english-term">Build a safe workflow for <strong>topical and irrigation medications</strong> (local antibiotics, antiseptics, vasoconstrictors, hemostatics, local anesthetics used by surgeons) with clear route control and zero ambiguity. (AORN; ISMP)</span></li>
            
            <li>ترسيخ انضباط الأدوية في الحقل المعقم: <strong>أدوية معقمة في الحقل (Sterile meds on field)</strong>، تحضير دواء واحد في كل مرة، التحقق المستقل للأدوية عالية الخطورة، والتوقف الإلزامي لـ "لا توجد أكواب/محاقن غير مسماة". (AORN; ISMP)<br>
            <span class="english-term">Establish sterile-field medication discipline: <strong>sterile meds on field</strong>, one-at-a-time preparation, independent verification for high-alert agents, and “no unlabeled cups/syringes” hard stops. (AORN; ISMP)</span></li>
            
            <li>منع <strong>أخطاء LASA (الأدوية المتشابهة في الشكل/الصوت)</strong> باستخدام تصميم التخزين، والتركيزات القياسية، والخيارات المعبأة مسبقاً/الجاهزة للاستخدام حيثما توفرت، والمساعدات المعرفية. (ISMP; The Joint Commission)<br>
            <span class="english-term">Prevent <strong>LASA errors (look-alike/sound-alike)</strong> using storage design, standard concentrations, prefilled/ready-to-use options where available, and cognitive aids. (ISMP; The Joint Commission)</span></li>
            
            <li>تنفيذ توثيق جاهز للتدقيق، ورصد الحوادث الوشيكة (Near-miss capture)، ومراقبة الامتثال التي تُحسن الأنظمة بدلاً من إلقاء اللوم على الأفراد. (AHRQ; IHI)<br>
            <span class="english-term">Implement audit-ready documentation, near-miss capture, and compliance monitoring that improves systems rather than blaming individuals. (AHRQ; IHI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "سائل شفاف في كوب شفاف"</strong><br>
        <span class="english-term">A true-to-life case: “A clear liquid in a clear cup” (Real Scientific Story)</span>
    </div>

    <p>إذا أردت أن تفهم لماذا تعتبر سلامة الأدوية في غرفة العمليات خطيرة بشكل فريد، انظر إلى ما تحبه غرفة العمليات: السرعة، الارتجال، والأسطح النظيفة. العديد من أدوية غرفة العمليات هي سوائل عديمة اللون توضع في أكواب معدنية أو بلاستيكية متطابقة.</p>
    <p><span class="english-term">If you want to understand why medication safety in the OR is uniquely dangerous, look at what the OR loves: speed, improvisation, and clean surfaces. Many OR medications are colorless liquids placed into identical metal or plastic cups.</span></p>

    <p>في إحدى الحالات، كانت الممرضة المعقمة (Scrub nurse) تمتلك كوبين من الستانلس ستيل على طاولتها الخلفية. الكوب الأول يحتوي على 1% ليدوكائين مع إبينفرين (مخدر موضعي لتقليل النزيف السطحي). الكوب الثاني يحتوي على إبينفرين موضعي نقي (1:1000) للسيطرة على النزيف الشديد من العظام، وهو <strong>جرعة قاتلة</strong> إذا تم حقنه.</p>
    <p><span class="english-term">In one case, a scrub nurse had two stainless-steel cups on her back table. Cup one contained 1% lidocaine with epinephrine (local anesthetic for bleeding edges). Cup two contained pure topical epinephrine (1:1,000) for severe bone bleeding, a <strong>lethal dose</strong> if injected.</span></p>

    <p>كلا السائلين كانا شفافين. ولم يكن أي من الكوبين يحمل ملصقاً. في أذهانهم، "كانوا يعرفون" أي كوب هو لأي دواء لأن أحدهما كان على اليسار والآخر على اليمين.</p>
    <p><span class="english-term">Both were clear liquids. Neither cup was labeled. In their minds, they "knew" which was which because one was on the left and the other on the right.</span></p>

    <p>حدث تغيير مفاجئ في مسار العملية. طُلب من الممرضة تمرير أداة أخرى، وتزحزحت الأكواب. التفت الجراح وطلب حقنة من الليدوكائين. التقطت الممرضة حقنة فارغة، وسحبت من أحد الأكواب، وسلمتها للجراح.</p>
    <p><span class="english-term">There was a sudden shift in the procedure. The nurse was asked to pass another instrument, and the cups shifted. The surgeon turned back and asked for a syringe of lidocaine. The nurse picked up a blank syringe, drew from one of the cups, and handed it over.</span></p>

    <div class="alert-box">
        <p>كان الجراح على وشك حقن إبينفرين بتركيز 1:1000 في أنسجة المريض. لحسن الحظ، لاحظ طبيب التخدير—الذي كان يراقب الحقل—الممرضة وهي تسحب من الكوب الخاطئ وصاح: <strong>"توقف! ماذا يوجد في تلك الحقنة؟"</strong></p>
        <p><span class="english-term">The surgeon was a fraction of a second away from injecting 1:1,000 epinephrine into the patient’s tissues. Fortunately, the anesthetist—who was watching the field—noticed the nurse draw from the wrong cup and shouted: <strong>“Stop! What is in that syringe?”</strong></span></p>
    </div>

    <p>توقف الجراح. نظرت الممرضة إلى الحقنة غير المسماة وإلى الكوبين غير المسميين، وأدركت الحقيقة المرعبة: <strong>أنها لم تكن تعرف.</strong></p>
    <p><span class="english-term">The surgeon paused. The nurse looked at the blank syringe and the two blank cups, and realized the terrifying truth: <strong>she didn’t know.</strong></span></p>

    <div class="success-box">
        <p>تم إلقاء السوائل واستبدالها بسوائل تم تسميتها فوراً. إن التوقف الإلزامي البسيط—<strong>"إذا لم أستطع قراءته، فلن أسلمه"</strong>—هو ما يحول دون أن تتحول هذه الحوادث الوشيكة (Near-misses) إلى كوارث يومية. (ISMP; AORN)</p>
        <p><span class="english-term">The liquids were dumped and replaced with immediately labeled fluids. The simple hard stop—<strong>"If I can't read it, I won't hand it over"</strong>—is what keeps these near-misses from becoming daily tragedies. (ISMP; AORN)</span></p>
    </div>

    <h2>21.1 "المنطقة العمياء" لسلامة الأدوية في غرفة العمليات</h2>
    <h3>21.1 The "Blind" Zone of OR Medication Safety</h3>

    <h3>21.1.1 أين تنتهي سلامة المستشفى التقليدية</h3>
    <p>تتوقف معظم أنظمة سلامة الأدوية في المستشفيات (مثل مسح الباركود وخزائن الصرف الآلية) عند باب غرفة العمليات. داخل المسرح الجراحي، يتم نقل الأدوية من عبواتها الأصلية إلى حقول معقمة—متجاوزة الضوابط الصيدلانية القياسية. (ISMP)</p>
    <p><span class="english-term"><strong>21.1.1 Where traditional hospital safety stops</strong><br>Most hospital medication safety systems (like barcode scanning and automated dispensing cabinets) stop at the OR door. Inside the theatre, medications are transferred out of their original packaging onto sterile fields—bypassing standard pharmacy controls. (ISMP)</span></p>

    <h3>21.1.2 اللحظة الخطيرة للنقل (The dangerous moment of transfer)</h3>
    <p>في اللحظة التي يُسكب فيها الدواء من قارورة الممرضة الدوارة (Circulating nurse) غير المعقمة إلى كوب الممرضة المعقمة (Scrub nurse)، يفقد الدواء هويته. ما لم يتم التقاط هذه الهوية على الفور بملصق (Label)، فإنه يصبح مجرد سائل مجهول الهوية. (AORN)</p>
    <p><span class="english-term"><strong>21.1.2 The dangerous moment of transfer</strong><br>The second a medication is poured from the circulating nurse’s unsterile vial into the scrub nurse’s sterile cup, the drug loses its identity. Unless that identity is immediately captured by a label, it is just anonymous liquid. (AORN)</span></p>

    <h3>21.1.3 خطر "خارج نطاق التخدير"</h3>
    <p>يتعامل هذا الفصل مع الأدوية التي يتعامل معها الفريق الجراحي وفريق التمريض: أدوية الري (Irrigation)، المعاجين الموضعية (Topical pastes)، أدوية وقف النزيف (Hemostatics)، والأصباغ (Dyes). هذه غالباً ما لا تخضع لمراقبة فريق التخدير ولديها ضوابط أضعف في النظام. (The Joint Commission)</p>
    <p><span class="english-term"><strong>21.1.3 The "non-anesthesia" risk</strong><br>This chapter addresses the meds handled by the surgical and nursing team: irrigation, topical pastes, hemostatics, and dyes. These often fly under the radar of the anesthesia team and have weaker system controls. (The Joint Commission)</span></p>

    <h2>21.2 التوقف الإلزامي لـ "لا توجد أكواب غير مسماة" (التسمية في نقطة الرعاية)</h2>
    <h3>21.2 The "No Unlabeled Cups" Hard Stop (Point of Care)</h3>

    <h3>21.2.1 القاعدة العالمية / The universal rule</h3>
    <p>يجب وضع ملصق على أي دواء، أو سائل (بما في ذلك الماء النقي والمحلول الملحي)، أو محلول يوضع على الحقل المعقم وغرف العمليات <strong>على الفور</strong>. (ISMP; The Joint Commission)</p>
    <p><span class="english-term"><strong>21.2.1 The universal rule</strong><br>Any medication, fluid (including plain water and saline), or solution placed on the sterile field and OR must be labeled <strong>immediately</strong>. (ISMP; The Joint Commission)</span></p>

    <h3>21.2.2 ما يجب أن يحتويه الملصق / What a label must contain</h3>
    <p>لا يكفي وضع قطعة من الشريط اللاصق مكتوب عليها "Lido". يجب أن يشمل الملصق:</p>
    <ul>
        <li>اسم الدواء (Drug name).</li>
        <li>التركيز (Concentration/Strength).</li>
        <li>الكمية إذا لم تكن واضحة.</li>
        <li>تاريخ الانتهاء/الوقت إذا كان سيتم استخدامه لأكثر من وردية واحدة. (AORN)</li>
    </ul>

    <h3>21.2.3 القراءة العكسية لنقل الأدوية / The medication transfer read-back</h3>
    <p>لا يتم السكب (Pouring) بصمت أبداً. عند نقل دواء إلى الحقل المعقم:</p>
    <p><span class="english-term"><strong>21.2.3 The medication transfer read-back</strong><br>Pouring is never silent. When transferring a medication to the sterile field:</span></p>
    <ol>
        <li>تعرض الممرضة الدوارة القارورة (Vial) للممرضة المعقمة وتقرأ الاسم والتركيز بصوت عالٍ.</li>
        <li>تقرأ الممرضة المعقمة الاسم والتركيز بصوت عالٍ من القارورة قبل القبول.</li>
        <li>تقوم الممرضة المعقمة بوضع الملصق المُعد مسبقاً على الكوب/الحقنة <strong>أثناء ملئها</strong>. (ISMP; AORN)</li>
    </ol>

    <h2>21.3 الأدوية الموضعية وسوائل الري (فصل مسار الإعطاء)</h2>
    <h3>21.3 Topical and Irrigation Medications (Route Separation)</h3>

    <h3>21.3.1 الري مقابل الحقن / Irrigation vs. Injection</h3>
    <p>واحدة من أكثر الأخطاء فتكاً في غرفة العمليات هي أخذ دواء مخصص للغسيل (Irrigation) (مثل المضادات الحيوية واسعة الطيف الممزوجة بالمحلول الملحي) وحقنه عن طريق الخطأ في الوريد. أو أخذ دواء موضعي (مثل الإبينفرين النقي) وحقنه كمسكن موضعي. (ISMP)</p>
    <p><span class="english-term"><strong>21.3.1 Irrigation vs. Injection</strong><br>One of the most lethal errors in the OR is taking a medication meant for irrigation (e.g., broad-spectrum antibiotics mixed with saline) and accidentally injecting it intravenously. Or taking a topical medication (like pure epinephrine) and injecting it as a local pain block. (ISMP)</span></p>

    <h3>21.3.2 التمييز البصري والفيزيائي (Visual and physical differentiation)</h3>
    <p>يتطلب التصميم الموثوق إجبار المسارات على أن تكون مختلفة:</p>
    <ul>
        <li><strong>ألوان مختلفة للأوعية:</strong> استخدم أوعية زرقاء للري، وأوعية بيضاء للحقن.</li>
        <li><strong>لا تستخدم محاقن IV للري:</strong> استخدم محاقن مخصصة للري فقط (مثل حقنة Asepto أو Toomey) للسوائل التي يجب ألا تُحقن أبداً في الأنسجة. (ISMP; AORN)</li>
        <li><strong>فصل الطاولة:</strong> قم بتخزين الأدوية الموضعية عالية الخطورة فعلياً بعيداً عن أدوية الحقن على الطاولة الخلفية.</li>
    </ul>

    <h2>21.4 الأدوية عالية الخطورة في الحقل المعقم</h2>
    <h3>21.4 High-Alert Medications on the Sterile Field</h3>

    <h3>21.4.1 أمثلة في غرفة العمليات / Examples in the OR</h3>
    <p>الهيبارين (Heparin)، الإبينفرين (Epinephrine)، الثرومبين (Thrombin)، والأصباغ (Dyes) (которая يمكن أن تتداخل مع قراءات الأكسجة). (ISMP)</p>

    <h3>21.4.2 قاعدة "دواء واحد في كل مرة" / The "one-at-a-time" rule</h3>
    <p>لا تقم أبداً بتحضير أو خلط دواءين في وقت واحد. قم بإنهاء إعداد الدواء الأول، وضع الملصق عليه، وتأكيده قبل الانتقال إلى القارورة الثانية. التحضير المتوازي يولد أخطاء الخلط. (ISMP; AORN)</p>
    <p><span class="english-term"><strong>21.4.2 The "one-at-a-time" rule</strong><br>Never prepare or mix two medications at the same time. Finish preparing the first drug, label it, and confirm it before moving to the second vial. Parallel processing breeds mixing errors. (ISMP; AORN)</span></p>

    <h3>21.4.3 التحقق المزدوج المستقل للتخفيفات / Independent double-check for dilutions</h3>
    <p>إذا كانت الممرضة الدوارة تقوم بتخفيف الهيبارين (Heparin) للحقل المعقم، فيجب أن يتم التحقق من الحسابات والقياس بشكل مستقل (رؤية القارورة + الحقنة معاً) من قبل ممرض آخر أو ممارس تخدير قبل النقل. (The Joint Commission; ISMP)</p>
    <p><span class="english-term"><strong>21.4.3 Independent double-check for dilutions</strong><br>If the circulating nurse is diluting Heparin for the sterile field, the math and measurement must be independently verified (seeing the vial + the drawn syringe together) by a second nurse or anesthesia practitioner before transfer. (The Joint Commission; ISMP)</span></p>

    <h2>21.5 مخاطر الأدوية المتشابهة في الشكل والصوت (LASA)</h2>
    <h3>21.5 Look-Alike, Sound-Alike (LASA) Risks</h3>

    <h3>21.5.1 عندما تخدعك العبوات / When packaging lies to you</h3>
    <p>غالباً ما تستخدم شركات الأدوية تصميمات عبوات متطابقة لأدوية مختلفة تماماً (مثال: قارورة صغيرة بقطاء أزرق يمكن أن تكون أي شيء). في الإضاءة الخافتة أثناء الجراحة بالمنظار، تصبح المخاطر هائلة. (ISMP)</p>

    <h3>21.5.2 الحلول المنهجية لـ LASA / System fixes for LASA</h3>
    <ul>
        <li><strong>أحرف "TALLman":</strong> كتابة الأسماء للتمييز البصري (مثال: DOBUTamine مقابل DOPamine).</li>
        <li><strong>الفصل المادي:</strong> لا تقم أبداً بتخزين أدوية LASA بجوار بعضها البعض في خزائن غرفة العمليات.</li>
        <li><strong>قراءة الملصق بالكامل:</strong> الاعتماد على لون الغطاء هو خطأ في النظام؛ اقرأ الكلمة دائماً. (ISMP; The Joint Commission)</li>
    </ul>

    <h2>21.6 القصة الحقيقية 2: "الهيبارين الذي كان يُفترض أن يكون محلولاً ملحياً"</h2>
    <h3>21.6 Real Story 2: "The Heparin that was meant to be Saline"</h3>

    <div class="quote-box">
        <p><strong>المشهد:</strong> أثناء إجراء لترقيع الأوعية الدموية (Vascular graft)، كان الجراح يحتاج إلى غسل الوعاء بمحلول ملحي مع هيبارين (Heparinized saline) لمنع التجلط.</p>
        <p><span class="english-term"><strong>The scene:</strong> During a vascular graft procedure, the surgeon needed to flush the vessel with heparinized saline to prevent clotting.</span></p>
        
        <p>كانت الممرضة الدوارة قد سكبت المحلول الملحي في وعاء على الطاولة الخلفية. وقامت بسكب جرعة نقية (مركزة) من الهيبارين في وعاء آخر لتخفيفه لاحقاً. كلا الوعائين كانا غير مسميين.</p>
        <p><span class="english-term">The circulating nurse had poured saline into a basin on the back table. She had poured a pure (concentrated) dose of Heparin into another basin to be diluted later. Both basins were unlabeled.</span></p>
        
        <p>طلب الجراح المحلول الغسول. أخطأت الممرضة المعقمة الوعاء وسلمت المحقنة المملوءة بالهيبارين النقي بتركيز عالي. حقنها الجراح مباشرة في الوعاء الدموي. بدلاً من الغسيل اللطيف، تلقى المريض جرعة ضخمة غير مقصودة ومضادة للتخثر، مما أدى إلى نزيف حاد استغرق ساعات للسيطرة عليه.</p>
        <p><span class="english-term">The surgeon asked for the flush. The scrub nurse grabbed the wrong basin and handed over a syringe of high-concentration pure Heparin. The surgeon flushed the vessel. Instead of a gentle wash, the patient received a massive, unintended anticoagulating dose, leading to severe bleeding that took hours to control.</span></p>
    </div>

    <p><strong>إصلاح النظام (The System Fix):</strong><br>
    هذا هو السبب الذي يجعل المستشفيات ذات الموثوقية العالية ترفض السماح للأفراد بـ "الخلط في الغرفة" متى أمكن ذلك. يجب أن توفر الصيدلية المحلول الملحي الممزوج بالهيبارين <strong>مُعداً مسبقاً ومُسمى (Pre-mixed and pre-labeled)</strong>. إذا كان الخلط في الغرفة إلزامياً، يجب أن يتضمن التوثيق والتسمية الفورية والتحقق المزدوج المستقل. (ISMP; AORN)</p>
    <p><span class="english-term"><strong>The System Fix:</strong> This is why high-reliability hospitals refuse to let people "mix in the room" whenever possible. The pharmacy should provide heparinized saline <strong>pre-mixed and pre-labeled</strong>. If room-mixing is mandatory, it must involve documentation, immediate labeling, and an independent double-check. (ISMP; AORN)</span></p>

    <h2>21.7 أدوات عملية لموثوقية الأدوية في غرفة العمليات</h2>
    <h3>21.7 Practical Tools for Medication Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>21.7.1 الأداة 1 — حزمة التسمية المعقمة (The Sterile Label Pack):</strong><br>
            يتم فتح ورقة ملصقات معقمة مطبوعة مسبقاً (أو أقلام تحديد معقمة) في كل حالة كجزء من <em>التحضير الأساسي</em>. لا ينبغي للممرضة أن تبحث عن قلم—يجب أن يكون موجوداً ومتاحاً. (AORN)</li>
            <br>
            <li><strong>21.7.2 الأداة 2 — نموذج القراءة العكسية للنقل (The Transfer Read-Back Script):</strong><br>
            الدوارة: <em>"أُسلمك 10 مل من بوبيفاكايين 0.5% مع إبينفرين. تنتهي الصلاحية في [التاريخ]."</em><br>
            المعقمة: <em>"أستلم 10 مل من بوبيفاكايين 0.5% مع إبينفرين. أقوم بتسمية الكوب الآن."</em> (ISMP)</li>
            <br>
            <li><strong>21.7.3 الأداة 3 — بطاقة "التوقف الإلزامي للأكواب غير المسماة":</strong><br>
            صلاحية واضحة من القيادة لكل من في الغرفة: "إذا كان هناك كوب بدون ملصق، يُمنع تسليمه للجراح، ويجب إفراغه واستبداله فوراً." (The Joint Commission; IHI)</li>
        </ul>
    </div>

    <h2>21.8 القياس (كيف تعرف أن نظامك يعمل)</h2>
    <h3>21.8 Measurement (How to Know Your System Works)</h3>

    <h3>21.8.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية للأدوية والسوائل في الحقل المعقم المُلاحظ والتي تحمل ملصقات دقيقة. (يجب أن يكون الهدف 100%). (AORN; ISMP)</li>
        <li>استخدام المحاليل المُعدة مسبقاً من الصيدلية (بدلاً من الخلط اليدوي في الغرفة). (ISMP)</li>
        <li>عدد الحوادث الوشيكة (Near-misses) المُبلغ عنها والمتعلقة بـ LASA أو الأكواب غير المسماة. (AHRQ)</li>
    </ul>

    <h3>21.8.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>أحداث الدواء الخاطئ/الجرعة الخاطئة/الطريق الخاطئ داخل غرفة العمليات (خارج التخدير). (The Joint Commission)</li>
    </ul>

    <h2>21.16 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>21.16 The Writer's Reflection</h3>
    <p><em>ملاحظة: تم الحفاظ على ترقيم النص الأصلي.</em></p>

    <h3>21.16.1 الملصق هو عقد / A label is a contract</h3>
    <p>عندما تضع ملصقاً على حقنة، فأنت توقع عقداً مع الجراح، ومع المريض، ومع كل ممارس سيقرأ سجلك. أنت تضمن الحقيقة.</p>
    <p><span class="english-term"><strong>21.16.1 A label is a contract</strong><br>When you put a label on a syringe, you are signing a contract with the surgeon, with the patient, and with every clinician who will read your record. You are guaranteeing truth.</span></p>

    <h3>21.16.2 السرعة ليست هي العدو؛ بل الغموض هو العدو</h3>
    <p>السرعة والسلامة يمكن أن يتزامنا عندما يزيل النظام الغموض من خلال: الملصقات، الفصل المرئي، الوصفات الموحدة، والتوقفات الإلزامية.</p>
    <p><span class="english-term"><strong>21.16.2 Speed is not the enemy; ambiguity is</strong><br>Fast and safe is possible when the system removes ambiguity: labels, separation, recipes, and hard stops.</span></p>

    <h3>21.16.3 قاعدتي / My rule</h3>
    <p>إذا لم أستطع إثبات ماهية السائل، فلن أضعه على المريض—مهما كانت الغرفة مزدحمة أو مضغوطة. (ISMP; AORN)</p>
    <p><span class="english-term"><strong>21.16.3 My rule</strong><br>If I cannot prove what it is, I will not put it on the patient—no matter how busy the room becomes. (ISMP; AORN)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الأكواب/المحاقن غير المسماة في الحقل المعقم هي طريق عالي الخطورة؛ قم بتسميتها فوراً أو تخلص منها. (ISMP; AORN)<br>
            <span class="english-term">Unlabeled cups/syringes on the sterile field are a high-risk pathway; label immediately or discard.</span></li>
            
            <li>افصل الأدوية حسب مسار الإعطاء (Route) (موضعي مقابل ري مقابل حقن) ووحد التركيزات لتقليل أخطاء الحقن الخاطئ والتخفيف. (ISMP)<br>
            <span class="english-term">Separate by route (topical vs irrigation vs injectable) and standardize concentrations to reduce wrong-route and dilution errors.</span></li>
            
            <li>مخاطر LASA تتطلب تصميماً ذكياً للتخزين وتوحيداً، وليس مجرد قول "كن حذراً." (ISMP; The Joint Commission)<br>
            <span class="english-term">LASA risks require storage design and standardization, not “be careful.”</span></li>
            
            <li>ابنِ نظام حواجز: العمل القياسي، التحقق، التوقفات الإلزامية، التوثيق، وحلقات التعلم. (AHRQ; IHI)<br>
            <span class="english-term">Build a barrier system: standard work, verification, hard stops, documentation, and learning loops.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Institute for Safe Medication Practices (ISMP). Medication Safety guidance and perioperative medication safety concepts (labeling, one-at-a-time preparation, LASA mitigation, sterile field practices).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (medication handling on the sterile field, labeling discipline, perioperative workflows).</li>
            <li>The Joint Commission. Medication Management standards / safety expectations (traceability, safe practices concepts).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, communication, safety culture, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, audits for learning, measurement, hard stops).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  5: `<!-- Download Button -->
    

    <div class="part-title">PART II — Preoperative Readiness and “Start-Right” Controls</div>
    <div class="part-title">الجزء الثاني — الجاهزية ما قبل العملية وضوابط "البداية الصحيحة"</div>
    
    <h1>CHAPTER 5 — Patient Identification and Documentation Integrity</h1>
    <div class="subtitle">الفصل الخامس — تعريف المريض وسلامة التوثيق<br>
    <span style="font-size: 18px;">(ID Controls • Consent Reliability • Documentation Consistency • Prevention of Wrong-Patient / Wrong-Procedure / Wrong-Site Harm)<br>
    (ضوابط الهوية • موثوقية الموافقة • اتساق التوثيق • الوقاية من ضرر المريض الخاطئ/الإجراء الخاطئ/الموقع الخاطئ)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>فهم لماذا يُعد تحديد الهوية والتوثيق <strong>حواجز حيوية (Primary safety barriers)</strong> في الجراحة، وليست مجرد خطوات إدارية/كتابية. (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Understand why identification and documentation are <strong>primary safety barriers</strong> in surgery, not clerical steps. (The Joint Commission; WHO SSC)</span></li>
            
            <li>التعرف على الطرق الواقعية التي تفشل بها الهوية والتوثيق تحت الضغط—ولماذا لا يزال "الأشخاص الجيدون" يقعون في هذا الفخ. (AHRQ; IHI)<br>
            <span class="english-term">Recognize the real-life ways identity and documentation fail under pressure—and why “good people” still fall into the trap. (AHRQ; IHI)</span></li>
            
            <li>بناء "نظام مطابقة" (Matching system) عملي عبر الوثائق الرئيسية ونقاط الرعاية. (The Joint Commission)<br>
            <span class="english-term">Build a practical “matching system” across the key documents and points of care. (The Joint Commission)</span></li>
            
            <li>تطبيق "خوارزمية التباين" (Mismatch algorithm) واضحة تحمي المريض وتحمي الفريق. (WHO SSC; The Joint Commission)<br>
            <span class="english-term">Apply a clear “mismatch algorithm” that protects the patient and protects the team. (WHO SSC; The Joint Commission)</span></li>
            
            <li>كتابة وتنفيذ مجموعة أدوات الحد الأدنى الجاهزة لغرفة العمليات (قوائم تحقق، نصوص، عمليات تدقيق) التي تمنع الأخطاء الكارثية دون إبطاء غرفة العمليات بشكل غير ضروري. (AORN; IHI)<br>
            <span class="english-term">Write and implement a minimal OR-ready toolkit (checklists, scripts, audits) that prevents catastrophic errors without slowing the OR unnecessarily. (AORN; IHI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الملف الذي مشى إلى غرفة العمليات"</strong><br>
        <span class="english-term">A true-to-life case: “The chart that walked into the OR” (Real Scientific Story)</span>
    </div>

    <p>بعد 25 عاماً في الممارسة المحيطة بالجراحة، يمكنني إخبارك بهذا: <strong>أخطر شيء في غرفة العمليات ليس دائماً فقدان الدم أو التشريح المعقد. في بعض الأحيان يكون مجرد ملف نظيف يحمل اسماً خاطئاً.</strong></p>
    <p><span class="english-term">After 25 years in perioperative practice, I can tell you this: <strong>the most dangerous thing in the operating theatre is not always blood loss or a difficult anatomy. Sometimes it is a clean folder with the wrong name on it.</strong></span></p>

    <p>كانت قائمة عمليات صباحية—مزدحمة، صاخبة، ومتوترة قليلاً. بدأت الحالة الأولى متأخرة. واستغرقت الحالة الثانية وقتاً أطول. بحلول الوقت الذي وصل فيه المريض الثالث إلى منطقة الانتظار (Holding area)، كان الناس يفكرون بالفعل في الدقائق: <em>إذا لم نلحق بالوقت الآن، فسننتهي بعد منتصف الليل.</em></p>
    <p><span class="english-term">It was a morning list—busy, noisy, and slightly tense. The first case started late. The second case ran long. By the time the third patient arrived to the holding area, people were already thinking in minutes: <em>If we don’t catch up now, we will finish after midnight.</em></span></p>

    <p>جاء المريض على عربة النقل، هادئاً، صائماً، ويرتدي المريول القياسي. وصل معه ملف. تم تثبيت نموذج الموافقة (Consent) بعناية في الأعلى. بدت ورقة الحجز مألوفة. كل شيء بدا "جاهزاً".</p>
    <p><span class="english-term">The patient came on a trolley, calm, fasting, wearing the standard gown. A file arrived with him. A consent form was clipped neatly on top. The booking sheet looked familiar. Everything looked “ready.”</span></p>

    <p>فعلت الممرضة ما تفعله ممرضات العمليات ذوات الخبرة—لم تثق بالمظاهر. سألت المريض:<br>
    "من فضلك قل لي اسمك الكامل."<br>
    فقاله. نظرت إلى الملف. كان التهجئة متقاربة—لكنها لم تكن متطابقة.<br>
    سألت: "تاريخ الميلاد؟"<br>
    أجاب. كان تاريخ الميلاد في الملف مختلفاً.</p>
    <p><span class="english-term">The nurse did what experienced OR nurses do—she didn’t trust appearances. She asked the patient:<br>
    “Please tell me your full name.”<br>
    He said it. She looked at the chart. The spelling was close—but not identical.<br>
    She asked: “Date of birth?”<br>
    He answered. The DOB on the chart was different.</span></p>

    <p>تفصيل صغير. النوع الذي يمكن تفويته عندما تكون في عجلة من أمرك وتكون عيناك متعبتين.</p>
    <p><span class="english-term">A small detail. The kind that can be missed when you’re rushing and your eyes are tired.</span></p>

    <p>نظرت الممرضة إليّ وقالت بهدوء: "يا دكتور، أعتقد أن هذا هو الملف الخاطئ."</p>
    <p><span class="english-term">The nurse looked at me and said quietly: “Doctor, I think this is the wrong chart.”</span></p>

    <div class="alert-box">
        <p>فعلت الغرفة ما تفعله الغرف غالباً: حاولت الدفاع عن الزخم (Momentum).<br>
        قال أحدهم: "ربما تم إدخال التاريخ بشكل خاطئ."<br>
        وقال آخر: "نحن متأخرون؛ يمكننا إصلاح ذلك بعد أن نبدأ."<br>
        <strong>لكن هكذا بالضبط يولد الضرر.</strong></p>
        <p><span class="english-term">The room did what rooms often do: it tried to defend the momentum.<br>Someone said: “Maybe the date was entered wrong.”<br>Someone else said: “We’re late; we can fix it after we start.”<br><strong>But that is exactly how harm is born.</strong></span></p>
    </div>

    <p>توقفنا. فعلنا ما تتطلبه معايير السلامة: <strong>مُعرّفان اثنان (Two identifiers)، متطابقان مع سوار المعصم، ومتوافقان مع المستندات</strong>. (The Joint Commission) في غضون دقائق، ظهرت الحقيقة: <strong>وصل المريض الصحيح بالملف الخاطئ</strong>—وهو خطأ في النقل يمكن أن يحدث في أي مستشفى في أي يوم، خاصة عندما يكون عبء العمل مرتفعاً. (AHRQ)</p>
    <p><span class="english-term">We stopped. We did what safety standards demand: <strong>two identifiers, matched to the wristband, and reconciled to the documents</strong>. (The Joint Commission) Within minutes, the truth appeared: <strong>the right patient arrived with the wrong chart</strong>—a transfer error that can happen in any hospital on any day, especially when workload is high. (AHRQ)</span></p>

    <div class="success-box">
        <p>لم يحدث أي ضرر. لكنني ما زلت أتذكر الشعور: لم يكن فخراً—بل كان خوفاً. الخوف الهادئ من أن غرفة العمليات كادت أن تفعل شيئاً لا رجعة فيه بسبب "خطأ ورقي". في ذلك اليوم، كتبت جملة كررتها مرات عديدة منذ ذلك الحين:</p>
        <p><strong>وجود الأوراق لا يعني السلامة. الأوراق الصحيحة—والمتطابقة—هي السلامة.</strong> (The Joint Commission)</p>
        <p><span class="english-term">No harm occurred. But I still remember the feeling: not pride—fear. The quiet fear that the OR had almost done something irreversible because of a “paper mistake.” That day, I wrote a sentence that I’ve repeated many times since: <strong>Paperwork being present is not safety. Paperwork being correct—and matching—is safety.</strong> (The Joint Commission)</span></p>
    </div>

    <h2>5.1 لماذا تُعد سلامة الهوية والتوثيق "حواجز حياة" في غرفة العمليات / Why Identification and Documentation Integrity Are OR “Life Barriers”</h2>

    <h3>5.1.1 غرفة العمليات تضخم العواقب / The OR amplifies consequences</h3>
    <p>في جناح التنويم، يمكن تصحيح العديد من الأخطاء قبل حدوث ضرر. في غرفة العمليات، يكون التسلسل لا يرحم: تخدير، فرش جراحي (Draping)، شق جراحي (Incision). بعد ذلك، تضيق نافذة التراجع أو تختفي تماماً. هذا هو السبب في أن أحداث المريض الخاطئ / الإجراء الخاطئ / الموقع الخاطئ تُعامل كـ "مخاطر جسيمة" (Sentinel hazards) تتطلب أنظمة قوية. (The Joint Commission; WHO SSC)</p>
    <p><span class="english-term">In the ward, many errors can be corrected before harm occurs. In the OR, the sequence is unforgiving: sedation, draping, incision. After that, the window for reversal becomes narrow or disappears. This is why wrong-patient / wrong-procedure / wrong-site events are treated as “sentinel” hazards requiring robust systems. (The Joint Commission; WHO SSC)</span></p>

    <h3>5.1.2 يفقد المريض القدرة على الدفاع عن نفسه / The patient loses the ability to defend themselves</h3>
    <p>بمجرد تخدير المريض (Sedated)، لا يمكنه تصحيحك. هذا هو السبب في أن فحوصات الهوية يجب أن تكون أقوى ما يمكن <strong>قبل</strong> التخدير والشق الجراحي. (WHO SSC)</p>
    <p><span class="english-term">Once the patient is sedated, they cannot correct you. This is why ID checks must be strongest <strong>before</strong> sedation and incision. (WHO SSC)</span></p>

    <h3>5.1.3 أخطر الأخطاء تبدو "طبيعية" / The most dangerous errors look “normal”</h3>
    <p>في خبرتي، نادراً ما تسبق الأحداث الكارثية دراما. تسبقها الحالة الطبيعية: قائمة مألوفة، طاقم روتيني، وافتراض هادئ بأن المستندات يجب أن تكون صحيحة لأنها تبدو مكتملة. تُظهر أبحاث سلامة الرعاية الصحية بشكل متكرر أن الضرر غالباً ما يأتي من <strong>نقاط ضعف في النظام</strong> تتوافق تحت الضغط، وليس من شخص شرير واحد. (AHRQ; IHI)</p>
    <p><span class="english-term">In clinical practice, catastrophic events are rarely preceded by drama. They are preceded by normality: a familiar list, routine staff, and a quiet assumption that the documents must be correct because they look complete. Healthcare safety research repeatedly shows that harm often comes from <strong>system weaknesses</strong> aligning under pressure, not from one villain. (AHRQ; IHI)</span></p>

    <h2>5.2 الهوية هي نظام (وليست سؤالاً) / Identity Is a System (Not a Question)</h2>

    <h3>5.2.1 قاعدة المُعرّفين الاثنين (ولماذا تنقذ الأرواح) / The two-identifier rule (and why it saves lives)</h3>
    <p>يعد استخدام مُعرّفين اثنين (مثل الاسم الكامل + تاريخ الميلاد/رقم الملف الطبي MRN) توقعاً أساسياً للسلامة. رقم الغرفة، رقم السرير، و "المريض الذي رأيته بالأمس" ليست مُعرّفات. (The Joint Commission)</p>
    <p>لكن الحقيقة الأعمق هي هذه: <strong>المُعرّفان ليسا طقساً. إنهما وظيفة إجبارية (Forcing function) ضد الذاكرة البشرية.</strong> (IHI)</p>
    <p><span class="english-term">Two identifiers (e.g., full name + DOB/MRN) are a foundational safety expectation. Room number, bed number, and “the patient I saw yesterday” are not identifiers. (The Joint Commission). But the deeper truth is this: <strong>Two identifiers are not a ritual. They are a forcing function against human memory.</strong> (IHI)</span></p>

    <h3>5.2.2 انضباط سوار المعصم: الحقيقة الوحيدة التي تنتقل / Wristband discipline: the only truth that travels</h3>
    <p>سوار المعصم (Wristband) هو القطعة التعريفية الوحيدة المتصلة مادياً بالمريض عبر عمليات النقل. لهذا السبب يجب أن يكون مقروءاً ويتم التحقق منه عند كل بوابة. (The Joint Commission)</p>
    <p><span class="english-term">The wristband is the only identification artifact physically attached to the patient across transfers. That is why it must be legible and verified at every gate. (The Joint Commission)</span></p>
    <p>لقد رأيت أساور معصم:</p>
    <ul>
        <li>مطبوعة بحبر باهت،</li>
        <li>مقطوعة ومعاد لصقها،</li>
        <li>مغطاة بالبطانيات،</li>
        <li>تمت إزالتها لفتح منفذ وريدي (IV access) ولم يتم استبدالها أبداً.</li>
    </ul>
    <p>كل واحدة من هذه هي شق صغير في الحاجز.</p>
    <p><span class="english-term">Clinical practice has shown wristbands: printed with faded ink, cut and re-taped, covered by blankets, removed for IV access and never replaced. Every one of these is a small crack in the barrier.</span></p>

    <h3>5.2.3 صوت المريض هو حاجز للهوية / The patient’s voice is an ID barrier</h3>
    <p>إذا كان المريض مستيقظاً وواعياً، دعه يقول:</p>
    <ul>
        <li>اسمه،</li>
        <li>تاريخ ميلاده،</li>
        <li>العملية التي يعتقد أنه سيخضع لها،</li>
        <li>وأي جهة (Side) إن كانت ذات صلة.</li>
    </ul>
    <p>عندما تتعارض كلمات المريض مع الأوراق، تعامل معها كخطر وتوقف. (The Joint Commission)</p>
    <p><span class="english-term">If the patient is awake and oriented, let them say: their name, their DOB, the operation they believe they are having, and which side if relevant. When the patient’s words conflict with paperwork, treat it as a hazard and stop. (The Joint Commission)</span></p>

    <h3>5.2.4 الفئات عالية الخطورة تتطلب أنظمة أقوى / High-risk groups require stronger systems</h3>
    <p>الأطفال، المرضى المخدَّرون، حواجز اللغة، المرضى المشوشون، وحالات الطوارئ: هذه ليست أعذاراً لتخفيف فحوصات الهوية—إنها أسباب لتقويتها من خلال التكرار (Redundancy) والتصعيد. (AHRQ; The Joint Commission)</p>
    <p><span class="english-term">Children, sedated patients, language barriers, confused patients, emergencies: these are not excuses to loosen ID checks—they are reasons to strengthen them with redundancy and escalation. (AHRQ; The Joint Commission)</span></p>

    <h2>5.3 سلامة التوثيق: "مثلث الحقيقة" في غرفة العمليات / Documentation Integrity: The OR’s “Truth Triangle”</h2>

    <h3>5.3.1 لماذا تتباعد المستندات / Why documents drift apart</h3>
    <p>تتباعد المستندات لأسباب متوقعة:</p>
    <ul>
        <li>تُكتب ملاحظة العيادة قبل أيام،</li>
        <li>يُعد ورقة الحجز شخص آخر،</li>
        <li>يتم توقيع الموافقة (Consent) في مكان مختلف تحت قيود زمنية،</li>
        <li>يأتي تقرير التصوير لاحقاً،</li>
        <li>ويتم تحديث جدول العمليات بشكل ديناميكي.</li>
    </ul>
    <p>هذا ليس إهمالاً—إنه تصميم النظام. وهذا هو السبب في أن النظام يجب أن يتضمن خطوة تسوية (Reconciliation step). (IHI)</p>
    <p><span class="english-term">Documents drift apart for predictable reasons: the clinic note is written days earlier, the booking sheet is prepared by another person, the consent is signed in a different place under time constraints, the imaging report comes later, and the OR schedule is updated dynamically. This is not negligence—it is system design. That is why the system must include a reconciliation step. (IHI)</span></p>

    <h3>5.3.2 المصادر الخمسة التي يجب أن تتفق / The Five Sources That Must Agree</h3>
    <div class="concept-box">
        <p>في الممارسة العملية، أطلب من فِرقي التعامل مع هذه المصادر على أنها "مثلث الحقيقة زائد اثنين" لغرفة العمليات:</p>
        <ol>
            <li><strong>مُعرّفات سوار المعصم</strong> (Wristband identifiers) (The Joint Commission)</li>
            <li><strong>الحجز/الجدول</strong> (Booking/schedule) (The Joint Commission; AORN)</li>
            <li><strong>الموافقة</strong> (Consent) (The Joint Commission)</li>
            <li><strong>خطة الجراح</strong> (ملاحظة العيادة/الخطة الجراحية) (Surgeon plan) (AHRQ)</li>
            <li><strong>التأكيد التصويري/التشخيصي</strong> (Imaging/diagnostic) عند الاقتضاء (The Joint Commission)</li>
        </ol>
        <p>إذا لم تتفق هذه المصادر، <strong>فليس لديك خطة</strong>. لديك خطر. (IHI)</p>
        <p><span class="english-term">In practice, I ask my teams to treat these as the OR’s “truth triangle plus two”: Wristband identifiers, Booking/schedule, Consent, Surgeon plan (clinic note/operative plan), Imaging/diagnostic confirmation when relevant. If these disagree, <strong>you do not have a plan</strong>. You have a risk. (IHI)</span></p>
    </div>

    <h3>5.3.3 المختصرات: العدو الصامت / Abbreviations: the quiet enemy</h3>
    <p>عدد مذهل من الحوادث الوشيكة (Near-misses) يبدأ بالمختصرات—أشكال قصيرة تعني أشياء مختلفة لأشخاص مختلفين. كلمة "Repair" قد تُخفي "revision"، و "excision" قد تُخفي "biopsy + excision"، والجهة (Laterality) قد تختفي تماماً. توحيد أسماء الإجراءات هو متطلب سلامة في الممارسة العملية، حتى لو بدا أمراً "إدارياً". (The Joint Commission; IHI)</p>
    <p><span class="english-term">A surprising number of near-misses begin with abbreviations—short forms that mean different things to different people. “Repair” may hide “revision,” “excision” may hide “biopsy + excision,” and laterality may vanish entirely. Standardization of procedure naming is a safety requirement in practice, even if it feels “administrative.” (The Joint Commission; IHI)</span></p>

    <h2>5.4 القصة الحقيقية 2: "مريضان. نفس اسم العائلة. نفس اليوم."</h2>
    <h3>5.4 Real Story 2: "Two patients. Same surname. Same day."</h3>

    <div class="quote-box">
        <p><strong>5.4.1 المشهد (The scene):</strong><br>
        أدخل مستشفى مريضين يحملان نفس اسم العائلة—وهو أمر شائع في العديد من المجتمعات. اختلفت أسماؤهم الأولى، لكن الطاقم كان يستخدم أسماء العائلة بشكل غير رسمي. كلاهما كان تحت نفس الخدمة الجراحية في نفس اليوم.
        المريض الأول كان مجدولاً لإجراء على الجانب الأيمن. والمريض الثاني كان لديه إجراء على الجانب الأيسر.
        في منطقة الانتظار (Holding)، نادى الموظف اسم العائلة بصوت عالٍ، فاستجاب أحد المرضى—لأن المرضى غالباً ما يستجيبون عندما يعتقدون أنه يُنادى عليهم.
        تم تحريك المريض للأمام. وتبعه الورق. كان الجميع مشغولين.</p>
        <p><span class="english-term"><strong>The scene:</strong> A hospital admitted two patients with the same family name—common in many communities... Both were under the same surgical service on the same day. The first patient was scheduled for a procedure on the right side. The second patient had a left-sided procedure. In holding, the staff member called the surname loudly, and one patient responded... The patient was moved forward. Paperwork followed. Everyone was busy.</span></p>
    </div>

    <p><strong>5.4.2 اللحظة التي أنقذت المريض (The moment that saved the patient):</strong><br>
    عند مدخل المسرح (Theatre entry)، قامت ممرضة مبتدئة بفحص المُعرّفين الاثنين بشكل صحيح: الاسم + تاريخ الميلاد لم يتطابقا مع الملف. فقامت بالتصعيد. توقفت العملية. (The Joint Commission)</p>
    <p><span class="english-term"><strong>The moment that saved the patient:</strong> At theatre entry, a junior nurse did the two-identifier check properly: Name + DOB did not match the chart. She escalated. The process stopped. (The Joint Commission)</span></p>

    <div class="alert-box">
        <p><strong>5.4.3 ماذا تعلمت (مجدداً) / What I learned (again):</strong><br>
        الخبرة لا تلغي المخاطر؛ بل تزيدها أحياناً لأن الألفة تولد الاختصارات. عقلية "نحن نعرف هذا الجناح" هي خطر معروف في ثقافة السلامة. (AHRQ)</p>
        <p><span class="english-term">Experience does not eliminate risk; it sometimes increases risk because familiarity breeds shortcuts. The “we know this ward” mentality is a known hazard in safety culture. (AHRQ)</span></p>
    </div>

    <p><strong>5.4.4 الإصلاح المنهجي (The system fix):</strong><br>
    نفذت غرفة العمليات:</p>
    <ul>
        <li>لا يُنادى المريض باسم العائلة فقط.</li>
        <li>مُعرّفان اثنان قبل الحركة من منطقة الانتظار.</li>
        <li>مسح سوار المعصم (حيثما كان متاحاً).</li>
        <li>توقف إلزامي (Hard stop) في حالة حدوث أي عدم تطابق. (The Joint Commission)</li>
    </ul>

    <h2>5.5 موثوقية الموافقة: الموافقة ليست مجرد توقيع / Consent Reliability: Consent is Not a Signature</h2>

    <h3>5.5.1 الموافقة هي سلامة أخلاقية / Consent is ethical safety</h3>
    <p>الموافقة (Consent) ليست درعاً ورقياً. إنها جزء من نظام سلامة المريض ومتطلب قانوني. (The Joint Commission)</p>
    <p><span class="english-term">Consent is not a paper shield. It is part of the patient safety system and a legal requirement. (The Joint Commission)</span></p>

    <h3>5.5.2 أنماط فشل الموافقة الشائعة / The common consent failure patterns</h3>
    <p>لقد رأيت بشكل متكرر هذه الأنماط:</p>
    <ul>
        <li>الموافقة تقول "إجراء أ"، والحجز يقول "إجراء أ + ب".</li>
        <li>الموافقة تفتقر إلى الجهة (Laterality).</li>
        <li>الموافقة غامضة ("عملية" بدون تفاصيل).</li>
        <li>الموافقة مُوقعة لكن فهم المريض ليس واضحاً.</li>
    </ul>
    <p>تصبح هذه الأمور خطيرة عندما تفترض غرفة العمليات أن "مُوقعة = آمنة". (The Joint Commission)</p>
    <p><span class="english-term">I have repeatedly seen these patterns: consent says “procedure A,” booking says “procedure A + B,” consent lacks laterality, consent is vague (“operation” without specifics), consent is signed but the patient’s understanding is not clear. These become dangerous when the OR assumes “signed = safe.” (The Joint Commission)</span></p>

    <div class="concept-box">
        <h3>5.5.3 3: "الموافقة التي قالت شيئاً، والجراح الذي قصد شيئاً آخر"</h3>
        <p>كان مريض مجدولاً لإجراء مع امتداد محتمل اعتماداً على النتائج. أدرج الحجز الإجراء الممتد. وأدرجت الموافقة الإجراء المحدود. ووصفت ملاحظة العيادة كليهما كاحتمالات.</p>
        <p>في منطقة الانتظار، قال المريض: "لقد وافقت على العملية الأصغر."</p>
        <p>أرادت غرفة العمليات البدء—كانت القائمة متأخرة. شعر الجراح أن الإجراء الممتد سيكون مطلوباً على الأرجح. وقف الفريق عند مفترق طرق: المضي قدماً و"تسوية الأمر لاحقاً"، أو التوقف والتسوية الآن.</p>
        <p><strong>توقفنا.</strong><br>شرحنا بوضوح: ما هو الإجراء الأساسي، ماذا يعني الامتداد، ما الذي سيحفزه، وما هي البدائل الموجودة. تم إعادة كتابة الموافقة بوضوح قبل المضي قدماً.</p>
        <p>ما زلت أتذكر وجه المريض بعد الشرح: هادئ، ليس غاضباً. لأن المريض لم يكن هو العقبة—<strong>الغموض كان هو العقبة.</strong> (The Joint Commission)</p>
        <p><span class="english-term">A patient was scheduled for a procedure with a possible extension depending on findings. The booking listed the extended procedure. The consent listed the limited procedure... The OR wanted to start—the list was late... We stopped. We explained clearly... The consent was rewritten clearly before proceeding. I still remember the patient’s face after the explanation: calm, not angry. Because the patient wasn’t the obstacle—the ambiguity was. (The Joint Commission)</span></p>
    </div>

    <h2>5.6 خوارزمية التباين (ماذا تفعل عندما لا يتطابق شيء ما) / The Mismatch Algorithm</h2>

    <h3>5.6.1 عرّف التباين كخطر / Define mismatch as a hazard</h3>
    <p>التباين (Mismatch) ليس "مشكلة إدارية صغيرة". أي خلاف يمكن أن يغير الإجراء هو خطر على السلامة. (The Joint Commission)</p>
    <p><span class="english-term">A mismatch is not “a small administrative issue.” Any disagreement that can change action is a safety hazard. (The Joint Commission)</span></p>

    <h3>5.6.2 خطوات التباين (مصممة للحياة الواقعية) / The mismatch steps (designed for real life)</h3>
    <div class="success-box">
        <p>عند اكتشاف تباين:</p>
        <ol>
            <li><strong>الخطوة 1 — توقف باستخدام عبارة قياسية:</strong><br>
            "توقف من فضلك—فحص سلامة. أرى تبايناً بين ___ و ___." (WHO SSC)<br>
            <span class="english-term">Step 1 — Pause with a standard phrase: “Pause please—safety check. I see a mismatch between ___ and ___.”</span></li>
            
            <li><strong>الخطوة 2 — جمّد الخطوات غير القابلة للتراجع (Freeze irreversible steps):</strong><br>
            لا مزيد من التخدير، لا تحضير (Prepping)، لا فرش، لا شق جراحي حتى يتم الحل. يتماشى هذا مع منطق الوقاية من الموقع الخاطئ. (The Joint Commission)<br>
            <span class="english-term">Step 2 — Freeze the irreversible steps: No further sedation, no prepping, no draping, no incision until resolved.</span></li>
            
            <li><strong>الخطوة 3 — حدد المصدر الموثوق:</strong><br>
            غالباً: خطة الجراح المُحدثة + التصوير + الموافقة المصححة، لكن يجب توثيقه. (The Joint Commission)<br>
            <span class="english-term">Step 3 — Identify the authoritative source: Often: updated surgeon plan + imaging + corrected consent, but it must be documented.</span></li>
            
            <li><strong>الخطوة 4 — صَعِّد إذا لم يُحل بسرعة:</strong><br>
            الممرضة المسؤولة ← مشرف العمليات ← قائد الخدمة. يجب أن يكون التصعيد مساراً (Pathway)، وليس اختباراً للشخصية. (IHI; AHRQ)<br>
            <span class="english-term">Step 4 — Escalate if not resolved quickly: Charge nurse → OR supervisor → service lead.</span></li>
            
            <li><strong>الخطوة 5 — وثّق الحل:</strong><br>
            ما الذي تعارض، كيف تم الحل، من أكد ذلك، وما إذا كان يجب تكرار الـ Time-out. (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Step 5 — Document resolution: What mismatched, how resolved, who confirmed, and whether time-out must be repeated.</span></li>
        </ol>
    </div>

    <h3>5.6.3 لماذا ينجح هذا تحت الضغط / Why this works under pressure</h3>
    <p>لأنه يحمي الفريق من أخطر قوة في غرفة العمليات: <strong>الزخم (Momentum)</strong>. غرفة العمليات ترغب بشكل طبيعي في المضي قدماً. تخلق خوارزمية التباين إِذناً—وهيكلاً—للإبطاء بأمان. (IHI)</p>
    <p><span class="english-term">Because it protects the team from the most dangerous force in the OR: <strong>momentum</strong>. The OR naturally wants to proceed. A mismatch algorithm creates permission—and structure—to slow down safely. (IHI)</span></p>

    <h2>5.7 تحديد الموقع وسلامة الرؤية / Site Marking and Visibility Integrity</h2>

    <h3>5.7.1 العلامة مفيدة فقط إذا كانت مرئية ومحترمة / Site marking is only useful if it is visible and respected</h3>
    <p>تتضمن برامج الوقاية من الموقع الخاطئ تحديد الموقع كعنصر أساسي. (The Joint Commission)<br>
    لكنني رأيت علامات موقع:</p>
    <ul>
        <li>تمت بشكل صحيح ولكن غطاها محلول التحضير (Prep).</li>
        <li>تمت بشكل صحيح ولكن أخفاها الفرش الجراحي (Drapes).</li>
        <li>تمت بشكل صحيح ولكن لم يُشر إليها أبداً أثناء الـ Time-out.</li>
    </ul>
    <p>علامة الموقع التي لا تُستخدم هي زينة (Decoration)، وليست حاجزاً. (WHO SSC)</p>
    <p><span class="english-term">Wrong-site prevention programs include site marking as a core element. (The Joint Commission). But Clinical practice has shown site marks: made correctly but covered by prep, made correctly but hidden by drapes, made correctly but never pointed to during time-out. A site mark that is not used is decoration, not a barrier. (WHO SSC)</span></p>

    <h3>5.7.2 قاعدة عملية من التجربة / A practical rule from experience</h3>
    <p>إذا كانت العلامة ستُغطى، أكّد الموقع والجهة <strong>قبل الفرش الجراحي (Before draping)</strong> وقم بتضمينه بشكل صريح في لغة الـ Time-out. (WHO SSC; The Joint Commission)</p>
    <p><span class="english-term">If the mark will be covered, confirm site and laterality <strong>before draping</strong> and include it explicitly in time-out language. (WHO SSC; The Joint Commission)</span></p>

    <h2>5.8 الملصقات التي تحمل الحقيقة (العينات، الغرسات، أدوية الحقل المعقم) / Labels That Carry Truth</h2>

    <h3>5.8.1 ملصقات العينات: أشياء صغيرة، عواقب ضخمة / Specimen labels: small objects, massive consequences</h3>
    <p>يمكن أن تتسبب أخطاء التعامل مع العينات في تأخير التشخيص، أو العلاج الخاطئ، أو تكرار الإجراءات. هذا هو السبب في أن تسمية العينات تتطلب ممارسات موثوقية (Reliability practices)، وليس ذاكرة. (AHRQ; AORN)</p>

    <div class="concept-box">
        <h3>5.8.2 4: "العينة التي كادت أن تصبح مريضاً آخر"</h3>
        <p>تم أخذ عينتين. كانت الغرفة مزدحمة. أعدت الممرضة الدوارة الملصقات أثناء ردها أيضاً على مكالمة من المنسق حول التبديل. مقاطعة صغيرة واحدة—اندفاعة واحدة—وكادت الملصقات أن تتبدل.</p>
        <p>تم اكتشاف الخطأ لأن الممرضة المعقمة (Scrub nurse) طالبت بقراءة عكسية (Read-back):<br>
        <strong>"قولي اسم المريض ووصف العينة بصوت عالٍ قبل أن تغلقي الحاوية."</strong> (AHRQ)</p>
        <p>ذلك الانضباط الوحيد—القراءة العكسية—حَوّل لحظة هشة إلى لحظة موثوقة. التواصل المنظم يمنع الحذف. (AHRQ)</p>
        <p><span class="english-term">The mistake was caught because the scrub nurse demanded a read-back: “Say the patient name and specimen description aloud before you close the container.” (AHRQ) That single discipline—read-back—turned a fragile moment into a reliable one. Structured communication prevents omissions. (AHRQ)</span></p>
    </div>

    <h3>5.8.3 تتبع الغرسات: التوثيق الذي يحمي الرعاية المستقبلية / Implant traceability</h3>
    <p>تتطلب الغرسات إمكانية التتبع (Traceability) والتوثيق. (AORN) إذا حدث استدعاء (Recall)، فإن التتبع ليس اختيارياً. إنه حماية للمريض. (ECRI concepts; AORN)</p>

    <h3>5.8.4 وضع ملصقات الأدوية في الحقل المعقم / Medication labeling on the sterile field</h3>
    <p>يقلل وضع ملصقات على الأدوية من أخطاء الأدوية المتشابهة في الشكل والصوت (LASA)، ويتم التأكيد عليه من قبل هيئات سلامة الأدوية وإرشادات الممارسة المحيطة بالجراحة. (ISMP; AORN)</p>

    <h2>5.9 دروس عملية من المسرح الجراحي / Practical Lessons from the OR</h2>

    <h3>5.9.1 الدماغ البشري يريد توفير الطاقة / The human brain wants to save energy</h3>
    <p>تحت الضغط، يبحث العقل عن الاختصارات. يثق في الأنماط. يفترض. هذا أمر بشري، وليس مخزياً. لكن النظام الآمن لا يعتمد على بشر مثاليين. إنه يستخدم الحواجز. (IHI; AHRQ)</p>
    <p><span class="english-term">Under pressure, the mind looks for shortcuts. It trusts patterns. It assumes. This is human, not shameful. But a safe system does not depend on perfect humans. It uses barriers. (IHI; AHRQ)</span></p>

    <h3>5.9.2 غرفة العمليات تعاقب الافتراضات / The OR punishes assumptions</h3>
    <p>مريض يحمل اسماً مشابهاً، موافقة بكلمات غامضة، حجز باختصار—هذه هي البذور. الشق الجراحي هو الحصاد. يجب على النظام أن يوقف الحصاد. (The Joint Commission)</p>
    <p><span class="english-term">A patient with a similar name, a consent with vague words, a booking with an abbreviation—these are the seeds. The incision is the harvest. The system must stop the harvest. (The Joint Commission)</span></p>

    <h3>5.9.3 إذا تأخر اليوم، يجب أن تزداد البوابات قوة / If the day is late, the gates must get stronger</h3>
    <p>هذه قاعدة شخصية أكررها: <strong>عندما نتأخر، لا نختصر خطوات السلامة—بل نحميها.</strong> لأن التأخير هو عامل خطر (Risk factor)، وليس مبرراً. (IHI)</p>
    <p><span class="english-term">This is a personal rule I repeat: When we are late, we do not cut safety steps—we protect them. Because lateness is a risk factor, not a justification. (IHI)</span></p>

    <h2>5.10 أدوات عملية (للاستخدام الحقيقي في غرفة العمليات) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>5.10.1 الأداة 1 — قائمة تحقق بوابة هوية غرفة العمليات (الانتظار ← الدخول للمسرح):</strong><br>
            <strong>بوابة الانتظار (Holding gate):</strong> مُعرّفان اثنان + المريض يذكر الإجراء/الموقع إذا كان قادراً + الموافقة تتطابق مع الحجز. (The Joint Commission)<br>
            <strong>بوابة دخول الغرفة (Room entry gate):</strong> إعادة فحص سوار المعصم + تطابق رقم الملف (MRN) + تأكيد علامة الموقع. (The Joint Commission; WHO SSC)</li>
            <br>
            <li><strong>5.10.2 الأداة 2 — جدول مطابقة المصادر الخمسة:</strong><br>
            جدول بسيط يُجبر على الموافقة عبر سوار المعصم، الحجز، الموافقة، الخطة، التصوير. أي خلاف = توقف وقم بالتسوية. (The Joint Commission)</li>
            <br>
            <li><strong>5.10.3 الأداة 3 — نص التباين (Mismatch Script):</strong><br>
            الكلمات القياسية تقلل التردد واحتكاك التسلسل الهرمي. (WHO SSC; AHRQ)</li>
            <br>
            <li><strong>5.10.4 الأداة 4 — تدقيق مصغر لجودة الموافقة:</strong><br>
            تدقيق 10 حالات/شهر للوضوح، اكتمال الجهة (Laterality)، والتوافق مع الحجز. (The Joint Commission)</li>
        </ul>
    </div>

    <h2>5.11 القياس (كيف تعرف أنه يتحسن) / Measurement (How You Know It’s Improving)</h2>

    <h3>5.11.1 توقع أن يرتفع اكتشاف التباين أولاً / Expect mismatch detection to rise first</h3>
    <p>عندما يبدأ النظام في النظر بشكل صحيح، غالباً ما يزداد اكتشاف الحوادث الوشيكة. هذا ليس فشلاً—إنه الرؤية تعود. (AHRQ)</p>
    <p><span class="english-term">When a system starts looking properly, near-miss detection often increases. That is not failure—it is vision returning. (AHRQ)</span></p>

    <h3>5.11.2 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>أحداث التباين المكتشفة قبل الشق الجراحي (إشارة تعلم). (AHRQ)</li>
        <li>نقاط جودة הـ Time-out للهوية/الإجراء/الموقع. (WHO SSC)</li>
        <li>معدل عدم تطابق الموافقة. (The Joint Commission)</li>
        <li>معدل الحوادث الوشيكة لتسمية العينات. (AORN; AHRQ)</li>
        <li>سجلات الحوادث الوشيكة لرحلة الملف الخاطئ (Wrong-chart travel). (AHRQ)</li>
    </ul>

    <h3>5.11.3 سرعة حلقة التعلم / Learning-loop speed</h3>
    <p>الأيام من الحدث ← الإصلاح ← إعادة التدقيق. يُقاس نضج الحوكمة بوقت الدورة (Cycle time). (IHI)</p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>في غرفة العمليات، لا يُعد تحديد الهوية والتوثيق عملاً كتابياً—إنهما <strong>حواجز حياة (Life barriers)</strong>. (The Joint Commission)<br>
            <span class="english-term">In the OR, identification and documentation are not clerical work—they are <strong>life barriers</strong>.</span></li>
            
            <li>اجعل المصادر الخمسة تتفق: سوار المعصم، الحجز، الموافقة، الخطة، التصوير. (The Joint Commission; AORN)<br>
            <span class="english-term">Make the five sources agree: wristband, booking, consent, plan, imaging.</span></li>
            
            <li>تعامل مع التباين كخطر: توقف، جمّد الخطوات غير القابلة للتراجع، قم بالتسوية، وثّق، وكرر הـ Time-out إذا لزم الأمر. (WHO SSC; The Joint Commission)<br>
            <span class="english-term">Treat mismatch as hazard: pause, freeze irreversible steps, reconcile, document, repeat time-out if needed.</span></li>
            
            <li>احمِ لحظات التسمية والموافقة من المقاطعات—المقاطعات هي مخاطر. (AORN; AHRQ)<br>
            <span class="english-term">Protect labeling and consent moments from interruptions—interruptions are hazards.</span></li>
            
            <li>بعد 25 عاماً، أثق في قاعدة واحدة: <strong>عندما يرتفع الضغط، يجب أن ترتفع قوة الحاجز أيضاً.</strong> (IHI)<br>
            <span class="english-term">After 25 years, I trust one rule: <strong>when pressure rises, barrier strength must rise too.</strong></span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>The Joint Commission. National Patient Safety Goals (Hospital Program).</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety Resources (patient identification, communication, transitions, reporting).</li>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Reliability Resources (human factors, reliability, learning systems).</li>
            <li>Institute for Safe Medication Practices (ISMP). Medication Safety Guidance relevant to procedural areas.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  15: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 15 — Surgical Counts and Prevention of Retained Items</h1>
    <div class="subtitle">الفصل الخامس عشر — العد الجراحي والوقاية من العناصر المتروكة<br>
    <span style="font-size: 18px;">(Sponge/Needle/Instrument Counts • Discrepancy Algorithm • Imaging Rules • Documentation)<br>
    (عد الإسفنج/الإبر/الأدوات • خوارزمية التباين • قواعد التصوير • التوثيق)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد العناصر الجراحية المتروكة (RSIs) <strong>إخفاقات نظام (System failures)</strong>—وليست "أخطاء في العد"—ولماذا تتطلب الوقاية حواجز متعددة، وليس الاعتماد على الذاكرة. (AORN; AHRQ; IHI)<br>
            <span class="english-term">Explain why retained surgical items (RSIs) are <strong>system failures</strong>—not “counting mistakes”—and why prevention requires multiple barriers, not memory. (AORN; AHRQ; IHI)</span></li>
            
            <li>إجراء <strong>عد موثوق للإسفنج، والإبر، والأدوات</strong> مع "لحظات عد" (Count moments) موحدة، وانتباه محمي، وملكية واضحة للأدوار. (AORN; WHO SSC)<br>
            <span class="english-term">Run reliable <strong>sponge, needle, and instrument counts</strong> with standardized “count moments,” protected attention, and clear role ownership. (AORN; WHO SSC)</span></li>
            
            <li>تطبيق <strong>خوارزمية عملية لتباين العد (Count discrepancy algorithm)</strong> (توقف–ابحث–أعد العد–صعّد–صوّر–وثّق) دون تفاوض أو إلقاء لوم. (AORN; IHI)<br>
            <span class="english-term">Apply a practical <strong>count discrepancy algorithm</strong> (stop–search–recount–escalate–image–document) without negotiation or blame. (AORN; IHI)</span></li>
            
            <li>تحديد <strong>قواعد التصوير (Imaging rules)</strong> للتباينات التي لم تُحل وفهم لماذا يُعد التصوير أداة سلامة، وليس إهانة. (AORN; WHO SSC)<br>
            <span class="english-term">Define <strong>imaging rules</strong> for unresolved discrepancies and understand why imaging is a safety tool, not an insult. (AORN; WHO SSC)</span></li>
            
            <li>إنتاج <strong>توثيق (Documentation)</strong> جاهز للتدقيق يحمي المرضى ويعزز حلقات التعلم، بدلاً من إخفاء الشكوك. (AORN; AHRQ)<br>
            <span class="english-term">Produce audit-ready <strong>documentation</strong> that protects patients and strengthens learning loops, rather than hiding uncertainty. (AORN; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "إسفنجة واحدة مفقودة وغرفة أرادت أن تصدق"</strong><br>
        <span class="english-term">A true-to-life case: “One missing sponge and a room that wanted to believe” (Real Scientific Story)</span>
    </div>

    <p>هناك لحظة في أواخر الحالات الطويلة عندما تصبح الغرفة متعبة عاطفياً. الجراح يريد أن يُغلق الجرح. الفريق يريد الانتهاء. الجميع يريد أن يرى المريض خارج الطاولة وبأمان في غرفة الإفاقة. هذا هو بالضبط الوقت الذي تصبح فيه غرفة العمليات عرضة لأقدم تحيز بشري: <strong>التفكير الرغبي (Wishful thinking)</strong>.</p>
    <p><span class="english-term">There is a moment late in long cases when the room becomes emotionally tired. The surgeon wants to close. The team wants to finish. Everyone wants the patient off the table and safely in recovery. That is exactly when the OR becomes vulnerable to the oldest human bias: <strong>wishful thinking</strong>.</span></p>

    <p>كان العد ناقصاً إسفنجة واحدة.</p>
    <p><span class="english-term">The count was off by one sponge.</span></p>

    <p>قالت الممرضة المعقمة (Scrub nurse) بوضوح: "تنقصنا واحدة."</p>
    <p><span class="english-term">The scrub nurse said it clearly: “We’re missing one.”</span></p>

    <p>كان بإمكانك الشعور بالتوتر. توقف الجراح عن الخياطة وقال: "لقد تحققت من التجويف (Cavity). إنه فارغ تماماً. لا بد أنها سقطت على الأرض أو رُميت في سلة المهملات. دعونا ننهي الإغلاق بينما تبحثون."</p>
    <p><span class="english-term">You could feel the tension. The surgeon stopped suturing and said: "I’ve checked the cavity. It is completely empty. It must have fallen on the floor or got thrown in the trash. Let's finish closing while you look."</span></p>

    <div class="alert-box">
        <p>كان هذا هو "فخ التباين". يبدو الجراح واثقاً. وتبدو الممرضات غير متأكدات من أوراقهن. يبدأ الجميع في الشك في عملية العد بدلاً من الشك في الجرح.</p>
        <p><span class="english-term">This was the "discrepancy trap." The surgeon sounds confident. The nurses feel unsure of their paperwork. Everyone starts doubting the count instead of doubting the wound.</span></p>
    </div>

    <p>لكن الممرضة المسؤولة (Charge nurse) في تلك الغرفة كانت تسترشد بالسياسة، وليس بالعاطفة. قالت: <strong>"لا يمكننا إغلاق اللفافة (Fascia). يجب أن نتوقف، ونبحث، وإذا لم نجدها، نطلب تصويراً بالأشعة السينية (X-ray)."</strong></p>
    <p><span class="english-term">But the charge nurse in that room was guided by policy, not emotion. She said: <strong>"We cannot close the fascia. We must stop, search, and if we don't find it, order an X-ray."</strong></span></p>

    <p>تم إحضار جهاز الأشعة. وعندما ظهرت الصورة على الشاشة، ساد صمت مطبق. هناك، مختبئة بعمق خلف الكبد، كانت توجد الإسفنجة المفقودة، غير مرئية للعين المجردة للجراح.</p>
    <p><span class="english-term">The X-ray was brought in. When the image appeared on the screen, a dead silence fell. There, hidden deep behind the liver, was the missing sponge, invisible to the surgeon's naked eye.</span></p>

    <div class="success-box">
        <p>التوقف الإلزامي (Hard stop) أنقذ المريض من جراحة ثانية، ومن عدوى، ومن أذى لا يُوصف. <strong>الأشياء المتروكة لا تحدث لأن الناس لا يهتمون. إنها تحدث لأن الفرق تثق بذاكرتها وثقتها أكثر من ثقتها بالنظام.</strong> (AORN; AHRQ)</p>
        <p><span class="english-term">The hard stop saved the patient from a second surgery, an infection, and untold harm. <strong>Retained items do not happen because people don't care. They happen because teams trust their memory and confidence more than they trust the system.</strong> (AORN; AHRQ)</span></p>
    </div>

    <h2>15.1 العناصر الجراحية المتروكة (RSIs) هي إخفاقات نظام، وليست هفوات ذاكرة</h2>
    <h3>15.1 RSIs are System Failures, Not Memory Lapses</h3>

    <h3>15.1.1 وهم "المراجعة البصرية" / The illusion of "visual review"</h3>
    <p>يعتقد الجراحون غالباً أنهم قادرون على رؤية كل شيء يتركونه خلفهم. لكن الدم والأعضاء تحجب الإسفنج، وتنزلق الإبر في الأنسجة. المراجعة البصرية وحدها غير كافية؛ يجب أن تدعمها رياضيات صارمة (العد الجراحي). (AORN)</p>
    <p><span class="english-term"><strong>15.1.1 The illusion of "visual review"</strong><br>Surgeons often believe they can see everything they leave behind. But blood and organs obscure sponges, and needles slip into tissue. Visual review alone is insufficient; it must be backed by strict math (the count). (AORN)</span></p>

    <h3>15.1.2 عوامل الخطر للأشياء المتروكة / Risk factors for retained items</h3>
    <p>تحدث RSIs بشكل متكرر عند وجود:</p>
    <ul>
        <li>حالات الطوارئ (Emergencies).</li>
        <li>تغييرات غير متوقعة في الإجراء الجراحي.</li>
        <li>مرضى ذوي مؤشر كتلة جسم مرتفع (High BMI).</li>
        <li>تبديل الموظفين (Shift changes) أثناء الإجراء.</li>
        <li>تعدد الجراحين المشاركين. (AHRQ; The Joint Commission)</li>
    </ul>

    <h2>15.2 العد الموحد (كيف تبني الحاجز)</h2>
    <h3>15.2 The Standardized Count (How to Build the Barrier)</h3>

    <h3>15.2.1 لحظات العد (متى تعد) / The count moments</h3>
    <p>يجب أن تكون عملية العد طقساً لا يتغير أبداً:</p>
    <ul>
        <li><strong>العد الأولي (Baseline count):</strong> قبل الشق الجراحي. يتم إجراؤه بصوت عالٍ، معاً، من قبل ممرضتين (عادةً ممرضة معقمة وممرضة دوارة).</li>
        <li><strong>عد الإضافة (Addition count):</strong> عند إضافة أي عنصر إلى الحقل الجراحي.</li>
        <li><strong>عد إغلاق التجويف الأول (First closure count):</strong> عند البدء في إغلاق تجويف (مثل الصفاق/Peritoneum).</li>
        <li><strong>العد النهائي (Final/Skin closure count):</strong> عند إغلاق الجلد.</li>
        <li><strong>عد الإعفاء/التبديل (Relief count):</strong> عند تغيير طاقم التمريض. (AORN)</li>
    </ul>
    <p><span class="english-term"><strong>15.2.1 The count moments (When to count)</strong><br>Baseline count, Addition count, First closure count, Final/Skin closure count, Relief count. (AORN)</span></p>

    <h3>15.2.2 الانتباه المحمي أثناء العد / Protected attention</h3>
    <p>العد الموثوق مستحيل إذا كان الهاتف يرن أو كانت الموسيقى صاخبة. <strong>العد يتطلب وقتاً محمياً.</strong> لا مقاطعات، لا مهام متعددة. (AORN)</p>
    <p><span class="english-term"><strong>15.2.2 Protected attention during counts</strong><br>Reliable counting is impossible if the phone is ringing or the music is blaring. <strong>Counts require protected time.</strong> No interruptions, no multitasking. (AORN)</span></p>

    <h3>15.2.3 الملكية الواضحة للأدوار / Clear role ownership</h3>
    <p>الممرضة المعقمة (Scrub nurse) تفصل وتُظهر. الممرضة الدوارة (Circulating nurse) تنظر وتسجل بوضوح. يجب أن يكون العد سمعياً وبصرياً. (AORN)</p>

    <h2>15.3 خوارزمية التباين (عندما لا تتطابق الأرقام)</h2>
    <h3>15.3 The Discrepancy Algorithm (When the Numbers Don’t Match)</h3>

    <h3>15.3.1 التباين هو حالة طوارئ تتعلق بالسلامة / A discrepancy is a safety emergency</h3>
    <p>عندما لا يتطابق العد، فإن رد الفعل الأول للغرفة غالباً ما يكون الإنكار ("لا بد أننا أخطأنا في العد الأولي"). يجب أن يفترض النظام دائماً أن العنصر موجود <strong>داخل المريض</strong> حتى يثبت العكس.</p>
    <p><span class="english-term"><strong>15.3.1 A discrepancy is a safety emergency</strong><br>When a count doesn’t match, the room’s first reaction is often denial ("we must have miscounted initially"). The system must always assume the item is <strong>inside the patient</strong> until proven otherwise.</span></p>

    <h3>15.3.2 خوارزمية توقف–ابحث–أعد العد–صعّد–صوّر</h3>
    <div class="concept-box">
        <ol>
            <li><strong>توقف (STOP):</strong> الممرضة تُعلن بوضوح: "العد غير متطابق. تنقصنا [العنصر]." الجراح يوقف الإغلاق (ما لم تكن هناك خطورة على الحياة).</li>
            <li><strong>ابحث (SEARCH):</strong> الجراح يبحث في الجرح. التمريض يبحث في الحقل المعقم، الغرفة، والقمامة.</li>
            <li><strong>أعد العد (RECOUNT):</strong> يتم إعادة عد جميع العناصر من نفس النوع.</li>
            <li><strong>صعّد (ESCALATE):</strong> إبلاغ الممرضة المسؤولة وإحضار فريق إضافي للبحث إن لزم الأمر.</li>
            <li><strong>صوّر (IMAGE):</strong> إذا لم يُعثر على العنصر، اطلب صورة شعاعية (X-ray) تُقرأ من قبل طبيب أشعة <strong>قبل</strong> مغادرة المريض للغرفة. (AORN; IHI)</li>
        </ol>
        <p><span class="english-term">Stop, Search, Recount, Escalate, Image. (AORN; IHI)</span></p>
    </div>

    <h2>15.4 قواعد التصوير (الحاجز النهائي)</h2>
    <h3>15.4 Imaging Rules (The Ultimate Barrier)</h3>

    <h3>15.4.1 التصوير ليس إهانة؛ إنه أداة لإنقاذ الحياة</h3>
    <p>يرفض بعض الجراحين التصوير قائلين: "أنا أعرف أنه ليس بالداخل." هذا هو المكان الذي يجب أن تتغلب فيه سياسة المستشفى (Governance) على الأنا (Ego). إذا كان العنصر مفقوداً، <strong>فإن التصوير إلزامي وغير قابل للتفاوض.</strong> (AORN; The Joint Commission)</p>
    <p><span class="english-term"><strong>15.4.1 Imaging is not an insult; it is a lifesaving tool</strong><br>Some surgeons refuse imaging, saying: "I know it's not in there." This is where hospital policy must overrule ego. If an item is missing, <strong>imaging is mandatory and non-negotiable.</strong> (AORN; The Joint Commission)</span></p>

    <h3>15.4.2 من يقرأ الصورة؟ / Who reads the image?</h3>
    <p>يجب أن تتم قراءة صورة الأشعة السينية (X-ray) الخاصة بالبحث عن عنصر مفقود بواسطة طبيب أشعة مؤهل، وليس فقط الجراح العامل في الغرفة. الرؤية المنحازة (Confirmation bias) يمكن أن تجعل الجراح يغفل عن رؤية ما لا يريد رؤيته.</p>

    <h2>15.5 التوثيق (قول الحقيقة)</h2>
    <h3>15.5 Documentation (Truth Telling)</h3>

    <h3>15.5.1 التوثيق يحمي المريض ويحمي الفريق</h3>
    <p>إذا حدث تباين، لا تُخفه. يجب أن يعكس السجل الطبي الواقع:</p>
    <ul>
        <li>"حدث تباين في العد."</li>
        <li>"تم إيقاف الإغلاق والبحث في الحقل/الغرفة."</li>
        <li>"تم طلب تصوير وقراءته بواسطة د. [الاسم] كـ [سلبي/إيجابي]."</li>
        <li>"تم حل العد / أو لم يتم الحل ولكن تم استبعاد بقاء العنصر بالتصوير." (AHRQ; AORN)</li>
    </ul>
    <p><span class="english-term"><strong>15.5.1 Documentation protects the patient and the team</strong><br>If a discrepancy occurs, do not hide it. The medical record must reflect reality... (AHRQ; AORN)</span></p>

    <h2>15.6 أدوات عملية لموثوقية العد الجراحي</h2>
    <h3>15.6 Practical Tools for Surgical Count Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>15.6.1 الأداة 1 — لوحة العد البيضاء (The Count Whiteboard):</strong><br>
            لوحة مرئية في الغرفة لتسجيل الأرقام. تمنع الاعتماد على الذاكرة. (AORN)</li>
            <br>
            <li><strong>15.6.2 الأداة 2 — أكياس/جيوب الإسفنج (Sponge Bags/Counters):</strong><br>
            استخدام منظمات معقمة للإسفنج المستخدم بحيث يمكن رؤيته وعده بسهولة، وعدم رميه ككومة دموية عشوائية.</li>
            <br>
            <li><strong>15.6.3 الأداة 3 — بطاقة التوقف الإلزامي للتباين (Discrepancy Hard Stop Card):</strong><br>
            بطاقة صغيرة تُذكر الفريق بخطوات: توقف، ابحث، صعّد، صوّر. (IHI)</li>
        </ul>
    </div>

    <h2>15.7 القياس (المؤشرات الاستباقية للعد الجراحي)</h2>
    <h3>15.7 Measurement (Leading Indicators of Surgical Counts)</h3>

    <h3>15.7.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>معدل إكمال العد الأولي (Baseline count) بنسبة 100% (موثق ومُلاحظ).</li>
        <li>النسبة المئوية للامتثال لـ "العد المسموع والمشترك" (Audible, shared counting). (AORN)</li>
        <li>عدد أحداث "التوقف الإلزامي" المُبلغ عنها بسبب تباين العد. (AHRQ)</li>
    </ul>

    <h3>15.7.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <p>عدد حوادث العناصر الجراحية المتروكة (RSIs). (يجب أن يكون الهدف دائماً صفراً، ولكن التركيز يجب أن يكون على قوة الحواجز الاستباقية).</p>

    <h2>15.17 تأملات الكاتب (أفضل غرف العمليات هي الأكثر صدقاً)</h2>
    <h3>15.17 The Writer's Reflection</h3>

    <h3>15.17.1 العد ليس عملاً كتابياً؛ إنه وعد</h3>
    <p>العد الجراحي هو الطريقة التي تعد بها غرفة العمليات المريض بأننا لم نترك جزءاً من إجراءاتنا بداخله.</p>
    <p><span class="english-term"><strong>15.17.1 Counting is not clerical work; it is a promise</strong><br>The surgical count is how the OR promises the patient that we did not leave a piece of our procedure inside them.</span></p>

    <h3>15.17.2 اليقين يتطلب دليلاً</h3>
    <p>الثقة بالذاكرة في غرفة العمليات هي غطرسة. إذا كنا غير متأكدين، نتوقف ونثبت. نحن لا نُغلق ونأمل. (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>15.17.2 Certainty requires proof</strong><br>Trusting memory in the OR is arrogance. If we are unsure, we stop and prove. We do not close and hope. (IHI; AHRQ)</span></p>

    <h3>15.17.3 أفضل غرف العمليات ليست الأسرع؛ بل هي الأكثر صدقاً</h3>
    <p>إنهم لا يخفون التباينات. إنهم يحلونها. يتعلمون منها. يحمون المريض ويحمون الفريق من الندم. (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>15.17.3 The best ORs are not the fastest; they are the most honest</strong><br>They do not hide discrepancies. They resolve them. They learn from them. They protect the patient and protect the team from regret. (IHI; AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الوقاية من العناصر المتروكة هي <strong>نظام حواجز (Barrier system)</strong>: عد موحد + إدارة منضبطة للعناصر + توقف إلزامي عند التباين + قواعد تصوير + توثيق. (AORN; IHI)<br>
            <span class="english-term">RSI prevention is a <strong>barrier system</strong>: standardized counts + controlled item management + discrepancy hard stops + imaging rules + documentation.</span></li>
            
            <li>تتم إدارة التباينات من خلال خوارزمية صارمة، وليس باستخدام كلمة "على الأرجح". (AORN)<br>
            <span class="english-term">Discrepancies are handled by algorithm, not by “probably.”</span></li>
            
            <li>التصوير الطبي هو حاجز أمان عندما يستمر عدم اليقين، وليس إهانة للمهارة الجراحية. (AORN; WHO SSC)<br>
            <span class="english-term">Imaging is a safety barrier when uncertainty persists, not an insult.</span></li>
            
            <li>التوثيق هو جزء من السلامة والتعلم—يجب أن يكون صادقاً، كاملاً، وجاهزاً للتدقيق. (AHRQ)<br>
            <span class="english-term">Documentation is part of safety and learning—truthful, complete, and audit-ready.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (counts, discrepancy management principles, sterile field practices).</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources (sign-out counts confirmation, teamwork).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, communication, safety culture, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (hard stops, standard work, measurement, learning loops).</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery (hard-stop culture and verification mindset supporting intraoperative barriers).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  25: `<!-- Download Button -->
    

    <div class="part-title">PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs</div>
    <div class="part-title">الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة</div>
    
    <h1>CHAPTER 25 — Equipment Readiness and Preventive Maintenance</h1>
    <div class="subtitle">الفصل الخامس والعشرون — جاهزية المعدات والصيانة الوقائية<br>
    <span style="font-size: 18px;">(Daily Readiness Checks • Failure Reporting • Maintenance Governance • Backup)<br>
    (فحوصات الجاهزية اليومية • الإبلاغ عن الأعطال • حوكمة الصيانة • الأنظمة الاحتياطية)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد جاهزية المعدات <strong>حاجز سلامة سريري (Clinical safety barrier)</strong>، وليست مجرد رفاهية تقنية، وكيف تتحول الافتراضات إلى أضرار. (ECRI; AORN)<br>
            <span class="english-term">Explain why equipment readiness is a <strong>clinical safety barrier</strong>, not just a technical luxury, and how assumptions turn into harm. (ECRI; AORN)</span></li>
            
            <li>تصميم وتنفيذ <strong>فحوصات جاهزية يومية (Daily readiness checks)</strong> تُثبت وظيفة الجهاز قبل دخول المريض إلى الغرفة. (ECRI; AORN)<br>
            <span class="english-term">Design and implement <strong>daily readiness checks</strong> that prove function before the patient enters the room. (ECRI; AORN)</span></li>
            
            <li>تطبيق نظام صارم للإبلاغ عن الأعطال يمنع <strong>"إعادة الاستخدام الصامت" (Silent re-use)</strong> للأجهزة المعيبة (توقف–ضع علامة–أزل–أبلغ–استبدل). (AHRQ; IHI)<br>
            <span class="english-term">Apply a strict failure reporting system that prevents <strong>silent re-use</strong> of faulty devices (stop–tag–remove–report–replace). (AHRQ; IHI)</span></li>
            
            <li>فهم <strong>حوكمة الصيانة (Maintenance governance)</strong> (الصيانة الوقائية PM، اختبار القبول، وإعادة الإدخال للخدمة) لضمان عدم إعادة تدوير عدم اليقين. (AAMI concepts; ECRI)<br>
            <span class="english-term">Understand <strong>maintenance governance</strong> (PM, acceptance testing, return-to-service) to ensure uncertainty is not recycled. (AAMI concepts; ECRI)</span></li>
            
            <li>بناء <strong>أنظمة احتياطية (Backup systems)</strong> وخطط للتعامل مع وقت التعطل (Downtime playbooks) معروفة، قريبة، ومُختبرة. (IHI; NFPA 99 concepts)<br>
            <span class="english-term">Build <strong>backup systems</strong> and downtime playbooks that are known, near, and tested. (IHI; NFPA 99 concepts)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "اللحظة التي اختفى فيها الشفط"</strong><br>
        <span class="english-term">A true-to-life case: “The moment suction disappeared” (Real Scientific Story)</span>
    </div>

    <p>لقد تعلمت مبكراً أن إخفاقات المعدات نادراً ما تعلن عن نفسها بأدب. إنها تنتظر اللحظة التي تكون فيها الغرفة مزدحمة، والمريض في حالة ضعف، والوقت لم يعد حليفك.</p>
    <p><span class="english-term">I learned early that equipment failures rarely announce themselves politely. They wait for the moment when the room is busy, the patient is vulnerable, and time is no longer your friend.</span></p>

    <p>حالة واحدة لا تزال عالقة في ذاكرتي لأنها لم تكن دراماتيكية—حتى أصبحت كذلك. كانت عملية روتينية، العلامات الحيوية مستقرة، والتدفق طبيعي. ثم زادت الإفرازات فجأة. أراد الجراح شفطاً (Suction). واحتاج طبيب التخدير شفطاً. مدت الممرضة الدوارة يدها إلى جهاز الشفط الجداري، وأدارت المقبض، ولم تسمع شيئاً. كانت العلبة موجودة. وبدا الأنبوب متصلاً. والمنظم كان على وضع "التشغيل/ON". ومع ذلك، كان الشفط غائباً—في الثانية التي كان مهماً فيها.</p>
    <p><span class="english-term">One case still sits in my memory because it was not dramatic—until it was. A routine operation, stable vitals, normal flow. Then secretions increased suddenly. The surgeon wanted suction. The anesthetist needed suction. The circulating nurse reached for the wall suction, turned the knob, and heard nothing. The canister was there. The tubing looked connected. The regulator was “on.” Yet suction was absent—at the exact second it mattered.</span></p>

    <div class="alert-box">
        <p>فعلت الغرفة ما تفعله الغرف عندما تفشل الأنظمة: <strong>البطولات (Heroics)</strong>. تم جلب وحدة شفط أخرى من مسرح آخر. تم تبديل الوصلات. ارتجل شخص ما حلاً بديلاً. كان المريض آمناً. لكن الحقيقة كانت واضحة: <strong>لقد كنا نعيش على الافتراضات.</strong></p>
        <p><span class="english-term">The room did what rooms do when systems fail: <strong>heroics</strong>. Another suction unit was fetched from another theatre. Connectors were swapped. Someone improvised a workaround. The patient was safe. But the truth was clear: <strong>we had been living on assumption.</strong></span></p>
    </div>

    <p>لاحقاً، عندما تتبعنا السلسلة، كان السبب بسيطاً ومؤلماً: تُركت الوصلة مفكوكة بعد التنظيف ولم يقم أحد <strong>بالتحقق من الوظيفة (Verify function)</strong> في بداية اليوم. لم تفشل المعدة لأنها انكسرت؛ بل فشلت لأن <strong>الجاهزية كانت مُفترضة بدلاً من أن تكون مُثبتة.</strong> (ECRI; AORN)</p>
    <p><span class="english-term">Later, when we traced the chain, the cause was painfully simple: the connection had been left loose after cleaning and no one had <strong>verified function</strong> at day-start. The equipment didn’t fail because it broke; it failed because <strong>readiness was assumed instead of proven.</strong> (ECRI; AORN)</span></p>

    <div class="success-box">
        <p>هذا هو سبب وجود هذا الفصل. جاهزية المعدات ليست رفاهية تقنية. إنها حاجز سلامة سريري—هادئ عندما يعمل، ولا يرحم عندما يفشل. (AHRQ; IHI)</p>
        <p><span class="english-term">That is why this chapter exists. Equipment readiness is not a technical luxury. It is a clinical safety barrier—quiet when it works, unforgiving when it doesn’t. (AHRQ; IHI)</span></p>
    </div>

    <h2>25.1 وهم "لقد كانت تعمل بالأمس"</h2>
    <h3>25.1 The Illusion of “It Worked Yesterday”</h3>

    <h3>25.1.1 بيئة غرفة العمليات قاسية / The OR environment is harsh</h3>
    <p>تتعرض المعدات في غرفة العمليات للسحب، والاصطدام، والبلل، والتعقيم، وتغيير المكونات آلاف المرات. حقيقة أن الكابل كان سليماً يوم الثلاثاء لا تضمن أنه سينقل الطاقة يوم الأربعاء. (ECRI)</p>
    <p><span class="english-term"><strong>25.1.1 The OR environment is harsh</strong><br>OR equipment is dragged, bumped, wetted, sterilized, and swapped thousands of times. The fact that a cable was intact on Tuesday does not guarantee it will carry power on Wednesday. (ECRI)</span></p>

    <h3>25.1.2 الافتراض هو عدو الموثوقية / Assumption is the enemy of reliability</h3>
    <p>في غرف العمليات المزدحمة، ينظر الموظفون إلى البرج (Tower) ويقولون: "الضوء الأخضر مضاء، يبدو جاهزاً." لكن الاستعداد المرئي ليس هو الجاهزية الوظيفية. الأنظمة الموثوقة لا تثق في المظاهر؛ إنها تتطلب الإثبات. (IHI; AORN)</p>
    <p><span class="english-term"><strong>25.1.2 Assumption is the enemy of reliability</strong><br>In busy ORs, staff look at a tower and say, “The green light is on, it looks ready.” But visual readiness is not functional readiness. Reliable systems do not trust appearances; they demand proof. (IHI; AORN)</span></p>

    <h2>25.2 فحوصات الجاهزية اليومية (إثبات الوظيفة اليوم)</h2>
    <h3>25.2 Daily Readiness Checks (Proving Function Today)</h3>

    <h3>25.2.1 الإثبات، وليس الافتراض / Proof, not assumption</h3>
    <p>يجب أن تبدأ كل غرفة عمليات روتينها الصباحي بـ "تشغيل ميكانيكي/Mechanical run-through". هذا يختلف عن الصيانة الوقائية (PM) التي تتم شهرياً أو سنوياً. الفحص اليومي يُجيب على سؤال واحد: <strong>"هل ستعمل هذه القطعة في الساعة 8:00 صباحاً لهذا المريض؟"</strong> (ECRI)</p>
    <p><span class="english-term"><strong>25.2.1 Proof, not assumption</strong><br>Every OR must start its morning routine with a “mechanical run-through.” This is different from monthly or annual PM. The daily check answers one question: <strong>“Will this piece of equipment function at 8:00 a.m. for this patient?”</strong> (ECRI)</span></p>

    <h3>25.2.2 الحد الأدنى من فحص غرفة العمليات الصباحي / The minimum morning OR check</h3>
    <div class="concept-box">
        <p>يجب على الممرضة الدوارة أو الفني إثبات ما يلي بشكل مادي قبل دخول المريض الأول:</p>
        <ul>
            <li><strong>الشفط (Suction):</strong> قيد التشغيل، الأنابيب متصلة، ويولد ضغطاً سلبياً فعلياً.</li>
            <li><strong>طاولة العمليات (OR Table):</strong> موصولة بالكهرباء، البطارية مشحونة، وتتحرك في جميع الاتجاهات المقصودة. (AORN)</li>
            <li><strong>أجهزة الطاقة (Energy Devices):</strong> مولدات الجراحة الكهربائية/الليزر قيد التشغيل، بدون تنبيهات خطأ، دواسات القدم (Foot pedals) متصلة.</li>
            <li><strong>أبراج الفيديو (Video Towers):</strong> الشاشات، الكاميرات، ومصادر الضوء قيد التشغيل وتم اختبارها.</li>
            <li><strong>إخلاء الدخان (Smoke Evacuation):</strong> قيد التشغيل والفلتر صالح. (NIOSH concepts)</li>
        </ul>
        <p><span class="english-term">The circulating nurse or tech must physically prove the following before the first patient enters: <strong>Suction</strong>: turned on, tubing connected, pulling actual negative pressure. <strong>OR Table</strong>: plugged in, battery charged, articulates in all intended directions. <strong>Energy Devices</strong>: generators on, no error alerts, foot pedals connected. <strong>Video Towers</strong>: screens, cameras, and light sources on and tested. <strong>Smoke Evacuation</strong>: active, filter valid.</span></p>
    </div>

    <h3>25.2.3 الفحص قبل الاستخدام (Pre-use verification)</h3>
    <p>إلى جانب الفحص الصباحي، يجب التحقق من أي جهاز يتم جلبه للحالة (مثل المجهر، C-arm، جهاز الليزر) بأنه <strong>يعمل بشكل كامل</strong> قبل بدء الإجراء. انتظار إحضار C-arm ليكتشف الجراح أنه لا يعرض الصور أثناء الجراحة المفتوحة هو فشل تنظيمي. (AORN)</p>

    <h2>25.3 الإبلاغ عن الأعطال (إيقاف إعادة الاستخدام الصامت)</h2>
    <h3>25.3 Failure Reporting (Stopping the Silent Re-use)</h3>

    <h3>25.3.1 خطر "الوضع مرة أخرى في الخزانة" / The danger of "putting it back in the closet"</h3>
    <p>يتعطل جهاز. يقوم الطاقم المزدحم بفصله، ويدفعه إلى الممر، ويأخذ بديلاً. الجهاز المكسور يقف هناك. لاحقاً، يراه موظف آخر، يفترض أنه سليم، ويعيده إلى خزانة المعدات. في اليوم التالي، يفشل نفس الجهاز في حالة أخرى. <strong>هذا يُسمى إعادة الاستخدام الصامت.</strong> (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>25.3.1 The danger of "putting it back in the closet"</strong><br>A device glitches. The busy staff unplugs it, pushes it into the hallway, and grabs a replacement. The broken device sits there. Later, an orderly sees it, assumes it is fine, and pushes it back into the equipment closet. The next day, the same device fails in another case. <strong>This is called silent re-use.</strong> (IHI; AHRQ)</span></p>

    <h3>25.3.2 مسار (توقف–ضع علامة–أزل–أبلغ–استبدل)</h3>
    <div class="alert-box">
        <p>عندما تفشل قطعة من المعدات، يجب على غرفة العمليات تنفيذ هذا المسار فوراً (STOP–TAG–REMOVE–REPORT–REPLACE):</p>
        <ol>
            <li><strong>توقف (Stop):</strong> توقف عن استخدامه لتجنب الضرر.</li>
            <li><strong>ضع علامة (Tag):</strong> قم بوضع <strong>"علامة عيب" (Defect Tag)</strong> مادية على الجهاز توضح ما هو الخطأ (مثال: "الكابل ينقطع عند تحريكه"). "لا يعمل" ليست وصفاً كافياً للمهندسين.</li>
            <li><strong>أزل (Remove):</strong> قم بإزالته من غرفة العمليات ومناطق التخزين النظيفة لمنع إعادة استخدامه.</li>
            <li><strong>أبلغ (Report):</strong> أدخله في نظام إدارة صيانة المعدات (CMMS) أو الهندسة الطبية (Biomedical engineering).</li>
            <li><strong>استبدل (Replace):</strong> أحضر معدة عاملة. (AHRQ; ECRI)</li>
        </ol>
        <p><span class="english-term">When a piece of equipment fails, the OR must execute this pathway immediately: Stop, Tag, Remove, Report, Replace.</span></p>
    </div>

    <h2>25.4 حوكمة الصيانة ("السلامة خلف الكواليس")</h2>
    <h3>25.4 Maintenance Governance (The “Behind-the-Scenes” Safety)</h3>

    <h3>25.4.1 الصيانة الوقائية (PM) لا يمكن تخطيها / PM cannot be skipped</h3>
    <p>الصيانة الوقائية لا تُعنى فقط بإصلاح الأشياء المكسورة؛ إنها تتعلق باستبدال الأجزاء <em>قبل</em> أن تنكسر (مثل المعايرة، استبدال البطاريات، فحص سلامة العزل). استخدام جهاز تجاوز موعد الصيانة الوقائية (PM) هو انتهاك للامتثال وعامل خطر للسلامة. (AAMI concepts; ECRI)</p>
    <p><span class="english-term"><strong>25.4.1 PM cannot be skipped</strong><br>Preventive Maintenance (PM) is not just fixing broken things; it is replacing parts <em>before</em> they break (e.g., calibration, battery swaps, insulation integrity checks). Using a device past its PM due date is a compliance violation and a safety risk. (AAMI concepts; ECRI)</span></p>

    <h3>25.4.2 اختبار القبول للمعدات الجديدة / Acceptance testing</h3>
    <p>عند وصول معدات جديدة (أو معدات مُعارة/Loaner equipment)، لا يمكن لغرفة العمليات استخدامها على مريض بمجرد إخراجها من الصندوق. يجب أن تخضع لاختبار القبول من قبل الهندسة الطبية (Biomed) للتأكد من السلامة الكهربائية والمواصفات الصحيحة. (AAMI concepts)</p>

    <h3>25.4.3 بروتوكول إعادة الإدخال للخدمة / Return-to-service protocol</h3>
    <p>بعد إصلاح الجهاز، يجب ألا يتم وضعه ببساطة في الغرفة. يجب أن يكون هناك مستند/علامة صريحة بـ "تأكيد الإصلاح" (Repair Confirmed) من قسم Biomed تقر بأن الجهاز تم اختباره وأنه آمن للاستخدام البشري. (ECRI)</p>

    <h2>25.5 الأنظمة الاحتياطية واستعداد وقت التعطل (عندما تفشل الخطة أ)</h2>
    <h3>25.5 Backup and Downtime Readiness (When Plan A Fails)</h3>

    <h3>25.5.1 الأجهزة ستفشل؛ ما يهم هو الخطة ب (Plan B)</h3>
    <p>في غرفة العمليات الموثوقة، السؤال ليس "هل سيفشل هذا؟" السؤال هو: <strong>"عندما يفشل هذا، كيف سنتعافى في غضون 60 ثانية؟"</strong> (IHI)</p>
    <p><span class="english-term"><strong>25.5.1 Devices will fail; Plan B matters</strong><br>In a reliable OR, the question is not "Will this fail?" The question is: <strong>"When this fails, how do we recover in 60 seconds?"</strong> (IHI)</span></p>

    <h3>25.5.2 الاحتياط يجب أن يكون معروفاً وقريباً / Backup must be known and near</h3>
    <ul>
        <li><strong>مقبس الطاقة الأحمر (Red Outlets):</strong> يجب توصيل المعدات المنقذة للحياة (أجهزة التنفس، مجازة القلب والرئة/Bypass) بمقابس الطاقة الحمراء (المدعومة بالمولدات الاحتياطية). (NFPA 99 concepts)</li>
        <li><strong>أجهزة الشفط الاحتياطية (Backup Suction):</strong> إذا فشل الشفط الجداري، يجب أن يعرف الفريق مكان أقرب وحدة شفط محمولة.</li>
        <li><strong>مصادر الضوء والبطاريات:</strong> يجب أن تتوفر بطاريات مشحونة بالكامل للمثاقب والمناشير وكشافات الرأس في مكان التخزين.</li>
    </ul>

    <h3>25.5.3 خطط وقت التعطل (Downtime Playbooks)</h3>
    <p>ماذا تفعل غرفة العمليات إذا انقطع التيار الكهربائي وانقطعت شبكة المستشفى (IT system)؟</p>
    <ul>
        <li>هل الموظفون يعرفون أين يجدون الإضاءة الاحتياطية؟</li>
        <li>كيف سيتم طلب الدم بدون كمبيوتر؟</li>
        <li>كيف ستعمل سجلات التخدير الورقية؟</li>
    </ul>
    <p>تتدرب الفرق الجيدة على هذه السيناريوهات قبل حدوثها في الواقع. (IHI)</p>

    <h2>25.6 أدوات عملية لموثوقية المعدات</h2>
    <h3>25.6 Practical Tools for Equipment Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>25.6.1 الأداة 1 — بطاقة التحقق الصباحي للغرفة (Morning Room Check Card):</strong><br>
            بطاقة بسيطة ملصقة على باب غرفة العمليات. يُوقع عليها التمريض والتخدير كل صباح لإثبات اختبار الشفط، طاولة العمليات، أبراج الفيديو، والغازات. (AORN)</li>
            <br>
            <li><strong>25.6.2 الأداة 2 — علامة عيب المعدات (Equipment Defect Tag):</strong><br>
            علامات حمراء زاهية تُوضع في كل غرفة مع حقول لـ: التاريخ، اسم المبلّغ، <strong>وصف دقيق للمشكلة</strong> (توقف عن كتابة "مكسور"). (AHRQ)</li>
            <br>
            <li><strong>25.6.3 الأداة 3 — عربة وقت التعطل (Downtime Cart):</strong><br>
            عربة طوارئ مجهزة بنماذج ورقية للتوثيق، مصابيح يدوية (Flashlights)، قسائم طلب الدم، وبطاريات إضافية، متوفرة في الردهة المركزية لغرفة العمليات. (IHI)</li>
        </ul>
    </div>

    <h2>25.7 القياس (كيف تعرف أن معداتك جاهزة)</h2>
    <h3>25.7 Measurement (How to Know Your Equipment is Ready)</h3>

    <h3>25.7.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية لغرف العمليات التي أتمت بطاقة التحقق الصباحي بالكامل قبل إدخال المريض. (IHI)</li>
        <li>النسبة المئوية للمعدات (الكبيرة/المنقذة للحياة) التي تم الالتزام بصيانتها الوقائية (PM compliance &gt; 95%). (ECRI)</li>
        <li>الوقت المستغرق لإصلاح وإعادة إدخال المعدات المعيبة إلى الخدمة.</li>
    </ul>

    <h3>25.7.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>تأخيرات أو إلغاءات الحالات بسبب أعطال المعدات.</li>
        <li>الحوادث الوشيكة (Near-misses) أو الأحداث السلبية (Adverse events) المرتبطة بفشل جهاز طبي داخل العملية.</li>
    </ul>

    <h2>25.8 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>25.8 The Writer's Reflection</h3>

    <h3>25.8.1 التكنولوجيا تفشل؛ الأنظمة تنقذ</h3>
    <p>ستنكسر الأجهزة، وتفرغ البطاريات، وتفشل الشاشات. هذه فيزياء حتمية. ما يحدد سلامة المرضى ليس الكمال التكنولوجي؛ بل <strong>استعداد النظام البشري لإدارة ذلك الفشل.</strong></p>
    <p><span class="english-term"><strong>25.8.1 Technology fails; systems rescue</strong><br>Machines will break, batteries will drain, screens will fail. That is inevitable physics. What determines patient safety is not technological perfection; it is the <strong>human system's readiness to manage that failure.</strong></span></p>

    <h3>25.8.2 لا تورث المشكلة</h3>
    <p>عندما تُخفي جهازاً مكسوراً في الخزانة، فأنت تورث مشكلتك للممرضة التالية—والمريض التالي. الإبلاغ عن الأعطال هو من أسمى أشكال احترام زملائك ومرضاك.</p>
    <p><span class="english-term"><strong>25.8.2 Do not inherit the problem</strong><br>When you hide a broken device in a closet, you are bequeathing your problem to the next nurse—and the next patient. Failure reporting is one of the highest forms of respect for your colleagues and your patients.</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الفحوصات اليومية للجاهزية تُثبت وظيفة الأجهزة <strong>اليوم</strong>—الصيانة الوقائية (PM) وحدها لا تكفي. (ECRI; AORN)<br>
            <span class="english-term">Daily readiness checks prove function <strong>today</strong>—PM alone is not enough.</span></li>
            
            <li>يجب أن يمنع نظام الإبلاغ عن الأعطال إعادة الاستخدام الصامت: توقف–ضع علامة–أزل–أبلغ–استبدل. (AHRQ; IHI)<br>
            <span class="english-term">Failure reporting must prevent silent re-use: stop–tag–remove–report–replace.</span></li>
            
            <li>تتحكم حوكمة الصيانة في الـ PM، اختبار القبول، وإعادة الإدخال للخدمة—لتتوقف غرفة العمليات عن إعادة تدوير عدم اليقين. (AAMI concepts; ECRI)<br>
            <span class="english-term">Maintenance governance controls PM, acceptance testing, configuration, and return-to-service—so the OR stops recycling uncertainty.</span></li>
            
            <li>يجب أن تكون البدائل (Backup) معروفة، قريبة، مُختبرة، ومدعومة بخطط وقت التعطل وتدريبات. (IHI; NFPA 99 concepts)<br>
            <span class="english-term">Backup must be known, near, tested, and supported by downtime playbooks and drills.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>ECRI — Health technology safety / hazard concepts (device readiness, failure modes, risk controls).</li>
            <li>Association of periOperative Registered Nurses (AORN) — Guidelines for Perioperative Practice (perioperative equipment readiness and safe setup concepts).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety resources (systems thinking, reporting culture, learning from near-misses).</li>
            <li>Institute for Healthcare Improvement (IHI) — Reliability and quality improvement resources (standard work, escalation pathways, learning loops, safety under pressure).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI) (concepts) — Medical equipment management and maintenance governance (PM, acceptance testing, release-to-service discipline).</li>
            <li>National Fire Protection Association (NFPA) 99 (concepts) — Health care facilities electrical/power safety concepts relevant to backup readiness.</li>
            <li>National Institute for Occupational Safety and Health (NIOSH) (concepts) — Occupational exposure control concepts supporting smoke evacuation readiness in energy-heavy cases.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  4: `<!-- Download Button -->
    

    <div class="part-title">PART I — Foundations of OR Safety &amp; Quality</div>
    <div class="part-title">الجزء الأول — أسس السلامة والجودة في غرفة العمليات</div>
    
    <h1>CHAPTER 4 — OR Governance and Accountability</h1>
    <div class="subtitle">الفصل الرابع — حوكمة غرفة العمليات والمساءلة<br>
    <span style="font-size: 18px;">(Leadership Model • Rules of the Theatre • Committees and Decision Rights • Accountability Without Blame • Audit and Learning System)<br>
    (نموذج القيادة • قواعد المسرح • اللجان وحقوق اتخاذ القرار • المساءلة بلا لوم • نظام التدقيق والتعلم)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>تعريف <strong>حوكمة غرفة العمليات (OR governance)</strong> كنظام سلامة (وليس هيكلاً إدارياً) وشرح لماذا تتنبأ إخفاقات الحوكمة بالضرر السريري. (The Joint Commission; IHI; AHRQ)<br>
            <span class="english-term">Define <strong>OR governance</strong> as a safety system (not an administrative structure) and explain why governance failures predict clinical harm. (The Joint Commission; IHI; AHRQ)</span></li>
            
            <li>بناء <strong>نموذج قيادة (Leadership model)</strong> واضح لغرفة العمليات مع تحديد حقوق اتخاذ القرار (من يقرر، من يُصعّد، من يمكنه إيقاف الخط). (IHI; The Joint Commission)<br>
            <span class="english-term">Build a clear <strong>OR leadership model</strong> with defined decision rights (who decides, who escalates, who can stop the line). (IHI; The Joint Commission)</span></li>
            
            <li>تصميم هيكل للجان غرفة العمليات (التنفيذية/التوجيهية + اللجان الفرعية) بمهام وصلاحيات (TOR) عملية وآليات مساءلة. (IHI)<br>
            <span class="english-term">Design an OR committee structure (OR Executive/Steering + subcommittees) with practical <strong>TOR</strong> and accountability mechanisms. (IHI)</span></li>
            
            <li>تطبيق مبادئ <strong>الثقافة العادلة (Just Culture)</strong> على المساءلة: التفريق بين الخطأ البشري، السلوك المحفوف بالمخاطر، والسلوك المتهور—دون إضعاف المعايير. (AHRQ; IHI)<br>
            <span class="english-term">Apply <strong>Just Culture</strong> principles to accountability: differentiate human error, at-risk behavior, and reckless behavior—without weakening standards. (AHRQ; IHI)</span></li>
            
            <li>إنشاء مجموعة أدوات لحوكمة غرفة العمليات: <strong>السياسات، عمليات التدقيق، لوحات القيادة (Dashboards)، سجل المخاطر، قواعد التصعيد، وحلقات التعلم.</strong> (IHI; AHRQ; The Joint Commission)<br>
            <span class="english-term">Create an OR governance toolkit: <strong>policies, audits, dashboards, risk register, escalation rules, and learning loops</strong>. (IHI; AHRQ; The Joint Commission)</span></li>
            
            <li>اختيار مجموعة أدنى من مؤشرات أداء الحوكمة (KPIs) التي تُظهر النضج الحقيقي للسلامة: جودة الحاجز، وقت دورة التعلم، موثوقية الامتثال، والوقاية من الأحداث الضارة. (IHI; AHRQ)<br>
            <span class="english-term">Choose a minimal set of governance KPIs that demonstrate real safety maturity: barrier quality, learning cycle time, compliance reliability, and adverse-event prevention. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "فريق آمن داخل نظام غير آمن"</strong><br>
        <span class="english-term">A true-to-life case: “A safe team inside an unsafe system” (Real Scientific Story)</span>
    </div>

    <p>كان موظفو غرفة العمليات يتمتعون بالخبرة والالتزام. عملوا بجد، وبقوا لوقت متأخر، وأنقذوا العديد من "الأحداث التي كادت أن تقع" (Almost-events). ومع ذلك، استمرت نفس الحوادث الوشيكة (Near-misses) في التكرار: مكونات غرسات مفقودة، تفاصيل حجز غير مكتملة، عينات تُرسل بارتباك في اللحظة الأخيرة، مشاكل في حركة المرور (Traffic)، اختصارات في التنظيف للتبديل السريع، وتباينات في التوثيق.</p>
    <p><span class="english-term">The OR staff were experienced and committed. They worked hard, stayed late, and rescued many “almost-events.” Yet the same near-misses kept repeating: missing implant components, incomplete booking details, specimens sent with last-minute confusion, traffic issues, turnover shortcuts, documentation mismatches.</span></p>

    <div class="alert-box">
        <p>في أحد الأسابيع، وقع حادث خطير. لم يكن ذلك بسبب افتقار الفريق للمهارة. بل لأن النظام لم يكن لديه حوكمة فعالة:</p>
        <p><span class="english-term">One week, a serious incident occurred. It was not because the team lacked skill. It was because the system had no effective governance:</span></p>
        <ul>
            <li>السياسة موجودة، لكن لا أحد يمتلك مسؤولية تنفيذها. (IHI)</li>
            <li>تم إجراء عمليات التدقيق، لكن الملاحظات لم تُغير سير العمل أبداً. (IHI)</li>
            <li>اعتمد التصعيد على الشخصية—البعض يتحدث بصوت عالٍ، والبعض الآخر يظل صامتاً. (AHRQ)</li>
            <li>كانت القرارات غير رسمية وغير متسقة: "أحياناً نمضي قدماً، وأحياناً نلغي." (IHI)</li>
            <li>كانت لجنة العمليات تجتمع بشكل غير منتظم وتناقش المشاكل دون إغلاق الإجراءات (Closing actions). (IHI)</li>
        </ul>
    </div>

    <p>في مراجعة الحدث، سأل أحد كبار القادة: "لماذا لم تتبعوا السياسة؟"<br>
    أجابت ممرضة بهدوء: <strong>"لأن السياسة ليست هي النظام. النظام هو ما يحدث في الساعة 7:30 صباحاً عندما نكون متأخرين ونعاني من نقص في الموظفين."</strong> (IHI)</p>
    <p><span class="english-term">In the event review, a senior leader asked: “Why didn’t you follow the policy?”<br>A nurse answered quietly: <strong>“Because the policy is not the system. The system is what happens at 7:30 a.m. when we are late and short-staffed.”</strong> (IHI)</span></p>

    <div class="success-box">
        <p>أعادت تلك اللحظة صياغة النهج بأكمله. لم تكن غرفة العمليات بحاجة إلى المزيد من إلقاء اللوم. كانت بحاجة إلى <strong>حوكمة (Governance)</strong>—قواعد واضحة، حقوق اتخاذ قرار، عمليات تدقيق تؤدي إلى إجراءات، ومساءلة عادلة وفعالة. (AHRQ; IHI; The Joint Commission)</p>
        <p><span class="english-term">That moment reframed the entire approach. The OR did not need more blame. It needed <strong>governance</strong>—clear rules, decision rights, audits that lead to action, and accountability that is fair and effective. (AHRQ; IHI; The Joint Commission)</span></p>
    </div>

    <h2>4.1 ما هي حوكمة غرفة العمليات حقاً (ولماذا هي مهمة) / What OR Governance Really Is (and Why It Matters)</h2>

    <h3>4.1.1 الحوكمة هي "نظام التشغيل" للمسرح / Governance is the “operating system” of the theatre</h3>
    <p>حوكمة غرفة العمليات هي مجموعة الهياكل، والقواعد، والعمليات التي تحدد:</p>
    <p><span class="english-term">OR governance is the set of structures, rules, and processes that determine:</span></p>
    <ul>
        <li>كيف يُصمم العمل،</li>
        <li>كيف تُتخذ القرارات،</li>
        <li>كيف تُفرض حواجز السلامة،</li>
        <li>كيف تُخصص الموارد،</li>
        <li>كيف يُحقق في الحوادث،</li>
        <li>وكيف يتعلم النظام. (IHI; AHRQ)</li>
    </ul>
    <p>إذا كانت الحوكمة ضعيفة، تصبح السلامة معتمدة على البطولات (Heroics). (IHI)</p>
    <p><span class="english-term">If governance is weak, safety becomes dependent on heroics. (IHI)</span></p>

    <h3>4.1.2 إخفاقات الحوكمة تخلق ضرراً يمكن التنبؤ به / Governance failures create predictable harm</h3>
    <p>عندما تكون حوكمة غرفة العمليات ضعيفة، ترى نفس الأنماط تتكرر:</p>
    <p><span class="english-term">When OR governance is weak, you see the same patterns:</span></p>
    <ul>
        <li>ممارسات تحقق غير متسقة. (The Joint Commission; WHO SSC)</li>
        <li>إلغاءات متكررة يمكن الوقاية منها و"التفافات" (Workarounds). (IHI)</li>
        <li>إمكانية تتبع ضعيفة (للغرسات/العينات). (AORN)</li>
        <li>انضباط هش للتنظيف والعقامة تحت ضغط الوقت. (AORN; WHO SSI)</li>
        <li>تصعيد غير متسق عند حدوث التباينات. (IHI; AHRQ)</li>
    </ul>
    <p>هذه ليست "مشاكل موظفين". إنها <strong>إشارات حوكمة (Governance signals)</strong>. (IHI)</p>
    <p><span class="english-term">These are not “staff issues.” They are <strong>governance signals</strong>. (IHI)</span></p>

    <h3>4.1.3 الحوكمة هي أيضاً شبكة أمان قانونية ورقابية / Governance is also a legal and accreditation safety net</h3>
    <p>تفحص هيئات الاعتماد ما إذا كان المستشفى قادراً على:</p>
    <p><span class="english-term">Accreditation bodies examine whether the hospital can:</span></p>
    <ul>
        <li>إظهار ممارسة قياسية (Demonstrate standard practice)،</li>
        <li>إثبات الامتثال (Prove compliance)،</li>
        <li>إظهار التعلم من الأحداث (Show learning from events)،</li>
        <li>والحفاظ على مسارات التدقيق (Maintain audit trails). (The Joint Commission)</li>
    </ul>
    <p>لذلك، الحوكمة القوية تحمي المرضى وتحمي المؤسسة. (The Joint Commission)</p>
    <p><span class="english-term">Therefore, strong governance protects patients and protects the organization. (The Joint Commission)</span></p>

    <h2>4.2 مبادئ حوكمة غرفة العمليات (الأساسيات غير القابلة للتفاوض) / OR Governance Principles (The Non-Negotiables)</h2>

    <h3>4.2.1 سلامة المريض هي القيد التشغيلي الأول / Patient safety is the first operational constraint</h3>
    <p>في الأنظمة عالية الموثوقية، أهداف الإنتاج لا تتجاوز أبداً حواجز السلامة. (IHI)<br>
    بلغة غرفة العمليات: الجدول الزمني للقائمة مهم—لكن <strong>التوقف الإلزامي (Hard stops) أكثر أهمية</strong>. (The Joint Commission; AORN)</p>
    <p><span class="english-term">In high-reliability systems, production goals never override safety barriers. (IHI). In OR language: the list schedule is important—but <strong>hard stops are more important</strong>. (The Joint Commission; AORN)</span></p>

    <h3>4.2.2 يجب أن تكون حقوق اتخاذ القرار صريحة / Decision rights must be explicit</h3>
    <p>إذا كان من غير الواضح من يمكنه:<br>
    • تأخير حالة،<br>
    • إيقاف حالة،<br>
    • تغيير القائمة،<br>
    • الموافقة على الاستثناءات،<br>
    فإن السلامة تصبح غير متسقة. (IHI)<br>
    تمنع حقوق اتخاذ القرار الصريحة الصراع، والصمت، والانحراف. (AHRQ)</p>
    <p><span class="english-term">If it is unclear who can: delay a case, stop a case, change the list, approve exceptions, then safety becomes inconsistent. (IHI). Explicit decision rights prevent conflict, silence, and drift. (AHRQ)</span></p>

    <h3>4.2.3 التقييس يجب أن يتوازن مع المرونة السريرية / Standardization must be balanced with clinical flexibility</h3>
    <p>الحوكمة الجيدة تُوحد:</p>
    <ul>
        <li>عمليات التحقق،</li>
        <li>التوثيق،</li>
        <li>العد الجراحي (Counts)،</li>
        <li>التعامل مع العينات،</li>
        <li>إمكانية تتبع الغرسات،</li>
        <li>محفزات التصعيد (Escalation triggers). (AORN; The Joint Commission)</li>
    </ul>
    <p>إنها لا تُوحد الحكم السريري (Clinical judgment). بل <strong>تُقنن غلاف السلامة من حوله</strong>. (IHI)</p>
    <p><span class="english-term">Good governance standardizes: verification processes, documentation, counts, specimen handling, implant traceability, escalation triggers. (AORN; The Joint Commission). It does not standardize clinical judgment. It standardizes the safety shell around it. (IHI)</span></p>

    <h3>4.2.4 المساءلة يجب أن تكون عادلة (وفعالة) / Accountability must be Just (and effective)</h3>
    <p>تزيد "الثقافة العادلة" من الإبلاغ والتعلم مع الحفاظ على المعايير. (AHRQ; IHI)<br>
    وبدونها، يخفي الموظفون الحوادث الوشيكة ويُصبح النظام أعمى. (AHRQ)</p>
    <p><span class="english-term">A Just Culture increases reporting and learning while preserving standards. (AHRQ; IHI). Without it, staff hide near-misses and the system becomes blind. (AHRQ)</span></p>

    <h2>4.3 نموذج قيادة غرفة العمليات (من يقود ماذا) / The OR Leadership Model (Who Leads What)</h2>

    <h3>4.3.1 نموذج "الثالوث" لقيادة غرفة العمليات / The OR “Triad” leadership model</h3>
    <p>من التصاميم العملية والمستخدمة على نطاق واسع للحوكمة هو الثالوث (Triad) في غرفة العمليات:</p>
    <p><span class="english-term">A practical and widely used governance design is an OR triad:</span></p>
    <ul>
        <li><strong>القائد الطبي/الجراحي (Medical/Surgical Lead):</strong> (المعايير السريرية، مشاركة الجراحين، حوكمة الإجراءات).</li>
        <li><strong>قائد التخدير (Anesthesia Lead):</strong> (واجهة المخاطر حول الجراحة Perioperative risk؛ ليس تكراراً لمحتوى التخدير، بل مواءمة للحوكمة).</li>
        <li><strong>قائد التمريض/العمليات (Nursing/Operations Lead):</strong> (موثوقية سير العمل، التوظيف، بوابات الجاهزية، العقامة، التوثيق). (IHI)</li>
    </ul>
    <p>يضمن هذا الثالوث أن تعكس القرارات كلاً من الواقع السريري والموثوقية التشغيلية. (IHI)</p>
    <p><span class="english-term">This triad ensures decisions reflect both clinical reality and operational reliability. (IHI)</span></p>

    <h3>4.3.2 أدوار واضحة: الحوكمة التكتيكية مقابل الاستراتيجية / Clear roles: tactical vs strategic governance</h3>
    <ul>
        <li><strong>القيادة التكتيكية (Tactical leadership):</strong> قرارات التدفق اليومية (تغييرات القائمة، بدء الحالات، إعادة تخصيص الموارد).</li>
        <li><strong>الحوكمة الاستراتيجية (Strategic governance):</strong> السياسات، المخاطر، الجودة، المقاييس، نظام التعلم. (IHI)</li>
    </ul>
    <p>عندما تختلط الأدوار التكتيكية والاستراتيجية، تصبح اللجان مجرد إطفاء للحرائق (Firefighting) ولا تنضج أبداً. (IHI)</p>
    <p><span class="english-term">When tactical and strategic roles are mixed, committees become firefighting and never mature. (IHI)</span></p>

    <h3>4.3.3 يجب حماية "سلطة إيقاف الخط" / The “authority to stop the line” must be protected</h3>
    <p>يجب أن تنص الحوكمة صراحة على ما يلي:</p>
    <p><span class="english-term">Governance must explicitly state:</span></p>
    <ul>
        <li>يمكن لأي عضو في الفريق إثارة قلق يتعلق بالسلامة.</li>
        <li>القادة المعينون (الممرضة المسؤولة / مشرف العمليات) لديهم <strong>سلطة إيقاف (Pause)</strong> التدفق.</li>
        <li>مسار التصعيد مُوحد.</li>
        <li>الانتقام (Retaliation) محظور. (AHRQ; IHI; The Joint Commission)</li>
    </ul>

    <h2>4.4 قواعد المسرح (كيف تصبح الحوكمة حقيقية) / OR Rules of the Theatre (How Governance Becomes Real)</h2>

    <h3>4.4.1 القواعد هي حواجز سلامة، وليست إتيكيت / The rules are safety barriers, not etiquette</h3>
    <p>يجب أن تكون قواعد غرفة العمليات قليلة، واضحة، ومفروضة. أمثلة:</p>
    <p><span class="english-term">OR rules should be few, clear, and enforced. Examples:</span></p>
    <ul>
        <li>لا شق جراحي قبل اكتمال الـ Time-out. (WHO SSC; The Joint Commission)</li>
        <li>لا إغلاق مع وجود تباين لم يُحل في العد الجراحي (Counts). (AORN)</li>
        <li>لا تخرج أي عينة من الغرفة دون التحقق من الملصق. (AORN; AHRQ)</li>
        <li>لا يُستخدم أي غرسة دون التقاط إمكانية التتبع. (AORN)</li>
        <li>لا يُستمر في الإجراء مع وجود عدم تطابق لم يُحل في الموقع/الإجراء. (The Joint Commission)</li>
    </ul>

    <h3>4.4.2 يجب حوكمة الاستثناءات، وليس ارتجالها / Exceptions must be governed, not improvised</h3>
    <p>الطوارئ موجودة. قد تكون الاستثناءات ضرورية.<br>لكن يجب أن تكون الاستثناءات:</p>
    <ul>
        <li>مُعرّفة (defined)،</li>
        <li>مُوثقة (documented)،</li>
        <li>مُراجعة (reviewed)،</li>
        <li>ومُقللة للحد الأدنى (minimized). (IHI)</li>
    </ul>
    <p>لا يجب أن تصبح "حالة الطوارئ" عذراً ثقافياً لتجاوز الحواجز في الحالات الروتينية. (IHI)</p>
    <p><span class="english-term">“Emergency” must not become a cultural excuse for bypassing barriers in routine cases. (IHI)</span></p>

    <h3>4.4.3 يجب على المسرح تحديد "محفزات التوقف الإلزامي" / The theatre must define “hard stop triggers”</h3>
    <div class="alert-box">
        <p>التوقفات الإلزامية (Hard stops) هي الحوكمة في حالة عمل. تشمل محفزات التوقف الإلزامي النموذجية:</p>
        <p><span class="english-term">Hard stops are governance in action. Typical hard stops include:</span></p>
        <ul>
            <li>عدم تطابق في البروتوكول العالمي (Universal Protocol). (The Joint Commission)</li>
            <li>تباين في العد الجراحي لم يُحل. (AORN)</li>
            <li>عدم يقين في هوية العينة. (AORN; AHRQ)</li>
            <li>مكونات غرسات حرجة مفقودة. (AORN; ECRI)</li>
            <li>اختراق العقامة غير المُدار في سياق حرج. (AORN; WHO SSI)</li>
        </ul>
    </div>

    <h2>4.5 هيكل لجان غرفة العمليات (بسيط، قوي، موجه للعمل) / OR Committee Structure (Simple, Powerful, Action-Oriented)</h2>

    <h3>4.5.1 "حزمة" حوكمة غرفة العمليات / The OR Governance “Stack”</h3>
    <p>الهيكل العملي (A workable stack):</p>
    <ul>
        <li><strong>اللجنة التنفيذية/التوجيهية لغرفة العمليات (شهرياً):</strong> تمتلك المعايير، المخاطر، القرارات الرئيسية، المقاييس. (IHI)</li>
        <li><strong>اللجان الفرعية/مجموعات العمل (شهرياً أو نصف شهرياً):</strong>
            <ul>
                <li>سلامة ومخاطر غرفة العمليات (سجل المخاطر، التوقفات الإلزامية، الحوادث). (AHRQ; IHI)</li>
                <li>مكافحة العدوى والعقامة في العمليات (موثوقية الوقاية من SSI، واجهة قسم التعقيم CSSD). (WHO SSI; CDC SSI; AORN)</li>
                <li>عمليات وتدفق غرفة العمليات (قواعد الجدولة، الإلغاءات، الجاهزية، التبديل). (IHI)</li>
                <li>التعليم والكفاءة في العمليات (التدريب، التدريبات الوهمية، واجهة الاعتماد). (AORN; IHI)</li>
            </ul>
        </li>
    </ul>
    <p>أبقِ الهيكل في حده الأدنى؛ فاللجان الكثيرة جداً تؤدي إلى تشتت المساءلة. (IHI)</p>
    <p><span class="english-term">Keep structure minimal; too many committees create diffusion of accountability. (IHI)</span></p>

    <h3>4.5.2 مهام اللجان (TOR) — ما يجب كتابته / Committee TOR (Terms of Reference)</h3>
    <p>يجب أن يكون لكل لجنة نموذج TOR من صفحة واحدة يتضمن:</p>
    <p><span class="english-term">Each committee should have a one-page TOR including:</span></p>
    <ul>
        <li>الغرض والنطاق (purpose and scope).</li>
        <li>الرئيس والأعضاء (chair and members).</li>
        <li>تكرار الاجتماعات واكتمال النصاب (meeting frequency and quorum).</li>
        <li>سلطة القرار وحقوق التصعيد (decision authority and escalation rights).</li>
        <li>خط تقديم التقارير لقيادة المستشفى (reporting line).</li>
        <li>المخرجات/النواتج (لوحات القيادة، عمليات التدقيق، تحديثات السياسات).</li>
        <li>طريقة تتبع الإجراءات وقواعد الإغلاق. (IHI)</li>
    </ul>

    <h3>4.5.3 "سجل الإجراءات" هو قلب الحوكمة / The “Action Log” is the heart of governance</h3>
    <p>تفشل اللجان عندما تناقش المشاكل ولكن لا تغلق الإجراءات. يتضمن سجل العمل بمستوى الحوكمة ما يلي:</p>
    <p><span class="english-term">Committees fail when they discuss problems but do not close actions. A governance-grade action log includes:</span></p>
    <ul>
        <li>بيان الإجراء (action statement).</li>
        <li>المالك (owner).</li>
        <li>تاريخ الاستحقاق (due date).</li>
        <li>مقياس لإثبات الاكتمال (metric to prove completion).</li>
        <li>الحالة (مفتوح / محظور / مغلق) (status: open/blocked/closed).</li>
        <li>تاريخ إعادة التدقيق (re-audit date). (IHI)</li>
    </ul>

    <h2>4.6 المساءلة بلا لوم (تطبيق الثقافة العادلة) / Accountability Without Blame (Just Culture Applied)</h2>

    <h3>4.6.1 لماذا يشعر إلقاء اللوم بالرضا ولكنه يغير القليل / Why blame feels satisfying but changes little</h3>
    <p>اللوم يخلق راحة عاطفية قصيرة المدى وصمتاً طويل المدى. (AHRQ)<br>
    إذا خاف الموظفون من العقاب، فسيتوقفون عن الإبلاغ عن الحوادث الوشيكة (Near-misses)، وتفقد غرفة العمليات نظام الإنذار المبكر الخاص بها. (AHRQ)</p>
    <p><span class="english-term">Blame creates short-term emotional relief and long-term silence. (AHRQ). If staff fear punishment, they stop reporting near-misses, and the OR loses its early warning system. (AHRQ)</span></p>

    <h3>4.6.2 فئات الثقافة العادلة (أمثلة من غرفة العمليات) / The Just Culture categories</h3>

    <table>
        <thead>
            <tr>
                <th>الفئة / Category</th>
                <th>المثال في غرفة العمليات / OR Example</th>
                <th>الاستجابة الصحيحة / Proper Response</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>الخطأ البشري (زلة/هفوة)</strong><br><span class="english-term">Human error (slip/lapse)</span></td>
                <td>وضع ملصق على حاوية عينة خاطئة أثناء مقاطعة. (AHRQ; AORN)<br><span class="english-term">A label placed on the wrong specimen container during interruption.</span></td>
                <td>مواساة ودعم الموظف، إعادة تصميم سير عمل التسمية، حماية اللحظة، تقليل المقاطعات.<br><span class="english-term">Console staff member, redesign labeling workflow, protect the moment, reduce interruptions.</span></td>
            </tr>
            <tr>
                <td><strong>السلوك المحفوف بالمخاطر (اختصار تحت الضغط)</strong><br><span class="english-term">At-risk behavior (shortcut under pressure)</span></td>
                <td>تخطي جزء من الـ Time-out لأن القائمة متأخرة؛ قبول توثيق غير مكتمل لأنه "يحدث دائماً".<br><span class="english-term">Skipping part of time-out because list is late; accepting incomplete documentation.</span></td>
                <td>توجيه (Coaching) + إعادة تصميم النظام لإزالة حافز الاختصارات؛ تقوية التوقفات الإلزامية. (IHI; WHO SSC)<br><span class="english-term">Coaching + system redesign to remove incentive for shortcuts; strengthen hard stops.</span></td>
            </tr>
            <tr>
                <td><strong>السلوك المتهور (تجاهل واعي لمخاطر كبيرة)</strong><br><span class="english-term">Reckless behavior (conscious disregard of risk)</span></td>
                <td>تجاهل متعمد لتباين في العد الجراحي (Count discrepancy) للانتهاء بشكل أسرع.<br><span class="english-term">Intentionally ignoring a count discrepancy to finish faster.</span></td>
                <td>إجراء تأديبي ومساءلة رسمية. (AHRQ; AORN)<br><span class="english-term">Disciplinary action and formal accountability.</span></td>
            </tr>
        </tbody>
    </table>

    <p>الثقافة العادلة ليست "لينة". إنها <strong>دقيقة (Precise)</strong>. (AHRQ)</p>

    <h3>4.6.3 يجب أن تحمي الحوكمة التحدث بصوت عالٍ / Governance must protect speaking up</h3>
    <p>يجب أن تحدد الحوكمة صراحة:</p>
    <ul>
        <li>التحدث بصوت عالٍ (Speaking up) أمر مُتوقع.</li>
        <li>الانتقام أمر غير مقبول.</li>
        <li>يجب على القادة الاستجابة باحترام وإجراء عملي. (AHRQ)</li>
    </ul>
    <p>السلامة النفسية (Psychological safety) ليست مجرد راحة—إنها ضابط أمان (Safety control). (AHRQ)</p>
    <p><span class="english-term">Psychological safety is not comfort—it is a safety control. (AHRQ)</span></p>

    <h2>4.7 إدارة الحوادث ونظام التعلم (الحوكمة في حالة حركة) / Incident Management and Learning System</h2>

    <h3>4.7.1 يجب أن يكون الإبلاغ سهلاً وموثوقاً / Reporting must be easy and trusted</h3>
    <p>إذا كان الإبلاغ صعباً أو عقابياً، فإنه ينهار. (AHRQ)<br>
    تشجع غرفة العمليات الناضجة على الإبلاغ عن:</p>
    <ul>
        <li>الحوادث الوشيكة (near-misses)،</li>
        <li>إخفاقات الحواجز (barrier failures)،</li>
        <li>الظروف غير الآمنة (unsafe conditions)،</li>
        <li>الالتفافات المتكررة (repeated workarounds). (AHRQ)</li>
    </ul>

    <h3>4.7.2 التحقيق: من الحدث إلى فشل الحاجز / Investigation: from event to barrier failure</h3>
    <p>يجب أن تجيب التحقيقات على:</p>
    <p><span class="english-term">Investigations should answer:</span></p>
    <ul>
        <li>أي حاجز فشل (جودة Time-out، عملية العد، سلامة الحجز).</li>
        <li>لماذا فشل (مقاطعات، غموض الدور، غياب التوقف الإلزامي).</li>
        <li>كيفية إعادة تصميمه. (IHI; AHRQ)</li>
    </ul>

    <h3>4.7.3 حلقة التعلم: الإجراء، التدقيق، الملاحظات، إعادة التدقيق / Learning loop</h3>
    <p>يُقاس نضج الحوكمة بوقت الدورة (Cycle time):</p>
    <p><span class="english-term">Governance maturity is measured by cycle time:</span></p>
    <ul>
        <li>مدى سرعة تحول الحدث إلى إجراء.</li>
        <li>مدى سرعة تحول الإجراء إلى تغيير في النظام.</li>
        <li>مدى سرعة التحقق من هذا التغيير. (IHI)</li>
    </ul>

    <h2>4.8 السياسات، الإجراءات، و"العمل القياسي" / Policies, Procedures, and “Standard Work”</h2>

    <h3>4.8.1 السياسة لا تكفي؛ العمل القياسي مطلوب / Policy is not enough; standard work is required</h3>
    <p>تصف السياسات النية (Intent). يصف العمل القياسي كيف يحدث ذلك بالفعل. (IHI)</p>
    <p><span class="english-term">Policies describe intent. Standard work describes how it actually happens. (IHI)</span></p>
    <p>في سلامة غرفة العمليات، يجب أن يوجد عمل قياسي لـ:</p>
    <ul>
        <li>جودة تنفيذ الـ Time-out. (WHO SSC; AORN)</li>
        <li>عمليات العد (Counts) وإدارة التباين. (AORN)</li>
        <li>سير عمل تسمية العينات. (AORN; AHRQ)</li>
        <li>إمكانية تتبع الغرسات. (AORN)</li>
        <li>نظافة التبديل/التنظيف (Cleaning/turnover). (AORN)</li>
        <li>الاستجابة لاختراقات العقامة. (AORN; WHO SSI)</li>
    </ul>

    <h3>4.8.2 التحكم في المستندات وحوكمة الإصدارات / Document control and version governance</h3>
    <p>يجب أن تعرف غرفة العمليات الآمنة:</p>
    <ul>
        <li>أي إصدار من السياسة هو النشط.</li>
        <li>من قام بتدريب الموظفين على التغييرات.</li>
        <li>كيف تتم مراقبة الامتثال. (The Joint Commission)</li>
    </ul>

    <h2>4.9 التدقيق والامتثال (قياس ما يهم) / Auditing and Compliance (Measuring What Matters)</h2>

    <h3>4.9.1 تدقيق الجودة، وليس مجرد مربع الاختيار / Audit quality, not checkbox compliance</h3>
    <p>مربع الاختيار "تم" لـ Time-out لا يثبت الكثير. ما يهم هو جودة التنفيذ:</p>
    <p><span class="english-term">A time-out “done” checkbox proves little. What matters is execution quality:</span></p>
    <ul>
        <li>هل توقف الجميع؟</li>
        <li>هل نُطقت الجهة (Laterality)؟</li>
        <li>هل حُلّت التباينات؟</li>
        <li>هل كانت البيئة هادئة بما يكفي للسمع؟ (WHO SSC; IHI)</li>
    </ul>

    <h3>4.9.2 تقويم تدقيق عملي لغرفة العمليات / A practical OR audit calendar</h3>
    <p>قد تتضمن خطة التدقيق بمستوى الحوكمة ما يلي:</p>
    <ul>
        <li>ملاحظات شهرية لجودة الـ Time-out. (WHO SSC; AORN)</li>
        <li>عمليات تدقيق شهرية لعملية العد (Counts). (AORN)</li>
        <li>عمليات تدقيق شهرية لتسمية العينات. (AORN; AHRQ)</li>
        <li>عمليات تدقيق ربع سنوية لتتبع الغرسات. (AORN)</li>
        <li>عمليات تدقيق ربع سنوية للتنظيف/التبديل. (AORN; WHO SSI)</li>
        <li>تدريبات دورية للسلامة من الحرائق ومراجعة التوثيق. (AORN; APSF/ASA)</li>
    </ul>

    <h3>4.9.3 يجب أن تكون الملاحظات محلية، محترمة، وموجهة للعمل / Feedback must be local, respectful, and action-oriented</h3>
    <p>التدقيق بدون تغذية راجعة هو مجرد "مراقبة" (Surveillance). يجب أن تتضمن التغذية الراجعة:</p>
    <p><span class="english-term">Audit without feedback is surveillance. Feedback must include:</span></p>
    <ul>
        <li>ما تم ملاحظته.</li>
        <li>لماذا هو مهم.</li>
        <li>ما الذي سيتغير.</li>
        <li>كيف سنقوم بإعادة الفحص. (IHI)</li>
    </ul>

    <h2>4.10 لوحة قيادة غرفة العمليات (مؤشرات الحوكمة) / OR Dashboard (Governance Indicators That Prove Maturity)</h2>

    <h3>4.10.1 المؤشرات الاستباقية (قوة الحاجز) / Leading indicators (barrier strength)</h3>
    <p>مؤشرات الحوكمة الموصى بها:</p>
    <ul>
        <li>نقاط جودة الـ Time-out (المُلاحظة). (WHO SSC; IHI)</li>
        <li>الالتزام بخوارزمية تباين العد الجراحي. (AORN)</li>
        <li>معدل الحوادث الوشيكة (Near-miss) للعينات ووقت التصحيح. (AHRQ; AORN)</li>
        <li>معدل اكتمال تتبع الغرسات. (AORN)</li>
        <li>توثيق اختراق العقامة وجودة الاستجابة. (AORN; WHO SSI)</li>
        <li>أحداث "إيقاف الخط" (Stop-the-line) ونتائجها. (IHI)</li>
    </ul>

    <h3>4.10.2 مؤشرات التعلم (مدى سرعة تحسنك) / Learning indicators (how fast you improve)</h3>
    <ul>
        <li>وقت إغلاق الإجراء (بالأيام من الحدث حتى الإصلاح المغلق). (IHI)</li>
        <li>معدل اكتمال إعادة التدقيق. (IHI)</li>
        <li>معدل تكرار الحدث (هل تكرر نفس الفشل؟). (IHI)</li>
    </ul>
    <p>تُظهر هذه المؤشرات ما إذا كانت الحوكمة تعمل فعلياً أم لا. (IHI)</p>
    <p><span class="english-term">These indicators show whether governance actually works. (IHI)</span></p>

    <h2>4.11 القصة الحقيقية 2: "عندما كانت المساءلة خاطئة، أصبحت السلامة أسوأ"</h2>
    <h3>4.11 Real Story 2: "When accountability was wrong, safety got worse"</h3>

    <div class="quote-box">
        <p><strong>4.11.1 الحدث (The event):</strong><br>
        حدثت حادثة وشيكة (Near-miss) في تسمية العينة. تم اكتشافها قبل وقوع الضرر. كانت ردة فعل القيادة قوية، حيث انتقدت الممرضة علناً وطالبت بـ "المزيد من الحذر".</p>
        <p><span class="english-term"><strong>The event:</strong> A specimen labeling near-miss occurred. It was caught before harm. Leadership reacted strongly, publicly criticized the nurse, and demanded “more carefulness.”</span></p>
        
        <p><strong>4.11.2 العاقبة غير المقصودة (The unintended consequence):</strong><br>
        انخفضت نسبة الإبلاغ بشكل حاد في الشهر التالي. أصبح الموظفون صامتين. استمرت الحوادث الوشيكة في الوقوع—لكنها كانت مخفية.</p>
        <p><span class="english-term"><strong>The unintended consequence:</strong> Reporting dropped sharply the following month. Staff became quiet. Near-misses still occurred—but they were hidden.</span></p>
    </div>

    <div class="alert-box">
        <p><strong>4.11.3 حقيقة النظام (The system truth):</strong><br>
        كان نمط الفشل متوقعاً:</p>
        <ul>
            <li>حدثت التسمية أثناء المقاطعات. (AHRQ)</li>
            <li>لم يتم فرض "الوقت المحمي". (AORN)</li>
            <li>سمح سير العمل بـ "التسمية لاحقاً". (AORN)</li>
            <li>لا يوجد قراءة عكسية (Read-back) موحدة. (AHRQ)</li>
        </ul>
        <p>كان الحل هو <strong>إعادة تصميم الحوكمة</strong>، وليس الإذلال:</p>
        <ul>
            <li>لحظة تسمية محمية. (AORN)</li>
            <li>تأكيد القراءة العكسية. (AHRQ)</li>
            <li>يجب أن يتضمن الـ Sign-out التحقق من العينة. (WHO SSC)</li>
            <li>وتعامل مبني على "الثقافة العادلة" لإعادة بناء الثقة. (AHRQ)</li>
        </ul>
        <p>المساءلة التي تنتج الصمت ليست مساءلة—إنها خلق للمخاطر. (AHRQ)</p>
        <p><span class="english-term">The solution was governance redesign, not humiliation... Accountability that produces silence is not accountability—it is risk creation. (AHRQ)</span></p>
    </div>

    <h2>4.12 القصة الحقيقية 3: "لجنة غيرت غرفة العمليات في 90 يوماً"</h2>
    <h3>4.12 Real Story 3: "A committee that changed the OR in 90 days"</h3>

    <div class="concept-box">
        <p><strong>4.12.1 نقطة البداية (The starting point):</strong><br>
        كانت لجنة غرفة العمليات تجتمع شهرياً ولكنها أحدثت تغييراً طفيفاً. تكررت المشاكل. شعر الموظفون أن الاجتماعات كانت مجرد "كلام".</p>
        
        <p><strong>4.12.2 تحول الحوكمة (The governance shift):</strong><br>
        أدخلوا قاعدتين:</p>
        <ol>
            <li>لا ينتهي أي اجتماع بدون <strong>سجل إجراءات (Action log)</strong> بأسماء الملاك وتواريخ الاستحقاق. (IHI)</li>
            <li>كل إجراء يتطلب <strong>مقياساً وتاريخ إعادة تدقيق</strong>. (IHI)</li>
        </ol>
        <p>كما حددوا ثلاث أولويات غير قابلة للتفاوض (Tier A):</p>
        <ul>
            <li>جودة الـ Time-out. (WHO SSC)</li>
            <li>التوقف الإلزامي عند تباين العد الجراحي. (AORN)</li>
            <li>موثوقية هوية العينة. (AORN; AHRQ)</li>
        </ul>

        <p><strong>4.12.3 النتيجة (The result):</strong><br>
        في غضون 90 يوماً:</p>
        <ul>
            <li>تحسنت جودة الـ Time-out المُلاحظة. (WHO SSC)</li>
            <li>أصبحت إدارة تباين العد الجراحي متسقة. (AORN)</li>
            <li>انخفضت حوادث العينات الوشيكة وتحسن وقت التصحيح. (AHRQ)</li>
        </ul>
        <p>لم تصبح غرفة العمليات أكثر أماناً بالتحفيز وحده. لقد أصبحت أكثر أماناً بفضل <strong>انضباط الحوكمة</strong>. (IHI)</p>
        <p><span class="english-term">The OR did not become safer by motivation alone. It became safer by governance discipline. (IHI)</span></p>
    </div>

    <h2>4.13 أدوات عملية (جاهزة لنموذج كتابك) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>4.13.1 الأداة 1 — ميثاق حوكمة غرفة العمليات (صفحة واحدة):</strong><br>
            يشمل: الغرض، النطاق، ثالوث القيادة، حقوق القرار، سلطة التوقف الإلزامي، خط التقارير. (IHI)</li>
            <br>
            <li><strong>4.13.2 الأداة 2 — مهام (TOR) اللجنة التنفيذية:</strong><br>
            الرئيس: القائد الطبي + قائد التمريض/العمليات. الأعضاء: قائد التخدير، CSSD، مكافحة العدوى، الجودة، الهندسة الطبية، سلسلة التوريد. المخرجات: سجل المخاطر، لوحة القيادة، الموافقات. (IHI)</li>
            <br>
            <li><strong>4.13.3 الأداة 3 — سياسة التوقف الإلزامي الصريحة والقصيرة:</strong><br>
            المحفزات: عدم تطابق البروتوكول العالمي، تباين العد، عدم يقين العينة، غرسة مفقودة، اختراق العقامة. السلطة: يمكن لأي موظف إيقاف العمل؛ الممرضة المسؤولة يمكنها التأخير. (The Joint Commission; AORN)</li>
            <br>
            <li><strong>4.13.4 الأداة 4 — نموذج سجل إجراءات (Action Log):</strong><br>
            الإجراء / المالك / تاريخ الاستحقاق / المقياس / الحالة / دليل الإغلاق / تاريخ إعادة التدقيق. (IHI)</li>
            <br>
            <li><strong>4.13.5 الأداة 5 — تقويم التدقيق لغرفة العمليات (12 شهراً):</strong><br>
            أدرج عمليات التدقيق والتدريبات الشهرية/الربع سنوية مع الملاك المسؤولين. (AORN; WHO SSC; APSF/ASA)</li>
        </ul>
    </div>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>الحوكمة هي <strong>نظام التشغيل (Operating system)</strong> لغرفة العمليات—تحدد ما إذا كانت السلامة موثوقة أم بطولية. (IHI)<br>
            <span class="english-term">Governance is the OR’s <strong>operating system</strong>—it determines whether safety is reliable or heroic.</span></li>
            
            <li>يجب أن تكون القواعد، حقوق القرار، وسلطة التصعيد صريحة ومحمية. (The Joint Commission; AHRQ)<br>
            <span class="english-term">Rules, decision rights, and escalation authority must be explicit and protected.</span></li>
            
            <li>لا تنجح اللجان إلا عندما تنتج <strong>إجراءات (Actions)</strong>، ملاك، مواعيد نهائية، وإعادة تدقيق. (IHI)<br>
            <span class="english-term">Committees succeed only when they produce actions, owners, deadlines, and re-audits.</span></li>
            
            <li>المساءلة يجب أن تكون عادلة: اللوم يخلق صمتاً؛ <strong>الثقافة العادلة</strong> تخلق تعلماً دون خفض المعايير. (AHRQ)<br>
            <span class="english-term">Accountability must be Just: blame creates silence; Just Culture creates learning without lowering standards.</span></li>
            
            <li>جودة التدقيق أهم من الامتثال لمربع الاختيار (Checkbox)؛ قِس قوة الحاجز وسرعة حلقة التعلم. (WHO SSC; IHI)<br>
            <span class="english-term">Audit quality matters more than checkbox compliance; measure barrier strength and learning loop speed.</span></li>
        </ul>
    </div>

    <div class="concept-box">
        <h2>مُلحقات عملية لنهاية الفصل / Chapter-End Practical Inserts</h2>
        <p><span class="english-term">(Ready for your template)</span></p>
        
        <p><strong>المُلحق 1 — ميثاق حوكمة غرفة العمليات (صفحة واحدة) / Insert 1 — OR Governance Charter</strong> (IHI)</p>
        <p><strong>المُلحق 2 — بطاقة محفزات التوقف الإلزامي / Insert 2 — Hard Stop Triggers Card</strong> (The Joint Commission; AORN; WHO SSI)</p>
        <p><strong>المُلحق 3 — بطاقة سلم التصعيد / Insert 3 — Escalation Ladder Card</strong> (AHRQ; IHI)</p>
        <p><strong>المُلحق 4 — سجل إجراءات لجنة العمليات / Insert 4 — OR Committee Action Log</strong> (IHI)</p>
        <p><strong>المُلحق 5 — تقويم التدقيق والتدريب لـ 12 شهراً / Insert 5 — 12-Month Audit &amp; Drill Calendar</strong> (AORN; WHO SSC; APSF/ASA)</p>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>The Joint Commission. National Patient Safety Goals (Hospital Program).</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety Resources (including safety culture, reporting, transitions, and learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Reliability Resources (PDSA, measurement, reliability, leadership for safety).</li>
            <li>ECRI. Patient Safety and Device/Technology Hazard Guidance (perioperative focus).</li>
            <li>Institute for Safe Medication Practices (ISMP). Medication Safety Guidance (relevant to procedural/OR environments).</li>
            <li>Anesthesia Patient Safety Foundation (APSF) / American Society of Anesthesiologists (ASA). Operating Room Fire Safety Guidance and Education Resources.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  14: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 14 — Surgical Safety Checklist as a Team Tool (Not a Ritual)</h1>
    <div class="subtitle">الفصل الرابع عشر — قائمة التحقق من السلامة الجراحية كأداة للفريق (وليست طقساً روتينياً)<br>
    <span style="font-size: 18px;">(Sign-in • Time-out • Sign-out • Quality of Execution • Hard Stops • Audit Scoring)<br>
    (تسجيل الدخول • المهلة/Time-out • تسجيل الخروج • جودة التنفيذ • التوقفات الإلزامية • نقاط التدقيق)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تعمل <strong>قائمة التحقق من السلامة الجراحية (SSC)</strong> فقط عندما تصبح أداة للفريق تخلق وعياً ظرفياً مشتركاً—وليست نموذجاً يُتلى. (WHO SSC; AHRQ; IHI)<br>
            <span class="english-term">Explain why the Surgical Safety Checklist (SSC) works only when it becomes a <strong>team tool</strong> that creates shared situational awareness—not a recited form. (WHO SSC; AHRQ; IHI)</span></li>
            
            <li>تشغيل <strong>تسجيل الدخول (Sign-in)، المهلة (Time-out)، وتسجيل الخروج (Sign-out)</strong> بجودة تنفيذ عالية: الانتباه، المشاركة، الوضوح، والحديث الهادف عن المخاطر. (WHO SSC)<br>
            <span class="english-term">Run <strong>Sign-in, Time-out, and Sign-out</strong> with high-quality execution: attention, participation, clarity, and meaningful risk talk. (WHO SSC)</span></li>
            
            <li>بناء وفرض <strong>توقفات إلزامية (Hard stops)</strong> للتباينات وغياب المتطلبات الأساسية للسلامة (الهوية/الإجراء/الموقع، المضادات الحيوية، الغرسات، المعدات، جاهزية العقامة). (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Build and enforce <strong>hard stops</strong> for mismatches and missing safety prerequisites (identity/procedure/site, antibiotics, implants, equipment, sterility readiness). (The Joint Commission; WHO SSC)</span></li>
            
            <li>التعرف على أنماط الفشل في العالم الحقيقي التي تُحول قوائم التحقق إلى مجرد مسرحية (Theatre): السرعة، التسلسل الهرمي، تعدد المهام، و"الامتثال لمربع الاختيار" (Checkbox compliance). (AHRQ; IHI)<br>
            <span class="english-term">Recognize the real-world failure modes that turn checklists into theatre: speed, hierarchy, multitasking, and “checkbox compliance.” (AHRQ; IHI)</span></li>
            
            <li>تنفيذ نظام <strong>تسجيل نقاط التدقيق (Audit scoring)</strong> الذي يقيس جودة القائمة (وليس مجرد إكمالها) ويدفع نحو التوجيه (Coaching) وإصلاحات النظام بدلاً من إلقاء اللوم. (IHI; AHRQ)<br>
            <span class="english-term">Implement an <strong>audit scoring</strong> system that measures checklist quality (not just completion) and drives coaching and system fixes rather than blame. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "أسرع Time-out في المستشفى"</strong><br>
        <span class="english-term">A true-to-life case: “The fastest time-out in the hospital” (Real Scientific Story)</span>
    </div>

    <p>لقد رأيت مهلات (Time-outs) تكتمل في اثنتي عشرة ثانية. بدا الأمر مثيراً للإعجاب—فعال، واثق، بل وشبه رياضي. تحركت الغرفة كآلة واحدة. أومأ الجراح برأسه. أومأ طبيب التخدير برأسه. ووضعت الممرضة علامة (Tick) في المربع.</p>
    <p><span class="english-term">Clinical practice has shown time-outs completed in twelve seconds. It looked impressive—efficient, confident, almost athletic. The room moved like a machine. The surgeon nodded. The anesthetist nodded. The nurse ticked the box.</span></p>

    <p>ومع ذلك، أتذكر ذلك اليوم لأنه كاد أن يكون اليوم الذي نقطع فيه الجهة الخاطئة.</p>
    <p><span class="english-term">And yet I remember that day because it was almost the day we cut the wrong side.</span></p>

    <p>وصل المريض بعلامة واضحة على ساقه اليسرى. تلا الجراح، وهو ينظر إلى أسفل ويقوم بفرش المريض (Draping) في نفس الوقت: <em>"جون دو، استبدال الركبة اليمنى، لدينا المعدات، لا حساسية."</em><br>
    ردت الممرضة الدوارة وهي مشغولة بفتح الإمدادات: <em>"موافق."</em><br>
    طبيب التخدير كان يسجل الملاحظات، فلم يقل شيئاً. (AHRQ; IHI)</p>
    <p><span class="english-term">The patient arrived with a clear mark on his left leg. The surgeon, looking down and draping the patient at the same time, recited: <em>“John Doe, right knee replacement, we have the gear, no allergies.”</em><br>
    The circulating nurse, busy opening supplies, responded: <em>“Agreed.”</em><br>
    The anesthetist was charting and said nothing. (AHRQ; IHI)</span></p>

    <div class="alert-box">
        <p>هل تمت قراءة قائمة التحقق؟ <strong>نعم.</strong><br>
        هل تم وضع علامة في المربع الورقي؟ <strong>نعم.</strong><br>
        هل لاحظ أحد أن الجراح قال للتو "الركبة اليمنى" بينما كانت العلامة على "الركبة اليسرى"؟ <strong>لا.</strong></p>
        <p><span class="english-term">Was the checklist read? <strong>Yes.</strong><br>
        Was the paper box ticked? <strong>Yes.</strong><br>
        Did anyone notice that the surgeon just said “right knee” while the mark was on the “left knee”? <strong>No.</strong></span></p>
    </div>

    <p>لقد أنقذتنا ممرضة التخدير المبتدئة. التفتت وقالت: <em>"عفواً، لقد قلت اليمنى، ولكن العلامة على اليسار."</em><br>
    توقفت الغرفة. نظر الجراح لأعلى. كانت الممرضة المبتدئة على حق. (WHO SSC; AHRQ)</p>
    <p><span class="english-term">We were saved by a junior anesthesia nurse. She turned and said: <em>“Excuse me, you said right, but the mark is on the left.”</em><br>
    The room stopped. The surgeon looked up. The junior nurse was right. (WHO SSC; AHRQ)</span></p>

    <div class="success-box">
        <p>علّمتنا تلك الحادثة فرقاً عميقاً: <strong>القائمة المرجعية التي تتم بدون انتباه هي أكثر خطورة من عدم وجود قائمة على الإطلاق.</strong> لأنها تمنح الجميع إحساساً زائفاً بالأمان. القائمة المرجعية لا تنقذ الأرواح—المحادثة <em>(The Conversation)</em> هي التي تفعل ذلك. (IHI; WHO SSC)</p>
        <p><span class="english-term">That incident taught us a profound difference: <strong>a checklist done without attention is more dangerous than no checklist at all.</strong> Because it gives everyone a false sense of security. The checklist does not save lives—the <em>conversation</em> saves lives. (IHI; WHO SSC)</span></p>
    </div>

    <h2>14.1 الفرق بين "عمل قائمة التحقق" و"استخدام قائمة التحقق"</h2>
    <h3>14.1 The Difference Between “Doing the Checklist” and “Using the Checklist”</h3>

    <h3>14.1.1 القائمة المرجعية هي تدخل تواصلي، وليست طبياً</h3>
    <p>تم تصميم قائمة منظمة الصحة العالمية (WHO SSC) لحل مشكلة محددة: الفرق الجراحية غالباً لا تتحدث مع بعضها البعض. يعمل الجراحون، والتخدير، والتمريض في صوامع (Silos) داخل نفس الغرفة. تجبر القائمة المرجعية الفريق على دمج خططهم في نموذج عقلي مشترك واحد. (WHO SSC; AHRQ)</p>
    <p><span class="english-term"><strong>14.1.1 The checklist is a communication intervention, not a medical one</strong><br>The WHO SSC was designed to solve a specific problem: surgical teams often do not talk to each other. Surgeons, anesthesia, and nursing work in silos inside the same room. The checklist forces the team to merge their plans into a single shared mental model. (WHO SSC; AHRQ)</span></p>

    <h3>14.1.2 ما هو "الوعي الظرفي المشترك"؟</h3>
    <p>الوعي الظرفي (Situational awareness) يعني أن كل شخص في الغرفة يعرف الإجابة على:</p>
    <ul>
        <li>ما الذي سنفعله؟</li>
        <li>ما الذي يمكن أن يسير بشكل خاطئ بشكل فريد في هذه الحالة؟</li>
        <li>هل لدينا ما نحتاجه للتعامل مع هذا الخطأ؟</li>
    </ul>
    <p>إذا كانت إجابة الممرضة مختلفة عن إجابة الجراح، فلديكم خطر. (IHI)</p>
    <p><span class="english-term"><strong>14.1.2 What is “shared situational awareness”?</strong><br>Situational awareness means everyone in the room knows the answer to: What are we about to do? What could uniquely go wrong in this case? Do we have what we need to handle that wrong thing? If the nurse’s answer is different from the surgeon’s, you have a hazard. (IHI)</span></p>

    <h2>14.2 تسجيل الدخول (Sign-in): قبل تحريض التخدير (فحص الجاهزية)</h2>
    <h3>14.2 Sign-in (Before induction of anesthesia) – The Readiness Check</h3>

    <h3>14.2.1 الغرض: "هل المريض آمن للتنويم؟"</h3>
    <p>يحدث الـ Sign-in قبل إعطاء المريض أدوية التخدير (Sedation/Induction). بمجرد أن ينام المريض، تتغير فسيولوجيته ويفقد صوته. (WHO SSC)</p>
    <p><span class="english-term"><strong>14.2.1 Purpose: "Is the patient safe to sleep?"</strong><br>The Sign-in happens before the patient is given induction medications. Once the patient is asleep, their physiology changes and they lose their voice. (WHO SSC)</span></p>

    <h3>14.2.2 العناصر الحرجة للـ Sign-in / Critical elements of Sign-in</h3>
    <div class="concept-box">
        <ul>
            <li><strong>تأكيد المريض (Patient confirmation):</strong> المريض يذكر اسمه وتاريخ ميلاده (مقابل سوار المعصم والوثائق).</li>
            <li><strong>الموافقة والموقع (Consent and Site):</strong> يؤكد المريض ما سيتم إجراؤه. يتم فحص علامة الموقع (Site mark) بصرياً. (The Joint Commission)</li>
            <li><strong>المعدات ومجرى الهواء (Equipment and Airway):</strong> التخدير يؤكد فحص المعدات وتقييم مجرى الهواء بشكل واضح.</li>
            <li><strong>الحساسية (Allergies):</strong> يتم نطقها بصوت عالٍ، وليست مجرد قراءة من الشاشة.</li>
            <li><strong>مخاطر النزيف (Bleeding risk):</strong> إذا كان الخطر كبيراً، هل تتوفر منتجات الدم وسوائل وريدية كافية؟ (WHO SSC)</li>
        </ul>
    </div>

    <h3>14.2.3 التوقف الإلزامي (Hard stop) لـ Sign-in</h3>
    <p>لا يتم تحريض التخدير أبداً إذا كان هناك عدم تطابق في الهوية، عدم تطابق في الموافقة، أو إذا كانت علامة الموقع مطلوبة ولم يتم رسمها بعد. <strong>لا استثناءات.</strong> (The Joint Commission)</p>
    <p><span class="english-term"><strong>14.2.3 The Sign-in Hard Stop</strong><br>Induction of anesthesia never proceeds if there is an ID mismatch, a consent mismatch, or if a site mark is required but not yet drawn. <strong>No exceptions.</strong> (The Joint Commission)</span></p>

    <h2>14.3 المهلة (Time-out): قبل شق الجلد (النموذج العقلي المشترك)</h2>
    <h3>14.3 Time-out (Before skin incision) – The Shared Mental Model</h3>

    <h3>14.3.1 الغرض: "هل نحن في الغرفة الصحيحة للقيام بالشيء الصحيح بأمان؟"</h3>
    <p>هذا هو التوقف الأخير والأكثر أهمية. يجب أن يتوقف كل عمل. لا تنظيف، لا فرش، لا أحاديث جانبية. يجب أن تكون الغرفة صامتة. (WHO SSC; AORN)</p>
    <p><span class="english-term"><strong>14.3.1 Purpose: "Are we in the right room doing the right thing safely?"</strong><br>This is the final, most critical pause. All action must cease. No prepping, no draping, no side conversations. The room must be silent. (WHO SSC; AORN)</span></p>

    <h3>14.3.2 من يقودها؟ ومن يشارك؟</h3>
    <p>يمكن أن يقود الـ Time-out الجراح، أو ممارس التخدير، أو الممرضة الدوارة. المالك ليس مهماً بقدر أهمية <strong>المشاركة</strong>. يجب أن يتحدث ممثل عن كل دور (الجراح، التخدير، التمريض) بصوت عالٍ. (WHO SSC)</p>
    <p><span class="english-term"><strong>14.3.2 Who leads? Who participates?</strong><br>The Time-out can be led by the surgeon, anesthesia, or the circulating nurse. The owner matters less than the <strong>participation</strong>. A representative of every role (surgeon, anesthesia, nursing) must speak out loud. (WHO SSC)</span></p>

    <h3>14.3.3 العناصر الحرجة للـ Time-out / Critical elements of Time-out</h3>
    <div class="alert-box">
        <ul>
            <li><strong>الهوية، الإجراء، الموقع (ID, Procedure, Site):</strong> اقرأه بصوت عالٍ من المصدر (الوثيقة). أكد رؤية علامة الموقع فعلياً. (The Joint Commission)</li>
            <li><strong>توقيت المضادات الحيوية:</strong> "هل أُعطي المضاد الحيوي في غضون 60 دقيقة؟" وإذا كانت حالة طويلة: "إعادة الجرعة مستحقة في الساعة [X]." (WHO SSI; CDC SSI)</li>
            <li><strong>مخاطر الجراح (Surgeon risks):</strong> ما هي الخطوات غير الروتينية، كم من الوقت ستستغرق، ما هو فقدان الدم المتوقع؟</li>
            <li><strong>مخاطر التخدير (Anesthesia risks):</strong> هل هناك أي مخاوف خاصة بالمريض (أمراض قلبية، درجة الحرارة)؟</li>
            <li><strong>مخاطر التمريض/CSSD:</strong> هل تم تأكيد العقامة؟ هل الغرسات متوفرة بالأحجام الصحيحة؟ هل هناك أجهزة خاصة جاهزة؟ (AORN; WHO SSC)</li>
        </ul>
    </div>

    <h3>14.3.4 الحديث الهادف عن المخاطر (السر الحقيقي للـ Time-out)</h3>
    <p>لا تدع الجراح يقول أبداً: "لا يوجد خطر، حالة روتينية." كل حالة تحمل خطراً. الحديث الجيد عن المخاطر يبدو هكذا: <em>"الخطر الوحيد اليوم هو إذا لم ينجح المسمار بحجم 4 مم، سنحتاج إلى مسمار 5 مم فوراً."</em> هذا يجهز الممرضة للخطوة القادمة. (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>14.3.4 Meaningful risk talk (The real secret of Time-out)</strong><br>Never let the surgeon say: "No risk, routine case." Every case has risk. Good risk talk sounds like this: <em>"The only risk today is if the 4mm screw fails, we will need the 5mm immediately."</em> This prepares the nurse for the next step. (IHI; AHRQ)</span></p>

    <h2>14.4 تسجيل الخروج (Sign-out): قبل أن يغادر المريض الغرفة (التسليم المستقبلي)</h2>
    <h3>14.4 Sign-out (Before patient leaves the room) – The Forward-Looking Handoff</h3>

    <h3>14.4.1 الغرض: "كيف ننقل هذا المريض بأمان إلى الفريق التالي؟"</h3>
    <p>يحدث الـ Sign-out أثناء إغلاق الجرح، <strong>قبل</strong> نقل المريض. إنه يمنع ترك العناصر ويضمن الاستمرارية. (WHO SSC)</p>

    <h3>14.4.2 العناصر الحرجة للـ Sign-out / Critical elements of Sign-out</h3>
    <div class="concept-box">
        <ul>
            <li><strong>تأكيد اسم الإجراء المكتمل:</strong> لأن الإجراء غالباً ما يتغير بناءً على الاكتشافات أثناء الجراحة.</li>
            <li><strong>العد الجراحي (Counts):</strong> هل اكتمل العد الجراحي (الإسفنج/الأدوات/الإبر) بصوت عالٍ؟ (AORN)</li>
            <li><strong>تسمية العينات (Specimen labeling):</strong> اقرأ ملصق العينة بصوت عالٍ، بما في ذلك اسم المريض والوصف. (AORN)</li>
            <li><strong>مشاكل المعدات:</strong> هل تعطلت أي أداة وتحتاج إلى إرسالها للإصلاح؟</li>
            <li><strong>مخاوف التعافي (Recovery concerns):</strong> ما الذي يحتاج فريق الإفاقة (PACU) أو الجناح لمعرفته بشكل خاص حول المصارف، القيود، أو علامات النزيف؟ (AHRQ)</li>
        </ul>
    </div>

    <h2>14.5 التوقفات الإلزامية (أسنان قائمة التحقق)</h2>
    <h3>14.5 Hard Stops (The Checklist’s “Teeth”)</h3>

    <h3>14.5.1 قائمة التحقق بدون توقفات إلزامية هي مجرد ورق</h3>
    <p>إذا كانت قائمة التحقق تكتشف تبايناً—ولكن الغرفة تستمر في العمل على أي حال—فإن القائمة تصبح مجرد بيروقراطية. <strong>يجب أن تُنتج قائمة التحقق توقفاً (Stop).</strong> (The Joint Commission; IHI)</p>
    <p><span class="english-term"><strong>14.5.1 A checklist without hard stops is just a piece of paper</strong><br>If a checklist detects a mismatch—but the room proceeds anyway—the checklist becomes bureaucracy. <strong>A checklist must produce a stop.</strong> (The Joint Commission; IHI)</span></p>

    <h3>14.5.2 متى تستدعي التوقف الإلزامي / When to invoke a hard stop</h3>
    <ul>
        <li>عدم تطابق الهوية (ID).</li>
        <li>الموافقة مفقودة، أو غير موقعة، أو لا تتطابق مع الإجراء.</li>
        <li>علامة الموقع غير مرئية أو في الجهة الخاطئة.</li>
        <li>طقم الغرسة غير مكتمل أو لم يتم التحقق منه.</li>
        <li>تباين في العد الجراحي (لا يُسمح بإغلاق الجلد). (AORN; The Joint Commission)</li>
    </ul>

    <h2>14.6 القصة الحقيقية 2: "التسلسل الهرمي الذي هزم قائمة التحقق"</h2>
    <h3>14.6 Real Story 2: "The hierarchy that defeated the checklist"</h3>

    <div class="quote-box">
        <p>بدأت الممرضة الدوارة بقراءة הـ Time-out: <em>"المريض هو..."</em><br>
        قاطعها الجراح ملوحاً بيده: <em>"نعم، نعم. أنا أعرف هذا المريض. لقد فحصته في العيادة. المشرط من فضلك."</em><br>
        تجمدت الممرضة. نظرت إلى طبيب التخدير؛ لكنه نظر بعيداً. لم يكن أحد يريد الجدال مع كبير الجراحين. سلمت الممرضة المشرط. تم الشق الجراحي. (AHRQ; IHI)</p>
        <p><span class="english-term">The circulating nurse started reading the Time-out: <em>"The patient is..."</em><br>
        The surgeon waved his hand, interrupting: <em>"Yes, yes. I know this patient. I saw him in clinic. Scalpel please."</em><br>
        The nurse froze. She looked at the anesthetist; he looked away. No one wanted to argue with the senior surgeon. The nurse handed over the scalpel. The incision was made. (AHRQ; IHI)</span></p>
    </div>

    <div class="alert-box">
        <p>هذا النمط من الفشل يُسمى <strong>"الامتثال الشكلي المدفوع بالتسلسل الهرمي" (Hierarchy-driven mock compliance)</strong>. الورقة تم وضع علامة عليها لاحقاً كـ "مكتملة"، لكن قائمة التحقق لم تحدث أبداً في الواقع. <strong>لا يمكن لقائمة التحقق إصلاح ثقافة سيئة بمفردها. القيادة هي التي تُصلح الثقافة.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">This failure mode is called <strong>hierarchy-driven mock compliance</strong>. The paper was later ticked as "done," but the checklist never actually happened. <strong>A checklist cannot fix a bad culture on its own. Leadership fixes culture.</strong> (IHI; AHRQ)</span></p>
    </div>

    <h2>14.7 التدقيق والتسجيل (قياس الجودة، وليس الإكمال فقط)</h2>
    <h3>14.7 Audit and Scoring (Measuring Quality, Not Just Completion)</h3>

    <h3>14.7.1 وهم معدل 100% / The 100% illusion</h3>
    <p>إذا نظرت إلى السجلات الورقية فقط، فإن معظم المستشفيات لديها امتثال بنسبة 99% في قوائم التحقق. لكن إذا وقفت في الغرفة وراقبت، فإن الامتثال للجودة الحقيقية ينخفض غالباً إلى 30%. يجب على القيادة أن تدقق <strong>الجودة المُلاحظة (Observed quality)</strong>. (WHO SSC; IHI)</p>
    <p><span class="english-term"><strong>14.7.1 The 100% illusion</strong><br>If you look only at the paper records, most hospitals have 99% checklist compliance. But if you stand in the room and observe, true quality compliance often drops to 30%. Leadership must audit <strong>observed quality</strong>. (WHO SSC; IHI)</span></p>

    <h3>14.7.2 أداة قياس جودة الـ Time-out / Time-out quality scoring tool</h3>
    <p>استخدم هذا المقياس من 0 إلى 5 لملاحظات التدقيق (Audits):</p>
    <table>
        <thead>
            <tr>
                <th>الدرجة (Score)</th>
                <th>المعايير (Criteria)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>0</strong></td>
                <td>لم يتم إجراء Time-out قبل الشق الجراحي.</td>
            </tr>
            <tr>
                <td><strong>1</strong></td>
                <td>الـ Time-out حدث، ولكن كان هناك نشاط مستمر (ضوضاء، تحضير، فرش).</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>توقف الفريق، لكن شخصاً واحداً فقط تحدث (تلاوة أحادية).</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>توقف الفريق، تحدث شخص واحد، وشارك الآخرون بإيماءة أو "نعم".</td>
            </tr>
            <tr>
                <td><strong>4</strong></td>
                <td>توقف الفريق، وشارك الأعضاء الرئيسيون (جراح، تخدير، تمريض) بأصواتهم.</td>
            </tr>
            <tr>
                <td><strong>5 (ممتاز)</strong></td>
                <td>توقف الفريق، شارك الجميع، وحدث <strong>نقاش هادف حول المخاطر</strong> (Risk talk).</td>
            </tr>
        </tbody>
    </table>
    <p>إذا كانت درجتك 2، فأنت لا تستخدم الأداة بشكل صحيح. اهدف للدرجة 4 أو 5. (IHI)</p>

    <h2>14.8 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>14.8 The Writer's Reflection</h3>

    <h3>14.8.1 الدقيقة الأكثر أهمية</h3>
    <p>بعد آلاف العمليات الجراحية، أستطيع أن أقول لك هذا: الدقيقة التي يمتلك فيها الفريق الـ Time-out—عندما يتوقفون حقاً ويتواصلون بالعين ويتحدثون عن المخاطر—هي الدقيقة التي يتم فيها تجنب معظم الكوارث.</p>
    <p><span class="english-term"><strong>14.8.1 The most important minute</strong><br>After thousands of surgeries, I can tell you this: the minute the team owns the Time-out—when they truly stop, make eye contact, and talk about risk—is the minute most disasters are avoided.</span></p>

    <h3>14.8.2 الجراحون هم من يحددون النبرة / Surgeons set the tone</h3>
    <p>إذا كان الجراح يتأفف، وينظر إلى ساعته، ويتجاهل القائمة المرجعية، فإن الفريق سيتعلم أن السلامة هي مجرد إزعاج. إذا أوقف الجراح الغرفة، وشارك بصوت عالٍ، ورحب بأسئلة الممرضات، فإن الجراح يكون قد أرسى ثقافة لا تُقهر.</p>
    <p><span class="english-term"><strong>14.8.2 Surgeons set the tone</strong><br>If the surgeon sighs, looks at their watch, and dismisses the checklist, the team learns that safety is an annoyance. If the surgeon stops the room, participates loudly, and welcomes questions from the nurses, the surgeon has set an unbeatable culture.</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>تعمل القائمة (SSC) عندما تصنع نموذجاً عقلياً مشتركاً وتمكّن من التوقفات الإلزامية—وليس عندما تصبح طقساً متلواً. (WHO SSC; IHI)<br>
            <span class="english-term">The SSC works when it creates a shared mental model and empowers hard stops—not when it becomes a recited ritual.</span></li>
            
            <li>يتطلب التنفيذ عالي الجودة: توقف الجميع، المشاركة، التحديد، النقاش حول المخاطر، والتعامل مع التباين. (WHO SSC; The Joint Commission)<br>
            <span class="english-term">Quality execution requires all stop, participation, specificity, risk talk, and mismatch action.</span></li>
            
            <li>التوقفات الإلزامية (Hard stops) هي "أسنان" قائمة التحقق. بدونها، تصبح قوائم التحقق مجرد مسرحية. (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Hard stops are the checklist’s “teeth.” Without them, checklists become theatre.</span></li>
            
            <li>دقق في <strong>الجودة (Quality)</strong> وليس الإكمال فقط—استخدم نظام التسجيل للتوجيه (Coaching) وتحسين النظام. (IHI; AHRQ)<br>
            <span class="english-term">Audit quality, not completion—use scoring for coaching and system improvement.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (team communication, speaking up, safety culture, handoffs).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, auditing for learning, hard stops).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (counts, specimens, perioperative communication elements).</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection (antibiotic prophylaxis timing within safety systems).</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection (antibiotic timing principles supporting checklist content).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  24: `<!-- Download Button -->
    

    <div class="part-title">PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs</div>
    <div class="part-title">الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة</div>
    
    <h1>CHAPTER 24 — First Case On-Time Start and Turnover Time</h1>
    <div class="subtitle">الفصل الرابع والعشرون — بدء الحالة الأولى في الوقت المحدد ووقت التبديل: تدفق موثوق دون مساومة على السلامة<br>
    <span style="font-size: 18px;">(Day-Start Readiness • Upstream Dependencies • Standard Work • KPI Pitfalls • Bottlenecks • Parallel Processing • Role Clarity • Turnover Checklist Design)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>تحديد <strong>الأسباب الجذرية (Root causes)</strong> الحقيقية لتأخر بدء الحالات الأولى وإصلاحها على مستوى النظام (وليس من خلال إلقاء اللوم على الأفراد). (IHI; AHRQ)<br>
            <span class="english-term">Identify the real <strong>root causes</strong> of late first-case starts and fix them at the system level (not by blaming individuals). (IHI; AHRQ)</span></li>
            
            <li>تعريف <strong>"الغرفة جاهزة" (Room Ready)</strong> و <strong>"المريض جاهز" (Patient Ready)</strong> كشروط بوابة قابلة للتدقيق تحمي جودة قائمة التحقق وانضباط العقامة. (IHI; WHO SSC concepts; AORN concepts)<br>
            <span class="english-term">Define <strong>“Room Ready”</strong> and <strong>“Patient Ready”</strong> as auditable gate conditions that protect checklist quality and sterility discipline. (IHI; WHO SSC concepts; AORN concepts)</span></li>
            
            <li>رسم خريطة <strong>للاعتِمادات المبكرة (Upstream dependencies)</strong> (التعقيم/CSSD، النقل، التصوير، الأجنحة، الصيدلية، تدفق أسرة الإفاقة/PACU) وبناء مسارات تصعيد تمنع مفاجآت الصباح. (AHRQ; IHI)<br>
            <span class="english-term">Map <strong>upstream dependencies</strong> (CSSD, transport, imaging, wards, pharmacy, PACU/bed flow) and build escalation pathways that prevent morning surprises. (AHRQ; IHI)</span></li>
            
            <li>تحسين وقت التبديل (Turnover time) باستخدام مبادئ الإدارة الرشيقة (Lean principles) (إزالة الاختناقات، المعالجة المتوازية، الإدارة المرئية) <strong>دون</strong> تلويث الحقل المعقم أو تخطي معايير التنظيف. (IHI; AORN concepts)<br>
            <span class="english-term">Improve turnover time using Lean principles (bottleneck removal, parallel processing, visual management) <strong>without</strong> contaminating the sterile field or skipping cleaning standards. (IHI; AORN concepts)</span></li>
            
            <li>تجنب فخاخ مؤشرات الأداء (KPI traps) من خلال قياس <strong>التدفق + موثوقية الحاجز معاً</strong> (وليس السرعة وحدها)، وبناء عمليات تدقيق توجيهية تخلق حلقات تعلم. (IHI; AHRQ)<br>
            <span class="english-term">Avoid KPI traps by measuring <strong>flow + barrier reliability</strong> together (not speed alone), and by building coaching audits that create learning loops. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "عندما تتأخر الحالة الأولى، تصبح الحالة الأخيرة خطيرة"</strong><br>
        <span class="english-term">A true-to-life case: “When the first case is late, the last case becomes dangerous” (Real Scientific Story)</span>
    </div>

    <p>تأخر الحالة الأولى نادراً ما يكون "خطأ شخص واحد". إنه عادةً أول عرض مرئي لنظام يكتشف مشاكله <em>بعد فوات الأوان</em>.</p>
    <p><span class="english-term">A late first case is rarely “one person’s fault.” It is usually the first visible symptom of a system that discovers problems <em>too late</em>.</span></p>

    <p>أتذكر يوماً تأخرت فيه الحالة الأولى بمقدار 22 دقيقة. لم يكن السبب عدم كفاءة الجراح. كان السبب أن المريض لم يحصل على تقييم دموي (Blood work) حديث. تعين سحب الدم في الساعة 7:15 صباحاً، وانتظرنا النتائج. تأخرت الحالة الأولى.</p>
    <p><span class="english-term">I remember a day when the first case was delayed by 22 minutes. The reason wasn’t a slow surgeon. It was because the patient didn’t have updated blood work. It had to be drawn at 7:15 a.m., and we waited for results. The first case ran late.</span></p>

    <p>وهذا يعني أن وقت التبديل (Turnover) للحالة الثانية تم التعجيل به. وبحلول الحالة الثالثة، كان الجراح مُحبطاً ويضغط لتخطي المهلة (Time-out). وبحلول الحالة الرابعة والأخيرة، كان طاقم التمريض الأساسي قد أنهى مناوبته وغادر، وتولى طاقم تغطية غير مألوف المهام. <strong>في تلك الحالة الرابعة، كدنا أن نزرع الغرسة الخاطئة بسبب إرهاق التبديل وعدم الإلمام الكافي من الطاقم البديل.</strong></p>
    <p><span class="english-term">This meant the turnover for the second case was rushed. By the third case, the surgeon was frustrated and pushing to skip the time-out. By the fourth and final case, the core nursing staff had clocked out, and unfamiliar relief staff took over. <strong>In that fourth case, we nearly implanted the wrong device due to handoff fatigue and unfamiliarity.</strong></span></p>

    <div class="alert-box">
        <p>الدرس القاسي: <strong>التأخير لمدة 20 دقيقة في الساعة 7:30 صباحاً ليس مجرد مشكلة "كفاءة". إنه عامل خطر يتحول إلى تهديد للسلامة في الساعة 4:00 عصراً.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">The hard lesson: <strong>A 20-minute delay at 7:30 a.m. is not an “efficiency” problem. It is a risk factor that turns into a safety threat at 4:00 p.m.</strong> (IHI; AHRQ)</span></p>
    </div>

    <h2>24.1 خرافة "الجراح البطيء" أو "الممرضة البطيئة"</h2>
    <h3>24.1 The Myth of the "Slow Surgeon" or "Slow Nurse"</h3>

    <h3>24.1.1 لوم الأفراد يُخفي إخفاقات النظام</h3>
    <p>عندما تتأخر الغرف، فإن الغريزة التلقائية للقيادة هي النظر إلى من كان في الغرفة. "الدكتور X يتأخر دائماً." "هذا الفريق التمريضي بطيء." لكن الأفراد نادراً ما يكونون هم الاختناق (Bottleneck). (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>24.1.1 Blaming individuals hides system failures</strong><br>When rooms run late, the instinct of leadership is to look at who was in the room. “Dr. X is always late.” “That nursing team is slow.” But individuals are rarely the bottleneck. (AHRQ; IHI)</span></p>

    <h3>24.1.2 ابحث عن "الانتظار" / Look for the "Waiting"</h3>
    <p>تأخير التدفق يتكون في أغلبه من أشخاص أذكياء ومجتهدين <strong>ينتظرون</strong> شيئاً ما: ينتظرون سريراً، ينتظرون صينية، ينتظرون نتيجة فحص، أو ينتظرون عامل النظافة. إصلاح التدفق يعني تصميم طرق لإزالة وقت الانتظار. (IHI)</p>
    <p><span class="english-term"><strong>24.1.2 Look for the "Waiting"</strong><br>Flow delay is mostly made up of smart, hard-working people <strong>waiting</strong> for something: waiting for a bed, waiting for a tray, waiting for a lab result, or waiting for a cleaner. Fixing flow means designing ways to remove the wait. (IHI)</span></p>

    <h2>24.2 بدء الحالة الأولى في الوقت المحدد (FCOTS): إصلاح الصباح</h2>
    <h3>24.2 First-Case On-Time Start (FCOTS): Fixing the Morning</h3>

    <h3>24.2.1 ما هو الوقت "المحدد"؟ / What is "On-Time"?</h3>
    <p>يجب أن يكون لغرفة العمليات تعريف واحد مُتفق عليه لبدء الحالة الأولى. التعريف الأكثر شيوعاً وعملية هو: <strong>"عجلات المريض تدخل الغرفة" (Wheels in) في الوقت المجدول.</strong> إذا كانت الجدولة في الساعة 7:30 صباحاً، فإن المريض يعبر الأبواب في 7:30 صباحاً. (IHI)</p>
    <p><span class="english-term"><strong>24.2.1 What is "On-Time"?</strong><br>The OR must have one agreed-upon definition for a first-case start. The most common and practical is: <strong>"Wheels in" (patient crosses the door) at the scheduled time.</strong> If the booking is 7:30 a.m., the patient crosses the doors at 7:30 a.m. (IHI)</span></p>

    <h3>24.2.2 بوابات الصباح: "الغرفة جاهزة" و "المريض جاهز"</h3>
    <p>يتطلب بدء الحالة الأولى في الوقت المحدد التقاء مسارين في اللحظة المناسبة. لا يمكن الاعتماد على الصدفة؛ بل يتطلب بوابات صريحة (Explicit gates). (IHI)</p>

    <div class="concept-box">
        <p><strong>بوابة "الغرفة جاهزة" (Room Ready Gate) (مثال: الساعة 7:15 صباحاً):</strong></p>
        <ul>
            <li>تم التحقق من الأدوات/الصواني المعقمة. (AAMI ST79)</li>
            <li>المعدات (المناظير، الليزر) موجودة وتعمل.</li>
            <li>طاقم التمريض متواجد ومُجهز.</li>
        </ul>
        <p><strong>بوابة "المريض جاهز" (Patient Ready Gate) (مثال: الساعة 7:15 صباحاً):</strong></p>
        <ul>
            <li>تم الانتهاء من فحص التخدير.</li>
            <li>تم الانتهاء من فحص الجراح وتحديد الموقع (Site marked). (The Joint Commission)</li>
            <li>الموافقة (Consent) مكتملة وموقعة.</li>
            <li>التحضيرات الأولية (IV، المضادات الحيوية مطلوبة) جاهزة. (CDC / WHO SSI concepts)</li>
        </ul>
        <p><span class="english-term">First-case on-time start requires two paths to converge at the exact right moment. This cannot rely on luck; it requires explicit gates. <strong>Room Ready</strong>: Trays verified, equipment working, nursing staff present. <strong>Patient Ready</strong>: Anesthesia check done, surgeon check and site marked, consent signed.</span></p>
    </div>

    <h3>24.2.3 الاعتمادات المبكرة: أين يُفقد الصباح فعلياً</h3>
    <p>إذا لم تكن "الغرفة جاهزة" أو لم يكن "المريض جاهزاً"، فإن الفشل عادة ما يكون قد حدث <strong>خارج غرفة العمليات</strong>. (AHRQ)</p>
    <ul>
        <li>هل قام الجناح بتجهيز المريض وإرساله في الوقت المحدد؟</li>
        <li>هل قام النقل (Transport) بإحضار المريض دون تأخير؟</li>
        <li>هل جهز قسم التعقيم (CSSD) الصواني ووضعها في الغرفة؟</li>
    </ul>
    <p>لتحسين FCOTS، يجب على قيادة غرفة العمليات حل مشكلات الجناح والنقل وCSSD. (IHI)</p>

    <h2>24.3 وقت التبديل (TOT): السرعة دون تلوث</h2>
    <h3>24.3 Turnover Time (TOT): Speed Without Contamination</h3>

    <h3>24.3.1 تعريف وقت التبديل / Defining Turnover Time</h3>
    <p>التعريف القياسي: من <strong>"خروج عجلات المريض أ" (Wheels out)</strong> إلى <strong>"دخول عجلات المريض ب" (Wheels in)</strong> للغرفة. (IHI)</p>
    <p><span class="english-term"><strong>24.3.1 Defining Turnover Time</strong><br>Standard definition: From <strong>"Wheels out" of Patient A</strong> to <strong>"Wheels in" of Patient B</strong>. (IHI)</span></p>

    <h3>24.3.2 التشريح لعملية تبديل جيدة / Anatomy of a good turnover</h3>
    <p>التبديل ليس مهمة واحدة؛ إنه رقصة معقدة لمهام متعددة (AORN concepts; IHI):</p>
    <ol>
        <li><strong>الإخلاء (Clear out):</strong> إزالة المريض، إزالة الأدوات المتسخة، التخلص من القمامة/البياضات.</li>
        <li><strong>التنظيف البيئي (Environmental clean):</strong> مسح الأسطح، تطهير السرير، مسح الأرضية إذا لزم الأمر.</li>
        <li><strong>الإعداد (Setup):</strong> إحضار الصواني والمعدات الجديدة.</li>
        <li><strong>الفتح المعقم (Sterile opening):</strong> فتح التغليف وإعداد الطاولة الخلفية (Back table).</li>
    </ol>
    <p><span class="english-term">Clear out → Environmental clean → Setup → Sterile opening.</span></p>

    <h2>24.4 فخ التبديل (حيثما تقتل السرعة السلامة)</h2>
    <h3>24.4 The Turnover Trap (Where Speed Kills Safety)</h3>

    <h3>24.4.1 الخطيئة المميتة: تداخل التنظيف مع الفتح المعقم</h3>
    <p>أخطر خطأ في غرفة العمليات لدفع عجلة الكفاءة هو البدء في فتح الصواني المعقمة للحالة "ب" بينما لا يزال عمال النظافة يمسحون الدماء وينفضون الغبار من الحالة "أ". <strong>هذا ينتهك مبادئ العقامة بشكل مباشر ويزيد من خطر الإصابة بعدوى الموقع الجراحي (SSI).</strong> (AORN; CDC / WHO SSI concepts)</p>
    <div class="alert-box">
        <p><strong>قاعدة التوقف الإلزامي (Hard Stop Rule):</strong> لا يتم فتح أي إمدادات معقمة للحالة التالية حتى يكتمل التنظيف البيئي، وتتم إزالة جميع النفايات، وتكون الغرفة هادئة. (AORN)</p>
        <p><span class="english-term"><strong>24.4.1 The deadly sin: Overlapping cleaning and sterile opening</strong><br>The most dangerous OR efficiency mistake is starting to open sterile trays for Case B while cleaners are still wiping blood and kicking up dust from Case A. <strong>This directly violates aseptic principles and spikes SSI risk.</strong> (AORN; CDC / WHO SSI concepts)<br>
        <strong>Hard Stop Rule:</strong> No sterile supplies are opened for the next case until environmental cleaning is complete, all waste is removed, and the room is quiet. (AORN)</span></p>
    </div>

    <h3>24.4.2 التسرع في "وقت التلامس" (Contact Time)</h3>
    <p>تحتاج المناديل المطهرة إلى بقاء السطح رطباً لمدة محددة (مثال: 1 دقيقة، 3 دقائق) لقتل مسببات الأمراض. مسح السرير ثم تجفيفه فوراً بمنشفة لـ "توفير الوقت" يمحو عملية التطهير بأكملها. (AORN)</p>
    <p><span class="english-term"><strong>24.4.2 Rushing "Contact Time"</strong><br>Disinfectant wipes require the surface to stay wet for a specific time (e.g., 1 min, 3 mins) to kill pathogens. Wiping the bed and immediately drying it with a towel to "save time" erases the disinfection. (AORN)</span></p>

    <h2>24.5 المعالجة المتوازية (كيف تسرع بأمان)</h2>
    <h3>24.5 Parallel Processing (How to Go Fast Safely)</h3>

    <h3>24.5.1 المعالجة المتسلسلة مقابل المتوازية / Serial vs. Parallel</h3>
    <p><strong>المعالجة المتسلسلة (بطيئة):</strong> ينتهي الجراح ← يستيقظ المريض ← يخرج المريض ← يدخل عامل النظافة ← يخرج عامل النظافة ← تجلب الممرضة الإمدادات ← تجهز الممرضة الغرفة ← نرسل في طلب المريض التالي.</p>
    <p><strong>المعالجة المتوازية (سريعة وآمنة):</strong> بينما يُغلق الجراح الحالة "أ"، تقوم الممرضة الدوارة بطلب المريض "ب" لمنطقة الانتظار. بينما يخرج المريض "أ" إلى الإفاقة، يبدأ عامل النظافة فوراً. بينما يتم التنظيف، يقوم طبيب التخدير بتقييم المريض "ب" في منطقة الانتظار. (IHI)</p>
    <p><span class="english-term"><strong>24.5.1 Serial vs. Parallel Processing</strong><br><strong>Serial (Slow):</strong> Surgeon finishes → patient wakes → patient rolls out → cleaner comes in → cleaner leaves → nurse gets supplies → nurse sets up → send for next patient. <br><strong>Parallel (Fast &amp; Safe):</strong> While surgeon is closing Case A, circulating nurse calls for Patient B to holding. While Patient A rolls to PACU, cleaner starts immediately. While cleaning happens, anesthesia evaluates Patient B in holding. (IHI)</span></p>

    <h3>24.5.2 "حشد الغرفة" (Pit-stop approach)</h3>
    <p>تستخدم أفضل المستشفيات نهج "التوقف في محطة الصيانة" (مثل سباقات الفورمولا 1). عندما يخرج المريض، يتدخل فريق بأكمله (التمريض، النظافة، المساعدون) للعمل على مهام محددة مسبقاً. لكن هذا يتطلب <strong>وضوحاً تاماً في الأدوار</strong>. إذا لم يعرف الجميع وظيفتهم، يصبح الحشد فوضى. (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>24.5.2 "Pit-stop" approach</strong><br>The best hospitals use a "pit-stop" approach. When the patient rolls out, a whole team swarms the room for specific pre-assigned tasks. But this requires <strong>total role clarity</strong>. If everyone doesn’t know their exact job, the swarm becomes chaos. (IHI; AHRQ)</span></p>

    <h2>24.6 القصة الحقيقية 2: "التبديل في 10 دقائق الذي تسبب في عدوى"</h2>
    <h3>24.6 Real Story 2: "The 10-Minute Turnover that Caused an Infection"</h3>

    <div class="quote-box">
        <p>كانت الغرفة متأخرة ساعة كاملة. كان فريق الجراحة منزعجاً. عندما خرج المريض الأول، دفع الجراح الجميع للتعجيل. تم تبديل الغرفة في 10 دقائق—وهو رقم قياسي. كانوا فخورين جداً.</p>
        <p><span class="english-term">The room was an hour late. The surgical team was agitated. When the first patient rolled out, the surgeon pushed everyone to rush. The room was turned over in 10 minutes—a record. They were very proud.</span></p>
        
        <p>لكن لكي يحققوا ذلك، قامت الممرضة المعقمة بفتح صواني العظام للمريض الثاني بينما كان المساعد لا يزال ينفض الملاءات المتسخة ويمسح الأرضية بجوارها. استقر الغبار (والعبء البيولوجي) المحمول جواً على الغرسات المفتوحة والمبللة حديثاً.</p>
        <p><span class="english-term">But to achieve it, the scrub nurse opened the orthopedic trays for the second patient while the orderly was still shaking out dirty linens and mopping the floor right next to her. The airborne dust (and bioburden) settled onto the open, freshly wet implants.</span></p>
        
        <p>أُصيب المريض الثاني بعدوى مروعة في المفصل. التبديل الذي استغرق 10 دقائق كلف المريض عاماً من حياته.</p>
        <p><span class="english-term">The second patient acquired a horrific joint infection. That 10-minute turnover cost the patient a year of their life.</span></p>
    </div>

    <div class="alert-box">
        <p><strong>الدرس:</strong> لا تقم أبداً بتداخل المهام "القذرة" (التنظيف، إزالة البياضات) مع المهام "النظيفة" (فتح الصواني). الموثوقية تعني الحفاظ على التسلسل الآمن حتى عندما يكون الضغط في أعلى مستوياته. (AORN concepts; CDC / WHO SSI concepts)</p>
        <p><span class="english-term"><strong>Lesson:</strong> Never overlap "dirty" tasks (cleaning, linen removal) with "clean" tasks (tray opening). Reliability means preserving the safe sequence even when pressure is highest. (AORN concepts; CDC / WHO SSI concepts)</span></p>
    </div>

    <h2>24.7 أدوات عملية لموثوقية التدفق</h2>
    <h3>24.7 Practical Tools for Flow Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>24.7.1 الأداة 1 — اجتماع ما قبل اليوم (The Day-Before Huddle):</strong><br>
            اجتماع مدته 10 دقائق في الساعة 2:00 ظهراً لمراجعة الحالات الأولى لليوم التالي. هل جميع المرضى جاهزون طبياً؟ هل جميع الصواني متوفرة؟ إذا لم يكن الأمر كذلك، يتم نقل الحالة الأولى، ووضع حالة جاهزة بدلاً منها. (IHI)</li>
            <br>
            <li><strong>24.7.2 الأداة 2 — استراتيجية "المريض الذهبي" (The Golden Patient):</strong><br>
            يجب أن تكون الحالة الأولى في اليوم دائماً هي مريض منخفض الخطورة، ومعتمد بالكامل طبياً، وموجود في المستشفى، ولا يتطلب معدات معقدة أو إعارة (Loaners). هذا يضمن بدء اليوم بانتصار. (IHI)</li>
            <br>
            <li><strong>24.7.3 الأداة 3 — قائمة التحقق القياسية للتبديل (Standardized Turnover Checklist):</strong><br>
            بطاقة مهام بسيطة (من يفعل ماذا). <em>الممرضة الدوارة:</em> تمسح المعدات. <em>التخدير:</em> يمسح أجهزته. <em>عامل النظافة:</em> يمسح السرير والأرضية. <em>الجميع:</em> يغادر حتى يستقر الهواء قبل الفتح المعقم. (AORN concepts; IHI)</li>
        </ul>
    </div>

    <h2>24.8 القياس (كيف تعرف أن تدفقك آمن)</h2>
    <h3>24.8 Measurement (How to Know Your Flow is Safe)</h3>

    <h3>24.8.1 احذر من فخاخ مؤشرات الأداء (KPI Pitfalls)</h3>
    <p>إذا قمت بقياس ومكافأة "السرعة" فقط، فستحصل على التسرع والالتفافات على السلامة. يجب دائماً إقران مقاييس التدفق (Flow) بمقاييس الجودة (Quality). (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>24.8.1 Beware KPI Pitfalls</strong><br>If you only measure and reward "speed," you will get rushed work and safety workarounds. Flow metrics must always be paired with quality metrics. (IHI; AHRQ)</span></p>

    <h3>24.8.2 المقاييس المزدوجة الصحيحة (The paired metrics)</h3>
    <ul>
        <li><strong>التدفق:</strong> النسبة المئوية للبدء في الوقت المحدد (FCOTS) ← <strong>مقترن بـ الجودة:</strong> النسبة المئوية لإكمال "بوابة المريض جاهز" بشكل دقيق.</li>
        <li><strong>التدفق:</strong> متوسط وقت التبديل (TOT) بالدقائق ← <strong>مقترن بـ الجودة:</strong> نقاط جودة تدقيق التنظيف البيئي. (IHI)</li>
    </ul>

    <h2>24.15 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>24.15 The Writer's Reflection</h3>
    <p><em>ملاحظة: تم الحفاظ على ترقيم النص الأصلي الذي يقفز إلى 24.15</em></p>

    <h3>24.15.1 التدفق هو عرض، وليس السبب / Flow is a symptom, not a cause</h3>
    <p>عندما تكون غرفة العمليات بطيئة، فإن المشكلة نادراً ما تكون الكسل. المشكلة هي الفوضى. الناس يبحثون عن الأشياء، ويصححون الأخطاء، وينتظرون المعلومات. التدفق السلس هو النتيجة الطبيعية للأنظمة المنظمة جيداً.</p>
    <p><span class="english-term"><strong>24.15.1 Flow is a symptom, not a cause</strong><br>When an OR is slow, the problem is rarely laziness. The problem is chaos. People are hunting for things, fixing errors, waiting for information. Smooth flow is the natural result of highly organized systems.</span></p>

    <h3>24.15.2 الكفاءة التي تعتمد على البطولات هي كفاءة مزيفة</h3>
    <p>البطولات مكلفة: فهي تؤدي إلى الإرهاق، دوران الموظفين (Turnover)، الحوادث الوشيكة، والضرر الصامت.</p>
    <p><span class="english-term"><strong>24.15.2 Efficiency that depends on heroics is fake efficiency</strong><br>Heroics are expensive: fatigue, turnover, near-misses, and quiet harm.</span></p>

    <h3>24.15.3 قاعدتي / My rule</h3>
    <p>إذا تحسن مقياس التدفق الخاص بك بينما تدهورت سلوكيات السلامة، فأنت لم تقم بتحسين التدفق—لقد قمت بتأجيل الضرر إلى المستقبل. (IHI; AHRQ)</p>
    <p><span class="english-term"><strong>24.15.3 My rule</strong><br>If your flow metric improves while your safety behaviors degrade, you didn’t improve flow—you moved harm into the future. (IHI; AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>بدء الحالة الأولى في الوقت المحدد هو نتيجة لموثوقية النظام؛ أصلح الاعتمادات المبكرة (Upstream dependencies) واستخدم بوابات "الغرفة جاهزة/المريض جاهز". (IHI; AHRQ)<br>
            <span class="english-term">First-case on-time start is a system reliability outcome; fix upstream dependencies and use Room Ready Gates.</span></li>
            
            <li>يمكن أن يكون وقت التبديل (Turnover) أسرع وأكثر أماناً من خلال إزالة الاختناقات، الإمدادات الموحدة، المعالجة المتوازية، ووضوح الأدوار—<strong>دون</strong> تداخل التنظيف مع الإعداد المعقم. (AORN concepts; IHI)<br>
            <span class="english-term">Turnover can be faster and safer through bottleneck removal, standardized supplies, parallel processing, and role clarity—without overlapping cleaning and sterile setup.</span></li>
            
            <li>قس التدفق مع موثوقية الحواجز (Barrier reliability) لمنع الاختصارات المدفوعة بمؤشرات الأداء (KPI). (WHO SSC; IHI)<br>
            <span class="english-term">Measure flow together with barrier quality to prevent KPI-driven shortcuts.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, flow, bottlenecks, measurement, KPI design, learning loops).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, safety culture, teamwork under pressure, near-miss learning).</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist resources (protecting meaningful pauses and time-out quality under pressure).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (environmental cleaning and perioperative workflow concepts; sterility-protecting behaviors).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79 (concepts). Sterility assurance and processing constraints relevant to tray readiness and CSSD capacity alignment.</li>
            <li>CDC / WHO SSI prevention guidance (concepts) supporting antibiotic timing discipline under pressure.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  7: `<!-- Download Button -->
    

    <div class="part-title">PART II — Preoperative Readiness and “Start-Right” Controls</div>
    <div class="part-title">الجزء الثاني — الجاهزية ما قبل العملية وضوابط "البداية الصحيحة"</div>
    
    <h1>CHAPTER 7 — Pre-op Optimization from the OR Perspective</h1>
    <div class="subtitle">الفصل السابع — التحسين ما قبل العملية من منظور غرفة العمليات<br>
    <span style="font-size: 18px;">(Readiness Gates • Cancellation Prevention • Stop Criteria • Communication Loops)<br>
    (بوابات الجاهزية • الوقاية من الإلغاءات • معايير التوقف • حلقات التواصل)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا "التحسين ما قبل العملية" ليس أمراً طبياً بحتاً—بل هو أيضاً <strong>جاهزية نظام غرفة العمليات (OR system readiness)</strong>، حيث تتحول التفاصيل المفقودة إلى ضرر أو إلغاءات. (IHI; AHRQ)<br>
            <span class="english-term">Explain why “pre-op optimization” is not only medical—it is also <strong>OR system readiness</strong>, where missing details become harm or cancellations. (IHI; AHRQ)</span></li>
            
            <li>بناء <strong>بوابة جاهزية (Readiness Gate)</strong> عملية تمنع البدايات غير الآمنة وتقلل من الإلغاءات التي يمكن تجنبها دون شل التدفق (Flow). (IHI; The Joint Commission)<br>
            <span class="english-term">Build a practical <strong>Readiness Gate</strong> that prevents unsafe starts and reduces preventable cancellations without paralyzing flow. (IHI; The Joint Commission)</span></li>
            
            <li>تحديد <strong>معايير توقف (Stop Criteria)</strong> واضحة (توقفات إلزامية / Hard stops) وقواعد استثناءات تحمي المرضى مع احترام حالات الطوارئ. (The Joint Commission; AORN)<br>
            <span class="english-term">Define clear <strong>Stop Criteria</strong> (hard stops) and exception rules that protect patients while respecting emergencies. (The Joint Commission; AORN)</span></li>
            
            <li>تصميم <strong>حلقات تواصل (Communication loops)</strong> موثوقة بين العيادة/الجناح/ما قبل العمليات/غرفة العمليات/التعقيم (CSSD)/وسلسلة التوريد بحيث تُحل المشاكل <strong>قبل</strong> وصول المريض إلى الغرفة. (AHRQ; IHI)<br>
            <span class="english-term">Design reliable <strong>communication loops</strong> between clinic/ward/pre-op/OR/CSSD/supply chain so problems are solved <strong>before</strong> the patient reaches the room. (AHRQ; IHI)</span></li>
            
            <li>استخدام أدوات خاصة بغرفة العمليات: قوائم تحقق الجاهزية، نصوص الاجتماع السريع ما قبل العملية (Pre-op huddle)، مراجعة الإلغاءات، و "مؤشرات الجاهزية". (IHI; AORN)<br>
            <span class="english-term">Use OR-side tools: readiness checklists, pre-op huddle scripts, cancellation review, and “readiness KPIs.” (IHI; AORN)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "المريض الذي فعل كل شيء بشكل صحيح... والنظام الذي لم يفعل"</strong><br>
        <span class="english-term">A true-to-life case: “The patient who did everything right… and the system that didn’t” (Real Scientific Story)</span>
    </div>

    <p>هناك نوع خاص من الحسرة في غرفة العمليات—أحد الأنواع الذي لا أزال أشعر به بعد عقود: المريض الذي يصل صائماً، قلقاً، مستعداً، واثقاً... ثم يسمع جملة، <strong>"يجب علينا التأجيل."</strong></p>
    <p><span class="english-term">There is a particular kind of heartbreak in the OR—one I still feel after decades: the patient who arrives fasting, anxious, prepared, trusting… and then hears the sentence, <strong>“We have to postpone.”</strong></span></p>

    <p>وصل مريض في الساعة 6:30 صباحاً لإجراء عملية مجدولة. قامت العائلة بترتيب إجازة من العمل. اتبع المريض كل التعليمات: الصيام، الأدوية، الاستحمام، الأوراق. أكملت الممرضة الدخول. تحركت عربة النقل نحو المسرح.</p>
    <p><span class="english-term">A patient arrived at 6:30 a.m. for an elective procedure. Family had arranged leave from work. The patient had followed every instruction: fasting, medications, showering, papers. The nurse completed the admission. The trolley rolled toward theatre.</span></p>

    <p>في اللحظة الأخيرة، ظهرت مشكلة: أداة خاصة كانت مفقودة، ولم يتم تأكيد طقم الغرسة (Implant set). اقترح أحدهم الاستعارة من حالة أخرى. اقترح آخر "سنتدبر الأمر". لكن الجراح كان يعلم أنه إذا لم يكن النظام الصحيح متاحاً، فقد تبدأ الحالة وتصبح غير آمنة في منتصفها—عندما تكون قد تجاوزت بالفعل نقطة اللاعودة.</p>
    <p><span class="english-term">At the final moment, a problem surfaced: a special instrument was missing, and the implant set had not been confirmed. Someone suggested borrowing from another case. Another suggested “we will manage.” But the surgeon knew that if the correct system wasn’t available, the case could begin and then become unsafe halfway through—when you have already crossed the point of no return.</span></p>

    <div class="alert-box">
        <p>تم إلغاء حالة المريض.</p>
        <p><span class="english-term">The patient’s case was cancelled.</span></p>
    </div>

    <p>لاحقاً، أظهر التحقيق الحقيقة التي تتكرر في كل مستشفى:</p>
    <ul>
        <li>ذكرت خطة العيادة الغرسة، لكن الحجز لم يفرض تعبئة هذا الحقل. (AORN)</li>
        <li>لم تتلقَ سلسلة التوريد طلباً مؤكداً في وقت مبكر بما فيه الكفاية.</li>
        <li>لم تكن هناك بوابة جاهزية موجودة قبل 24-48 ساعة. (IHI)</li>
        <li>واكتشفت غرفة العمليات الفشل فقط عندما كان المريض على الباب بالفعل.</li>
    </ul>
    <p><span class="english-term">Later, the investigation showed the truth that repeats in every hospital:<br>
    the clinic plan mentioned the implant but booking did not enforce the field, (AORN)<br>
    supply chain didn’t receive a confirmed request early enough,<br>
    no readiness gate existed 24–48 hours prior, (IHI)<br>
    and the OR discovered the failure only when the patient was already at the door.</span></p>

    <div class="success-box">
        <p>ما أتذكره أكثر ليس الفوضى التشغيلية. إنه وجه المريض—مرتبك، محبط، ويحاول أن يكون مهذباً. لقد استعد المريض بشكل مثالي. أما النظام فلم يفعل.</p>
        <p>هذه هي الرسالة الأساسية لهذا الفصل: <strong>التحسين ما قبل العملية ليس فقط ما نفعله للمريض. إنه ما نفعله للنظام قبل وصول المريض.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">What I remember most is not the operational chaos. It is the patient’s face—confused, disappointed, trying to be polite. The patient had optimized perfectly. The system had not.<br>
        That is the core message of this chapter: <strong>Pre-op optimization is not only what we do to the patient. It is what we do to the system before the patient arrives.</strong> (IHI; AHRQ)</span></p>
    </div>

    <h2>7.1 ماذا يعني "التحسين ما قبل العملية" من منظور غرفة العمليات</h2>
    <h3>7.1 What “Pre-op Optimization” Means From the OR Perspective</h3>

    <h3>7.1.1 رؤية غرفة العمليات: "جاهز للبدء بأمان، جاهز للانتهاء بأمان"</h3>
    <p>غالباً ما يفكر الأطباء في التحسين ما قبل العملية على أنه طبي: فقر الدم، السيطرة على مرض السكري، مضادات التخثر، فحص العدوى، اللياقة البدنية، والهشاشة. هذه أمور حاسمة. ولكن من منظور غرفة العمليات، هناك حقيقة أخرى لا تقل أهمية:</p>
    <p><strong>تكون الحالة محسّنة ومثالية فقط إذا تمكن المسرح من بدئها بأمان وإنهائها بأمان دون ارتجال.</strong> (IHI)</p>
    <p><span class="english-term"><strong>7.1.1 The OR view: “Ready to start safely, ready to finish safely”</strong><br>
    Clinicians often think of pre-op optimization as medical: anemia, diabetes control, anticoagulants, infection screening, fitness, frailty. Those are crucial. But from the OR perspective, another truth is equally important:<br>
    <strong>A case is optimized only if the theatre can start it safely and finish it safely without improvisation.</strong> (IHI)</span></p>

    <h3>7.1.2 جاهزية غرفة العمليات هي تدخل لسلامة المريض</h3>
    <p>الإلغاءات التي يمكن الوقاية منها، الغرسات المفقودة، الموافقة غير المكتملة، أو غياب التصوير ليست مجرد "مشاكل سير عمل" (Workflow problems). إنها تزيد من:</p>
    <ul>
        <li>اتخاذ القرارات المتسرعة،</li>
        <li>الالتفافات على النظام (Workarounds)،</li>
        <li>التأخيرات أثناء التخدير،</li>
        <li>خطر العدوى بسبب إطالة الوقت، (WHO SSI; CDC SSI)</li>
        <li>والضرر المعنوي (Moral distress) للموظفين.</li>
    </ul>
    <p>لذلك، تُعد جاهزية غرفة العمليات جزءاً من علم سلامة المرضى. (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>7.1.2 OR readiness is a patient safety intervention</strong><br>
    Preventable cancellations, missing implants, incomplete consent, or absent imaging are not just “workflow problems.” They increase: rushed decision-making, workarounds, delays under anesthesia, infection risk due to prolonged time, (WHO SSI; CDC SSI) and moral distress for staff. Therefore OR readiness is part of patient safety science. (AHRQ; IHI)</span></p>

    <h3>7.1.3 بوابات الجاهزية تمنع ضررين في وقت واحد</h3>
    <p>بوابة الجاهزية الجيدة تمنع:</p>
    <ul>
        <li>البدايات غير الآمنة (الموقع الخاطئ، موافقة مفقودة، غرسة مفقودة)، (The Joint Commission; AORN)</li>
        <li>والمعاناة التي يمكن تجنبها من الإلغاءات في اللحظة الأخيرة.</li>
    </ul>
    <p>هذا المزيج هو السبب في أن الجاهزية تُعد <strong>سريرية وإنسانية</strong> في نفس الوقت. (AHRQ)</p>
    <p><span class="english-term"><strong>7.1.3 Readiness gates prevent two harms at once</strong><br>
    A good readiness gate prevents: unsafe starts (wrong site, missing consent, missing implant), (The Joint Commission; AORN) and avoidable suffering from last-minute cancellations. That combination is why readiness is both clinical and humane. (AHRQ)</span></p>

    <h2>7.2 مفهوم بوابة الجاهزية (باب السلامة قبل باب غرفة العمليات)</h2>
    <h3>7.2 The Readiness Gate Concept (The Safety Door Before the OR Door)</h3>

    <h3>7.2.1 ما هي بوابة الجاهزية؟</h3>
    <p>بوابة الجاهزية هي نقطة تحقق مُحددة—تُجرى في وقت مبكر بما يكفي لإصلاح المشاكل—حيث تؤكد على الحد الأدنى من البيانات المطلوبة لبداية آمنة. (IHI)</p>
    <p>إنها ليست قائمة تحقق طويلة. إنها <strong>حاجز مُصمم (Designed barrier)</strong> يمنع الغموض من دخول المسرح الجراحي. (IHI)</p>
    <p><span class="english-term"><strong>7.2.1 What is a readiness gate?</strong><br>
    A readiness gate is a defined checkpoint—performed early enough to fix problems—where you confirm the minimum dataset required for a safe start. (IHI) It is not a long checklist. It is a <strong>designed barrier</strong> that blocks ambiguity from entering the theatre. (IHI)</span></p>

    <h3>7.2.2 الطبقات الزمنية الثلاث للجاهزية / The three timing layers of readiness</h3>
    <p>في أنظمة غرف العمليات الناضجة، يتم التحقق من الجاهزية في طبقات:</p>
    <div class="concept-box">
        <ul>
            <li><strong>7.2.2.1 الطبقة 1 — قبل 48–72 ساعة (بوابة التخطيط / Planning gate):</strong><br>
            الهدف: تأكيد المعدات/الغرسات/الإعارة، المتطلبات الخاصة، والفجوات التوثيقية غير المحلولة مبكراً. (AORN; IHI)<br>
            <span class="english-term">Goal: confirm equipment/implants/loaners, special requirements, and unresolved documentation gaps early.</span></li>
            
            <li><strong>7.2.2.2 الطبقة 2 — في اليوم السابق / مساءً (بوابة التأكيد / Confirmation gate):</strong><br>
            الهدف: التحقق من أن التأكيدات حقيقية—ليست افتراضات—وأن القائمة مستقرة. (IHI)<br>
            <span class="english-term">Goal: verify that confirmations are real—not assumptions—and that the list is stable.</span></li>
            
            <li><strong>7.2.2.3 الطبقة 3 — يوم الجراحة (البوابة النهائية / Final gate):</strong><br>
            الهدف: التحقق من هوية المريض، مطابقة الموافقة، جاهزية تحديد الموقع، و"لا يوجد تباينات جديدة". (The Joint Commission)<br>
            <span class="english-term">Goal: verify patient ID, consent match, site marking readiness, and “no new mismatches.”</span></li>
        </ul>
    </div>
    <p>البوابات المتعددة الطبقات مهمة لأن يوم الجراحة غالباً ما يكون <strong>متأخراً جداً</strong> للعديد من الإصلاحات. (IHI)</p>

    <h3>7.2.3 ما يجب أن تتضمنه بوابة الجاهزية (الحد الأدنى للبيانات) / Minimum dataset</h3>
    <p>يجب أن تغطي مجموعة بيانات جاهزية غرفة العمليات كحد أدنى ما يلي:</p>
    <ul>
        <li>هوية المريض صحيحة وسلامة سوار المعصم. (The Joint Commission)</li>
        <li>اسم الإجراء موحد ويطابق الحجز/الموافقة. (The Joint Commission)</li>
        <li>الجهة/الموقع/المستوى (Laterality) مُحددة حيثما كان ذلك ذا صلة. (The Joint Commission)</li>
        <li>الموافقة موجودة، محددة، وصالحة. (The Joint Commission)</li>
        <li>التصوير متاح ومتسق حيثما كان ذا صلة. (The Joint Commission)</li>
        <li>الاحتياج للغرسة/أدوات الإعارة مؤكد (النوع + نطاق الحجم + الاكتمال). (AORN)</li>
        <li>الأدوات/الإمدادات المعقمة متاحة وسلامتها مضمونة. (AORN; AAMI ST79)</li>
        <li>خطة العينات متوقعة (الملصقات، الحاويات، التعامل الخاص). (AORN; AHRQ)</li>
        <li>جاهزية الوقاية من العدوى: خطة المضادات الحيوية وعلامات مكافحة العدوى الحرجة (IPC flags). (WHO SSI; CDC SSI; AORN)</li>
        <li>جاهزية الطاقم والغرفة: مزيج المهارات (Skill mix) المناسب وفحوصات المعدات. (AORN; IHI)</li>
    </ul>
    <p>المبدأ بسيط: <strong>إذا كان لا يمكن بدء الحالة وإنهائها بأمان، فهي ليست جاهزة.</strong> (IHI)</p>
    <p><span class="english-term">The principle is simple: <strong>if the case cannot be started and finished safely, it is not ready.</strong> (IHI)</span></p>

    <h2>7.3 لماذا تحدث الإلغاءات (ولماذا يمكن الوقاية من الكثير منها)</h2>
    <h3>7.3 Why Cancellations Happen (And Why Many Are Preventable)</h3>

    <h3>7.3.1 الإلغاءات هي أعراض، وليست أحداثاً عشوائية / Cancellations are symptoms</h3>
    <p>خلال 25 عاماً، نادراً ما رأيت إلغاءً "غامضاً" حقاً. يقع معظمها في عائلات يمكن التنبؤ بها:</p>
    <ul>
        <li>فجوات التوثيق (عدم تطابق الموافقة، فقدان الجهة). (The Joint Commission)</li>
        <li>المريض غير جاهز طبياً (غالباً ما يُكتشف متأخراً).</li>
        <li>غرسات/أدوات/أطقم إعارة مفقودة. (AORN)</li>
        <li>عبء جدولة زائد وعدم تطابق الموارد. (IHI)</li>
        <li>مشاكل توفر أسرة/عناية مركزة (طاقة تشغيلية). (IHI)</li>
        <li>نقص الموظفين أو الكفاءات المفقودة. (AORN)</li>
        <li>اكتشاف متأخر لعلامات مكافحة العدوى. (WHO SSI)</li>
    </ul>
    <p>العديد من هذه الحالات يمكن الوقاية منه <strong>إذا نظر النظام في وقت مبكر بما فيه الكفاية.</strong> (IHI)</p>
    <p><span class="english-term"><strong>7.3.1 Cancellations are symptoms, not random events</strong><br>
    In 25 years, I rarely saw a truly “mysterious” cancellation. Most fell into predictable families... Many of these are preventable <strong>if the system looks early enough.</strong> (IHI)</span></p>

    <h3>7.3.2 الضرر الخفي للإلغاءات / The hidden harm of cancellations</h3>
    <p>الإلغاء ليس محايداً. إنه يضر بـ:</p>
    <ul>
        <li>ثقة المريض،</li>
        <li>فسيولوجيا المريض (التوتر، الصيام)،</li>
        <li>الخدمات اللوجستية للعائلة،</li>
        <li>معنويات الموظفين،</li>
        <li>ويزيد الضغط لاحقاً—مما يخلق المزيد من الاختصارات. (AHRQ; IHI)</li>
    </ul>
    <p>لذلك، تُعد الوقاية من الإلغاءات <strong>استراتيجية سلامة (Safety strategy)</strong>. (IHI)</p>

    <h3>7.3.3 مراجعة الإلغاءات التي يمكن الوقاية منها كبرنامج سلامة</h3>
    <p>يجب على كل غرفة عمليات تصنيف الإلغاءات: <strong>يمكن الوقاية منها مقابل لا يمكن الوقاية منها</strong>، مع فئات الأسباب الجذرية. (IHI) هذا يحول الإحباط إلى تعلم.</p>
    <p><span class="english-term"><strong>7.3.3 Preventable cancellation review is a safety program</strong><br>
    Every OR should classify cancellations: <strong>preventable vs non-preventable</strong>, with root cause categories. (IHI) This turns frustration into learning.</span></p>

    <h2>7.4 "معايير التوقف" في غرفة العمليات (التوقفات الإلزامية التي تحمي المرضى)</h2>
    <h3>7.4 The OR “Stop Criteria” (Hard Stops That Protect Patients)</h3>

    <h3>7.4.1 لماذا يجب أن تكون معايير التوقف مكتوبة / Why stop criteria must exist in writing</h3>
    <p>في لحظات التوتر، يتفاوض الناس. لا يمكن التفاوض على السلامة في كل مرة. هذا هو السبب في أن معايير التوقف يجب أن تكون صريحة ومتفق عليها من قبل القيادة. (IHI)</p>
    <p>تحول معايير التوقف عبارة "أشعر بعدم الأمان" إلى <strong>"النظام يتطلب منا التوقف."</strong> (IHI; The Joint Commission)</p>
    <p><span class="english-term"><strong>7.4.1 Why stop criteria must exist in writing</strong><br>
    In stressful moments, people negotiate. Safety cannot be negotiated each time. That’s why stop criteria must be explicit and agreed by leadership. (IHI)<br>
    Stop criteria convert “I feel unsafe” into <strong>“the system requires us to pause.”</strong> (IHI; The Joint Commission)</span></p>

    <h3>7.4.2 معايير التوقف الأساسية (أمثلة) / Core stop criteria</h3>
    <div class="alert-box">
        <p>فيما يلي معايير التوقف الشائعة في غرفة العمليات التي تتوافق مع توقعات السلامة العالمية:</p>
        <ul>
            <li><strong>عدم تطابق الهوية/الإجراء:</strong> أي تباين بين معرفات المريض، الحجز، الموافقة، والخطة = توقف حتى تتم التسوية والتوثيق. (The Joint Commission; WHO SSC)</li>
            <li><strong>الجهة/الموقع غير واضح (Laterality):</strong> إذا لم يكن الموقع محدداً بوضوح، فلا يمكن بدء الشق الجراحي. (The Joint Commission)</li>
            <li><strong>الموافقة مفقودة، غامضة، أو غير متوافقة:</strong> النموذج المُوقع لا يكفي؛ يجب أن يتطابق مع الإجراء المقصود فعلياً. (The Joint Commission)</li>
            <li><strong>طقم الغرسة/الإعارة غير مكتمل:</strong> إذا كانت الحالة تعتمد على نظام غرسة، فإن الأطقم غير المكتملة تُعد توقفاً إلزامياً ما لم تُطبق بروتوكولات الطوارئ. (AORN; IHI)</li>
            <li><strong>التصوير الحرج غائب:</strong> عندما يحدد التصوير الموقع/المستوى، فإن المضي قدماً بدونه ليس تحققاً. (The Joint Commission)</li>
            <li><strong>إخفاقات سلامة العقامة:</strong> تتطلب اختراقات العقامة (Sterility breaks) غير المدارة توقفاً وإجراءً تصحيحياً. (AORN; WHO SSI)</li>
        </ul>
        <p>معايير التوقف هي كيف تصبح <strong>الحوكمة واقعاً</strong> في الساعة 7:30 صباحاً. (IHI)</p>
        <p><span class="english-term">Stop criteria are how <strong>governance becomes real</strong> at 7:30 a.m. (IHI)</span></p>
    </div>

    <h3>7.4.3 الاستثناءات: يجب حوكمة الطوارئ، لا ارتجالها / Exceptions must be governed</h3>
    <p>الطوارئ الحقيقية موجودة. يجب أن تحدد الحوكمة:</p>
    <ul>
        <li>من يمكنه إعلان استثناء الطوارئ،</li>
        <li>ما هو الحد الأدنى من التحقق الذي يجب أن يحدث حتى في الطوارئ،</li>
        <li>ما هي الوثائق المطلوبة بعد ذلك،</li>
        <li>وكيف ستتم مراجعة الحالة. (The Joint Commission; IHI)</li>
    </ul>

    <h2>7.5 حلقات التواصل (الفرق بين غرفة العمليات الآمنة وغرفة العمليات المزدحمة)</h2>
    <h3>7.5 Communication Loops (The Difference Between a Safe OR and a Busy OR)</h3>

    <h3>7.5.1 لماذا يفشل التواصل: ليس لأن الناس لا يتحدثون</h3>
    <p>في المسرح الجراحي، يتحدث الناس طوال اليوم. لكن الكثير من هذا يُعد ضجيجاً: مكالمات هاتفية، تحديثات، شكاوى، طلبات. تحتاج السلامة إلى تواصل مُهيكل—<strong>حلقات تنغلق (Loops that close)</strong>. (AHRQ)</p>
    <p><span class="english-term"><strong>7.5.1 Why communication fails: it is not because people don’t talk</strong><br>
    In theatres, people talk all day. But much of it is noise: phone calls, updates, complaints, requests. Safety needs structured communication—<strong>loops that close</strong>. (AHRQ)</span></p>

    <h3>7.5.2 مفهوم "الحلقة المغلقة" المُطبق على الجاهزية / Closed loop concept</h3>
    <p>تكون حلقة التواصل مغلقة فقط عندما:</p>
    <ol>
        <li>يتم تقديم الطلب بوضوح،</li>
        <li>يتم تأكيد الاستلام،</li>
        <li>يتم إكمال الإجراء،</li>
        <li>يتم تأكيد الاكتمال <strong>مجدداً لمقدم الطلب</strong>. (AHRQ)</li>
    </ol>
    <p>هذا مهم مع الغرسات، أطقم الإعارة، والتصوير: الافتراض أمر خطير. (IHI; AORN)</p>
    <p><span class="english-term">A communication loop is closed only when: 1. request is made clearly, 2. receipt is confirmed, 3. action is completed, 4. completion is confirmed <strong>back to the requester</strong>. (AHRQ)<br>
    This matters with implants, loaners, and imaging: assuming is dangerous. (IHI; AORN)</span></p>

    <h3>7.5.3 الاجتماع السريع ما قبل العملية (Pre-op Huddle)</h3>
    <p>يمكن لاجتماع قصير يومي أو في اليوم السابق أن يمنع نسبة كبيرة من مفاجآت اللحظة الأخيرة. (IHI)</p>
    <p>يجيب الـ Huddle الجيد على:</p>
    <ul>
        <li>أي الحالات عالية المخاطر اليوم؟</li>
        <li>أي الحالات تحتاج غرسات/أطقم إعارة/أدوات خاصة؟ (AORN)</li>
        <li>أيها يحتاج تأكيداً تصويرياً؟ (The Joint Commission)</li>
        <li>أيها لديه احتياجات خاصة لمكافحة العدوى؟ (WHO SSI)</li>
        <li>أيها قد يتطلب تخطيطاً للعناية المركزة/الأسرة؟ (IHI)</li>
        <li>ما هي مخاطر "معايير التوقف" اليوم؟</li>
    </ul>
    <p><span class="english-term"><strong>7.5.3 The Pre-op Huddle (a small meeting that saves big harm)</strong><br>
    A short daily or day-before huddle can prevent a large percentage of last-minute surprises. (IHI)</span></p>

    <div class="concept-box">
        <h3>7.5.4 2: "الاجتماع الذي منع استخدام الغرسة الخاطئة"</h3>
        <p>عانى قسم عالي الحجم من مفاجآت متكررة في الغرسات. في أحد الأيام، أدخلت غرفة العمليات اجتماعاً (Huddle) مدته 12 دقيقة في الساعة 2 ظهراً لليوم السابق للجراحة. في ذلك الاجتماع، سألت ممرضة: <strong>"هل تم تأكيد نظام الغرسة، وهل لدينا النطاق الكامل للأحجام؟"</strong></p>
        <p>كان الجواب: "نعتقد ذلك."</p>
        <p>أصرت الممرضة: <strong>"تم تأكيده بواسطة من، ومتى؟"</strong> لم يكن لدى أحد رقم تأكيد.</p>
        <p>اتصل الفريق بالمورد. لم يكن الطقم مجدولاً للتسليم. لولا هذا الاجتماع، لظهرت المفاجأة في الساعة 7:30 صباحاً، والمريض صائم بالفعل، مع وجود ضغط للارتجال.</p>
        <p>هذا الاجتماع الواحد منع إلغاءً ومنع بداية محفوفة بالمخاطر. <strong>هذا ما تفعله حلقات التواصل: إنها تنقل المخاطر إلى مرحلة مبكرة (Upstream)، حيث يمكن حلها بأمان.</strong> (IHI; AORN)</p>
        <p><span class="english-term">That single huddle prevented a cancellation and prevented a risky start. <strong>This is what communication loops do: they move risk upstream, where it can be solved safely.</strong> (IHI; AORN)</span></p>
    </div>

    <h2>7.6 بناء سير عمل الجاهزية (نظام إنساني يحترم المرضى)</h2>
    <h3>7.6 Building the Readiness Workflow (A Humane System That Respects Patients)</h3>

    <h3>7.6.1 "وعد المريض" خلف الجاهزية / The “patient promise”</h3>
    <p>عندما يصوم المريض ويصل عند الفجر، فإنه يمنحك الثقة. بوابات الجاهزية هي وسيلة لاحترام تلك الثقة—من خلال جعل النظام جديراً بتضحياته. (AHRQ)</p>
    <p><span class="english-term"><strong>7.6.1 The “patient promise” behind readiness</strong><br>
    When a patient fasts and arrives at dawn, they are giving you trust. Readiness gates are a way of honoring that trust—by making the system worthy of their sacrifice. (AHRQ)</span></p>

    <h3>7.6.2 مالك الجاهزية (شخص ما يجب أن يمتلك البوابة) / The readiness owner</h3>
    <p>إذا كان الجميع مسؤولاً، فلا أحد مسؤول حقاً. تحتاج بوابة الجاهزية إلى مالك محدد:</p>
    <ul>
        <li>الممرضة المسؤولة في غرفة العمليات،</li>
        <li>المنسق المحيط بالجراحة (Perioperative coordinator)،</li>
        <li>أو منسق مسار الخدمة—حسب هيكلك التنظيمي. (IHI)</li>
    </ul>

    <h3>7.6.3 يجب أن تكون قائمة تحقق الجاهزية قصيرة وصارمة / Short and strict</h3>
    <p>قوائم التحقق الطويلة تخلق اكتمالاً وهمياً. قائمة تحقق قصيرة مع <strong>توقفات إلزامية (Hard stops)</strong> تخلق الموثوقية. (IHI)</p>

    <h3>7.6.4 تقليل الاستثناءات هو جزء من النضج / Reducing exceptions</h3>
    <p>إذا كانت غرفة العمليات "تصنع استثناءات" باستمرار، فإن النظام يشير إلى تحضير مبدئي غير كافٍ. تتبع الاستثناءات وتعامل معها كمؤشرات للمخاطر. (IHI)</p>

    <h2>7.7 التحسين ما قبل العملية أبعد من الورق (مساهمات العمليات في الجاهزية السريرية)</h2>
    <h3>7.7 Pre-op Optimization Beyond Paper (OR-side contributions)</h3>

    <h3>7.7.1 جاهزية الوقاية من العدوى / Infection prevention readiness</h3>
    <p>تشمل جاهزية غرفة العمليات موثوقية مكافحة العدوى (IPC):</p>
    <ul>
        <li>خطة الوقاية بالمضادات الحيوية وملكية التوقيت، (WHO SSI; CDC SSI)</li>
        <li>مواءمة بروتوكولات إزالة الشعر وتحضير الجلد، (WHO SSI)</li>
        <li>الإبلاغ المبكر عن علامات العزل أو الـ MRSA عند الاقتضاء. (WHO SSI)</li>
    </ul>

    <h3>7.7.2 الوقاية من انخفاض الحرارة، تقرحات الضغط، والجلطات (VTE) / Temperature, pressure, VTE</h3>
    <p>حتى عندما يغطي التخدير الجانب الفسيولوجي، يجب على غرفة العمليات ضمان:</p>
    <ul>
        <li>جاهزية معدات التدفئة،</li>
        <li>توفر دعامات الوضعيات وأسطح الوقاية من تقرحات الضغط، (NPIAP/EPUAP)</li>
        <li>توفر أجهزة الوقاية الميكانيكية من VTE (الجلطات الوريدية العميقة) حيثما طُلب. (NICE guidance)</li>
    </ul>

    <h3>7.7.3 جاهزية العينات / Specimen readiness</h3>
    <p>يجب إعداد حاويات العينات، والملصقات، وترتيبات التعامل الخاص <strong>قبل</strong> الشق الجراحي—لأن الانتظار حتى لحظة الجمع يدعو للخطأ. (AORN; AHRQ)</p>

    <h2>7.8 أدوات عملية (جاهزة للاستخدام) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>7.8.1 الأداة 1 — قائمة تحقق بوابة الجاهزية (48-72 ساعة ويوم الجراحة):</strong><br>
            <strong>بوابة التخطيط (48-72h):</strong> تأكيد الغرسات/الإعارة، تأكيد الأدوات الخاصة مع التعقيم (CSSD)، تأكيد توفر التصوير، الإبلاغ عن احتياجات الأسرة/ICU، تعيين مالك للفجوات التوثيقية. (AORN; IHI)<br>
            <strong>بوابة اليوم النهائي:</strong> مُعرّفان اثنان، تطابق الحجز/الموافقة/الخطة، تحديد الجهة، علامة الموقع جاهزة، فحص معايير التوقف. (The Joint Commission; WHO SSC)</li>
            <br>
            <li><strong>7.8.2 الأداة 2 — نموذج مراجعة الإلغاء الذي يمكن الوقاية منه:</strong><br>
            الحقول: سبب الإلغاء، الفئة، هل يمكن الوقاية منه (نعم/لا)، السبب الجذري، الإجراء التصحيحي، المالك، تاريخ الاستحقاق، إعادة التدقيق. (IHI)</li>
            <br>
            <li><strong>7.8.3 الأداة 3 — بطاقة معايير التوقف (للحائط/الجيب):</strong><br>
            قائمة بالمحفزات غير القابلة للتفاوض وسلسلة التصعيد. (The Joint Commission; AORN)</li>
            <br>
            <li><strong>7.8.4 الأداة 4 — نص الاجتماع السريع (Pre-op Huddle) لـ 10 دقائق:</strong><br>
            الحالات عالية المخاطر، جاهزية الغرسات/الأدوات، تأكيد التصوير، علامات العدوى/خطة المضادات، قيود الأسرة، التأخيرات المتوقعة، التذكير بمعايير التوقف. (IHI; AHRQ)</li>
        </ul>
    </div>

    <h2>7.9 القياس (كيف تعرف أن النظام أصبح جاهزاً) / Measurement</h2>

    <h3>7.9.1 المؤشرات الاستباقية للجاهزية / Leading indicators</h3>
    <ul>
        <li>معدل الإلغاءات التي يمكن الوقاية منها وأهم الأسباب. (IHI)</li>
        <li>النسبة المئوية للحالات التي تجتاز بوابة 48-72 ساعة بدون استثناءات. (IHI)</li>
        <li>معدل تأكيد جاهزية الغرسات. (AORN)</li>
        <li>معدل فقدان التوثيق الحرج (عدم تطابق الموافقة، فقدان الجهة). (The Joint Commission)</li>
        <li>معدل "مفاجآت" يوم الجراحة (نقص معدات يُكتشف بعد وصول المريض). (IHI)</li>
    </ul>

    <h3>7.9.2 "المؤشرات الإنسانية" / Humane indicators</h3>
    <p>تتبع: عدد الإلغاءات <strong>بعد وصول المريض صائماً</strong>، وعدد التأخيرات في نفس اليوم لأكثر من X ساعات لأسباب نظامية. هذه المؤشرات تقيس احترام وقت المريض وثقته. (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>7.9.2 “Humane indicators”</strong><br>
    Track: number of cancellations <strong>after patient arrives fasting</strong>, number of same-day delays &gt; X hours due to system reasons. These indicators measure respect for the patient’s time and trust. (AHRQ; IHI)</span></p>

    <h3>7.9.3 سرعة حلقة التعلم / Learning-loop speed</h3>
    <p>الأيام من الحدث ← الإصلاح ← إعادة التدقيق. (IHI)</p>

    <h2>7.10 "التوقف الذي بدا وقحاً... والضرر الذي منعه"</h2>


    <div class="quote-box">
        <p><strong>7.10.1 اللحظة (The moment):</strong><br>
        كانت الحالة جاهزة للبدء. الغرفة متأخرة. الجراح مُحبط. لاحظت الممرضة أن الموافقة (Consent) تفتقر إلى الجهة (Laterality). كان الحجز يحتوي على الجهة. كان المريض قد خُدّر خفيفاً بالفعل.</p>
        <p>تحدثت الممرضة بصوت عالٍ: <strong>"يجب أن نتوقف. الموافقة تفتقر إلى تحديد الجهة."</strong></p>
        <p>رد الجراح بحدة: "كلنا نعرف أنها الجهة اليمنى."</p>
        <p><span class="english-term"><strong>The moment:</strong> A case was ready to start. The room was late. The surgeon was frustrated. The nurse noticed the consent lacked laterality. The booking had laterality. The patient was already sedated lightly.<br>
        The nurse spoke up: <strong>“We need to stop. Laterality is missing from consent.”</strong><br>
        The surgeon replied sharply: “We all know it’s the right side.”</span></p>
        
        <p><strong>7.10.2 القرار (The decision):</strong><br>
        توقفنا على أي حال. قمنا بالتصعيد. أوضحنا وصححنا التوثيق بشكل صحيح. (The Joint Commission)</p>
        
        <p><strong>7.10.3 الدرس (The lesson):</strong><br>
        في غرفة العمليات، التهذيب (Politeness) ليس هو السلامة. <strong>الوضوح هو السلامة.</strong><br>
        النظام الذي يجعل التحدث بصوت عالٍ يبدو "وقحاً" هو نظام خطير. (AHRQ; IHI)</p>
        <p><span class="english-term"><strong>The lesson:</strong> In the OR, politeness is not safety. <strong>Clarity is safety.</strong> A system that makes speaking up feel “rude” is a dangerous system. (AHRQ; IHI)</span></p>
    </div>

    <h2>7.11 تأملات</h2>

    <h3>7.11.1 غرفة العمليات نهر؛ بوابات الجاهزية هي السدود</h3>
    <p>إذا لم تبنِ السد في أعلى النهر (Upstream)، فإن الفيضان سيصل إلى داخل الغرفة—حيث يكون المريض في أضعف حالاته والفريق تحت أكبر ضغط.</p>
    <p><span class="english-term"><strong>7.11.1 The OR is a river; readiness gates are dams</strong><br>
    If you don’t build the dam upstream, the flood arrives inside the room—where the patient is most vulnerable and the team is most pressured.</span></p>

    <h3>7.11.2 التحسين هو لطف / Optimization is kindness</h3>
    <p>بوابة الجاهزية هي شكل من أشكال اللطف تجاه المريض والموظفين:</p>
    <ul>
        <li>إنها تمنع البدايات الخاطئة،</li>
        <li>وتمنع الإلغاءات المهينة،</li>
        <li>وتمنع الضرر المعنوي الصامت الناتج عن الشعور "كان بإمكاننا منع هذا". (AHRQ)</li>
    </ul>

    <h3>7.11.3 أكثر غرف العمليات أماناً لديك ليست الأسرع / Your safest OR is not the fastest OR</h3>
    <p>غرفة العمليات الأكثر أماناً هي تلك التي تبدأ الحالات الصحيحة، بالطريقة الصحيحة، بالموارد الصحيحة، وتنهي العمل دون ارتجال. <strong>هذه هي الكفاءة الحقيقية.</strong> (IHI)</p>
    <p><span class="english-term"><strong>7.11.3 Your safest OR is not the fastest OR</strong><br>
    Your safest OR is the OR that starts the right cases, in the right way, with the right resources, and finishes without improvisation. <strong>That is true efficiency.</strong> (IHI)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>التحسين ما قبل العملية في غرفة العمليات هو <strong>جاهزية النظام (System readiness)</strong>: الغرسات، الأدوات، التوثيق، التصوير، مكافحة العدوى، وقواعد التصعيد. (IHI; AORN; The Joint Commission)<br>
            <span class="english-term">Pre-op optimization in the OR is <strong>system readiness</strong>: implants, instruments, documentation, imaging, IPC, and escalation rules.</span></li>
            
            <li>يجب أن تكون بوابات الجاهزية <strong>متعددة الطبقات</strong> (48-72 ساعة، اليوم السابق، يوم الجراحة) لمنع مفاجآت اللحظة الأخيرة. (IHI)<br>
            <span class="english-term">Readiness gates must be layered (48–72h, day-before, day-of) to prevent last-minute surprises.</span></li>
            
            <li>الإلغاءات التي يمكن الوقاية منها هي <strong>إشارات سلامة</strong>—قم بمراجعتها كالحوادث الوشيكة. (IHI)<br>
            <span class="english-term">Preventable cancellations are safety signals—review them like near-misses.</span></li>
            
            <li><strong>معايير التوقف (Stop criteria)</strong> تحمي المرضى وتحمي الفرق من الزخم والضغط. (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Stop criteria protect patients and protect teams from momentum and pressure.</span></li>
            
            <li>يجب أن يكون التواصل حلقياً ومغلقاً؛ <strong>"نعتقد أنه مؤكد" ليس تأكيداً.</strong> (AHRQ; IHI)<br>
            <span class="english-term">Communication must be looped and closed; <strong>“we think it’s confirmed” is not confirmation.</strong></span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Reliability Resources (readiness, flow, reliability, learning systems).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety Resources (communication, transitions, safety culture, learning systems).</li>
            <li>The Joint Commission. National Patient Safety Goals (Hospital Program).</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79: Steam Sterilization and Sterility Assurance in Health Care Facilities.</li>
            <li>National Pressure Injury Advisory Panel (NPIAP) / European Pressure Ulcer Advisory Panel (EPUAP). Pressure Injury Prevention Guidance.</li>
            <li>National Institute for Health and Care Excellence (NICE). Guidance areas relevant to VTE prevention and perioperative hypothermia.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  17: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 17 — Positioning Safety and Nerve/Pressure Protection</h1>
    <div class="subtitle">الفصل السابع عشر — سلامة الوضعيات وحماية الأعصاب/الضغط<br>
    <span style="font-size: 18px;">(Positioning Plans • Pressure Points • Eye Protection • Documentation Standards)<br>
    (خطط الوضعيات • نقاط الضغط • حماية العين • معايير التوثيق)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>بناء <strong>خطة وضعية (Positioning plan)</strong> صريحة، يمتلكها دور محدد، ومبنية على المخاطر (وليس "نحن دائماً نفعلها بهذه الطريقة"). (AORN; ASA Practice Advisory concepts; NPIAP/EPUAP)<br>
            <span class="english-term">Build a <strong>positioning plan</strong> that is explicit, role-owned, and risk-based (not “we always do it this way”). (AORN; ASA Practice Advisory concepts; NPIAP/EPUAP)</span></li>
            
            <li>تحديد آليات <strong>إصابات الأعصاب وإصابات الضغط</strong> عالية الخطورة وتطبيق حمايات عملية للوضعيات الشائعة (الاستلقاء الظهري، الانبطاح، الجانبي، بضع الحصاة، الجلوس). (AORN; NPIAP/EPUAP; APSF concepts)<br>
            <span class="english-term">Identify high-risk <strong>nerve injury</strong> and <strong>pressure injury</strong> mechanisms and apply practical protections for common positions (supine, prone, lateral, lithotomy, sitting). (AORN; NPIAP/EPUAP; APSF concepts)</span></li>
            
            <li>تنفيذ <strong>حماية موثوقة للعين (Eye protection)</strong> ومنع إصابات العين المحيطة بالجراحة (خدش القرنية، الإصابات المرتبطة بالضغط، الوعي بخطر فقدان البصر) بخطوات "لا مساومة فيها". (ASA Practice Advisory; APSF concepts)<br>
            <span class="english-term">Implement reliable <strong>eye protection</strong> and prevent perioperative ocular injuries (corneal abrasion, pressure-related injury, vision loss risk awareness) with “do-not-compromise” steps. (ASA Practice Advisory; APSF concepts)</span></li>
            
            <li>تشغيل إجراءات <strong>إعادة الفحص في الحالات الطويلة (Long-case recheck routines)</strong> التي تمنع مشاكل الوضعية "المؤقتة" من التحول إلى ضرر دائم. (NPIAP/EPUAP; AORN)<br>
            <span class="english-term">Run long-case <strong>recheck routines</strong> that prevent “temporary” positioning problems from becoming permanent harm. (NPIAP/EPUAP; AORN)</span></li>
            
            <li>إنتاج <strong>معايير توثيق جاهزة للتدقيق (Audit-ready documentation standards)</strong>: الوضعية المخطط لها، الأجهزة المستخدمة، فحوصات الضغط، طريقة حماية العين، وأي تغييرات داخل العملية. (AORN; AHRQ)<br>
            <span class="english-term">Produce audit-ready <strong>documentation standards</strong>: planned position, devices used, pressure checks, eye protection method, and any intraoperative changes. (AORN; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "سارت الجراحة بشكل جيد... حتى رفع المريض الغطاء"</strong><br>
        <span class="english-term">A true-to-life case: “The surgery went well… until the patient lifted the sheet” (Real Scientific Story)</span>
    </div>

    <p>هناك نوع خاص من الضرر يبدو غير عادل للمرضى: تنجح الجراحة، وتكون نتيجة علم الأمراض جيدة، ويكون الشق الجراحي نظيفاً—ومع ذلك يستيقظ المريض بمشكلة جديدة لم يحذره أحد منها.</p>
    <p><span class="english-term">There is a particular kind of harm that feels unfair to patients: the surgery is successful, the pathology is good, the incision is clean—and yet the patient wakes up with a new problem that nobody warned them about.</span></p>

    <p>أتذكر مريضاً خضع لعملية طويلة. كان في وضعية الانبطاح (Prone). كان التركيز منحصراً على العمود الفقري. استمرت الحالة لمدة ست ساعات. خلال ذلك الوقت، تم تحريك السرير، ومالت الوسادات، واستند وجه المريض على حافة صلبة. لم يرَ أحد ذلك لأن الوجه كان مغطى بالفرش الجراحي (Draped).</p>
    <p><span class="english-term">I remember a patient who had a long operation. They were in the prone position. The focus was entirely on the spine. The case lasted six hours. During that time, the bed was shifted, pads tilted, and the patient's face came to rest against a hard edge. Nobody saw it because the face was draped.</span></p>

    <div class="alert-box">
        <p>عندما استيقظ المريض، كان يعاني من خدر في ذراعه (إصابة في الضفيرة العضدية/Brachial plexus) وإصابة ضغط شديدة على وجهه. لم يخطئ الجراح. لكن <strong>نظام غرفة العمليات فشل</strong>.</p>
        <p><span class="english-term">When the patient woke up, they had numbness in their arm (a brachial plexus injury) and a severe pressure injury on their face. The surgeon did not make a mistake. But the <strong>OR system failed</strong>.</span></p>
    </div>

    <p>لقد وضعنا المريض، لكننا لم نقم بـ <strong>حماية الوضعية</strong>. الوضعية ليست حدثاً يُقام لمرة واحدة في بداية الجراحة؛ إنها التزام مستمر طوال الإجراء بأكمله.</p>
    <p><span class="english-term">We positioned the patient, but we did not <strong>protect the position</strong>. Positioning is not a one-time event at the start of surgery; it is an ongoing commitment throughout the entire procedure.</span></p>

    <div class="success-box">
        <p>الدرس القاسي الذي نتعلمه هو أن التخدير يزيل الألم، لكنه <strong>لا يزيل الضرر</strong>. عندما يفقد المريض قدرته على تغيير وضعيته لتخفيف الألم، يجب أن يصبح فريق غرفة العمليات هو نظام الاستشعار الخاص به. (AORN; NPIAP/EPUAP)</p>
        <p><span class="english-term">The hard lesson we learn is that anesthesia removes pain, but it <strong>does not remove damage</strong>. When the patient loses their ability to shift to relieve pain, the OR team must become their sensory system. (AORN; NPIAP/EPUAP)</span></p>
    </div>

    <h2>17.1 تشريح ضرر الوضعية (الأعصاب، الجلد، والعيون)</h2>
    <h3>17.1 The Anatomy of Positioning Harm (Nerves, Skin, Eyes)</h3>

    <h3>17.1.1 إصابات الأعصاب المحيطية / Peripheral nerve injuries</h3>
    <p>تحدث هذه الإصابات بسبب التمدد (Stretch) أو الانضغاط (Compression). تحت التخدير أو الإحصار العصبي العضلي، يتجاوز التمدد الحدود الفسيولوجية. أكثر الأعصاب تعرضاً للخطر:</p>
    <p><span class="english-term"><strong>17.1.1 Peripheral nerve injuries</strong><br>These happen due to stretch or compression. Under anesthesia or neuromuscular blockade, stretch exceeds physiologic limits. The most vulnerable nerves:</span></p>
    <ul>
        <li><strong>الضفيرة العضدية (Brachial plexus):</strong> تتضرر من إبعاد الذراع لأكثر من 90 درجة، أو إمالة الرأس للجانب، أو تدلي الذراع عن اللوح.</li>
        <li><strong>العصب الزندي (Ulnar nerve):</strong> يتضرر من انضغاط الكوع ضد سطح صلب (أو ثني الكوع بشدة).</li>
        <li><strong>العصب الشظوي المشترك (Common peroneal nerve):</strong> ينضغط ضد دعامات وضعية بضع الحصاة (Lithotomy) عند الجزء الخارجي من الركبة. (AORN)</li>
    </ul>

    <h3>17.1.2 إصابات الضغط والقص / Pressure and shear injuries</h3>
    <p>تتطور قرح الضغط عندما يتجاوز الضغط الخارجي ضغط الشعيرات الدموية، مما يؤدي إلى نقص التروية (Ischemia). يضاعف القص (Shear)—الذي يحدث عندما ينزلق الجلد بينما تبقى الأنسجة العميقة ثابتة (مثل إمالة السرير)—من هذا الضرر. <strong>البروزات العظمية</strong> (الكعبان، العجز، مؤخرة الرأس) هي نقطة الصفر. (NPIAP/EPUAP)</p>
    <p><span class="english-term"><strong>17.1.2 Pressure and shear injuries</strong><br>Pressure ulcers develop when external pressure exceeds capillary pressure, causing ischemia. Shear—when skin slides but deep tissue stays still (like tilting the bed)—multiplies this damage. <strong>Bony prominences</strong> (heels, sacrum, occiput) are ground zero. (NPIAP/EPUAP)</span></p>

    <h3>17.1.3 إصابات العين (من الخدوش إلى فقدان البصر) / Eye injuries</h3>
    <p>خدوش القرنية (Corneal abrasions) هي الإصابة الأكثر شيوعاً، وتحدث بسبب جفاف العين المفتوحة أو المسح المباشر (مثل الفرش أو الأنابيب). الخطر الأكبر هو <strong>الاعتلال العصبي البصري الإقفاري (Ischemic optic neuropathy) أو انسداد الشريان المركزي للشبكية</strong> الناتج عن الضغط المباشر على مقلة العين، خاصة في وضعية الانبطاح (Prone). (ASA Practice Advisory; APSF concepts)</p>

    <h2>17.2 خطة الوضعية (من يمتلكها؟)</h2>
    <h3>17.2 The Positioning Plan (Who owns it?)</h3>

    <h3>17.2.1 التخطيط الاستباقي مقابل "الارتجال وقتها"</h3>
    <p>الوضعية الآمنة لا تحدث بالصدفة. يجب التخطيط لها <strong>قبل</strong> دخول المريض إلى الغرفة. يعتمد التخطيط على: نوع الإجراء، مدة الجراحة، حالة المريض (BMI، الهشاشة، مشاكل المفاصل السابقة)، والمعدات المطلوبة. (AORN)</p>
    <p><span class="english-term"><strong>17.2.1 Proactive planning vs "winging it"</strong><br>Safe positioning does not happen by accident. It must be planned <strong>before</strong> the patient enters the room. Planning depends on: procedure type, duration, patient condition (BMI, frailty, prior joint issues), and required equipment. (AORN)</span></p>

    <h3>17.2.2 الملكية والتواصل (Ownership and communication)</h3>
    <p>الوضعية مسؤولية مشتركة، لكن التنسيق يجب أن يكون دقيقاً:</p>
    <ul>
        <li><strong>الجراح:</strong> يحدد الوضعية الجراحية المطلوبة للوصول الأمثل.</li>
        <li><strong>ممارس التخدير:</strong> يدير مجرى الهواء، خطوط الوريد، وحماية الرأس/العنق/العين.</li>
        <li><strong>التمريض (الممرضة الدوارة):</strong> ينسق توفر دعامات الضغط (Pads/Positioners)، ويحمي مناطق الاحتكاك، ويوثق الخطة. (AORN)</li>
    </ul>

    <h2>17.3 الوضعيات عالية الخطورة وحماياتها المحددة</h2>
    <h3>17.3 High-Risk Positions and Specific Protections</h3>

    <div class="concept-box">
        <h3>17.3.1 الاستلقاء الظهري (Supine)</h3>
        <p><strong>المخاطر:</strong> انضغاط العصب الزندي، قرح الكعبين، ثعلبة الضغط (ضغط مؤخرة الرأس).<br>
        <strong>الحماية:</strong> إبعاد الذراع &lt; 90 درجة، الذراعان مبطنتان، الكف متجه للأعلى (Supinated). <strong>الكعبان "عائمان" (Floated)</strong> باستخدام وسادات تحت الساقين (ليس تحت وتر أخيل). (AORN; NPIAP/EPUAP)</p>
        <p><span class="english-term"><strong>17.3.1 Supine</strong><br><strong>Risks:</strong> Ulnar nerve compression, heel ulcers, pressure alopecia.<br><strong>Protection:</strong> Arm abduction &lt; 90 degrees, arms padded, palms supinated. <strong>Heels "floated"</strong> using pillows under calves (not under Achilles).</span></p>

        <hr>

        <h3>17.3.2 الانبطاح (Prone)</h3>
        <p><strong>المخاطر:</strong> ضغط العين (يؤدي للعمى)، انضغاط مجرى الهواء، ضغط الصدر/الثدي/الأعضاء التناسلية، انضغاط البطن (يزيد النزيف الوريدي).<br>
        <strong>الحماية:</strong> التحقق الصارم من العين (مفتوحة وخالية من الضغط). دعامات الصدر/الحوض مع بقاء البطن حراً. فحص متكرر للوجه والرقبة. (ASA; AORN)</p>
        <p><span class="english-term"><strong>17.3.2 Prone</strong><br><strong>Risks:</strong> Eye pressure (causing blindness), airway compression, chest/breast/genital pressure, abdominal compression (increases venous bleeding).<br><strong>Protection:</strong> Strict eye check (free of pressure). Chest/pelvic bolsters with abdomen hanging free. Frequent face/neck checks.</span></p>

        <hr>

        <h3>17.3.3 الجانبي (Lateral)</h3>
        <p><strong>المخاطر:</strong> انضغاط العصب الشظوي (الساق السفلية)، ضغط الأذن/العين، تمدد الضفيرة العضدية.<br>
        <strong>الحماية:</strong> بكرة إبطية (Axillary roll) أسفل الإبط لتخفيف الضغط، وسادة بين الساقين، حماية الأذن السفلى. (AORN)</p>

        <hr>

        <h3>17.3.4 بضع الحصاة (Lithotomy)</h3>
        <p><strong>المخاطر:</strong> إصابة العصب الشظوي المشترك (رِكاب الساق)، العصب الفخذي، خطر متلازمة الحيز (Compartment syndrome) في الحالات الطويلة.<br>
        <strong>الحماية:</strong> رفع الساقين وإنزالهما <strong>معاً وببطء</strong>. استخدام دعامات ساق مبطنة جيداً. تجنب الضغط المباشر على الجزء الخارجي من الركبة. (AORN)</p>
    </div>

    <h2>17.4 حماية العين: منطقة "عدم التسامح المطلق"</h2>
    <h3>17.4 Eye Protection: The Zero-Tolerance Zone</h3>

    <h3>17.4.1 لماذا العين ضعيفة جداً؟</h3>
    <p>تحت التخدير العام، تفقد العين منعكس الرمش (Blink reflex)، ويتوقف إنتاج الدموع تقريباً. العين المفتوحة تصبح جافة ومعرضة للخدش بأي شيء يلامسها (فرش، أنابيب، أيدي). (ASA Practice Advisory)</p>
    <p><span class="english-term"><strong>17.4.1 Why is the eye so vulnerable?</strong><br>Under general anesthesia, the blink reflex is lost, and tear production nearly stops. An open eye becomes dry and susceptible to abrasion by anything touching it (drapes, tubes, hands). (ASA Practice Advisory)</span></p>

    <h3>17.4.2 قاعدة الشريط (Taping Rule)</h3>
    <p>يجب إغلاق العينين برفق باستخدام شريط لاصق طبي (أو غطاء شفاف مخصص) <strong>فور فقدان الوعي</strong>. لا تنتظر. لا تضع الشريط بقوة تؤدي إلى فتح العين عند إزالته. (APSF concepts)</p>
    <p><span class="english-term"><strong>17.4.2 The Taping Rule</strong><br>Eyes must be gently taped closed (or covered with an approved transparent dressing) <strong>immediately after induction</strong>. Do not wait. Do not apply tape so aggressively that removing it damages skin. (APSF concepts)</span></p>

    <div class="alert-box">
        <h3>17.4.3 كابوس وضعية الانبطاح (Prone Nightmare)</h3>
        <p>الضغط المباشر على مقلة العين في وضعية الانبطاح هو حالة طوارئ يمكن أن تسبب العمى. يجب فحص الوجه بمرآة أو بالنظر المباشر للتأكد من خلو العين والأنف من أي ضغط بعد الوضعية، <strong>وبعد أي تعديل للسرير</strong>. (ASA Practice Advisory)</p>
        <p><span class="english-term"><strong>17.4.3 The Prone Nightmare</strong><br>Direct pressure on the globe in the prone position is an emergency that can cause blindness. The face must be checked with a mirror or direct line of sight to ensure eyes and nose are completely free of pressure after positioning, <strong>and after any bed adjustment</strong>. (ASA Practice Advisory)</span></p>
    </div>

    <h2>17.5 روتين إعادة الفحص للحالات الطويلة (Long-Case Recheck Routine)</h2>
    <h3>17.5 The Long-Case Recheck Routine</h3>

    <h3>17.5.1 الوقت هو العدو / Time is the enemy</h3>
    <p>الوضعية التي تكون آمنة لمدة ساعة يمكن أن تسبب نقص تروية (Ischemia) بعد 4 ساعات. بالإضافة إلى ذلك، الأجساد تتحرك، الفرش ينزلق، والدعامات تتزحزح. (NPIAP/EPUAP)</p>
    <p><span class="english-term"><strong>17.5.1 Time is the enemy</strong><br>A position that is safe for 1 hour can cause ischemia after 4 hours. Additionally, bodies shift, drapes slide, and bolsters move. (NPIAP/EPUAP)</span></p>

    <h3>17.5.2 "توقف الوضعية" المُجدول / The scheduled "Positioning Pause"</h3>
    <p>في الحالات التي تتجاوز مدة معينة (مثلاً: ساعتين أو 3 ساعات)، يجب دمج <strong>إعادة الفحص اللفظي</strong> في سير العمل.</p>
    <ul>
        <li>تسأل الممرضة: "مضت ساعتان، هل يمكننا إجراء فحص للوضعية والضغط؟"</li>
        <li>يؤكد التخدير: مجرى الهواء والعيون آمنة.</li>
        <li>يؤكد الجراح/الممرضة: الأطراف والدعامات لم تتزحزح. (IHI; AORN)</li>
    </ul>
    <p><span class="english-term">In cases exceeding a specific duration (e.g., 2 or 3 hours), a <strong>verbal recheck</strong> must be integrated. The nurse asks: "Two hours in, can we do a position and pressure check?" (IHI; AORN)</span></p>

    <h2>17.6 معايير التوثيق (جاهزة للتدقيق)</h2>
    <h3>17.6 Documentation Standards (Audit-Ready)</h3>

    <h3>17.6.1 التوثيق الذي يروي القصة حقاً</h3>
    <p>إذا حدثت إصابة بعد الجراحة، فإن التوثيق العام ("وُضع المريض في وضعية الاستلقاء") لن يحمي الفريق أو يفسر ما حدث. التوثيق الموثوق يحتاج إلى تحديد. (AHRQ; AORN)</p>
    <p><span class="english-term"><strong>17.6.1 Documentation that actually tells the story</strong><br>If an injury occurs post-op, generic documentation ("Patient placed supine") will neither protect the team nor explain what happened. Reliable documentation needs specificity. (AHRQ; AORN)</span></p>

    <h3>17.6.2 الحد الأدنى من بيانات التوثيق / Minimum documentation dataset</h3>
    <div class="success-box">
        <ul>
            <li><strong>الوضعية الدقيقة:</strong> (مثال: "انبطاح، الذراعان ممددتان للأمام &lt; 90 درجة").</li>
            <li><strong>الأجهزة والدعامات:</strong> (مثال: "تم استخدام وسادات الرأس الخاصة بالانبطاح، الكعبان عائمان باستخدام وسادات جل").</li>
            <li><strong>حماية العين:</strong> ("أُغلقت العينان بشريط لاصق طبي، تم التحقق من خلوها من الضغط بمرآة").</li>
            <li><strong>التقييمات المتكررة:</strong> ("تم إعادة فحص الوضعية في الساعة 11:00 والساعة 13:00").</li>
            <li><strong>الأشخاص:</strong> من شارك في اتخاذ الوضعية (الجراح، التخدير، التمريض). (AORN)</li>
        </ul>
    </div>

    <h2>17.7 أدوات عملية لموثوقية الوضعيات</h2>
    <h3>17.7 Practical Tools for Positioning Reliability</h3>

    <div class="concept-box">
        <ul>
            <li><strong>17.7.1 الأداة 1 — قائمة تحقق الوضعيات عالية الخطورة (Pre-positioning Huddle):</strong><br>
            قبل البدء، يسأل الفريق: "هل هناك مشاكل مفاصل سابقة؟ أين نقاط الضغط اليوم؟ هل لدينا الدعامات اللازمة؟" (AORN)</li>
            <br>
            <li><strong>17.7.2 الأداة 2 — مرآة الانبطاح (Prone Mirror Check):</strong><br>
            مرآة تفتيش تُستخدم لفحص الوجه من الأسفل في وضعية الانبطاح بانتظام. (ASA Practice Advisory)</li>
            <br>
            <li><strong>17.7.3 الأداة 3 — نموذج توثيق الوضعيات الموحد:</strong><br>
            نموذج إلكتروني أو ورقي يجبر على تحديد الحشوات/الدعامات المستخدمة لكل جزء من الجسم، مع حقل مخصص لـ "إعادة الفحص داخل العملية". (AHRQ; AORN)</li>
        </ul>
    </div>

    <h2>17.8 القياس (كيف تعرف أن نظامك يعمل)</h2>
    <h3>17.8 Measurement (How You Know Your System Works)</h3>

    <h3>17.8.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>نسبة الامتثال لتوثيق حماية العين (100% يجب أن يكون الهدف). (ASA concepts)</li>
        <li>نسبة الحالات الطويلة (&gt;3 ساعات) التي تحتوي على توثيق صريح لإعادة فحص الوضعية. (IHI)</li>
        <li>توافر أجهزة تخفيف الضغط المناسبة في الغرف.</li>
    </ul>

    <h3>17.8.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>معدلات إصابات الضغط المكتسبة في المستشفى (المتعلقة بغرفة العمليات). (NPIAP/EPUAP)</li>
        <li>التقارير عن الخدر أو الألم العصبي بعد الجراحة. (APSF concepts)</li>
        <li>تقارير خدوش القرنية أو تهيج العين.</li>
    </ul>

    <h2>17.9 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>17.9 The Writer's Reflection</h3>

    <h3>17.9.1 الجسد لا يغفر للاستعجال</h3>
    <p>عندما نتأخر، يكون إغراء وضع المريض على الطاولة بسرعة هائلاً. لكن الأنسجة والأعصاب لا تهتم بجدولك الزمني. الاستعجال في ضبط الوضعية هو شراء 10 دقائق مقابل ضرر قد يستمر مدى الحياة للمريض.</p>
    <p><span class="english-term"><strong>17.9.1 The body does not forgive rushing</strong><br>When we are late, the temptation to throw the patient on the table quickly is immense. But tissues and nerves do not care about your schedule. Rushing positioning is buying 10 minutes at the cost of a lifetime of harm.</span></p>

    <h3>17.9.2 قاعدتي الذهبية للوضعيات / My Golden Rule</h3>
    <p>إذا لم يكن بالإمكان الدفاع عن الوضعية في التوثيق وعمليات إعادة الفحص، فهي ليست آمنة بما فيه الكفاية. (AORN; AHRQ)</p>
    <p><span class="english-term"><strong>17.9.2 My Golden Rule</strong><br>If a position cannot be defended in documentation and rechecks, it is not safe enough. (AORN; AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>سلامة الوضعية هي نظام حواجز مُخطط يمتلكه الفريق: خطط ← احمِ النقاط ← احمِ العيون ← أعد الفحص ← وثّق. (AORN; NPIAP/EPUAP)<br>
            <span class="english-term">Positioning safety is a planned, team-owned barrier system: plan → protect points → protect eyes → recheck → document.</span></li>
            
            <li>تتطلب الحالات الطويلة فحوصات إعادة مجدولة؛ "سنتذكر ذلك" ليست طريقة للسلامة. (IHI)<br>
            <span class="english-term">Long cases require scheduled rechecks; “we’ll remember” is not a safety method.</span></li>
            
            <li>حماية العين، خاصة في وضعية الانبطاح/الجانبي، تحتاج إلى تحقق متكرر بعد أي حركة للسرير. (ASA Practice Advisory concepts)<br>
            <span class="english-term">Eye protection, especially in prone/lateral, needs repeated verification after movement.</span></li>
            
            <li>يجب أن يكون التوثيق محدداً وجاهزاً للتدقيق لدعم التعلم والمساءلة. (AHRQ)<br>
            <span class="english-term">Documentation must be specific and audit-ready to support learning and accountability.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (patient positioning, pressure injury prevention concepts, perioperative documentation).</li>
            <li>National Pressure Injury Advisory Panel (NPIAP) / European Pressure Ulcer Advisory Panel (EPUAP). Pressure injury prevention guidance (pressure, shear, tissue tolerance, preventive practices).</li>
            <li>American Society of Anesthesiologists (ASA). Practice Advisory / guidance concepts on perioperative visual loss and ocular protection (eye protection and risk awareness).</li>
            <li>Anesthesia Patient Safety Foundation (APSF). Patient safety resources and perioperative risk concepts (position-related risk awareness; eye/pressure/nerve injury safety themes).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, speaking up, documentation for learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, timed rechecks, audit scoring, learning loops).</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist resources (team communication and intraoperative confirmation culture supporting positioning plans).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  27: `<!-- Download Button -->
    

    <div class="part-title">PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs</div>
    <div class="part-title">الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة</div>
    
    <h1>CHAPTER 27 — Staffing Models and Competency in the Theatre</h1>
    <div class="subtitle">الفصل السابع والعشرون — نماذج التوظيف والكفاءة في المسرح الجراحي<br>
    <span style="font-size: 18px;">(Skill Mix • Staffing to Acuity • Orientation • Credentialing Logic)<br>
    (مزيج المهارات • التوظيف حسب حدة الحالة • التوجيه • منطق الاعتماد)</span></div>

    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا لا تعتبر هيكلة الموظفين في غرفة العمليات مجرد "حصر أعداد"، بل هي <strong>نظام للتحكم في المخاطر (Risk-control system)</strong> يحدد جودة حواجز السلامة. (AHRQ; IHI)<br>
            <span class="english-term">Explain why staffing in the OR is not a “headcount,” but a <strong>risk-control system</strong> that determines the quality of safety barriers. (AHRQ; IHI)</span></li>
            
            <li>تحديد <strong>"مزيج المهارات" (Skill mix)</strong> الفعال لضمان تغطية العقامة، والعد الجراحي، وجاهزية المعدات، وليس فقط سد الشواغر الوظيفية. (AORN; AHRQ)<br>
            <span class="english-term">Define an effective <strong>Skill mix</strong> to ensure coverage for sterility, counts, and equipment readiness, not just filling roles. (AORN; AHRQ)</span></li>
            
            <li>تطبيق مفاهيم <strong>"التوظيف حسب حدة الحالة" (Staffing to Acuity)</strong> واستخدام سلم الحدة لمطابقة كفاءة الفريق مع تعقيد الحالة، متجاوزاً فكرة "النسب الثابتة". (IHI; AHRQ)<br>
            <span class="english-term">Apply <strong>“Staffing to Acuity”</strong> concepts and use an acuity ladder to match team competence with case complexity, moving beyond "flat ratios". (IHI; AHRQ)</span></li>
            
            <li>تصميم برامج <strong>توجيه (Orientation)</strong> مرحلية تحمي المرضى من أن يصبحوا "أدوات للتدريب"، وتدعم الموظفين الجدد بحماية فعلية. (AHRQ; AORN)<br>
            <span class="english-term">Design staged <strong>Orientation</strong> programs that protect patients from becoming "training tools," and support new staff with real shielding. (AHRQ; AORN)</span></li>
            
            <li>إدارة <strong>منطق الاعتماد ومنح الامتيازات (Credentialing Logic)</strong> بوضوح لتحديد من يمكنه فعل ماذا، وتحت أي إشراف، وتحديث ذلك لمنع الانحراف. (AHRQ; IHI)<br>
            <span class="english-term">Manage <strong>Credentialing Logic</strong> clearly to define who can do what, under what supervision, and update it to prevent drift. (AHRQ; IHI)</span></li>
        </ol>
    </div>
    
    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "المناوبة التي كانت كافية عدداً، وهشة كفاءةً"</strong><br>
        <span class="english-term">A true-to-life case: “The shift that was adequate in numbers, but fragile in competence” (Real Scientific Story)</span>
    </div>

    <p>هناك لحظة لا أزال أتذكرها منذ سنوات—ليس لأنها كانت مضاعفة نادرة، بل لأنها كشفت عن شيء أعمق من المهارة السريرية.</p>
    <p><span class="english-term">There is a moment I still remember from years ago—not because it was a rare complication, but because it exposed something deeper than clinical skill.</span></p>

    <p>كانت حالة طويلة وأصبحت أطول. كانت القائمة متأخرة بالفعل. تم سحب ممرضة معقمة خبيرة (Senior scrub nurse) لإنقاذ غرفة أخرى، وبقي موظف تم تدويره حديثاً في المسرح الجراحي مع فريق لم يسبق له العمل معاً أبداً. كان الجميع "مؤهلين على الورق". كان المريض مستقراً. وكان الجراح خبيراً. ومع ذلك، شعرت بأن الغرفة... هشة (Thin).</p>
    <p><span class="english-term">It was a long case that became longer. The list was already behind. A senior scrub nurse was pulled to rescue another room, and a newly rotated staff member remained in the theatre with a team that had never worked together. Everyone was “qualified on paper.” The patient was stable. The surgeon was experienced. Yet the room felt… thin.</span></p>

    <div class="alert-box">
        <p>كان بإمكانك الشعور بذلك في تفاصيل صغيرة: طُلبت الأدوات مرتين، أصبح التواصل قصيراً وحاداً، تحركت الممرضة الدوارة أسرع من الخطة، وشعرت المهلة (Time-out) بأنها إجراء شكلي. ثم ظهر تباين في العد الجراحي—لم يكن كارثياً، لكنه كان كافياً لتجميد الغرفة. استغرق الحل وقتاً، وارتفع توتر الجراح، وتشتت انتباه الفريق.</p>
        <p><span class="english-term">You could feel it in small things: instruments were requested twice, communication became short, the circulating nurse moved faster than the plan, and the time-out felt more like a formality. Then a count discrepancy appeared—nothing catastrophic, but enough to freeze the room. The resolution took time, the surgeon’s stress rose, and the team’s attention split.</span></p>
    </div>

    <p>لاحقاً، عندما قمنا باستخلاص المعلومات (Debrief)، لم يكن السبب "ممرضة غير مبالية". ولم يكن "جراحاً صعباً". كان السبب هو هندسة التوظيف (Staffing architecture). <strong>لقد بنينا مناوبة بدت كافية من حيث العدد، لكنها كانت هشة من حيث توزيع الكفاءة واستمرارية الفريق.</strong> (AHRQ; IHI)</p>
    <p><span class="english-term">Later, when we debriefed, the cause wasn’t “a careless nurse.” It wasn’t “a difficult surgeon.” It was staffing architecture. <strong>We had built a shift that looked adequate in numbers but was fragile in competence distribution and team continuity.</strong> (AHRQ; IHI)</span></p>

    <div class="success-box">
        <p>شكل ذلك اليوم أحد أهم الاستنتاجات في ممارستي: <strong>في غرفة العمليات، التوظيف ليس حصر أعداد (Headcount). التوظيف هو نظام للتحكم في المخاطر.</strong> عندما يُصمم التوظيف بشكل جيد، تكون حواجز السلامة قوية حتى في الأيام الصعبة. وعندما يُصمم بشكل سيء، فإنك تجبر أفراداً جيدين على ارتكاب أخطاء على مستوى النظام. (AHRQ)</p>
        <p><span class="english-term">That day shaped one of the most important conclusions of my practice: <strong>In the OR, staffing is not a headcount. Staffing is a risk-control system.</strong> When staffing is designed well, safety barriers are strong even on hard days. When designed poorly, you force good individuals into system-level mistakes. (AHRQ)</span></p>
    </div>

    <h2>27.1 وهم "حصر الأعداد" / The Illusion of the “Headcount”</h2>

    <h3>27.1.1 "الممرضة ليست مجرد ممرضة" / A nurse is not just a nurse</h3>
    <p>في الأجنحة العامة، غالباً ما تقود نسب الموظفين إلى المرضى (Staff-to-patient ratios) عملية التخطيط. في غرفة العمليات، الكفاءة محددة جداً (Hyper-specific). الممرضة الدوارة الممتازة في جراحة العظام قد تكون خطراً للسلامة في جراحة القلب المفتوح إذا لم تكن موجهة (Oriented). مجرد وضع "جسمين في الغرفة" للوفاء بحصة التوظيف هو ممارسة تخلق مخاطر سريرية. (AORN; IHI)</p>
    <p><span class="english-term"><strong>27.1.1 A nurse is not just a nurse</strong><br>In general wards, staff-to-patient ratios often drive planning. In the OR, competence is hyper-specific. An excellent orthopedic circulating nurse might be a safety risk in open-heart surgery if they are not oriented. Just putting “two bodies in a room” to meet a quota creates clinical risk. (AORN; IHI)</span></p>

    <h3>27.1.2 الإرهاق والعبء المعرفي / Fatigue and cognitive load</h3>
    <p>التوظيف لا يتعلق فقط بالمهارة؛ إنه يتعلق بالطاقة. الممرضة الدوارة التي تعمل للساعة العاشرة متتالية ليس لديها نفس قدرة التدقيق في الـ Time-out كالتي كانت تمتلكها في الساعة 8 صباحاً. <strong>تخصيص الموظفين يجب أن يأخذ الإرهاق (Fatigue) في الاعتبار، وليس فقط توفر الساعات.</strong> (AHRQ)</p>
    <p><span class="english-term"><strong>27.1.2 Fatigue and cognitive load</strong><br>Staffing is not just about skill; it is about energy. A circulating nurse in their 10th consecutive hour does not have the same Time-out auditing capability they had at 8 a.m. <strong>Staff allocation must budget for fatigue, not just available hours.</strong> (AHRQ)</span></p>

    <h2>27.2 مزيج المهارات: أبعد من المسميات الوظيفية / Skill Mix: Beyond Job Titles</h2>

    <h3>27.2.1 مفهوم "المرساة" / The “Anchor” concept</h3>
    <p>يجب أن تحتوي كل غرفة عمليات على <strong>مرساة (Anchor)</strong> واحدة على الأقل—شخص ذو خبرة عالية في ذلك الإجراء المحدد، يمكنه توقع المخاطر، ولديه السلطة النفسية لـ "إيقاف الخط" (Stop the line). إذا كانت الممرضة الدوارة والممرضة المعقمة مبتدئتين أو يعملان كعمالة مؤقتة (Agency staff)، فإن الغرفة تفتقر إلى مرساة، وسرعان ما سينهار الوعي الظرفي. (IHI)</p>
    <p><span class="english-term"><strong>27.2.1 The “Anchor” concept</strong><br>Every OR room must have at least one <strong>anchor</strong>—a person highly experienced in that specific procedure, who anticipates risks, and has the psychological authority to “stop the line.” If both the circulator and scrub are junior or agency staff, the room lacks an anchor, and situational awareness quickly decays. (IHI)</span></p>

    <h3>27.2.2 منطق الإقران (Pairing logic)</h3>
    <p>الجدولة الجيدة تقرن الضعف بالقوة:</p>
    <ul>
        <li>ممرضة معقمة جديدة + ممرضة دوارة خبيرة.</li>
        <li>جراح جديد في المستشفى + فريق تمريض ذو خبرة عالية (لمساعدته على تعلم البروتوكولات المحلية).</li>
        <li>لا تقم أبداً بجدولة ثلاثة أشخاص جُدد (جراح جديد، تخدير جديد، ممرضة دوارة جديدة) في نفس الغرفة، حتى لو كانت ألقابهم الوظيفية تتطابق مع السياسة. (AHRQ; AORN)</li>
    </ul>
    <p><span class="english-term"><strong>27.2.2 Pairing logic</strong><br>Good scheduling pairs vulnerability with strength: New scrub + expert circulator. New surgeon to the hospital + highly experienced nursing team. Never schedule three new people (new surgeon, new anesthesia, new circulator) in the same room, even if their job titles fit the policy. (AHRQ; AORN)</span></p>

    <h2>27.3 التوظيف حسب حدة الحالة (المناوبة المطابقة للمخاطر)</h2>
    <h3>27.3 Staffing to Acuity (The Risk-Matched Shift)</h3>

    <h3>27.3.1 تفشل النسب الثابتة تحت الضغط / Flat ratios fail under pressure</h3>
    <p>سياسة التوظيف النموذجية هي "1 ممرضة معقمة + 1 ممرضة دوارة لكل غرفة." تعمل هذه النسبة لاستئصال الزائدة الدودية. لكنها تفشل في حالات الرضوض المتعددة (Multi-trauma) أو جراحات الأوعية الدموية الكبرى. تتطلب حدة الحالة (Acuity) تعديلاً مرناً للموظفين. (IHI; AORN)</p>

    <div class="concept-box">
        <h3>27.3.2 سلم الحدة (The Acuity Ladder)</h3>
        <p>يجب على قادة غرفة العمليات تخصيص الموظفين بناءً على <strong>نقاط حدة الحالة</strong> (Acuity score) التي تتضمن:</p>
        <ol>
            <li><strong>تعقيد المعدات:</strong> (هل توجد أشعة C-arm، مجاهر، أو ليزر تحتاج لضبط؟)</li>
            <li><strong>خطر فقدان الدم:</strong> (هل سنحتاج إلى طلب دم، تشغيل جهاز إنقاذ الخلايا Cell saver، وتسجيل دقيق لنقل الدم؟)</li>
            <li><strong>عبء العينات:</strong> (هل سيتم تمرير وإرسال خزعات متعددة سريعة أثناء الحالة؟)</li>
            <li><strong>خطر الوضعية:</strong> (تعديلات متكررة في وضعية الانبطاح/Prone أو الجانبية).</li>
        </ol>
        <p>الحالات ذات الحدة العالية تحتاج إلى ممرضة دوارة <em>إضافية</em> أو مساعد مخصص، لمنع الممرضة الأساسية من الانشغال بمهام أخرى وترك مهام السلامة (مثل العد أو المراقبة). (AORN)</p>
        <p><span class="english-term">High-acuity cases need an <em>extra</em> circulator or a dedicated runner, to prevent the primary nurse from being task-saturated and dropping safety tasks (like counting or monitoring).</span></p>
    </div>

    <h2>27.4 التوجيه (Orientation) وخطر "الرمي في المياه العميقة"</h2>
    <h3>27.4 Orientation and the "Danger of the Deep End"</h3>

    <h3>27.4.1 المرضى ليسوا أدوات للتدريب / Patients are not practice dummies</h3>
    <p>إن وضع موظف جديد لتعويض النقص في حالة طارئة بمقولة "سوف يتعلم بالممارسة" هو انتهاك للسلامة. يجب حماية فترات التوجيه (Orientation periods) كحواجز سريرية. (AHRQ)</p>
    <p><span class="english-term"><strong>27.4.1 Patients are not practice dummies</strong><br>Throwing a new staff member into a shortage to "learn by doing" is a safety violation. Orientation periods must be protected as clinical barriers. (AHRQ)</span></p>

    <h3>27.4.2 نموذج التوجيه المرحلي / The Staged Orientation Model</h3>
    <p>يجب أن يُثبت الموظفون الجدد الكفاءة في مراحل:</p>
    <ul>
        <li><strong>المرحلة 1:</strong> فهم الحواجز الأساسية (التقنية المعقمة، العد، سياسة الـ Time-out).</li>
        <li><strong>المرحلة 2:</strong> الحالات الروتينية ذات الحدة المنخفضة مع موجه (Preceptor).</li>
        <li><strong>المرحلة 3:</strong> تخصصات التخصص الفرعي (جراحة العظام، الأعصاب) مع توجيه خاص بالمعدات. (AORN)</li>
    </ul>

    <h2>27.5 الاعتماد ومنح الامتيازات (من يمكنه فعل ماذا)</h2>
    <h3>27.5 Credentialing and Privileging (Who Can Do What)</h3>

    <h3>27.5.1 الثقة جيدة، لكن التدقيق أفضل / Trust is good, audit is better</h3>
    <p>يضمن الاعتماد (Credentialing) أن الجراح أو ممارس التخدير لديه التراخيص المناسبة. أما <strong>منح الامتيازات (Privileging)</strong> فيضمن أن لديهم مهارة مثبتة ومحدثة لأداء <em>إجراء معين</em> في هذا المستشفى تحديداً. (IHI)</p>
    <p><span class="english-term"><strong>27.5.1 Trust is good, audit is better</strong><br>Credentialing ensures the surgeon or anesthesia practitioner has the right licenses. <strong>Privileging</strong> ensures they have proven, current skill to perform a <em>specific procedure</em> in this specific hospital. (IHI)</span></p>

    <h3>27.5.2 التحكم في التقنيات الجديدة / Controlling new technology</h3>
    <p>عندما يشتري المستشفى جهازاً جديداً (مثل روبوت جديد أو ليزر)، لا يجب لأي جراح أن يستخدمه فقط لأنه "شاهد مقطع فيديو". يجب أن يتطلب الامتياز تدريباً موثقاً من الشركة المصنعة وحالات تتم تحت إشراف (Proctoring). (ECRI concepts)</p>
    <p><span class="english-term"><strong>27.5.2 Controlling new technology</strong><br>When a hospital buys a new device (like a new robot or laser), no surgeon should use it just because they “watched a video.” Privileging must require documented vendor training and proctored cases. (ECRI concepts)</span></p>

    <h2>27.6 القصة الحقيقية 2: "الممرضة المعقمة التي قالت 'لا'"</h2>
    <h3>27.6 Real Story 2: "The Scrub Nurse Who Said 'No'"</h3>

    <div class="quote-box">
        <p><strong>المشهد:</strong> في يوم جمعة بجدول مزدحم، استدعت غرفة العمليات موظفي وكالة خارجية (Agency staff) لتغطية النقص. تم تعيين ممرضة معقمة من الوكالة في حالة جراحة أوعية دموية كبرى.</p>
        <p><span class="english-term"><strong>The scene:</strong> On a busy Friday, the OR called in agency staff to cover shortages. An agency scrub nurse was assigned to a major vascular case.</span></p>
        
        <p>في الاجتماع الصباحي (Huddle)، نظرت الممرضة إلى الجدول وقالت للممرضة المسؤولة: <strong>"أنا ممرضة جراحة عامة ممتازة، لكني لم أقم بجراحة أوعية دموية كبرى منذ خمس سنوات. أنا غير مؤهلة لهذه الحالة وسأشكل خطراً على المريض."</strong></p>
        <p><span class="english-term">At the morning huddle, the nurse looked at the board and said to the charge nurse: <strong>“I am an excellent general surgery nurse, but I have not scrubbed a major vascular case in five years. I am not competent for this case and I will be a risk to the patient.”</strong></span></p>
        
        <p><strong>التأثير:</strong> كان رد فعل الممرضة المسؤولة الأول هو الإحباط التشغيلي—كان عليها إعادة ترتيب اللوحة بأكملها. لكنها أدركت لاحقاً: <strong>هذه الممرضة كانت بطلة سلامة.</strong> لقد استخدمت وعيها بكفاءتها الخاصة (Self-competence awareness) كحاجز لمنع الضرر.</p>
        <p><span class="english-term"><strong>The impact:</strong> The charge nurse’s first reaction was operational frustration—she had to rearrange the whole board. But she later realized: <strong>This nurse was a safety hero.</strong> She used self-competence awareness as a harm-prevention barrier.</span></p>
    </div>

    <div class="alert-box">
        <p><strong>الدرس المنهجي (System lesson):</strong> يجب ألا تعتمد غرفة العمليات على الموظفين لتقييم أنفسهم تحت الضغط. يجب أن يتضمن النظام <strong>مصفوفة كفاءات (Competency matrix)</strong> تُراجعها الممرضة المسؤولة <em>قبل</em> عمل التعيينات.</p>
        <p><span class="english-term"><strong>System lesson:</strong> The OR should not rely on staff to self-triage under pressure. The system must have a <strong>competency matrix</strong> that the charge nurse reviews <em>before</em> making assignments.</span></p>
    </div>

    <h2>27.7 أدوات عملية لموثوقية التوظيف</h2>
    <h3>27.7 Practical Tools for Staffing Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>27.7.1 الأداة 1 — لوحة مزيج المهارات (The Skill-Mix Board):</strong><br>
            لا تستخدم أسماء الموظفين فقط لتعيين الغرف. استخدم رموزاً لونية لمستويات الكفاءة (مثال: أخضر = خبير/مرساة، أصفر = كفء، أحمر = قيد التوجيه). لا ينبغي أن تكون الغرفة كلها "صفراء/حمراء" أبداً. (IHI)</li>
            <br>
            <li><strong>27.7.2 الأداة 2 — مصفوفة توظيف الحدة (Acuity Staffing Matrix):</strong><br>
            قائمة مرجعية لمدير العمليات: إذا كانت الحالة تتضمن خسارة دم متوقعة &gt; 1000 مل، أو استخداماً معقداً للمعدات (مثل مجازة القلب والرئة/Bypass)، يتم تعيين ممرضة دوارة إضافية (أو مساعد تخدير) تلقائياً لدعم الفريق وتجنب كسر المهام المتزامنة. (AHRQ; AORN)</li>
            <br>
            <li><strong>27.7.3 الأداة 3 — قاعدة "عدم السحب" (The “Do Not Pull” Rule):</strong><br>
            خلال اللحظات الحرجة (الـ Time-out، العد الجراحي، نقل العينات، إغلاق الشق)، يُحظر على قيادة التمريض سحب الممرضة الدوارة خارج الغرفة لتغطية احتياجات أخرى، مهما كانت النواقص في المستشفى. (WHO SSC concepts)</li>
        </ul>
    </div>

    <h2>27.8 القياس (كيف تعرف أن هيكلك الوظيفي آمن)</h2>
    <h3>27.8 Measurement (How to Know Your Staffing Architecture is Safe)</h3>

    <h3>27.8.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية للحالات التي تمتلك ممرضة "مرساة" (Anchor) مطابقة لمعايير الكفاءة العالية. (IHI)</li>
        <li>النسبة المئوية للامتثال لفترات راحة الإرهاق (Fatigue breaks) وتناول الطعام للموظفين في الحالات التي تتجاوز 4 ساعات. (AHRQ)</li>
        <li>تقييمات السلامة النفسية (هل يشعر الموظفون الجدد بالأمان لقول "لا أعرف"؟). (AHRQ)</li>
    </ul>

    <h3>27.8.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>معدل دوران الموظفين (Staff turnover rate). الإرهاق هو المؤشر الأساسي لانهيار النظام الوشيك. (AHRQ)</li>
        <li>التباينات في العد الجراحي والأخطاء الدوائية المرتبطة بالمناوبات ذات مستويات التوظيف المنخفضة.</li>
    </ul>

    <h2>27.9 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>27.9 The Writer's Reflection</h3>

    <h3>27.9.1 التوظيف هو فعل أخلاقي / Staffing is an ethical act</h3>
    <p>عندما تضع ممرضاً مبتدئاً دون دعم في غرفة معقدة، فأنت لا "تدير الموارد"؛ أنت تنقل المخاطر الإدارية مباشرة إلى جسد المريض. حماية طاقمك هي الطريقة التي تحمي بها مرضاك.</p>
    <p><span class="english-term"><strong>27.9.1 Staffing is an ethical act</strong><br>When you put an unsupported junior nurse in a complex room, you are not “managing resources”; you are transferring administrative risk directly onto the patient’s body. Protecting your staff is how you protect your patients.</span></p>

    <h3>27.9.2 لا يمكنك تحسين فريق منهك</h3>
    <p>يمكنك كتابة أفضل السياسات في العالم (حول العقامة، الـ Time-out، والعد)، لكن الموظفين المنهكين سيبحثون دائماً عن الاختصارات. جودة الحواجز السريرية الخاصة بك تحددها مستويات طاقة فريقك. (AHRQ)</p>
    <p><span class="english-term"><strong>27.9.2 You cannot optimize a burned-out team</strong><br>You can write the best policies in the world (for asepsis, time-outs, counts), but exhausted staff will always find shortcuts. The quality of your clinical barriers is dictated by the energy levels of your team. (AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>مزيج المهارات (Skill mix) هو حاجز سلامة: يجب أن يغطي العقامة، العد، العينات، الغرسات، جاهزية المعدات، والتواصل—وليس مجرد سد أدوار. (AORN; AHRQ)<br>
            <span class="english-term">Skill mix is a safety barrier: it must cover sterility, counts, specimens, implants, equipment readiness, and communication—not just roles.</span></li>
            
            <li>يجب أن يتطابق التوظيف مع الحدة (Acuity): النسب الثابتة تفشل عندما يرتفع التعقيد. استخدم سلم الحدة وضع "المراسي" (Anchors) حيث تكون المخاطر أعلى. (IHI; AHRQ)<br>
            <span class="english-term">Staffing must match acuity: flat ratios fail when complexity rises. Use an acuity ladder and place anchors where risk is highest.</span></li>
            
            <li>يجب أن يكون التوجيه (Orientation) مرحلياً مع نقاط تحقق للكفاءة وفترة توجيه محمية—المرضى ليسوا أدوات للتدريب. (AHRQ; AORN)<br>
            <span class="english-term">Orientation must be staged with competency checkpoints and protected preceptorship—patients are not training tools.</span></li>
            
            <li>يجب أن يكون الاعتماد (Credentialing) قابلاً للتدقيق: مَن يمكنه فعل ماذا، وتحت أي إشراف، مع إعادة الاعتماد لمنع الانحراف. (AHRQ; IHI)<br>
            <span class="english-term">Credentialing must be auditable: who can do what, under what supervision, with re-credentialing to prevent drift.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety resources (teamwork, communication, safety culture, human factors, fatigue risk, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI) — Reliability and quality improvement resources (acuity-based staffing logic, standard work, escalation pathways, measurement, system redesign).</li>
            <li>Association of periOperative Registered Nurses (AORN) — Guidelines for Perioperative Practice (perioperative nursing practice concepts: sterility, counts, specimens, workflow reliability).</li>
            <li>Occupational Safety and Health Administration (OSHA) — Bloodborne pathogen / sharps safety concepts relevant to staffing, exposure prevention, and safe work conditions.</li>
            <li>Centers for Disease Control and Prevention (CDC) — Occupational exposure management concepts supporting reporting and follow-up culture.</li>
            <li>ECRI (concepts) — Human factors and technology risk concepts relevant to competency with equipment readiness and safe use.</li>
            <li>World Health Organization (WHO) Surgical Safety Checklist (concepts) — Team communication behaviors and protected pauses that depend on staffing stability.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  6: `<!-- Download Button -->
    

    <div class="part-title">PART II — Preoperative Readiness and “Start-Right” Controls</div>
    <div class="part-title">الجزء الثاني — الجاهزية ما قبل العملية وضوابط "البداية الصحيحة"</div>
    
    <h1>CHAPTER 6 — Correct Site, Correct Procedure, Correct Implant</h1>
    <div class="subtitle">الفصل السادس — الموقع الصحيح، الإجراء الصحيح، الغرسة الصحيحة<br>
    <span style="font-size: 18px;">(Universal Protocol in Real Life • Site Marking Discipline • Time-Out Quality • Implant Verification &amp; Traceability • Hard Stops &amp; Escalation)<br>
    (البروتوكول العالمي في الحياة الواقعية • انضباط تحديد الموقع • جودة المهلة • التحقق من الغرسات وتتبعها • التوقفات الإلزامية والتصعيد)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تظل أحداث الموقع الخاطئ / الإجراء الخاطئ / المريض الخاطئ ممكنة حتى في الفرق "الممتازة"—ولماذا يجب أن تكون الوقاية <strong>مُصممة في النظام (System-designed)</strong>، وليست مبنية على الشخصية. (The Joint Commission; WHO SSC)<br>
            <span class="english-term">Explain why wrong-site / wrong-procedure / wrong-patient events remain possible even in “excellent” teams—and why prevention must be <strong>system-designed</strong>, not personality-based. (The Joint Commission; WHO SSC)</span></li>
            
            <li>بناء سير عمل موثوق لـ <strong>التحقق قبل الإجراء، وتحديد الموقع، والمهلة (Time-out)</strong> بحيث يصمد أمام ضغط الوقت والتسلسل الهرمي. (The Joint Commission; WHO SSC; AORN)<br>
            <span class="english-term">Build a reliable workflow for <strong>pre-procedure verification, site marking, and time-out</strong> that survives time pressure and hierarchy. (The Joint Commission; WHO SSC; AORN)</span></li>
            
            <li>تحديد أنماط الفشل الأكثر شيوعاً التي تؤدي إلى خطأ في الموقع/الإجراء وكيفية منعها بالتوقفات الإلزامية (Hard stops) والتكرار. (The Joint Commission; AHRQ; IHI)<br>
            <span class="english-term">Identify the most common failure modes that lead to wrong-site/procedure and how to block them with hard stops and redundancy. (The Joint Commission; AHRQ; IHI)</span></li>
            
            <li>تصميم نظام كامل لـ <strong>التحقق من الغرسات وتتبعها</strong>: الغرسة الصحيحة، المريض الصحيح، الجهة الصحيحة، نطاق الحجم الصحيح، وتوثيق المعرف الفريد للجهاز (UDI)/الملصقات. (AORN)<br>
            <span class="english-term">Design a complete <strong>implant verification and traceability system</strong>: right implant, right patient, right side, right size range, and documented UDI/labels. (AORN)</span></li>
            
            <li>تطبيق نموذج تصعيد يُمكّن سلوك "إيقاف الخط" (Stop-the-line) بسلطة محمية وقواعد واضحة. (IHI; AHRQ; The Joint Commission)<br>
            <span class="english-term">Apply an escalation model that empowers “stop-the-line” behavior with protected authority and clear rules. (IHI; AHRQ; The Joint Commission)</span></li>
            
            <li>تنفيذ مؤشرات قابلة للقياس تُثبت الموثوقية: جودة المهلة، أحداث التوقف بسبب التباين، معدل تأكيد جاهزية الغرسات، واكتمال التتبع. (WHO SSC; IHI; AORN)<br>
            <span class="english-term">Implement measurable indicators that prove reliability: time-out quality, mismatch stop events, implant readiness confirmation rate, and traceability completion. (WHO SSC; IHI; AORN)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الخط على الجلد الذي أنقذ قصة حياة"</strong><br>
        <span class="english-term">A true-to-life case: “The line on the skin that saved a life’s story” (Real Scientific Story)</span>
    </div>

    <p>إذا قضيت 25 عاماً في غرف العمليات، فستتعلم في النهاية أن <strong>أخطاء الموقع الخاطئ لا تنبع من الغباء</strong>. إنها تنبع من الزخم (Momentum)—تلك القوة الخفية التي تدفع الناس للمضي قدماً حتى عندما يبدو أن هناك شيئاً خاطئاً بعض الشيء.</p>
    <p><span class="english-term">If you spend 25 years around operating rooms, you eventually learn that <strong>wrong-site errors are not born from stupidity</strong>. They are born from momentum—an invisible force that pushes people forward even when something feels slightly off.</span></p>

    <p>كانت قائمة عمليات عظام—حجم عمل كبير، تبديل سريع، فريق يمكنه إجراء أربع حالات في الوقت الذي يُجري فيه الآخرون حالتين. جاء المريض إلى المسرح لإجراء جراحة في جهة محددة. كانت منطقة ما قبل العمليات مزدحمة؛ القائمة متأخرة؛ وتم استدعاء الجراح لتقييم عاجل آخر. رأى الطبيب المبتدئ المريض، تم توقيع الموافقة، وكانت الملاحظات مرتبة. أراد الجميع "التحرك".</p>
    <p><span class="english-term">It was an orthopaedic list—high volume, fast turnover, a team that could run four cases in the time others run two. The patient came to theatre for a side-specific procedure. Pre-op area was busy; the list was late; the surgeon had been called to another urgent review. The junior doctor saw the patient, the consent was signed, and the notes were tidy. Everyone wanted to “move.”</span></p>

    <p>عند دخول المريض الغرفة، كانت العلامة (Mark) موجودة. سهم واضح على الطرف. ممتاز.</p>
    <p><span class="english-term">As the patient entered the room, the mark was present. A clear arrow on the limb. Good.</span></p>

    <p>لكن أثناء اتخاذ الوضعية (Positioning) والفرش الجراحي (Draping)، اختفت العلامة تحت محلول التحضير (Prep solution) والفرش. بدت الغرفة جاهزة. وصل الجراح، ارتدى ملابسه المعقمة بسرعة، ومد يده لأخذ المشرط.</p>
    <p><span class="english-term">But during positioning and draping, the mark disappeared under prep solution and drapes. The room felt ready. The surgeon arrived, gowned quickly, and reached for the scalpel.</span></p>

    <p>قالت إحدى الممرضات بهدوء: "يا دكتور... لا يمكنني رؤية العلامة."<br>
    أجاب الجراح، وهو مركز بالفعل: "إنها الساق الصحيحة. لقد رأيناها في الخارج."</p>
    <p><span class="english-term">A nurse said quietly: “Doctor… I can’t see the mark.”<br>
    The surgeon replied, already focused: “It’s the correct leg. We saw it outside.”</span></p>

    <p>لقد سمعت تلك الجملة مرات أكثر مما أتمنى. إنها تبدو غير ضارة. إنها نوع الجمل التي دمرت حيوات.</p>
    <p><span class="english-term">I have heard that sentence more times than I wish. It sounds harmless. It’s the kind of sentence that has destroyed lives.</span></p>

    <p>أصرت الممرضة مرة أخرى، بصوت أعلى: "يجب إجراء المهلة (Time-out) قبل الشق الجراحي. أحتاج إلى أن تكون العلامة مرئية أو نعيد التأكيد."</p>
    <p><span class="english-term">The nurse insisted again, louder: “Time-out before incision. I need the mark visible or we re-confirm.”</span></p>

    <p>حدث توقف مؤقت—كان هناك انزعاج في الجو، ذلك النوع الذي يظهر عندما تعطل السلامة السرعة. ثم تم تعديل الفرش. العلامة التي ظهرت <strong>لم تكن على الساق التي كان الجراح على وشك قطعها</strong>.</p>
    <p><span class="english-term">There was a pause—annoyance in the air, the kind that comes when safety interrupts speed. Then the drapes were adjusted. The mark that appeared was not on the leg the surgeon was about to cut.</span></p>

    <div class="alert-box">
        <p>ما زلت أتذكر الصمت الذي أعقب ذلك. ليس صمت المسرح الدرامي، بل الصمت العميق للواقع: <strong>كنا على بُعد ثوانٍ من شق جراحي في الموقع الخاطئ</strong>.</p>
        <p><span class="english-term">I still remember the silence that followed. Not the dramatic silence of theatre, but the deep silence of reality: <strong>we were seconds away from a wrong-site incision</strong>.</span></p>
    </div>

    <p>توقفنا. أعدنا الضبط. كررنا التحقق بشكل صحيح. لم يحدث أي ضرر.</p>
    <p><span class="english-term">We stopped. We reset. We repeated verification properly. No harm occurred.</span></p>

    <div class="success-box">
        <p>لاحقاً، في جلسة استخلاص المعلومات (Debrief)، قال الجراح شيئاً صادقاً:<br>
        <strong>"لم أكن مهملاً. كنت مستعجلاً."</strong><br>
        وهذا هو بالضبط السبب الذي يجعل الوقاية من الموقع الخاطئ يجب أن تُصمم لتتحمل الاستعجال. (The Joint Commission; WHO SSC; IHI)</p>
        <p><span class="english-term">Later, in the debrief, the surgeon said something honest:<br>
        <strong>“I wasn’t careless. I was rushed.”</strong><br>
        That is precisely why wrong-site prevention must be designed to withstand rushing. (The Joint Commission; WHO SSC; IHI)</span></p>
    </div>

    <h2>6.1 حقيقة أحداث الموقع/الإجراء الخاطئ (لماذا لا تزال تحدث) / The Reality of Wrong-Site / Wrong-Procedure Events</h2>

    <h3>6.1.1 إنها "أحداث لا ينبغي أن تحدث" لأن النظام يجب أن يمنعها / These are “never events” because the system must prevent them</h3>
    <p>الجراحة في الموقع الخاطئ، أو الإجراء الخاطئ، أو المريض الخاطئ هي أضرار بمستوى الأحداث الجسيمة (Sentinel events) وهدف رئيسي لمعايير السلامة. (The Joint Commission)</p>
    <p>إذا تعاملنا معها على أنها "أخطاء نادرة"، فإننا نقلل من الاستثمار في الوقاية. يجب التعامل معها على أنها <strong>مخاطر نظام (System hazards)</strong> تتطلب ضوابط غير قابلة للتفاوض. (The Joint Commission; IHI)</p>
    <p><span class="english-term">Wrong-site, wrong-procedure, wrong-patient surgery is a sentinel-level harm and a major target of safety standards. (The Joint Commission). If we treat them as “rare mistakes,” we under-invest in prevention. They must be treated as <strong>system hazards</strong> with non-negotiable controls. (The Joint Commission; IHI)</span></p>

    <h3>6.1.2 غرفة العمليات تتمتع بظروف مثالية للانحراف / The OR has perfect conditions for drift</h3>
    <p>أحداث الموقع الخاطئ نادراً ما تكون فشلاً لشخص واحد. إنها الخطوة الأخيرة في سلسلة:</p>
    <p><span class="english-term">Wrong-site events are rarely one person’s failure. They are the final step in a chain:</span></p>
    <ul>
        <li>لغة حجز غامضة،</li>
        <li>عدم تطابق الموافقة أو عدم وضوح الجهة (Laterality)،</li>
        <li>تحديد موقع على عجل،</li>
        <li>مهلة (Time-out) تُجرى كطقس روتيني،</li>
        <li>ضغط للحاق بالوقت،</li>
        <li>تسلسل هرمي (Hierarchy) يجعل التحدث بصوت عالٍ مكلفاً. (AHRQ; IHI; The Joint Commission)</li>
    </ul>

    <h3>6.1.3 "نحن نقوم بالـ Time-out" ليس كافياً / “We do time-out” is not enough</h3>
    <p>يمكن أن توجد المهلة على الورق وتفشل في الواقع. تكون قائمة تحقق منظمة الصحة العالمية فعالة عند استخدامها كـ <strong>محادثة جماعية تخلق فهماً مشتركاً (Shared understanding)</strong>، وليس كتلاوة سريعة. (WHO SSC)</p>
    <p>هذا الفصل يتحدث عن الفرق بين <strong>"أداء السلامة" (Performing safety)</strong> و <strong>"إنتاج السلامة" (Producing safety)</strong>. (IHI)</p>
    <p><span class="english-term">A time-out can exist on paper and fail in reality. The WHO checklist is effective when used as a <strong>team conversation that creates shared understanding</strong>, not as a fast recitation. (WHO SSC). This chapter is about the difference between <strong>performing safety</strong> and <strong>producing safety</strong>. (IHI)</span></p>

    <h2>6.2 البروتوكول العالمي كسير عمل حي (وليس ملصقاً) / The Universal Protocol as a Living Workflow</h2>

    <h3>6.2.1 الركائز الثلاث / The three pillars</h3>
    <p>تعتمد برامج الوقاية من الموقع الخاطئ عادة على:</p>
    <ol>
        <li>التحقق قبل الإجراء (Pre-procedure verification)</li>
        <li>تحديد الموقع (Site marking)</li>
        <li>المهلة قبل الشق الجراحي مباشرة (Time-out immediately before incision) (The Joint Commission)</li>
    </ol>
    <p>هذه ليست ثلاث مهام منفصلة؛ إنها ثلاث بوابات مترابطة يجب أن تتفق. (The Joint Commission; WHO SSC)</p>
    <p><span class="english-term">Wrong-site prevention programs typically rely on: Pre-procedure verification, Site marking, Time-out immediately before incision. (The Joint Commission). These are not three separate tasks; they are three linked gates that must agree. (The Joint Commission; WHO SSC)</span></p>

    <h3>6.2.2 التحقق قبل الإجراء: بوابة "محاذاة الحقيقة" / Pre-procedure verification: the “truth alignment” gate</h3>
    <p>هنا تتأكد غرفة العمليات من أن الخطة موجودة في شكل واحد لا لبس فيه عبر المصادر الرئيسية. (The Joint Commission)</p>
    <p>يجب أن يضمن التحقق:</p>
    <ul>
        <li>معرفات المريض الصحيحة،</li>
        <li>اسم الإجراء الصحيح (لغة قياسية)،</li>
        <li>الموقع/الجهة/المستوى الصحيح (عند الاقتضاء)،</li>
        <li>الجراح والفريق الصحيح،</li>
        <li>الغرسات الصحيحة وجاهزية المعدات،</li>
        <li>التصوير الطبي ذو الصلة متاح ومتسق. (The Joint Commission; AORN)</li>
    </ul>
    <p><span class="english-term">This is where the OR ensures that the plan exists in a single, unambiguous form across key sources. Verification must ensure: correct identifiers, procedure name, site/side/level, surgeon/team, implants/equipment readiness, and imaging. (The Joint Commission; AORN)</span></p>

    <h3>6.2.3 تحديد الموقع: الحاجز الذي ينتقل مع الجسد / Site marking: the barrier that travels with the body</h3>
    <p>تحديد الموقع قوي لأنه يقع على المريض، وليس في الملف. (The Joint Commission)</p>
    <p>لكن فقط إذا كان:</p>
    <ul>
        <li>صحيحاً،</li>
        <li>يُجرى بواسطة الشخص المناسب،</li>
        <li>يُجرى في الوقت المناسب،</li>
        <li>و <strong>مرئياً أثناء الـ Time-out</strong>. (The Joint Commission; WHO SSC)</li>
    </ul>
    <p><span class="english-term">Site marking is powerful because it sits on the patient, not in the chart. But only if: it is correct, done by the right person, done at the right time, and <strong>visible at the time-out</strong>.</span></p>

    <h3>6.2.4 المهلة (Time-out): البوابة الأخيرة قبل الإجراء غير القابل للتراجع / Time-out: the last gate before irreversible action</h3>
    <p>الـ Time-out هي اللحظة الأخيرة التي يمكن للغرفة فيها التوقف، والتفكير، والمحاذاة. يجب أن يتم ذلك بانتباه كامل، ومشاركة كاملة، وتوقف إلزامي (Hard stop) عند وجود تباينات. (WHO SSC; The Joint Commission)</p>
    <p><span class="english-term">Time-out is the last moment the room can stop, think, and align. It must be done with full attention, full participation, and a hard stop for mismatches.</span></p>

    <h2>6.3 لماذا تفشل هذه الحواجز في الحياة الواقعية / Why These Barriers Fail in Real Life</h2>

    <div class="concept-box">
        <h3>6.3.1 متلازمة "أنا أعرف بالفعل" / The “I already know” syndrome</h3>
        <p>الألفة تولد الاختصارات. الفرق التي تعمل معاً يومياً يمكن أن تصبح فعالة بشكل خطير: يتحدثون أقل، يفترضون أكثر، ويتخطون خطوات التأكيد. (AHRQ)</p>
        <p><span class="english-term">Familiarity breeds shortcuts. Teams that work together daily can become dangerously efficient: they speak less, assume more, and skip confirmation steps. (AHRQ)</span></p>

        <h3>6.3.2 خطر "القائمة المتأخرة" / The “late list” hazard</h3>
        <p>عندما يتأخر اليوم، تصبح بوابات السلامة ضعيفة. يتحدث الناس بشكل أسرع، ويستمعون بشكل أقل، ويتجنبون النزاع. هذا هو ضغط إنتاج يمكن التنبؤ به، ويجب التعامل معه كخطر. (IHI)</p>
        <p><span class="english-term">When the day is late, safety gates become vulnerable. People speak faster, listen less, and avoid conflict. This is predictable production pressure, and it must be treated as a hazard. (IHI)</span></p>

        <h3>6.3.3 العلامة تمت بشكل صحيح لكن فُقدت تحت التحضير/الفرش / Marking done correctly but lost under prep/drapes</h3>
        <p>العلامة التي تختفي تصبح ذكرى. والذاكرة هي حاجز سلامة ضعيف. (WHO SSC; IHI)</p>
        <p><span class="english-term">A mark that disappears becomes a memory. Memory is a weak safety barrier. (WHO SSC; IHI)</span></p>

        <h3>6.3.4 التوثيق يستخدم كلمات مختلفة لنفس الخطة / Documentation uses different words</h3>
        <p>الاختصارات والمصطلحات المختلطة تخلق الغموض. الغموض هو الوقود لأخطاء الإجراء الخاطئ. (The Joint Commission; IHI)</p>
        <p><span class="english-term">Abbreviations and mixed terminology create ambiguity. Ambiguity is fuel for wrong-procedure errors. (The Joint Commission; IHI)</span></p>

        <h3>6.3.5 تغييرات اللحظة الأخيرة بدون إعادة تحقق منضبطة / Last-minute changes</h3>
        <p>الخطط تتغير في الجراحة—هذا هو الواقع. لكن التغييرات يجب أن تؤدي إلى إعادة التحقق (Re-verification) وأحياناً إعادة الموافقة. (The Joint Commission)</p>
        <p><span class="english-term">Plans change in surgery—that’s reality. But changes must trigger re-verification and sometimes re-consent. (The Joint Commission)</span></p>

        <h3>6.3.6 التسلسل الهرمي يُسكت الصوت الحمائي الأخير / Hierarchy silences the last protective voice</h3>
        <p>إذا كانت الممرضة المبتدئة تخشى الإذلال، فقد تظل صامتة. التحدث بصوت عالٍ هو ضابط أمان يتطلب سلامة نفسية وحوكمة. (AHRQ; IHI)</p>
        <p><span class="english-term">If a junior nurse fears being humiliated, they may stay silent. Speaking up is a safety control that requires psychological safety and governance. (AHRQ; IHI)</span></p>
    </div>

    <h2>6.4 القصة الحقيقية 2: "كان الجراح على حق—حتى فُتح التصوير الطبي"</h2>
    <h3>6.4 Real Story 2: "The surgeon was right—until the imaging was opened"</h3>

    <div class="quote-box">
        <p><strong>6.4.1 المشهد (The scene):</strong><br>
        مريض مجدول لإجراء يعتمد على مستوى التصوير (Imaging level). نص الحجز على "L4-L5". اقترحت ملاحظة العيادة "L5-S1". استخدم نموذج الموافقة عبارة عامة لم تحدد المستوى بوضوح.</p>
        <p>افترض الفريق أنها حالة روتينية.</p>
        <p>أثناء الـ Time-out، سألت ممرضة: "هل لدينا التصوير هنا، وهل يمكننا تأكيد المستوى بصوت عالٍ؟"<br>
        رد الجراح في البداية: "نحن نعرف المستوى."</p>
        <p>لكن تم فتح التصوير. ودعم التقرير بوضوح المستوى الذي <strong>لم يكن</strong> موجوداً في ورقة الحجز.</p>
        <p><span class="english-term"><strong>The scene:</strong> A patient scheduled for a procedure that depended on imaging level. The booking said “L4-L5.” The clinic note suggested “L5-S1.” The consent form used a general phrase that didn’t specify level clearly... During time-out, a nurse asked: “Do we have the imaging here, and can we confirm the level out loud?” The surgeon initially replied: “We know the level.” But imaging was opened. The report clearly supported the level that was not on the booking sheet.</span></p>
    </div>

    <div class="alert-box">
        <p><strong>6.4.2 سلسلة الخطر (The risk chain):</strong></p>
        <ul>
            <li><strong>الخطر:</strong> مستوى خاطئ / موقع خاطئ داخل جراحة العمود الفقري</li>
            <li><strong>المُحفز:</strong> افتراض + أوراق غامضة</li>
            <li><strong>الحاجز:</strong> الـ Time-out مع تأكيد التصوير</li>
            <li><strong>النتيجة:</strong> مُنع الضرر لأن ممرضة أصرت على التحقق. (The Joint Commission; WHO SSC)</li>
        </ul>
        <p><span class="english-term"><strong>The risk chain:</strong> Hazard: wrong level / wrong site. Trigger: assumption + ambiguous paperwork. Barrier: time-out with imaging confirmation. Outcome: harm prevented because a nurse insisted on verification.</span></p>
    </div>

    <p><strong>6.4.3 الدرس العملي (Practical lesson):</strong><br>
    في 25 عاماً، تعلمت أن غرفة العمليات مليئة بـ "الحقائق الواضحة" التي تصبح خاطئة تحت الضوء. التصوير هو ذلك الضوء. <strong>عندما يكون التصوير ذا صلة، فإن التحقق بدونه ليس تحققاً.</strong> (The Joint Commission)</p>
    <p><span class="english-term"><strong>The writer’s lesson:</strong> In 25 years, I’ve learned the OR is full of “obvious truths” that become wrong under light. Imaging is that light. When imaging is relevant, verification without imaging is not verification. (The Joint Commission)</span></p>

    <h2>6.5 تصميم جودة الـ Time-Out (كيف يبدو "الجيد") / Designing Time-Out Quality</h2>

    <h3>6.5.1 الـ Time-Out هو أداء له غرض / Time-out is a performance with a purpose</h3>
    <p>يجب أن يُنتج الـ Time-Out نموذجاً عقلياً مشتركاً:</p>
    <ul>
        <li>من هو المريض؟</li>
        <li>ماذا نفعل؟</li>
        <li>أين نفعل ذلك؟</li>
        <li>ما هي المخاطر الخاصة اليوم؟</li>
        <li>ما الذي يجب ألا يُفوت (غرسات، عينات، عد، مضادات حيوية، قيود)؟ (WHO SSC; AORN)</li>
    </ul>

    <h3>6.5.2 الحد الأدنى لمحتوى الـ Time-out (تركيز غرفة العمليات) / Minimum time-out content</h3>
    <p>يجب أن يتضمن الـ Time-out صراحةً:</p>
    <ul>
        <li>معرفات المريض،</li>
        <li>اسم الإجراء بكلمات قياسية،</li>
        <li>تأكيد الجهة/الموقع/المستوى،</li>
        <li>تأكيد وضوح علامة الموقع،</li>
        <li>توفر الغرسة وجاهزية النظام الصحيح (إذا كان ذا صلة)،</li>
        <li>خطة العينات (إذا كانت ذات صلة)،</li>
        <li>الخطوات الحرجة المتوقعة،</li>
        <li>أي قيود أو احتياطات خاصة. (WHO SSC; The Joint Commission; AORN)</li>
    </ul>

    <h3>6.5.3 قاعدة "التوقف التام" / The “all stop” rule</h3>
    <p>الـ Time-out ليس مهلة إذا كان أي شخص:</p>
    <ul>
        <li>يقوم بالتحضير (Prepping)،</li>
        <li>يفرش (Draping)،</li>
        <li>يعد الأدوات،</li>
        <li>يرد على الهواتف،</li>
        <li>أو يكتب ملاحظات.</li>
    </ul>
    <p>الجميع يتوقف. هذا أحد أهم المؤشرات على فعالية الـ Time-out. (WHO SSC)</p>
    <p><span class="english-term">A time-out is not a time-out if anyone is: prepping, draping, counting instruments, answering phones, or writing notes. Everyone stops. This is one of the most important predictors of time-out effectiveness. (WHO SSC)</span></p>

    <h3>6.5.4 التوقف الإلزامي عند التباين / The mismatch hard stop</h3>
    <p>إذا كان هناك أي تباين، لا يبدأ الشق الجراحي حتى يتم حله وتوثيقه. التوقفات الإلزامية أساسية لمنطق الوقاية من الموقع الخاطئ. (The Joint Commission)</p>

    <h2>6.6 انضباط تحديد الموقع (كيف تجعله موثوقاً) / Site Marking Discipline</h2>

    <h3>6.6.1 من يضع العلامة، متى، وكيف / Who marks, when, and how</h3>
    <p>يجب أن يتم تحديد الموقع بواسطة ممارس مؤهل بما يتوافق مع توقعات السياسة، وأن يتم قبل التخدير (Sedation) حيثما كان ذلك ممكناً. (The Joint Commission)</p>

    <h3>6.6.2 يجب أن تتطابق العلامة مع التوثيق / Marking must match documentation</h3>
    <p>وضع العلامة ليس مجرد "اختيار جهة". يجب أن يتطابق مع الخطة المسواة (Reconciled plan): الحجز + الموافقة + التصوير + خطة الجراح. (The Joint Commission)</p>

    <h3>6.6.3 سلامة الرؤية (يجب أن تنجو العلامة من الرحلة) / Visibility integrity</h3>
    <p>العلامة التي تختفي هي حاجز مكسور. قواعد تعمل في الحياة الواقعية:</p>
    <ul>
        <li>أكّد وضوح العلامة <strong>قبل الفرش الجراحي</strong>.</li>
        <li>إذا كانت العلامة ستُغطى، أكّد الموقع أثناء الـ Time-out <strong>قبل وضع الفرش النهائي</strong>.</li>
        <li>وثّق أن العلامة تمت رؤيتها وتأكيدها. (WHO SSC; The Joint Commission)</li>
    </ul>

    <h3>6.6.4 الحالات الخاصة والاستثناءات / Special cases and exceptions</h3>
    <p>الأعضاء في خط الوسط، الأسطح المخاطية، العمليات ثنائية الجانب، المستويات المتعددة—تتطلب هذه الحالات بروتوكولات خاصة وخطوات تأكيد لفظي صريحة. (The Joint Commission)</p>

    <h2>6.7 الغرسة الصحيحة: النصف المنسي من "الإجراء الصحيح" / Correct Implant: The Forgotten Half of “Correct Procedure”</h2>

    <h3>6.7.1 لماذا تستحق الغرسات حاجز سلامة خاصاً بها / Why implants deserve their own safety barrier</h3>
    <p>الغرسات ليست مجرد إمدادات. إنها تصبح جزءاً من جسم المريض، وتحمل مخاطر مستقبلية: مراجعة (Revision)، استدعاءات (Recalls)، مضاعفات، وتتبع. لهذا السبب تؤكد إرشادات الممارسة المحيطة بالجراحة على التحقق من الغرسات وتوثيقها. (AORN)</p>

    <h3>6.7.2 سلسلة مخاطر الغرسات (كيف يحدث الضرر) / The implant risk chain</h3>
    <p>في خبرتي، يبدأ الضرر المتعلق بالغرسات في مراحل مبكرة جداً:</p>
    <ul>
        <li>يفشل الحجز في تحديد احتياجات الغرسة،</li>
        <li>لا يتم تأكيد اكتمال طقم الإعارة (Loaner set)،</li>
        <li>استبدالات اللحظة الأخيرة تتم تحت الضغط،</li>
        <li>الأحجام غير متوفرة،</li>
        <li>التوثيق يتم بتسرع،</li>
        <li>إمكانية التتبع (Traceability) غير مكتملة. (AORN; IHI)</li>
    </ul>

    <div class="concept-box">
        <h3>6.7.3 3: "المكون المفقود الذي أغرى بالاختصار"</h3>
        <p>تطلبت حالة نظام غرسة معين. وصل الطاقم (Tray) غير مكتمل—أداة رئيسية واحدة مفقودة. اقترح المورد بديلاً. الغرفة كانت متأخرة.</p>
        <p>قال أحدهم: "يمكننا إنجاز الأمر."</p>
        <p>لكن "إنجاز الأمر" ليس خطة سلامة. توقفنا وسألنا:<br>
        <strong>"هل يمكننا ضمان النتيجة النهائية وإكمال الإجراء بأمان بما لدينا؟"</strong><br>
        لم يستطع أحد بصدق أن يقول نعم.</p>
        <p>أجلنا الحالة. كره الجميع التأخير. لكننا حمينا المريض من فخ داخل العملية: <strong>البدء بشيء قد لا نتمكن من إنهائه بأمان.</strong> هذا قرار حوكمة في غرفة العمليات، وليس مزاجاً شخصياً. (IHI)</p>
        <p><span class="english-term">A case required a specific implant system. The tray arrived incomplete—one key instrument missing. The vendor suggested an alternative. The room was late... We postponed the case. Everyone hated the delay. But we protected the patient from an intra-operative trap: starting something we may not be able to finish safely. That is an OR governance decision, not a personal mood. (IHI)</span></p>
    </div>

    <h3>6.7.4 خطوات التحقق من الغرسة (عملية وغير قابلة للتفاوض) / Implant verification steps</h3>
    <p>يجب أن يتضمن سير العمل الموثوق به ما يلي:</p>
    <ul>
        <li>تأكيد أن نوع/نظام الغرسة يطابق الإجراء المخطط له،</li>
        <li>تأكيد توافق الجهة/الموقع/المستوى،</li>
        <li>تأكيد توفر نطاق الحجم (Size range)،</li>
        <li>تأكيد العقامة والسلامة (Integrity)،</li>
        <li>تأكيد خطة التقاط بيانات التتبع (UDI/الملصقات). (AORN)</li>
    </ul>

    <h2>6.8 تتبع الغرسات وتوثيقها (لجعل السلامة المستقبلية ممكنة) / Implant Traceability and Documentation</h2>

    <h3>6.8.1 التتبع هو حماية للمريض / Traceability is patient protection</h3>
    <p>إذا حدث استدعاء (Recall)، يجب أن تعرف بالضبط أي غرسة دخلت في أي مريض. لهذا السبب يتم التأكيد على التوثيق والتتبع. (AORN)</p>

    <h3>6.8.2 شروط "الإنجاز" للتتبع / Traceability done conditions</h3>
    <p>قبل أن يغادر المريض سيطرة غرفة العمليات:</p>
    <ul>
        <li>تم التقاط ملصق الغرسة في السجل،</li>
        <li>تفاصيل الغرسة موثقة،</li>
        <li>تم تسجيل الدفعة/الرقم التسلسلي (أو التقاط UDI)،</li>
        <li>اكتملت التسوية (Reconciliation). (AORN)</li>
    </ul>

    <h3>6.8.3 أنماط فشل التتبع الشائعة / Common traceability failure modes</h3>
    <ul>
        <li>يُترك الملصق على العبوة ويُفقد،</li>
        <li>تُكتب التفاصيل لاحقاً من الذاكرة،</li>
        <li>مرضى مكررون ويُوضع الملصق الخاطئ،</li>
        <li>تسجيل خروج (Sign-out) متسرع عندما يرتفع ضغط التبديل. (IHI)</li>
    </ul>
    <p>يجب أن يُصمم النظام بحيث يكون التتبع سهلاً ويصعب تجاوزه. (IHI; AORN)</p>

    <h2>6.9 مسارات التصعيد (حتى لا تعتمد السلامة على الشجاعة) / Escalation Pathways</h2>

    <h3>6.9.1 "يمكن لأي شخص التحدث" يجب أن تصبح "هكذا نُصعّد"</h3>
    <p>تؤكد معايير السلامة وأدبيات التحسين أن التصعيد يجب أن يكون مُهيكلاً. (AHRQ; IHI)</p>

    <h3>6.9.2 محفزات التوقف الإلزامي (الفئة أ) / Hard stop triggers (Tier A)</h3>
    <p>توقف تلقائي وتصعيد إذا:</p>
    <ul>
        <li>عدم تطابق في المريض/الإجراء/الموقع، (The Joint Commission)</li>
        <li>علامة الموقع غائبة عندما تكون مطلوبة، (The Joint Commission)</li>
        <li>عدم تطابق التصوير عندما يكون ذا صلة، (The Joint Commission)</li>
        <li>نظام الغرسة غير مكتمل أو لم يتم التحقق منه، (AORN)</li>
        <li>الـ Time-out لم يُنفذ بتوقف كامل للفريق. (WHO SSC)</li>
    </ul>

    <h3>6.9.3 سلم التصعيد (عملي) / Escalation ladder (practical)</h3>
    <ol>
        <li>عبارة التوقف (Pause phrase): "فحص سلامة—تباين"، (WHO SSC)</li>
        <li>التسوية المحلية (Local reconciliation)،</li>
        <li>الممرضة المسؤولة / مشرف العمليات،</li>
        <li>قائد الخدمة / الاستشاري،</li>
        <li>التصعيد للمستشفى إذا لم يُحل. (IHI)</li>
    </ol>

    <h3>6.9.4 السلامة النفسية كواجب حوكمة / Psychological safety as a governance duty</h3>
    <p>إذا خاف الموظفون من الإذلال، فسيفشل التصعيد. السلامة النفسية هي ضابط أمان يجب على القيادة حمايته. (AHRQ)</p>

    <h2>6.10 أدوات عملية (جاهزة لنموذج كتابك) / Practical Tools</h2>

    <div class="success-box">
        <ul>
            <li><strong>6.10.1 الأداة 1 — قائمة تحقق بوابة الموقع/الإجراء/الغرسة الصحيحة:</strong><br>
            <strong>التحقق قبل الإجراء (الانتظار / قبل المسرح):</strong> مُعرّفان اثنان (The Joint Commission)، اسم الإجراء موحد ويطابق الحجز والموافقة، تحديد الجهة/الموقع/المستوى، التصوير متاح، تأكيد خطة الغرسة (النوع + نطاق الحجم + التوفر). (AORN)</li>
            <br>
            <li><strong>6.10.2 الأداة 2 — درجة جودة الـ Time-Out (ليس مربع اختيار):</strong><br>
            <strong>عناصر التقييم:</strong> توقف الجميع، تم نطق المريض/الإجراء/الموقع بصوت عالٍ، علامة الموقع مرئية ومؤكدة، تمت الإشارة للتصوير، تم تأكيد جاهزية الغرسة، تم حل التباين قبل الشق الجراحي. (WHO SSC; The Joint Commission)</li>
            <br>
            <li><strong>6.10.3 الأداة 3 — نموذج التحقق والتتبع للغرسات:</strong><br>
            اسم نظام الغرسة، توافق الجهة/الموقع، تأكيد نطاق الحجم، فحص العقامة، التقاط UDI/الملصق، توقيع الإنجاز قبل مغادرة المريض للغرفة. (AORN)</li>
            <br>
            <li><strong>6.10.4 الأداة 4 — بطاقة نص "إيقاف الخط" (Stop-the-line):</strong><br>
            "توقف من فضلك—فحص سلامة." (WHO SSC)<br>
            "تباين بين ___ و ___." (The Joint Commission)<br>
            "لا يمكننا المضي قدماً حتى يتم الحل والتوثيق." (The Joint Commission)</li>
        </ul>
    </div>

    <h2>6.11 القياس (كيف تثبت الموثوقية) / Measurement (How You Prove Reliability)</h2>

    <h3>6.11.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>درجة جودة الـ Time-out المُلاحظة (وليس مجرد إنجازه). (WHO SSC; IHI)</li>
        <li>عدد توقفات التباين قبل الشق الجراحي (إشارة تعلم). (AHRQ)</li>
        <li>الامتثال لرؤية علامة الموقع أثناء الـ Time-out. (The Joint Commission)</li>
        <li>معدل تأكيد جاهزية الغرسات قبل يوم الجراحة. (AORN; IHI)</li>
        <li>معدل اكتمال تتبع الغرسات. (AORN)</li>
    </ul>

    <h3>6.11.2 سرعة حلقة التعلم / Learning-loop speed</h3>
    <p>الأيام من حدث تباين ← إصلاح في النظام ← إعادة تدقيق. هذا يُثبت نضج الحوكمة. (IHI)</p>

    <h2>6.12 تأملات الكاتب بعد 25 عاماً (ما أود إخبار فرق العمليات الشابة به) / The Writer's Reflection</h2>

    <h3>6.12.1 الغرفة سترغب دائماً في المضي قدماً / The room will always want to move</h3>
    <p>الزخم (Momentum) طبيعي. لكن السلامة هي فن مقاومة الزخم في اللحظات المناسبة.</p>
    
    <h3>6.12.2 لا تستبدل أبداً دقيقة الآن بعمر لاحق / Never trade a minute now for a lifetime later</h3>
    <p>ندوب الموقع الخاطئ ليست فقط على الجلد. إنها تُندب الثقة، المهن، العائلات. لا يوجد جدول زمني يستحق ذلك. (The Joint Commission)</p>

    <h3>6.12.3 عندما تتأخر، يجب أن تزداد بوابات السلامة قوة / When you are late, your safety gates must get stronger</h3>
    <p>هذه هي قاعدتي الشخصية. إذا كانت القائمة متأخرة، نُبطئ عند التحقق. لأن التأخير هو عامل خطر، وليس مبرراً. (IHI)</p>
    <p><span class="english-term">This is my personal rule. If the list is late, we slow down at verification. Because lateness is a risk factor, not a justification. (IHI)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>السلامة في الموقع/الإجراء/الغرسة الصحيحة هي <strong>مشكلة تصميم نظام</strong>، وليست مشكلة "أشخاص حذرين". (IHI; AHRQ)<br>
            <span class="english-term">Correct site/procedure/implant safety is a <strong>system design problem</strong>, not a “careful people” problem.</span></li>
            
            <li>يجب أن تعمل ركائز البروتوكول العالمي كبوابات مترابطة: التحقق ← وضع العلامة ← الـ Time-out. (The Joint Commission)<br>
            <span class="english-term">Universal Protocol pillars must function as linked gates: verification → marking → time-out.</span></li>
            
            <li>يجب أن يكون الـ Time-out عالي الجودة: توقف تام، نموذج عقلي مشترك، توقف إلزامي عند التباين. (WHO SSC; The Joint Commission)<br>
            <span class="english-term">Time-out must be high quality: all stop, shared mental model, hard stop for mismatch.</span></li>
            
            <li>تُعد جاهزية الغرسات وتتبعها جزءاً من "الإجراء الصحيح"، وليست مجرد مشكلة إمداد (Supply issue). (AORN)<br>
            <span class="english-term">Implant readiness and traceability are part of “correct procedure,” not a supply issue.</span></li>
            
            <li>يجب أن يكون التصعيد مُهيكلاً بحيث يكون التحدث بصوت عالٍ آمناً، مُتوقعاً، ومحمياً. (AHRQ; IHI)<br>
            <span class="english-term">Escalation must be structured so speaking up is safe, expected, and protected.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>The Joint Commission. National Patient Safety Goals (Hospital Program).</li>
            <li>The Joint Commission. Universal Protocol for Preventing Wrong Site, Wrong Procedure, Wrong Person Surgery.</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources.</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety Resources (communication, speaking up, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Quality Improvement and Reliability Resources (human factors, reliability, leadership for safety).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  16: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 16 — Specimen Handling and Labelling: Zero-Tolerance Errors</h1>
    <div class="subtitle">الفصل السادس عشر — التعامل مع العينات وتسميتها: أخطاء لا يُتسامح معها<br>
    <span style="font-size: 18px;">(Specimen-ID Chain • Intra-op Labelling Discipline • Pathology Communication • Near-Miss Traps)<br>
    (سلسلة هوية العينة • انضباط التسمية داخل العملية • التواصل مع علم الأمراض • فخاخ الحوادث الوشيكة)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>وصف <strong>سلسلة هوية العينة (Specimen-ID chain)</strong> كـ "سلسلة عهدة" صارمة (جمع ← تسمية ← تحقق ← توثيق ← نقل ← استلام) وشرح لماذا يمكن أن تؤدي حلقة واحدة ضعيفة إلى تشخيص خاطئ أو علاج خاطئ. (AORN; AHRQ)<br>
            <span class="english-term">Describe the <strong>specimen-ID chain</strong> as a strict chain of custody (collect → label → verify → document → transport → receive) and explain why a single weak link can become wrong diagnosis or wrong treatment. (AORN; AHRQ)</span></li>
            
            <li>بناء <strong>انضباط التسمية داخل العملية (Intraoperative labelling discipline)</strong>: التسمية في نقطة الرعاية (Point-of-care)، اللحظات المحمية (Protected moments)، التحقق بالقراءة العكسية (Read-back verification)، وقواعد "عينة واحدة في كل مرة" التي تصمد أمام المقاطعات. (AORN; AHRQ; WHO SSC)<br>
            <span class="english-term">Build <strong>intraoperative labelling discipline</strong>: point-of-care labeling, protected moments, read-back verification, and “one specimen at a time” rules that survive interruptions. (AORN; AHRQ; WHO SSC)</span></li>
            
            <li>التواصل الفعال مع قسم علم الأمراض (Pathology): الواصفات الصحيحة للعينة، الجهة/المستوى (Laterality/level)، توجيه الحواف (Margin orientation)، التعامل الخاص (طازج/مجمد/ميكرو)، والإلحاح—باستخدام لغة الحلقة المغلقة. (AORN; AHRQ)<br>
            <span class="english-term">Communicate effectively with pathology: correct specimen descriptors, laterality/level, margin orientation, special handling (fresh/frozen/micro), and urgency—using closed-loop language. (AORN; AHRQ)</span></li>
            
            <li>التعرف على <strong>فخاخ الحوادث الوشيكة (Near-miss traps)</strong> وإبطال مفعولها: الحاويات المتعددة، الأسماء المتشابهة، "التسمية لاحقاً"، المقاطعات، التسليم (Handoffs)، الأكواب غير المسماة، وافتراض أن "شخصاً آخر سيعرف". (AHRQ; IHI)<br>
            <span class="english-term">Recognize and neutralize <strong>near-miss traps</strong>: multiple containers, similar names, “label later,” interruptions, handoffs, unlabeled cups, and “someone else will know.” (AHRQ; IHI)</span></li>
            
            <li>تنفيذ أدوات جاهزة للتدقيق: نص القراءة العكسية للعينة، قاعدة اللحظة المحمية، الإبلاغ عن الحوادث الوشيكة، ومقاييس الجودة لسلامة العينات. (IHI; AHRQ)<br>
            <span class="english-term">Implement audit-ready tools: specimen read-back script, protected moment rule, near-miss reporting, and quality metrics for specimen integrity. (IHI; AHRQ)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "وعاء صغير حمل قراراً يمس الحياة"</strong><br>
        <span class="english-term">A true-to-life case: “A small jar that carried a life decision” (Real Scientific Story)</span>
    </div>

    <p>في غرفة العمليات، يمكن أن تكون العينة (Specimen) أصغر جسم في الغرفة—ومع ذلك تظل الأثقل. بضعة مليمترات من الأنسجة يمكن أن تقرر العلاج الكيميائي، أو الخصوبة، أو البتر، أو الطمأنينة. هذا الاحترام هو سبب أهمية هذا الفصل.</p>
    <p><span class="english-term">In the OR, a specimen can be the smallest object in the room—and still be the heaviest. A few millimeters of tissue can decide chemotherapy, fertility, amputation, or reassurance. That respect is why this chapter matters.</span></p>

    <p>في أحد الصباحات، كان جراح يزيل آفة في الثدي. أُخذت العينة ومُررِت إلى الممرضة المعقمة (Scrub nurse)، التي وضعتها في كوب صغير من الستانلس ستيل على الطاولة الخلفية (Back table). ثم، حدث نزيف من وعاء دموي صغير. تحول انتباه الغرفة على الفور. طُلبت أدوات، واستُخدم الشفط (Suction). تم حل النزيف في غضون دقائق.</p>
    <p><span class="english-term">One morning, a surgeon was removing a breast lesion. The specimen was taken and passed to the scrub nurse, who placed it in a small stainless-steel cup on the back table. Then, a small vessel bled. The room’s attention shifted immediately. Instruments were requested, suction was used. The bleeding was resolved within minutes.</span></p>

    <p>عندما استقرت الغرفة، سأل الجراح: "هل أرسلتم ذلك المقطع التجميدي (Frozen section)؟"<br>
    نظرت الممرضة المعقمة إلى الطاولة الخلفية. كان هناك كوبان من الستانلس ستيل. أحدهما يحتوي على العينة. والآخر يحتوي على قطعة من نسيج شحمي طبيعي تم إزالتها أثناء الكي (Cautery clearance). كلاهما لم يكن يحمل ملصقاً.</p>
    <p><span class="english-term">When the room settled, the surgeon asked: “Did you send that frozen section?”<br>
    The scrub nurse looked at the back table. There were two stainless-steel cups. One contained the specimen. One contained a piece of normal fatty tissue removed during cautery clearance. Both were unlabeled.</span></p>

    <div class="alert-box">
        <p>شعرت الممرضة ببرودة تسري في جسدها. قالت: "لدينا قطعتان من الأنسجة هنا. أنا لست متأكدة أي منهما هي العينة الأساسية."</p>
        <p><span class="english-term">The nurse felt a cold wave. She said: “We have two pieces of tissue here. I am not sure which is the primary specimen.”</span></p>
    </div>

    <p>اضطر الجراح إلى إيقاف العملية، وكسر التعقيم، وفحص القطعتين يدوياً لتحديد آفة السرطان المشتبه بها. لقد حالفهم الحظ؛ كان الفرق واضحاً. لكن لو كانت القطعتان متشابهتين، لكان المريض سيستيقظ دون أن يعرف ما إذا كان السرطان قد أُزيل أم لا.</p>
    <p><span class="english-term">The surgeon had to pause, break scrub, and manually inspect the two pieces to identify the suspected cancer lesion. They were lucky; the difference was obvious. But if the pieces had been similar, the patient would have woken up not knowing if the cancer was removed.</span></p>

    <div class="success-box">
        <p>لا تحدث أخطاء العينات لأن الممرضات غير مباليات. إنها تحدث لأن <strong>السرعة والمقاطعات تُكسر سلسلة هوية العينة</strong>. عندما تعتمد العينة على الذاكرة بدلاً من الملصق الفوري، فإنك تلعب "الروليت الروسي" (لعبة حظ مميتة) مع تشخيص المريض. (AORN; AHRQ)</p>
        <p><span class="english-term">Specimen errors do not happen because nurses are careless. They happen because <strong>speed and interruptions break the specimen-ID chain</strong>. When a specimen relies on memory instead of an immediate label, you are playing Russian roulette with a patient’s diagnosis. (AORN; AHRQ)</span></p>
    </div>

    <h2>16.1 سلسلة هوية العينة (سلسلة العهدة)</h2>
    <h3>16.1 The Specimen-ID Chain (Chain of Custody)</h3>

    <h3>16.1.1 العينة ليست "قطعة"؛ إنها بيانات مريض</h3>
    <p>منذ لحظة قطع الأنسجة، تصبح جزءاً حاسماً من السجل الطبي للمريض. يجب أن تُدار هذه الأنسجة بنفس صرامة الدم المخصص لنقل الدم (Transfusion). (AORN)</p>
    <p><span class="english-term"><strong>16.1.1 A specimen is not a "piece"; it is patient data</strong><br>From the moment tissue is cut, it becomes a critical piece of the patient’s medical record. That tissue must be managed with the same strictness as blood meant for transfusion. (AORN)</span></p>

    <h3>16.1.2 خطوات سلسلة العهدة الست / The six chain-of-custody steps</h3>
    <p>إذا انكسرت أي من هذه الروابط، فإن التشخيص بأكمله ينهار:</p>
    <div class="concept-box">
        <ol>
            <li><strong>الجمع (Collect):</strong> يقوم الجراح بالقطع والتمرير، مُحدداً ماهية العينة <em>بصوت عالٍ</em>.</li>
            <li><strong>التسمية (Label):</strong> يتم تحضير الملصق <em>في نقطة الرعاية (Point of care)</em> في غرفة العمليات، وليس في الممر.</li>
            <li><strong>التحقق (Verify):</strong> تقرأ الممرضة الملصق <em>بصوت عالٍ (Read-back)</em> للتأكيد مع الجراح.</li>
            <li><strong>التوثيق (Document):</strong> يتم تسجيلها في السجل الجراحي أثناء الـ Sign-out. (WHO SSC)</li>
            <li><strong>النقل (Transport):</strong> يتم تسليمها يداً بيد أو عبر نظام هوائي (Pneumatic) آمن، دون أن تُترك أبداً دون رقابة.</li>
            <li><strong>الاستلام (Receive):</strong> يؤكد قسم علم الأمراض (Pathology) التطابق بين الوعاء، والطلب، وعينة الأنسجة. (AORN; AHRQ)</li>
        </ol>
        <p><span class="english-term">Collect → Label → Verify → Document → Transport → Receive. (AORN; AHRQ)</span></p>
    </div>

    <h2>16.2 انضباط التسمية داخل العملية (في نقطة الرعاية)</h2>
    <h3>16.2 Intraoperative Labelling Discipline (Point of Care)</h3>

    <h3>16.2.1 التسمية في نقطة الرعاية (لا توجد كلمة "لاحقاً")</h3>
    <p>الكلمة الأكثر خطورة في إدارة العينات هي "لاحقاً". <em>"سأضع الملصق لاحقاً،" "سأقوم بتسميتها بعد هذه الخطوة."</em> "لاحقاً" هو الوقت الذي تحدث فيه المقاطعات ويختفي السياق. <strong>يجب وضع الملصق على الوعاء بمجرد وضع العينة فيه.</strong> (AORN)</p>
    <p><span class="english-term"><strong>16.2.1 Point-of-care labelling (There is no "later")</strong><br>The most dangerous word in specimen management is “later.” <em>"I’ll label it later," "I’ll name it after this step."</em> "Later" is when interruptions happen and context disappears. <strong>The container must be labeled as soon as the specimen is placed in it.</strong> (AORN)</span></p>

    <h3>16.2.2 قاعدة "عينة واحدة في كل مرة" / "One specimen at a time"</h3>
    <p>إذا كان الجراح يزيل آفات متعددة (مثل الخزعات/Biopsies المتعددة)، فلا يجب أبداً تجميعها على الطاولة الخلفية لتُسمى لاحقاً كدفعة واحدة. تعامل مع عينة واحدة بالكامل (الجمع، وضع الملصق، التحقق) قبل الانتقال إلى العينة التالية. هذا يمنع تبديل الأوعية. (AHRQ)</p>
    <p><span class="english-term"><strong>16.2.2 The "one specimen at a time" rule</strong><br>If a surgeon is removing multiple lesions, they must never be batched on the back table to be labeled all at once. Process one specimen completely (collect, label, verify) before moving to the next. This prevents vessel swaps. (AHRQ)</span></p>

    <h3>16.2.3 التحقق بالقراءة العكسية (Read-back) (اللحظة المحمية)</h3>
    <p>التسمية الصامتة عرضة للخطأ. يجب أن تكون خطوة التسمية <strong>لحظة محمية (Protected moment)</strong> خالية من المشتتات.</p>
    <div class="success-box">
        <p><strong>قاعدة التمريض:</strong> تمسك الممرضة الوعاء ذو الملصق وتقرأ بصوت عالٍ: <em>"أقوم بإرسال عينة للمريض [الاسم الكامل]، الموصوفة كـ [الجهة والوصف الدقيق]."</em><br>
        يجب على الجراح الرد: <em>"هذا صحيح."</em> (AHRQ; WHO SSC)</p>
        <p><span class="english-term"><strong>Nursing Rule:</strong> The nurse holds the labeled container and reads out loud: <em>"I am sending a specimen for [Full Name], described as [Exact laterality and description]."</em> The surgeon must reply: <em>"That is correct."</em> (AHRQ; WHO SSC)</span></p>
    </div>

    <h2>16.3 التواصل مع علم الأمراض (كلمات تصنع الفارق)</h2>
    <h3>16.3 Communicating with Pathology (Words That Matter)</h3>

    <h3>16.3.1 الدقة تتفوق على الافتراض / Precision beats assumption</h3>
    <p>طبيب علم الأمراض (Pathologist) لا يمكنه رؤية المريض. إنهم يرون فقط الوعاء والكلمات التي تكتبها. إذا كتبت "كتلة"، فقد جعلت عملهم خطيراً. إذا كتبت "كتلة من الثدي الأيمن، الربع العلوي الخارجي، الحافة العلوية محددة بخيط حرير"، فقد أعطيتهم خريطة. (AORN)</p>
    <p><span class="english-term"><strong>16.3.1 Precision beats assumption</strong><br>The pathologist cannot see the patient. They only see the jar and the words you write. If you write "mass," you have made their job dangerous. If you write "right breast mass, upper outer quadrant, superior margin marked with silk tie," you have given them a map. (AORN)</span></p>

    <h3>16.3.2 متطلبات التعامل الخاص (التعرف عليها وتوضيحها)</h3>
    <p>يجب أن يعرف فريق غرفة العمليات بوضوح ما إذا كانت العينة تحتاج إلى:</p>
    <ul>
        <li><strong>مقطع تجميدي (Frozen section):</strong> للتحليل الفوري داخل العملية (يُرسل جافاً/طازجاً، وليس في الفورمالين).</li>
        <li><strong>الفورمالين (Formalin):</strong> للتثبيت الروتيني (تجنبه للعينات التي تتطلب زراعة حية أو دراسات جينية معينة).</li>
        <li><strong>الميكروبيولوجيا (Microbiology):</strong> يُرسل في محلول ملحي أو وعاء معقم للزراعة (Culture).</li>
        <li><strong>حصوات/أسنان:</strong> تُرسل جافة. (AORN)</li>
    </ul>
    <p>وضع عينة "مقطع تجميدي" في الفورمالين يدمرها إلى الأبد.</p>
    <p><span class="english-term">Placing a "frozen section" specimen into formalin destroys it forever.</span></p>

    <h2>16.4 "فخاخ الحوادث الوشيكة" (كيف تفشل الفرق الجيدة)</h2>
    <h3>16.4 The "Near-Miss Traps" (How Good Teams Fail)</h3>

    <div class="alert-box">
        <h3>16.4.1 فخ "الأسماء المتشابهة" / The "similar names" trap</h3>
        <p>إذا قمت بطباعة دفعة من ملصقات المرضى في بداية اليوم (ممارسة شائعة ولكنها خطيرة)، فقد تلتقط الممرضة ملصق مريض الحالة الأولى وتضعه على وعاء عينة مريض الحالة الثانية. <strong>قاعدة: لا تجلب أبداً ملصقات مريض إلى الغرفة لا تعود للمريض الموجود على الطاولة.</strong> (IHI; AHRQ)</p>
        <p><span class="english-term">If you print a batch of patient labels at the start of the day, a nurse might grab the first case’s label and put it on the second case’s jar. <strong>Rule: Never bring labels into a room that do not belong to the patient currently on the table.</strong> (IHI; AHRQ)</span></p>
        
        <h3>16.4.2 فخ "التسليم والمناولة" / The handoff trap</h3>
        <p>تستلم ممرضة التبديل (Relief nurse) الغرفة. تقول الممرضة المغادرة: "العينات هناك على الطاولة." إذا لم تكن تلك العينات مسماة <em>بالفعل</em> ومُدرجة في الـ Sign-out، فإن ممرضة التبديل أصبحت الآن في وضع تخمين. (AHRQ)</p>
        
        <h3>16.4.3 فخ "الملصق على الغطاء" / The "label on the lid" trap</h3>
        <p>إذا وضعت الملصق على الغطاء، وقام قسم علم الأمراض بفك أغطية ثلاثة أوعية في وقت واحد، فستنفصل الملصقات عن العينات. <strong>قاعدة: ضع الملصق دائماً على الوعاء نفسه، وليس على الغطاء.</strong> (AORN)</p>
        <p><span class="english-term">If you put the label on the lid, and pathology unscrews three lids at once, the labels are now separated from the specimens. <strong>Rule: Always place the label on the container itself, never just on the lid.</strong> (AORN)</span></p>
    </div>

    <h2>16.5 القصة الحقيقية 2: "الكوب غير المسمى على الطاولة الخلفية"</h2>
    <h3>16.5 Real Story 2: "The unlabeled cup on the back table"</h3>

    <div class="quote-box">
        <p><strong>المشهد:</strong> حالة أذن وأنف وحنجرة (ENT). طلب الجراح بعض المحلول الملحي (Saline) للغسيل، ودواءً موضعياً (Local anesthetic)، وكان هناك أيضاً عينة صغيرة من الأنسجة مأخوذة للزراعة (Culture). كانت جميعها في أكواب صغيرة متشابهة من الستانلس ستيل على الطاولة الخلفية للممرضة المعقمة. لم يكن لأي منها ملصق معقم.</p>
        <p><span class="english-term"><strong>The scene:</strong> An ENT case. The surgeon asked for some saline for irrigation, some local anesthetic, and there was also a small tissue specimen taken for culture. All three were in identical small stainless-steel cups on the scrub nurse's back table. None had a sterile label.</span></p>
        
        <p><strong>الخطر:</strong> كاد الجراح أن يحقن دواءً موضعياً ولكنه كان سيأخذ المحلول الملحي الممزوج بالدم من وعاء العينة. تم تجنب الحدث، لكنه كشف عن خطر مروع.</p>
        <p><span class="english-term"><strong>The danger:</strong> The surgeon almost injected local anesthetic but reached for the bloody saline from the specimen cup. The event was caught, but it exposed a terrifying risk.</span></p>
    </div>

    <p><strong>إصلاح النظام:</strong><br>
    تتطلب الممارسة المعقمة الحديثة أن <strong>يتم تسمية كل سائل وكل عينة على الحقل المعقم بمجرد سحبها أو أخذها.</strong> استخدم أقلام تحديد معقمة أو ملصقات معقمة مطبوعة مسبقاً. الأكواب غير المسماة هي حقول ألغام. (AORN; ISMP)</p>
    <p><span class="english-term"><strong>The system fix:</strong> Modern sterile practice requires that <strong>every fluid and every specimen on the sterile field must be labeled the moment it is drawn or taken.</strong> Use sterile markers or pre-printed sterile labels. Unlabeled cups are minefields. (AORN; ISMP)</span></p>

    <h2>16.6 أدوات عملية لموثوقية العينات</h2>
    <h3>16.6 Practical Tools for Specimen Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>16.6.1 الأداة 1 — نص القراءة العكسية للعينة (The Read-Back Script):</strong><br>
            مطبوع كملصق صغير على محطة الممرضة الدوارة: <em>"لدينا عينة لـ [اسم المريض]، [تاريخ الميلاد]، وهي عبارة عن [وصف]. هل هذا صحيح دكتور؟"</em> (AHRQ; WHO SSC)</li>
            <br>
            <li><strong>16.6.2 الأداة 2 — نموذج استلام قسم علم الأمراض (Pathology Receipt Log):</strong><br>
            يجب أن يوقع الناقل وقسم علم الأمراض على استلام العينة، مع تأكيد تطابق الملصق مع الطلب قبل مغادرة الناقل. يغلق هذا سلسلة العهدة. (AORN)</li>
            <br>
            <li><strong>16.6.3 الأداة 3 — تأكيد الـ Sign-out (قائمة منظمة الصحة العالمية):</strong><br>
            تتطلب قائمة التحقق من السلامة الجراحية (SSC) قبل خروج المريض أن تؤكد الممرضة بصوت عالٍ: <em>"تم تسمية العينة بوضوح (بما في ذلك اسم المريض)."</em> هذا هو الحاجز الأخير. (WHO SSC)</li>
        </ul>
    </div>

    <h2>16.7 القياس (كيف تعرف أن النظام يعمل)</h2>
    <h3>16.7 Measurement (How You Know It Works)</h3>

    <h3>16.7.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية للمهلات (Time-outs / Sign-outs) الملاحظة حيث حدثت قراءة عكسية (Read-back) للعينة بشكل صحيح. (WHO SSC)</li>
        <li>عدد الحوادث الوشيكة (Near-misses) المبلغ عنها والمتعلقة بالعينات (ارتفاع هذا الرقم يعني أن الثقافة تتحسن، والموظفون يكتشفون الأخطاء مبكراً). (IHI; AHRQ)</li>
    </ul>

    <h3>16.7.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>عدد العينات المرفوضة من قبل قسم علم الأمراض بسبب أخطاء في التسمية أو التوثيق أو عدم وجود وعاء مناسب.</li>
        <li>أحداث العينات المفقودة أو التي لا يمكن تعويضها (Lost/irreplaceable specimen events). (AORN)</li>
    </ul>

    <h2>16.15 تأملات الكاتب (العينة هي قصة مستقبلية)</h2>
    <h3>16.15 The Writer's Reflection (A specimen is a future story)</h3>
    <p><em>ملاحظة: تم الاحتفاظ بالترقيم كما هو في النص الأصلي.</em></p>

    <h3>16.15.1 العينة هي قصة مستقبلية / A specimen is a future story</h3>
    <p>العينة هي قصة عن جسد المريض. إذا أرفقنا الاسم الخاطئ، فإننا نكتب القصة الخاطئة—وشخص آخر سيتصرف بناءً عليها لاحقاً.</p>
    <p><span class="english-term"><strong>16.15.1 A specimen is a future story</strong><br>A specimen is a story about the patient’s body. If we attach the wrong name, we write the wrong story—and someone else acts on it later.</span></p>

    <h3>16.15.2 عدم التسامح لا يعني القسوة / Zero-tolerance does not mean harshness</h3>
    <p>عدم التسامح يعني <strong>عدم التسامح مع الغموض</strong>—مع معاملة الأشخاص بكرامة. الغرف الأكثر أماناً تتحدث بهدوء ووضوح. (AHRQ)</p>
    <p><span class="english-term"><strong>16.15.2 Zero-tolerance does not mean harshness</strong><br>Zero-tolerance means zero tolerance for ambiguity—while treating people with dignity. The safest rooms speak calmly and clearly. (AHRQ)</span></p>

    <h3>16.15.3 قاعدتي / My rule</h3>
    <p>إذا لم أستطع قول هوية العينة بصوت عالٍ بثقة تامة، فهي ليست جاهزة لمغادرة الغرفة. (AORN; AHRQ)</p>
    <p><span class="english-term"><strong>16.15.3 My rule</strong><br>If I cannot say the specimen identity out loud with confidence, it is not ready to leave the room. (AORN; AHRQ)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>سلامة العينة هي سلسلة عهدة (Chain of custody)؛ قم بالتسمية في نقطة الرعاية، تحقق بالقراءة العكسية، وثّق، وسلّم بوضوح. (AORN; AHRQ)<br>
            <span class="english-term">Specimen integrity is a chain of custody; label at point of care, verify with read-back, document and hand off with clarity.</span></li>
            
            <li>احمِ عملية التسمية باستخدام قواعد "عينة واحدة في كل مرة" واللحظات المحمية للتغلب على المقاطعات. (AHRQ; IHI)<br>
            <span class="english-term">Protect labeling with “one specimen at a time” and protected moments to defeat interruptions.</span></li>
            
            <li>يتطلب التواصل مع علم الأمراض واصفات (Descriptors) دقيقة وتسليماً مغلق الحلقة للعينات العاجلة. (AORN; AHRQ)<br>
            <span class="english-term">Pathology communication requires precise descriptors and closed-loop handoffs for urgent specimens.</span></li>
            
            <li>فخاخ الحوادث الوشيكة (Near-miss traps) يمكن التنبؤ بها—صمم نظامك لمنعها وتعلم منها بسرعة. (IHI)<br>
            <span class="english-term">Near-miss traps are predictable—design your system to prevent them and learn from them fast.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (specimen management, labeling discipline, perioperative communication concepts).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (communication, closed-loop verification, safety culture, learning systems).</li>
            <li>World Health Organization (WHO). WHO Surgical Safety Checklist and Implementation Resources (sign-out specimen confirmation and team communication concepts).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, measurement, learning loops, human factors under pressure).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  26: `<!-- Download Button -->
    

    <div class="part-title">PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs</div>
    <div class="part-title">الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة</div>
    
    <h1>CHAPTER 26 — Supply Chain, Sterile Stock, and Expiry Management</h1>
    <div class="subtitle">الفصل السادس والعشرون — سلسلة التوريد، المخزون المعقم، وإدارة انتهاء الصلاحية<br>
    <span style="font-size: 18px;">(Par Levels • Stock Rotation • Urgent Shortages • Waste Reduction Safely)<br>
    (مستويات المخزون الأساسية • تدوير المخزون • النواقص العاجلة • تقليل الهدر بأمان)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد سلسلة التوريد والمخزون في غرفة العمليات <strong>نظاماً لسلامة المرضى والعقامة</strong>، وليست مجرد لوجستيات، وكيف أن النواقص تدفع الفرق نحو التفافات (Workarounds) غير آمنة. (AORN; IHI; AHRQ)<br>
            <span class="english-term">Explain why supply chain and stock in the OR is a <strong>patient safety and sterility system</strong>, not just logistics, and how shortages drive teams toward unsafe workarounds. (AORN; IHI; AHRQ)</span></li>
            
            <li>بناء وإدارة <strong>مستويات المخزون الأساسية (Par Levels)</strong> بطريقة تعمل كـ "هوامش أمان" تمنع كلاً من النواقص الخطيرة (التي تسبب التأخير والارتجال) وتكدس المخزون الزائد (الذي يسبب انتهاء الصلاحية والفوضى). (IHI; AHRQ)<br>
            <span class="english-term">Build and manage <strong>Par Levels</strong> in a way that acts as "safety buffers," preventing both dangerous shortages (causing delay/improvisation) and overstocking (causing expiry/clutter). (IHI; AHRQ)</span></li>
            
            <li>تطبيق سياسات <strong>تدوير المخزون وإدارة انتهاء الصلاحية (Stock Rotation and Expiry Management)</strong> لضمان موثوقية العقامة، باستخدام مبادئ الإدارة المرئية وقاعدة "ما تنتهي صلاحيته أولاً، يخرج أولاً" (FEFO). (AORN; AAMI ST79 concepts)<br>
            <span class="english-term">Apply <strong>Stock Rotation and Expiry Management</strong> policies to ensure sterility reliability, using visual management principles and the FEFO (First Expired, First Out) rule. (AORN; AAMI ST79 concepts)</span></li>
            
            <li>تطوير مسار محكوم وآمن للتعامل مع <strong>النواقص العاجلة (Urgent Shortages)</strong> والبدائل (Substitutions)، بحيث لا يتم اللجوء للارتجال دون موافقة الحوكمة. (AHRQ; ECRI concepts)<br>
            <span class="english-term">Develop a governed and safe pathway for handling <strong>Urgent Shortages</strong> and substitutions, so improvisation does not happen without governance approval. (AHRQ; ECRI concepts)</span></li>
            
            <li>تنفيذ استراتيجيات <strong>لتقليل الهدر (Waste Reduction)</strong> بأمان من خلال تحديد الحجم المناسب للحزم، وتوحيد وحدات حفظ المخزون (SKUs)، دون المساومة أبداً على معايير العقامة أو إعادة الاستخدام غير الآمن. (IHI; AORN)<br>
            <span class="english-term">Implement strategies for safe <strong>Waste Reduction</strong> through right-sizing packs and standardizing SKUs, without ever compromising sterility standards or forcing unsafe reuse. (IHI; AORN)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Narrative</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "عندما يتحول نقص بسيط إلى خطر مركب"</strong><br>
        <span class="english-term">A true-to-life case: “When a simple missing item becomes a compound risk” (Real Scientific Story)</span>
    </div>

    <p>لقد رأيت جراحين ممتازين، وأطباء تخدير ماهرين، وممرضين منضبطين يفقدون إيقاعهم لأن عنصراً بسيطاً كان مفقوداً. ليس غرسة معقدة. ليس جهازاً نادراً. شيء عادي—أنبوب شفط معقم، حجم معين من خيوط الجراحة، طقم غسيل (Irrigation set)، أو حزمة فرش جراحي (Drape pack).</p>
    <p><span class="english-term">Clinical practice has shown excellent surgeons, skilled anesthetists, and disciplined nurses lose their rhythm because a simple item was missing. Not a complex implant. Not a rare device. Something ordinary—sterile suction tubing, a specific size of suture, an irrigation set, a drape pack.</span></p>

    <p>في أحد الصباحات، بدأت حالة متأخرة لأن "الحزمة المعقمة القياسية" (Standard sterile pack) لم تكن متوفرة. قام الفريق بالارتجال من خلال فتح عدة عبوات صغيرة، وبناء طقم بديل على الطاير (On the fly).</p>
    <p><span class="english-term">One morning, a case started late because a “standard” sterile pack wasn’t available. The team improvised by opening multiple smaller packs, building a substitute set on the fly.</span></p>

    <div class="alert-box">
        <p>لم يبدُ أي شيء غير آمن في البداية—حتى أدركنا أن هذا الحل الارتجالي (Workaround) خلق ثلاثة مخاطر جديدة في وقت واحد:</p>
        <p><span class="english-term">Nothing seemed unsafe at first—until we realized the workaround created three new risks at once:</span></p>
        <ol>
            <li>الفتحات الإضافية زادت من فرص <strong>التلوث (Contamination)</strong>.</li>
            <li>عملية <strong>العد الجراحي (Count process)</strong> أصبحت أكثر تعقيداً وعرضة للخطأ.</li>
            <li><strong>ضغط الوقت (Time pressure)</strong> ارتفع وأثّر على سير العملية. (AORN; AHRQ)</li>
        </ol>
    </div>

    <p>في وقت لاحق من ذلك الأسبوع، اكتشفت غرفة أخرى عناصر معقمة منتهية الصلاحية داخل عربة التجهيز الأساسية (Core cart)—لم يقصد أحد إحداث ضرر. النظام ببساطة سمح لانتهاء الصلاحية بالاختباء حتى تم اكتشافه في أسوأ وقت: أثناء تحضير المريض. (AORN; AAMI ST79 concepts)</p>
    <p><span class="english-term">Later that week, another room discovered expired sterile items inside a core cart—nobody meant harm. The system simply allowed expiry to hide until it was discovered at the worst time: during patient preparation. (AORN; AAMI ST79 concepts)</span></p>

    <div class="success-box">
        <p>عندها أصبح الأمر واضحاً بالنسبة لي: <strong>سلسلة التوريد ليست لوجستيات. في غرفة العمليات، سلسلة التوريد هي العقامة، والوقت، والسلامة—مُغلفة معاً.</strong> إذا كان المخزون غير مستقر، تُدفع الفرق نحو الاختصارات. إذا كانت إدارة انتهاء الصلاحية ضعيفة، تصبح موثوقية العقامة مقامرة. إذا كانت مستويات التخزين غير واقعية، يقضي الموظفون طاقتهم الإدراكية في "البحث والصيد" بدلاً من رعاية المرضى. (IHI; AHRQ)</p>
        <p><span class="english-term">That’s when it became clear to me: <strong>Supply chain is not logistics. In the OR, supply chain is sterility, time, and safety—packaged together.</strong> If stock is unstable, teams are pushed toward shortcuts. If expiry management is weak, sterility reliability becomes a gamble. If par levels are unrealistic, staff spend their cognitive energy hunting instead of caring. (IHI; AHRQ)</span></p>
    </div>

    <p>يدور هذا الفصل حول بناء مستودع غرفة عمليات (OR stockroom) يدعم السلامة السريرية بصمت ولكن بقوة.</p>
    <p><span class="english-term">This chapter is about building an OR stockroom that quietly but powerfully supports clinical safety.</span></p>

    <h2>26.1 المنطق الأمني لسلسلة التوريد (ليست مجرد صناديق على الرفوف)</h2>
    <h3>26.1 The Safety Logic of Supply Chain (Not Just Boxes on Shelves)</h3>

    <h3>26.1.1 سلسلة التوريد هي "المنظّم الصامت" لغرفة العمليات / Supply chain is the OR’s silent regulator</h3>
    <p>عندما تكون الإمدادات متاحة وموثوقة، تبقى الغرفة هادئة. عندما تكون الإمدادات غير متوقعة، ترتفع حركة المرور (يغادر الناس الغرفة للبحث عن الأشياء)، وتُفتح الأبواب، وتزداد أوقات التبديل (Turnover)، ويُصاب الجراحون بالإحباط. <strong>الاستقرار التمويني يساوي الاستقرار السريري.</strong> (IHI)</p>
    <p><span class="english-term"><strong>26.1.1 Supply chain is the OR’s silent regulator</strong><br>When supplies are available and reliable, the room is calm. When supplies are unpredictable, traffic rises (people leave the room to hunt for things), doors open, turnovers lengthen, and surgeons get frustrated. <strong>Supply stability equals clinical stability.</strong> (IHI)</span></p>

    <h3>26.1.2 الاكتناز (Hoarding) هو أحد أعراض ضعف الثقة / Hoarding is a symptom of poor trust</h3>
    <p>إذا رأيت ممرضات يخبئن عناصر معينة في أدراج الغرفة أو خزائنها الشخصية، فلا تعاقبهن. الاكتناز (Hoarding) هو تكيف بشري مع نظام غير موثوق. إنهن يحمين مرضاهن. الحل ليس في مصادرة المخبآت، بل في <strong>إصلاح موثوقية التوريد المركزي</strong>. (AHRQ; IHI)</p>
    <p><span class="english-term"><strong>26.1.2 Hoarding is a symptom of poor trust</strong><br>If you see nurses hiding specific items in room drawers or personal lockers, do not punish them. Hoarding is a human adaptation to an unreliable system. They are protecting their patients. The fix is not to confiscate the stash; the fix is to <strong>make the central supply reliable</strong>. (AHRQ; IHI)</span></p>

    <h2>26.2 مستويات المخزون الأساسية (Par Levels): منطقة الأمان (The Buffer Zone)</h2>
    <h3>26.2 Par Levels: The Buffer Zone</h3>

    <h3>26.2.1 ما هو مستوى הـ Par؟ / What is a Par Level?</h3>
    <p>مستوى الـ Par (مستوى التخزين الأساسي) هو الحد الأدنى من كمية العنصر التي يجب أن تكون متاحة في أي وقت لضمان تدفق الحالات دون انقطاع حتى عملية إعادة التعبئة (Restock) التالية. (IHI)</p>
    <p><span class="english-term"><strong>26.2.1 What is a Par Level?</strong><br>A par level is the minimum quantity of an item that must be available at any given time to ensure uninterrupted case flow until the next restock. (IHI)</span></p>

    <h3>26.2.2 المخاطر المزدوجة للأرقام الخاطئة / The dual risks of wrong numbers</h3>
    <p>إذا قمت بتعيين الـ Par منخفضاً جداً بهدف "توفير المال" (Lean gone wrong)، فإنك تخلق نواقص تدفع نحو <strong>الالتفافات غير الآمنة (Unsafe workarounds)</strong> وتأخير الحالات.</p>
    <p>إذا قمت بتعيين الـ Par مرتفعاً جداً بهدف "الشعور بالأمان"، فإنك تخلق <strong>تكدساً (Clutter)</strong>، مما يجعل العثور على الأشياء صعباً ويؤدي حتماً إلى <strong>انتهاء الصلاحية (Expiry)</strong> والهدر. (IHI)</p>
    <p><span class="english-term"><strong>26.2.2 The dual risks of wrong numbers</strong><br>If you set the par too low to “save money” (Lean gone wrong), you create shortages that drive <strong>unsafe workarounds</strong> and case delays.<br>If you set the par too high to “feel safe,” you create <strong>clutter</strong>, which makes finding things hard and inevitably leads to <strong>expiry</strong> and waste. (IHI)</span></p>

    <h3>26.2.3 الرياضيات المبنية على الواقع / Reality-based math</h3>
    <p>يجب تعيين مستويات الـ Par بناءً على <strong>الاستخدام الفعلي (Actual usage)</strong> + هامش أمان بسيط. يجب مراجعتها ربع سنوياً لأن تفضيلات الجراحين وأحجام الحالات تتغير. (IHI)</p>

    <h2>26.3 تدوير المخزون وانتهاء الصلاحية (منع المخاطر الصامتة)</h2>
    <h3>26.3 Stock Rotation and Expiry (Preventing Silent Hazards)</h3>

    <h3>26.3.1 العقامة والتدهور / Sterility and degradation</h3>
    <p>تعتبر العقامة "مرتبطة بالحدث" (Event-related)، ولكن سلامة العبوات ومواد الأجهزة تتدهور بمرور الوقت. تاريخ انتهاء الصلاحية ليس اقتراحاً؛ إنه <strong>توقف إلزامي لضمان السلامة (Safety hard stop)</strong>. إن استخدام دعامة (Stent) أو خيط جراحي منتهي الصلاحية يعرض المريض لردود فعل غير متوقعة أو فشل ميكانيكي. (AORN; AAMI ST79 concepts)</p>
    <p><span class="english-term"><strong>26.3.1 Sterility and degradation</strong><br>Sterility is event-related, but packaging integrity and device materials degrade over time. Expiry is not a suggestion; it is a <strong>safety hard stop</strong>. Using an expired stent or suture subjects the patient to unpredictable reactions or mechanical failure. (AORN; AAMI ST79 concepts)</span></p>

    <h3>26.3.2 قاعدة FEFO (ما تنتهي صلاحيته أولاً، يخرج أولاً) / FEFO rule</h3>
    <p>يجب أن يُخزن المخزون المعقم دائماً باستخدام نظام "ما تنتهي صلاحيته أولاً، يخرج أولاً" (First Expired, First Out) أو FIFO (ما يدخل أولاً يخرج أولاً). المخزون الجديد يوضع دائماً في الخلف أو في الأسفل. المخزون الأقدم يوضع في الأمام. <strong>يجب تدريب الموظفين على عدم أخذ العناصر من الخلف أبداً.</strong> (AORN)</p>
    <p><span class="english-term"><strong>26.3.2 FEFO rule (First Expired, First Out)</strong><br>Sterile stock must always be stocked using FEFO or FIFO (First In, First Out). New stock goes to the back or bottom. Older stock stays in the front. <strong>Staff must be trained to never grab from the back.</strong> (AORN)</span></p>

    <h3>26.3.3 تدقيق انتهاء الصلاحية ليس عملاً عشوائياً / Expiry audits are not random</h3>
    <p>لا يجب أن يعتمد فحص تواريخ انتهاء الصلاحية على أوقات الفراغ. يجب تعيينه للموظفين (أو فريق الإمداد) شهرياً. أي عنصر يقترب من انتهاء صلاحيته خلال 30-60 يوماً يجب وضع علامة عليه بصرياً (مثل ملصق ملون) ليتم استخدامه أولاً، أو إزالته إذا كان استخدامه غير محتمل. (IHI)</p>
    <p><span class="english-term"><strong>26.3.3 Expiry audits are not random</strong><br>Checking expiry dates should not depend on free time. It must be assigned to staff (or supply team) monthly. Anything expiring within 30–60 days should be visually flagged (e.g., color sticker) to be used first, or removed if unlikely to be used. (IHI)</span></p>

    <h2>26.4 النواقص العاجلة (كيفية إدارتها بأمان)</h2>
    <h3>26.4 Urgent Shortages (How to Manage Them Safely)</h3>

    <h3>26.4.1 النواقص هي أزمات سلامة / Shortages are safety crises</h3>
    <p>عندما ينقص عنصر أساسي (شفرة معينة، حجم خيط، سائل وريدي/IV fluid)، فإن الغرفة تفقد توازنها. يرتفع خطر الأخطاء (مثل أخطاء الأدوية المتشابهة في الشكل والصوت/LASA، أو الارتجال الجراحي) بشكل حاد. (AHRQ; ECRI concepts)</p>
    <p><span class="english-term"><strong>26.4.1 Shortages are safety crises</strong><br>When a staple item is short (a specific blade, a suture size, an IV fluid), the room destabilizes. The risk of error (like LASA medication errors, or surgical improvisation) spikes. (AHRQ; ECRI concepts)</span></p>

    <h3>26.4.2 قاعدة الاستبدال المحكوم / The Governed Substitution rule</h3>
    <div class="alert-box">
        <p>لا يمكن للممرضين أو الجراحين اتخاذ قرار الاستبدال بمفردهم أثناء الحالة (إلا إذا كان ذلك لإنقاذ حياة المريض). <strong>يجب حوكمة البدائل.</strong></p>
        <p>إذا كان العنصر أ غير متوفر، فإن البديل بالعنصر ب يجب أن يُوافق عليه طبياً، ويُتواصل بشأنه بوضوح مع جميع الموظفين (لتجنب الارتباك عند التسليم)، ويُوثق.</p>
        <p><span class="english-term"><strong>26.4.2 The Governed Substitution rule</strong><br>Nurses or surgeons cannot unilaterally decide on a substitute in the middle of a case (unless lifesaving). <strong>Substitutions must be governed.</strong> If Item A is short, the substitute Item B must be medically approved, clearly communicated to all staff (to avoid handoff confusion), and documented.</span></p>
    </div>

    <h3>26.4.3 التواصل أثناء النواقص (التخلص من المفاجآت)</h3>
    <p>يجب أن تكون النواقص المعروفة جزءاً من <strong>الاجتماع السريع الصباحي (Morning Huddle)</strong>. لا ينبغي أبداً أن يفتح الجراح مريضاً ويكتشف أن الأداة المفضلة لديه غير متوفرة في المستشفى. إخفاء النواقص هو بمثابة إخفاء للمخاطر. (AHRQ)</p>

    <h2>26.5 تقليل الهدر بأمان (الإدارة الرشيقة مقابل التوفير الرخيص)</h2>
    <h3>26.5 Waste Reduction Safely (Lean vs. Cheap)</h3>

    <h3>26.5.1 الهدر الهائل في غرفة العمليات / The massive OR waste</h3>
    <p>تنتج غرف العمليات هدراً هائلاً (مئات الآلاف من الدولارات من الإمدادات المفتوحة غير المستخدمة). تنشأ الرغبة في "تقليل الهدر". (IHI)</p>
    <p><span class="english-term"><strong>26.5.1 The massive OR waste</strong><br>ORs generate massive waste (hundreds of thousands of dollars of opened, unused supplies). The urge to "reduce waste" arises. (IHI)</span></p>

    <h3>26.5.2 الخطر: "تقليل التكلفة" الأعمى / The danger: blind cost-cutting</h3>
    <p>إذا فرضت الإدارة تقليصاً أعمى (على سبيل المثال: "توقفوا عن فتح هذه الحزمة الإضافية")، فسيجد الموظفون أنفسهم في منتصف جراحة ينقصهم فيها عنصر حرج، مما يضطرهم إلى فتح الأبواب والركض في الممرات. <strong>هذا الهدر للوقت وزيادة خطر العدوى يكلف أكثر بكثير من العنصر نفسه.</strong> (AORN; IHI)</p>
    <p><span class="english-term"><strong>26.5.2 The danger: blind cost-cutting</strong><br>If management forces blind reduction (e.g., "stop opening this extra pack"), staff will find themselves mid-surgery missing a critical item, forcing doors open and runners into the hall. <strong>That wasted time and increased infection risk costs far more than the item.</strong> (AORN; IHI)</span></p>

    <h3>26.5.3 الطريقة الآمنة لتقليل الهدر / The safe way to reduce waste</h3>
    <ul>
        <li><strong>توحيد وحدات حفظ المخزون (Standardize SKUs):</strong> قلل من تنوع العناصر المتشابهة. إذا كان الجراحون يمكنهم الاتفاق على نوعين من القفازات بدلاً من سبعة، فإن الإدارة ستتحسن، والارتباك سيقل. (IHI)</li>
        <li><strong>تحجيم حزم الجراحة (Right-size custom packs):</strong> راجع حزم الجراحة (Custom packs) الخاصة بك. إذا كان هناك عنصر يتم رميه دائماً لأنه غير مستخدم، أزله من الحزمة. (IHI; AORN)</li>
        <li><strong>قاعدة الفتح:</strong> جهز العناصر في الغرفة (Hold in room)، ولكن لا تفتحها (Do not open) حتى يطلبها الجراح بشكل مؤكد.</li>
    </ul>

    <h2>26.6 القصة الحقيقية 2: "عربة التجهيز التي كانت مزدحمة جداً بالسلامة"</h2>
    <h3>26.6 Real Story 2: "The Core Cart That Was Too Crowded with Safety"</h3>

    <div class="quote-box">
        <p>كان هناك مستشفى يمتلك عربة إمدادات مركزية (Core supply cart). كانت الإدارة قلقة جداً من النواقص لدرجة أنهم قاموا بزيادة مستويات الـ Par (تخزين كل شيء) ليضمنوا عدم نفاد أي شيء أبداً.</p>
        <p><span class="english-term">A hospital had a core supply cart. Management was so worried about shortages that they increased Par levels (stocking everything) to ensure they never ran out.</span></p>
        
        <p>كانت النتيجة هي التكدس (Clutter). كانت السلال تفيض. وعندما كانت الممرضات الدوارات في عجلة من أمرهن أثناء الجراحة، كنّ لا يستطعن العثور على الأنبوب الدقيق أو الإبرة المطلوبة بسرعة وسط هذه الفوضى.</p>
        <p><span class="english-term">The result was clutter. Bins overflowed. When circulating nurses were in a rush during surgery, they could not find the exact tubing or needle quickly among the mess.</span></p>
        
        <p>في إحدى الحالات، التقطت ممرضة عنصر التخثر الخاطئ بسبب ازدحام الرف. بعد ذلك، قمنا بتقليل مستويات الـ Par إلى أرقام تعكس <strong>الواقع بدلاً من الخوف</strong>. كما قمنا بإنشاء "وحدة معقمة إضافية" (Add-on sterile module) للاحتياجات النادرة.</p>
        <p><span class="english-term">In one case, a nurse grabbed the wrong hemostatic agent because the shelf was so crowded. Afterward, we reduced Par levels to reflect <strong>reality rather than fear</strong>, and created an “add-on sterile module” for rare needs.</span></p>
        
        <p>انخفض الهدر، وأصبحت الغرفة أسرع—لأن تقليل الفوضى يعني سير عمل أوضح (Clearer workflow). (IHI)</p>
        <p><span class="english-term">Waste dropped, and the room became faster—because less clutter meant clearer workflow. (IHI)</span></p>
    </div>

    <h2>26.7 أدوات عملية لسلامة سلسلة التوريد</h2>
    <h3>26.7 Practical Tools for Supply Chain Safety</h3>

    <div class="success-box">
        <ul>
            <li><strong>26.7.1 الأداة 1 — صناديق مستوى المخزون المرئية (Visual Par Level Bins):</strong><br>
            استخدم نظام السلتين (Two-bin system / Kanban). عندما تفرغ السلة الأمامية، يتم سحبها لطلب إعادة التعبئة، ويستخدم الموظفون السلة الخلفية. هذا يضمن عدم نفاد المخزون ويوفر إشارة مرئية للطلب. (IHI)</li>
            <br>
            <li><strong>26.7.2 الأداة 2 — ملصق "ينتهي قريباً" (Expiring Soon Sticker):</strong><br>
            استخدم ملصقات ملونة زاهية (مثل الأصفر الساطع) لتمييز العناصر التي ستنتهي صلاحيتها خلال الشهر الحالي أو القادم، لتشجيع استخدامها أولاً (FEFO). (AORN)</li>
            <br>
            <li><strong>26.7.3 الأداة 3 — بطاقة تبليغ "نقص حرج" (Critical Shortage Flashcard):</strong><br>
            في الاجتماع الصباحي (Huddle)، يتم الإعلان عن: "النواقص اليوم: العنصر X. البديل المعتمد هو: العنصر Y." يتم تعليق هذه البطاقة على لوحة الغرفة ليراها الجميع. (AHRQ)</li>
        </ul>
    </div>

    <h2>26.8 القياس (كيف تعرف أن مخزونك موثوق)</h2>
    <h3>26.8 Measurement (How to Know Your Stock is Reliable)</h3>

    <h3>26.8.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية لتوفر العناصر الأساسية في عربة التجهيز (Stock-out rate). يجب أن يكون قريباً من الصفر. (IHI)</li>
        <li>الامتثال لعمليات تدقيق انتهاء الصلاحية الشهرية (النسبة المئوية للرفوف التي تم فحصها وتوثيقها).</li>
        <li>عدد الحوادث الوشيكة أو التأخيرات الناتجة عن "البحث عن إمدادات" (Hunting for supplies) لكل 100 حالة. (AHRQ)</li>
    </ul>

    <h3>26.8.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>قيمة (تكلفة) الإمدادات المفتوحة وغير المستخدمة التي تم التخلص منها شهرياً (مؤشر الهدر).</li>
        <li>تكلفة الإمدادات منتهية الصلاحية التي تم إتلافها.</li>
    </ul>

    <h2>26.9 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>26.9 The Writer's Reflection</h3>
    <p><em>ملاحظة: تم تكييف الترقيم ليتناسب مع التسلسل.</em></p>

    <h3>26.9.1 الفوضى عبء معرفي / Clutter is cognitive load</h3>
    <p>عندما تكون الرفوف مزدحمة بشكل مفرط، يحتاج الدماغ إلى العمل بجهد أكبر للعثور على الشيء الصحيح. وفي حالات الطوارئ، يؤدي العبء المعرفي المرتفع إلى أخطاء فادحة. الترتيب هو استراتيجية سلامة. (IHI)</p>
    <p><span class="english-term"><strong>26.9.1 Clutter is cognitive load</strong><br>When shelves are overstuffed, the brain has to work harder to find the right thing. In an emergency, high cognitive load leads to critical errors. Tidiness is a safety strategy. (IHI)</span></p>

    <h3>26.9.2 الموردون ليسوا أعداء، بل شركاء</h3>
    <p>إنشاء علاقة شفافة مع إدارة المشتريات (Procurement) هو الحل. دعهم يفهمون أن "توفير بضعة دولارات" في أنبوب شفط رخيص قد يكلف المستشفى آلاف الدولارات في وقت غرفة العمليات الضائع بسبب انكساره أثناء الجراحة.</p>
    <p><span class="english-term"><strong>26.9.2 Procurement is a partner, not an enemy</strong><br>Create a transparent relationship with procurement. Let them understand that "saving a few dollars" on a cheap suction tube might cost the hospital thousands in lost OR time when it breaks mid-surgery.</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember From This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>مستويات الـ Par هي هوامش أمان (Safety buffers): الانخفاض الشديد يخلق نواقص وحلولاً ارتجالية خطيرة؛ والارتفاع الشديد يخلق انتهاء صلاحية وفوضى. (IHI; AHRQ)<br>
            <span class="english-term">Par levels are safety buffers: too low creates shortages and risky workarounds; too high creates expiry and clutter.</span></li>
            
            <li>التحكم في التدوير وانتهاء الصلاحية يحمي موثوقية العقامة—تطبيق FEFO/FIFO، والإدارة المرئية تمنع "مفاجآت انتهاء الصلاحية". (AORN; AAMI ST79 concepts)<br>
            <span class="english-term">Rotation and expiry control protect sterility reliability—FEFO/FIFO, visual management, and assigned ownership prevent “expiry surprises.”</span></li>
            
            <li>يجب التحكم في الاستجابة للنواقص: بدائل معتمدة، تواصل بين الفريق، وتوثيق—لا ارتجال دون حوكمة. (AHRQ; AORN)<br>
            <span class="english-term">Shortage response must be controlled: approved substitutions, team communication, documentation, and reporting—no improvisation without governance.</span></li>
            
            <li>تقليل الهدر يجب أن يكون آمناً: تحديد الحجم المناسب للعبوات، توحيد وحدات المخزون (SKUs)، وتحسين التدوير—لا تتنازل أبداً عن العقامة أو تفرض إعادة استخدام غير آمنة. (IHI; AORN)<br>
            <span class="english-term">Waste reduction must be safe: right-size packs, standardize SKUs, improve rotation—never cut corners on sterility or force unsafe reuse.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN) — Guidelines for Perioperative Practice (sterile supplies handling, storage integrity, perioperative workflow safety concepts).</li>
            <li>Association for the Advancement of Medical Instrumentation (AAMI). ANSI/AAMI ST79 (concepts) — Sterility assurance and sterile package handling/storage principles relevant to stock integrity and distribution.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ) — Patient safety resources (human factors under pressure, interruptions, systems approach, escalation culture).</li>
            <li>Institute for Healthcare Improvement (IHI) — Reliability and quality improvement resources (standard work, par level logic, waste reduction without harm, visual management).</li>
            <li>ECRI (concepts) — Supply and technology risk concepts relevant to shortage management and safe substitution principles.</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  10: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 10 — Theatre Asepsis and Sterile Field Reliability</h1>
    <div class="subtitle">الفصل العاشر — تعقيم المسرح الجراحي وموثوقية الحقل المعقم<br>
    <span style="font-size: 18px;">(Sterile Technique Failures • Traffic/Doors • Field Breaks • Immediate Corrective Actions)<br>
    (إخفاقات التقنية المعقمة • حركة المرور/الأبواب • اختراقات الحقل • الإجراءات التصحيحية الفورية)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح العقامة (Asepsis) كـ <strong>نظام عالي الموثوقية (High-reliability system)</strong> يتكون من (حواجز + سلوكيات + خوارزميات استجابة)، وليس مجرد مفهوم يعتمد على "الشخص الحذر". (AORN; WHO SSI; CDC SSI)<br>
            <span class="english-term">Explain asepsis as a <strong>high-reliability system</strong> (barriers + behaviors + response algorithms), not a “careful person” concept. (AORN; WHO SSI; CDC SSI)</span></li>
            
            <li>التعرف على أنماط الفشل الواقعية للتقنية المعقمة—خاصة "الأمور الطبيعية الصغيرة" (Small normals) التي تزيد بهدوء من خطر التلوث. (AORN; AHRQ)<br>
            <span class="english-term">Recognize the real-world failure modes of sterile technique—especially the “small normals” that quietly increase contamination risk. (AORN; AHRQ)</span></li>
            
            <li>التحكم في حركة المرور في غرفة العمليات وفتح الأبواب من خلال <strong>تصميم الجاهزية (Readiness design)</strong>، وليس من خلال الجدال أو أداء دور الشرطي. (AORN; WHO SSI; IHI)<br>
            <span class="english-term">Control OR traffic and door openings through <strong>readiness design</strong>, not arguing or policing. (AORN; WHO SSI; IHI)</span></li>
            
            <li>الاستجابة لاختراقات الحقل المعقم باستخدام خوارزمية متسقة وقابلة للتعليم تعمل تحت ضغط الوقت وتحمي السلامة النفسية. (AORN; AHRQ; IHI)<br>
            <span class="english-term">Respond to sterile field breaks using a consistent, teachable algorithm that works under time pressure and protects psychological safety. (AORN; AHRQ; IHI)</span></li>
            
            <li>تنفيذ أدوات عملية (بطاقة الاستجابة لاختراق العقامة، سجل فتح الأبواب، تدقيق العقامة، حلقة التعلم) وتتبع مؤشرات الموثوقية بمرور الوقت. (IHI; AORN)<br>
            <span class="english-term">Implement practical tools (sterile break response card, door-opening log, asepsis audit, learning loop) and track reliability indicators over time. (IHI; AORN)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "الاختراق الذي لم يُرد أحد تسميته"</strong><br>
        <span class="english-term">A true-to-life case: “The break nobody wanted to name” (Real Scientific Story)</span>
    </div>

    <p>هناك لحظة في كل غرفة عمليات يبدأ فيها الوقت بالضغط. ليس بصوت عالٍ—بل بهدوء. القائمة متأخرة، الهاتف يرن، المساعد مشغول، وتبدأ الغرفة في التعامل مع المقاطعات كأمر طبيعي. في تلك اللحظات، تصبح العقامة (Asepsis) هشة لأن التهديد غير مرئي.</p>
    <p><span class="english-term">There is a moment in every operating theatre when time begins to push. Not loudly—quietly. The list is behind, the phone rings, the runner is busy, and the room starts to treat interruptions as normal. In those moments, asepsis becomes vulnerable because the threat is invisible.</span></p>

    <p>أتذكر حالة طويلة كان فيها الفريق قوياً وكان المريض مستقراً. أثناء إعادة تموضع جهاز طبي، لامس كم أحدهم حافة الفرش الجراحي (Drape). كانت لمسة خفيفة جداً. رأتها ممرضة مبتدئة. ورآها أيضاً فني التخدير.</p>
    <p><span class="english-term">I remember a long case where the team was strong and the patient was stable. During a repositioning of equipment, a sleeve brushed the edge of a drape. It was a very light touch. A junior nurse saw it. The anesthesia tech saw it too.</span></p>

    <p>لكن لم يقل أحد شيئاً.</p>
    <p><span class="english-term">But nobody said anything.</span></p>

    <div class="alert-box">
        <p>لماذا؟ لأن التحدث بصوت عالٍ في تلك اللحظة يعني إيقاف الحالة، تغيير الملابس المعقمة، وربما إعادة فرش جزء من الحقل، وإثارة غضب الجراح الذي كان يحاول اللحاق بالجدول الزمني. حوّل التسلسل الهرمي (Hierarchy) وضغط الوقت التلوث إلى سر.</p>
        <p><span class="english-term">Why? Because speaking up at that moment meant stopping the case, changing gowns, possibly re-draping a section, and irritating a surgeon who was trying to catch up on the schedule. Hierarchy and time pressure turned contamination into a secret.</span></p>
    </div>

    <p>بعد عدة أيام، أُصيب المريض بعدوى عميقة في الموقع الجراحي (Deep SSI) تطلبت جراحة متكررة وأسابيع من المضادات الحيوية. لا يمكننا إثبات أن تلك اللمسة الدقيقة هي ما تسببت في العدوى. لكننا نعلم هذا: <strong>النظام الذي يسمح لاختراق معروف بالمرور بصمت هو نظام يصنع الضرر في النهاية.</strong> (AHRQ; WHO SSI)</p>
    <p><span class="english-term">Several days later, the patient developed a deep SSI that required repeat surgery and weeks of antibiotics. We cannot prove that specific brush caused it. But we know this: <strong>a system that allows a known break to pass in silence is a system that eventually manufactures harm.</strong> (AHRQ; WHO SSI)</span></p>

    <div class="success-box">
        <p>الدرس القاسي الذي تتعلمه غرف العمليات هو أن <strong>التعقيم ليس مجرد كيمياء؛ إنه سلوك.</strong> وإذا كان السلوك مكلفاً نفسياً، فستفشل الكيمياء. (AORN; IHI)</p>
        <p><span class="english-term">The hard lesson ORs learn is that <strong>asepsis is not just chemistry; it is behavior.</strong> And if the behavior is psychologically expensive, the chemistry will fail. (AORN; IHI)</span></p>
    </div>

    <h2>10.1 العقامة كنظام عالي الموثوقية (وليست مجرد شخص حذر)</h2>
    <h3>10.1 Asepsis as a High-Reliability System (Not Just a Careful Person)</h3>

    <h3>10.1.1 وهم "الفريق المثالي" / The illusion of the “perfect team”</h3>
    <p>نحن نعلم الممرضين والجراحين "التقنية المعقمة" كمهارة فردية. لكن الأفراد يتعبون، ويتشتت انتباههم، ويُدفعون للاستعجال. تعتمد الموثوقية العالية على <strong>تصميم النظام (System design)</strong> لتقليل الفرص التي يمكن أن تفشل فيها مهارة الفرد. (IHI)</p>
    <p><span class="english-term"><strong>10.1.1 The illusion of the “perfect team”</strong><br>We teach nurses and surgeons “sterile technique” as an individual skill. But individuals get tired, distracted, and rushed. High reliability relies on <strong>system design</strong> to reduce the chances that an individual’s skill can fail. (IHI)</span></p>

    <h3>10.1.2 المكونات الثلاثة لنظام العقامة / The three components of an asepsis system</h3>
    <p>في الممارسة العملية، يتكون نظام العقامة القوي من:</p>
    <ul>
        <li><strong>تصميم الحدود (Boundary Design):</strong> فصل واضح بين ما هو معقم وما هو غير معقم (منصات، حقول، تدفق هواء).</li>
        <li><strong>انضباط السلوك (Behavioral Discipline):</strong> تقليل حركة المرور، والحد من الحركة فوق الحقول المعقمة، وتقليل الأحاديث.</li>
        <li><strong>خوارزمية الاستجابة (Response Algorithm):</strong> ما يفعله الفريق <em>بالضبط</em> عند حدوث اختراق (Break)، دون إلقاء اللوم. (AORN; WHO SSI)</li>
    </ul>

    <h2>10.2 أنماط الفشل في العالم الحقيقي: "الأمور الطبيعية الصغيرة"</h2>
    <h3>10.2 Real-World Failure Modes: The “Small Normals”</h3>

    <h3>10.2.1 التلوث المتقاطع الصامت / Silent cross-contamination</h3>
    <p>يحدث التلوث في أغلب الأحيان ليس من خلال أخطاء كبيرة، بل عبر قطرات صغيرة من اللعاب أثناء التحدث فوق الجرح المفتوح، أو مرور ذراع غير معقمة بمسافة قريبة جداً من الطاولة، أو تعديل النظارات بظهر القفاز المعقم. (AORN)</p>

    <h3>10.2.2 فخ وقت التبديل (Turnover trap)</h3>
    <p>عندما تكون الغرفة متأخرة، يتم التسرع في التنظيف البيئي، ويتم فتح الأدوات المعقمة قبل أن تستقر الغرفة تماماً من الحالة السابقة. هذا يربط العبء البيولوجي (Bioburden) بالمريض الجديد. (AORN; CDC SSI)</p>

    <h3>10.2.3 الفشل في إدارة "المنطقة الرمادية"</h3>
    <p>هل سقطت تلك الإبرة خارج الحقل؟ هل ذلك الجزء من الفرش مبلل (Strike-through)؟ عندما تتجاهل الفرق "المنطقة الرمادية" لصالح السرعة، فإنهم يتبنون التلوث كخيار افتراضي.</p>
    <p><span class="english-term"><strong>10.2.3 Failing to manage the “grey zone”</strong><br>Did that needle fall outside the field? Is that part of the drape wet (strike-through)? When teams ignore the “grey zone” in favor of speed, they default to contamination.</span></p>

    <h2>10.3 حركة المرور والأبواب: حل مشكلة الجاهزية</h2>
    <h3>10.3 Traffic and Doors: Solving a Readiness Problem</h3>

    <h3>10.3.1 لماذا تهم الأبواب / Why doors matter</h3>
    <p>تم تصميم غرف العمليات بضغط إيجابي (Positive pressure) لدفع الهواء المحمل بالملوثات إلى الخارج. في كل مرة يُفتح فيها الباب، تتعطل ديناميكيات تدفق الهواء، ويرتفع عدد الجسيمات المحمولة جواً، ويزداد خطر الإصابة بـ SSI، خاصة في جراحات العظام المعتمدة على الغرسات. (WHO SSI; AORN)</p>
    <p><span class="english-term"><strong>10.3.1 Why doors matter</strong><br>ORs are designed with positive pressure to push contaminant-laden air out. Every time a door opens, airflow dynamics are disrupted, airborne particle counts spike, and SSI risk increases, especially in implant orthopedics. (WHO SSI; AORN)</span></p>

    <h3>10.3.2 فتح الأبواب هو عرض لضعف الجاهزية / Door opening is a symptom of poor readiness</h3>
    <p>غالباً ما تصرخ الفرق على بعضها البعض لـ "إبقاء الباب مغلقاً". لكن الشرطة لا تنجح. تفتح الأبواب لأن:</p>
    <ul>
        <li>أداة أو غرسة كانت مفقودة (فشل التخطيط).</li>
        <li>الهاتف رن ولا يوجد من يرد عليه بالداخل.</li>
        <li>التقييمات ما قبل العملية لم تكتمل (فشل بوابات الجاهزية).</li>
    </ul>
    <p>لتقليل حركة المرور، <strong>قم بإصلاح الجاهزية (Fix readiness).</strong> (IHI; AORN)</p>

    <div class="concept-box">
        <h3>10.3.3 2: "الغرفة التي قللت فتح الأبواب بنسبة 70%"</h3>
        <p>قمنا بقياس فتحات الأبواب أثناء عمليات استبدال المفاصل (Joint replacements). كان المتوسط 45 فتحة لكل حالة. كان الجراح غاضباً، ولكن بدلاً من إلقاء اللوم، تتبعنا <strong>السبب</strong>. كانت 80% من الفتحات لـ "رحلات البحث عن إمدادات مفقودة".</p>
        <p>الحل: أنشأنا قائمة تحقق للمعدات بنسبة 100% <strong>يتم إكمالها قبل الشق الجراحي</strong>، وقمنا بتركيب نظام اتصال داخلي (Intercom). انخفضت فتحات الأبواب إلى 12 لكل حالة. تم حل المشكلة من خلال الحوكمة، وليس الصراخ. (IHI; AORN)</p>
        <p><span class="english-term">The fix: We created a 100% equipment checklist <strong>completed prior to incision</strong>, and installed an intercom. Door openings dropped to 12 per case. The problem was solved by governance, not shouting. (IHI; AORN)</span></p>
    </div>

    <h2>10.4 الاستجابة لاختراقات الحقل المعقم (خوارزمية الإجراء الفوري)</h2>
    <h3>10.4 Responding to Sterile Field Breaks (The Immediate Action Algorithm)</h3>

    <h3>10.4.1 الاختراقات ستحدث؛ الاستجابة هي ما يُهم</h3>
    <p>لا تتظاهر بأن الاختراقات (Breaks) لا تحدث. صمم النظام للاستجابة لها بشكل مثالي. يجب تدريب غرفة العمليات على "تأمل" (Reflex) عندما يُشتبه في حدوث اختراق.</p>
    <p><span class="english-term"><strong>10.4.1 Breaks will happen; the response is what counts</strong><br>Do not pretend breaks do not happen. Design the system to respond to them perfectly. The OR must be trained in a "reflex" when a break is suspected.</span></p>

    <h3>10.4.2 الخوارزمية الخماسية: (توقف، صرّح، أصلح، تحقق، وثّق)</h3>
    <div class="success-box">
        <ol>
            <li><strong>توقف (STOP):</strong> الشخص الذي يلاحظ الاختراق يعلن ذلك بوضوح: <em>"توقف من فضلك—أعتقد أن لدينا اختراقاً للعقامة."</em> (AHRQ; WHO SSC)<br>
            <span class="english-term"><strong>STOP:</strong> The person who notices the break states it clearly: <em>"Pause please—I believe we have a sterility break."</em></span></li>
            
            <li><strong>صرّح (STATE):</strong> حدد ما حدث <em>(مثال: "لقد لامست أداة X الكابل غير المعقم.")</em><br>
            <span class="english-term"><strong>STATE:</strong> Identify what happened <em>(e.g., "Instrument X touched the unsterile cable.")</em></span></li>
            
            <li><strong>أصلح (FIX):</strong> استبدل الأداة، أو غيّر القفاز/الرداء، أو قم بإعادة فرش الجزء الملوث (Re-drape).<br>
            <span class="english-term"><strong>FIX:</strong> Replace the instrument, change the glove/gown, or re-drape the contaminated section.</span></li>
            
            <li><strong>تحقق (VERIFY):</strong> يجب أن يتفق الجراح والممرضة المسؤولة على أن الحقل آمن للمضي قدماً. (AORN)<br>
            <span class="english-term"><strong>VERIFY:</strong> The surgeon and charge nurse must agree the field is safe to proceed. (AORN)</span></li>
            
            <li><strong>وثّق (DOCUMENT):</strong> قم بتسجيل الحدث والاستجابة في الملاحظات الجراحية. هذا يسهل المتابعة اللاحقة إذا تطورت العدوى. (AORN; The Joint Commission)<br>
            <span class="english-term"><strong>DOCUMENT:</strong> Log the event and the response in the operative notes. This facilitates follow-up if an SSI develops. (AORN)</span></li>
        </ol>
    </div>

    <h2>10.5 السلامة النفسية: الضابط الخفي للعقامة</h2>
    <h3>10.5 Psychological Safety: The Hidden Control of Asepsis</h3>

    <h3>10.5.1 الخوف من الجراح يقتل العقامة / Fear of the surgeon kills asepsis</h3>
    <p>إذا صرخ الجراح في وجه ممرضة لأنها أبلغت عن ثقب في القفاز، فإن تلك الممرضة ستفكر مرتين قبل التحدث في المرة القادمة. يجب على القيادة الجراحية أن تكافئ التحدث بصوت عالٍ، حتى عندما يكون ذلك مزعجاً. (AHRQ)</p>
    <p><span class="english-term"><strong>10.5.1 Fear of the surgeon kills asepsis</strong><br>If a surgeon yells at a nurse for reporting a glove puncture, that nurse will think twice before speaking up next time. Surgical leadership must reward speaking up, even when it is annoying. (AHRQ)</span></p>

    <h3>10.5.2 القيادة بالقدوة (Role modeling)</h3>
    <p>أقوى بيان في غرفة العمليات هو عندما يقول الجراح نفسه: <em>"لقد لوثت قفازي للتو. يرجى إعطائي واحداً جديداً."</em> هذا يُطبّع (Normalizes) الصدق بدلاً من الكمال. (IHI)</p>
    <p><span class="english-term"><strong>10.5.2 Role modeling</strong><br>The most powerful statement in the OR is when the surgeon themselves says: <em>"I just contaminated my glove. Please give me a new one."</em> This normalizes honesty over perfection. (IHI)</span></p>

    <h2>10.6 أدوات عملية لموثوقية العقامة / Practical Tools for Asepsis Reliability</h2>

    <div class="success-box">
        <ul>
            <li><strong>10.6.1 الأداة 1 — بطاقة الاستجابة لاختراق العقامة (جيب/حائط):</strong><br>
            تلخيص خوارزمية (توقف، صرّح، أصلح، تحقق، وثّق). وجودها مكتوبة يمنح الموظفين سلطة استخدامها. (AORN; IHI)</li>
            <br>
            <li><strong>10.6.2 الأداة 2 — سجل تدقيق فتح الأبواب (Door-opening audit log):</strong><br>
            أداة بسيطة للمراقبة (عينة عشوائية): عدد الفتحات خلال ساعة، سبب الفتح. استخدمها في لجان الجودة لتحسين إمداد الغرفة. (IHI)</li>
            <br>
            <li><strong>10.6.3 الأداة 3 — قائمة التحقق للتبديل السريع (Turnover Checklist):</strong><br>
            لتجنب التسرع في التنظيف، حدد 5 أسطح رئيسية عالية اللمس (High-touch surfaces) يجب تنظيفها، وفرض وقت اتصال (Contact time) محدد للمطهر قبل فتح الأدوات المعقمة الجديدة. (AORN)</li>
        </ul>
    </div>

    <h2>10.7 القياس (المؤشرات الاستباقية للتعقيم) / Measurement (Leading Indicators of Asepsis)</h2>

    <h3>10.7.1 ابتعد عن قياس "العدوى فقط"</h3>
    <p>إذا كنت تنتظر حدوث SSI لتعرف ما إذا كان تعقيمك جيداً، فأنت تدير الأمور عبر النظر في المرآة الخلفية. (IHI)</p>
    <p><span class="english-term"><strong>10.7.1 Move away from "infection only" measurement</strong><br>If you wait for an SSI to know if your asepsis is good, you are managing by looking in the rearview mirror. (IHI)</span></p>

    <h3>10.7.2 المؤشرات الاستباقية الفعالة (Leading KPIs)</h3>
    <ul>
        <li>متوسط عدد فتحات الأبواب لكل حالة (لأنواع جراحات محددة). (AORN)</li>
        <li>النسبة المئوية للاختراقات المعقمة الموثقة (زيادة التوثيق تعني ثقافة أمان أفضل، وليس أسوأ). (AHRQ; IHI)</li>
        <li>نتائج تدقيق الالتزام بتنظيف التبديل (Turnover cleaning compliance). (AORN)</li>
        <li>وقت إغلاق الإجراءات المكتشفة في التدقيق. (IHI)</li>
    </ul>

    <h2>10.14 تأملات الكاتب: ما أود إخبار غرف العمليات الشابة به</h2>
    <h3>10.14 The Writer's Reflection: What I'd Tell Young ORs</h3>

    <h3>10.14.1 الصمت هو خطر تلوث / Silence is a contamination risk</h3>
    <p>في غرف العمليات، يتطلب الأمر شجاعة لوقف الجراح من أجل أمر غير مرئي. غرفة العمليات الآمنة تجعل هذه الشجاعة طبيعية ومحترمة. الصمت هو أكبر خطر للتلوث. (AHRQ)</p>
    <p><span class="english-term"><strong>10.14.1 Silence is a contamination risk</strong><br>In ORs, it takes courage to stop a surgeon over something invisible. A safe OR makes that courage normal and respected. Silence is a contamination risk. (AHRQ)</span></p>

    <h3>10.14.2 إذا كنت غير متأكد، فاعتبره ملوثاً / If you are unsure, treat it as contaminated</h3>
    <p>الشك ليس معقماً. اليقين هو المعقم. هذه القاعدة تمنع كلمة "ربما" من الدخول إلى الجرح. (AORN)</p>
    <p><span class="english-term"><strong>10.14.2 If you are unsure, treat it as contaminated</strong><br>Uncertainty is not sterile. Certainty is sterile. This rule prevents “maybe” from entering the wound. (AORN)</span></p>

    <h3>10.14.3 الأيام المتأخرة تتطلب انضباطاً أقوى / Late days demand stronger discipline</h3>
    <p>عندما يرتفع الضغط، يجب أن تقوى الحواجز—التحكم في الأبواب، اللحظات المحمية، وانضباط الاستجابة للاختراقات. هكذا تظل المسارح الموثوقة آمنة. (IHI; AORN)</p>
    <p><span class="english-term"><strong>10.14.3 Late days demand stronger discipline</strong><br>When pressure rises, barriers must strengthen—door control, protected moments, break-response discipline. This is how reliable theatres stay safe. (IHI; AORN)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>العقامة (Asepsis) هي <strong>نظام موثوقية</strong>: حدود + سلوكيات + استجابة للاختراقات + حلقات تعلم. (AORN; WHO SSI)<br>
            <span class="english-term">Asepsis is a reliability system: boundaries + behavior + break-response + learning loops.</span></li>
            
            <li>التحكم في الأبواب هو في الأساس مشكلة <strong>تصميم الجاهزية (Readiness design)</strong>—قم بإصلاح الأسباب المبكرة وتتحسن حركة المرور بشكل طبيعي. (IHI)<br>
            <span class="english-term">Door control is primarily a readiness design problem—fix upstream causes and traffic improves naturally.</span></li>
            
            <li>يجب أن تؤدي اختراقات العقامة إلى إجراءات تصحيحية فورية وموحدة: <strong>توقف–صرّح–أصلح–تحقق–وثّق</strong>. (AORN; AHRQ)<br>
            <span class="english-term">Sterile breaks must trigger immediate standardized corrective actions: Stop–State–Fix–Verify–Document.</span></li>
            
            <li>السلامة النفسية جزء من موثوقية العقامة: الإبلاغ يحمي المرضى. (AHRQ)<br>
            <span class="english-term">Psychological safety is part of sterility reliability: reporting protects patients.</span></li>
            
            <li>قم بقياس المؤشرات الاستباقية وأغلق حلقات التعلم بسرعة. (IHI)<br>
            <span class="english-term">Measure leading indicators and close learning loops quickly.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (aseptic technique, sterile field management, traffic control, break response).</li>
            <li>World Health Organization (WHO). Global Guidelines for the Prevention of Surgical Site Infection.</li>
            <li>Centers for Disease Control and Prevention (CDC). Guideline for the Prevention of Surgical Site Infection.</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (communication, safety culture, speaking up, learning systems).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, bundles, measurement, learning loops).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  20: `<!-- Download Button -->
    

    <div class="part-title">PART III — Intraoperative Safety and High Reliability</div>
    <div class="part-title">الجزء الثالث — السلامة داخل العملية والموثوقية العالية</div>
    
    <h1>CHAPTER 20 — Sharps Safety and Staff Exposure Prevention</h1>
    <div class="subtitle">الفصل العشرون — سلامة الأدوات الحادة والوقاية من تعرض الموظفين<br>
    <span style="font-size: 18px;">(Neutral Zone • Sharps Passing • Exposure Response • Monitoring Compliance)<br>
    (المنطقة المحايدة • تمرير الأدوات الحادة • الاستجابة للتعرض • مراقبة الامتثال)</span></div>
    
    <h2>أهداف الفصل / Chapter Aims</h2>
    <div class="concept-box">
        <p>بحلول نهاية هذا الفصل، ستكون قادراً على:</p>
        <p><span class="english-term">By the end of this chapter, you will be able to:</span></p>
        <ol>
            <li>شرح لماذا تُعد إصابات الأدوات الحادة <strong>إخفاقات نظام يمكن التنبؤ بها (Predictable system failures)</strong> في بيئة عالية الإيقاع—ولماذا تتطلب الوقاية تصميماً لسير العمل، وليس مجرد تذكيرات. (OSHA Bloodborne Pathogens Standard; CDC; AORN)<br>
            <span class="english-term">Explain why sharps injuries are <strong>predictable system failures</strong> in a high-tempo environment—and why prevention requires workflow design, not reminders. (OSHA Bloodborne Pathogens Standard; CDC; AORN)</span></li>
            
            <li>تنفيذ <strong>منطقة محايدة (Neutral zone)</strong> (تقنية خالية من الأيدي/Hands-free technique) عملية، وتحديد متى تكون إلزامية، ومتى يتم تعديلها، وكيفية جعلها تعمل في الحالات الحقيقية. (AORN; CDC)<br>
            <span class="english-term">Implement a practical <strong>neutral zone</strong> (hands-free technique) and define when it is mandatory, when it is modified, and how to make it work in real cases. (AORN; CDC)</span></li>
            
            <li>إدارة <strong>تمرير الأدوات الحادة (Sharps passing)</strong> بأمان باستخدام لغة الحلقة المغلقة، وقواعد "أداة حادة واحدة في كل مرة"، والضوابط الهندسية (المشارط الآمنة/أجهزة الإبر) حيثما توفرت. (AORN; OSHA)<br>
            <span class="english-term">Run safe <strong>sharps passing</strong> with closed-loop language, “one sharp at a time” rules, and engineering controls (safety scalpels/needle devices) where available. (AORN; OSHA)</span></li>
            
            <li>تنفيذ بروتوكول <strong>الاستجابة للتعرض (Exposure response)</strong> الفوري (الإسعافات الأولية، الإبلاغ، تقييم المخاطر، توقيت العلاج الوقائي بعد التعرض PEP، التوثيق، والمتابعة) دون تأخير أو خجل. (CDC; OSHA)<br>
            <span class="english-term">Execute an immediate <strong>exposure response</strong> protocol (first aid, reporting, risk assessment, PEP timing, documentation, follow-up) without delay or shame. (CDC; OSHA)</span></li>
            
            <li>بناء نظام مراقبة لـ <strong>الامتثال (Compliance)</strong> يعمل على تحسين السلوك وتقليل الضرر: عمليات التدقيق، الإبلاغ عن الحوادث الوشيكة، ثقافة السلامة، وحلقات التعلم. (AHRQ; IHI)<br>
            <span class="english-term">Build a monitoring system for <strong>compliance</strong> that improves behavior and reduces harm: audits, near-miss reporting, safety culture, and learning loops. (AHRQ; IHI)</span></li>
        </ol>
    </div>

    <h2>السيناريو الافتتاحي / Opening Scenario</h2>
    <div class="quote-box">
        <strong>حالة واقعية: "لقد كانت مجرد وخزة صغيرة... حتى طال الليل"</strong><br>
        <span class="english-term">A true-to-life case: “It was only a small prick… until the night became long” (Real Scientific Story)</span>
    </div>

    <p>معظم إصابات الأدوات الحادة لا تحدث خلال اللحظات الدراماتيكية. إنها تحدث خلال "العمل العادي" —التمرير، التحميل، التنظيف، التخلص—عندما ينقسم الانتباه وتكون الغرفة في حركة مستمرة.</p>
    <p><span class="english-term">Most sharps injuries don’t happen during dramatic moments. They happen during “normal work” — passing, loading, cleaning, disposing — when attention is split and the room is moving.</span></p>

    <p>أتذكر حالة انتهت في وقت متأخر. كان الجراح يقوم بالإغلاق. كانت لدى الممرضة المعقمة (Scrub nurse) مهام متعددة: إدارة الإبر، عدّ الإسفنج، الاستماع للطلبات، وتجهيز الطاولة الخلفية للتنظيف. مدّ الجراح يده دون النظر، ممسكاً الملقط (Needle holder) وحاملاً إبرة في نهايته، منتظراً أن تأخذها الممرضة.</p>
    <p><span class="english-term">I remember a case that ended late. The surgeon was closing. The scrub nurse had multiple tasks: managing needles, counting sponges, listening to requests, and preparing the back table for cleanup. The surgeon reached out blindly, holding a needle driver with a needle loaded, expecting the nurse to take it.</span></p>

    <p>في نفس اللحظة التي التفتت فيها الممرضة لأخذها، تحرك المساعد خطوة للوراء، فدفع ذراع الممرضة. انزلقت الإبرة من الملقط واختترقت قفازها وإصبعها. <strong>كان الدم على الإبرة من مريض غير معروفة حالته الفيروسية (Unknown viral status).</strong></p>
    <p><span class="english-term">The exact moment the nurse turned to take it, the assistant stepped back, bumping the nurse’s arm. The needle slipped from the driver and went through her glove and into her finger. <strong>The blood on the needle belonged to a patient of unknown viral status.</strong></span></p>

    <div class="alert-box">
        <p>تلك "الوخزة الصغيرة" غيّرت كل شيء. كان على الممرضة مغادرة الغرفة، والنزف (لإخراج الدم)، والغسل. وبدأت الدورة المليئة بالقلق لتقييم المخاطر المهنية، واختبارات الدم، واحتمالية العلاج الوقائي بعد التعرض (PEP). الأسابيع التالية كانت مليئة بالخوف. (CDC; OSHA)</p>
        <p><span class="english-term">That “small prick” changed everything. The nurse had to leave the room, bleed, and wash. The anxious cycle of occupational risk assessment, blood draws, and potential post-exposure prophylaxis (PEP) began. The following weeks were filled with fear. (CDC; OSHA)</span></p>
    </div>

    <div class="success-box">
        <p>ماذا كان السبب الجذري؟ ليس اصطدام المساعد. بل كان <strong>التمرير اليدوي المتسرع والأعمى لأداة حادة</strong>. (AORN)<br>
        لو كانوا يستخدمون "منطقة محايدة" (Neutral zone)—حيث يضع الجراح الإبرة لتقوم الممرضة بالتقاطها بشكل آمن—لما حدثت الإصابة أبداً. السلامة لا تكمن في كونك أكثر حرصاً؛ السلامة تكمن في تصميم حركات تتسامح مع الاحتكاك البشري العادي. (IHI; AORN)</p>
        <p><span class="english-term">What was the root cause? Not the assistant bumping her. It was the <strong>rushed, blind hand-to-hand passing of a sharp</strong>. (AORN) If they had used a “neutral zone”—where the surgeon puts the needle down and the nurse picks it up—the injury would never have happened. Safety is not about being more careful; safety is about designing movements that tolerate normal human friction. (IHI; AORN)</span></p>
    </div>

    <h2>20.1 لماذا تكون غرفة العمليات حقلاً لألغام الأدوات الحادة</h2>
    <h3>20.1 Why the OR is a Sharps Minefield</h3>

    <h3>20.1.1 عاصفة الأدوات الحادة (The sharps storm)</h3>
    <p>تحتوي عملية جراحية كبرى واحدة على مئات من عمليات نقل الأدوات الحادة: مشارط (Scalpels)، مبازل (Trocars)، دبابيس عظام (K-wires)، وإبر خياطة. في كل مرة تمر فيها أداة حادة بين يدين، فإنها تعبر فجوة اتصال وتنسيق. هنا تقع أكثر من نصف إصابات غرفة العمليات. (OSHA; AORN)</p>
    <p><span class="english-term"><strong>20.1.1 The sharps storm</strong><br>A single major surgery contains hundreds of sharp transfers: scalpels, trocars, K-wires, suture needles. Every time a sharp moves between two hands, it crosses a communication and coordination gap. This is where more than half of OR injuries happen. (OSHA; AORN)</span></p>

    <h3>20.1.2 العوامل البشرية التي تخلق الإصابات (Human factors)</h3>
    <p>لا تحدث الإصابات عن قصد. إنها تُحفّز بواسطة:</p>
    <ul>
        <li><strong>تعدد المهام (Multitasking):</strong> النظر إلى الجرح أثناء استلام إبرة.</li>
        <li><strong>التمرير الأعمى (Blind passing):</strong> وصول الجراح بيده إلى الوراء متوقعاً أن تلتقط الممرضة الأداة.</li>
        <li><strong>الاستعجال (Rushing):</strong> محاولة "اللحاق بالوقت" أثناء الإغلاق.</li>
        <li><strong>تغيير الخطة غير المُعلن:</strong> تغيير مفاجئ في اتجاه الحركة. (AHRQ; IHI)</li>
    </ul>

    <h2>20.2 المنطقة المحايدة (The Neutral Zone): حاجزك الأقوى</h2>
    <h3>20.2 The Neutral Zone: Your Strongest Barrier</h3>

    <h3>20.2.1 ما هي المنطقة المحايدة؟ (What is it?)</h3>
    <p>تُعرف أيضاً باسم "تقنية عدم استخدام الأيدي" (Hands-free technique). بدلاً من تمرير أداة حادة مباشرة من يد إلى يد، يضعها المُمرر في منطقة مخصصة (مثل صينية مغناطيسية، أو حوض كلى/Kidney basin، أو منطقة محددة على الفرش). ثم يلتقطها الشخص الآخر. <strong>هذا يلغي تزامن الأيدي الخطرة.</strong> (AORN; CDC)</p>
    <p><span class="english-term"><strong>20.2.1 What is it?</strong><br>Also known as the “hands-free technique.” Instead of passing a sharp directly hand-to-hand, the passer places it in a designated area (e.g., magnetic pad, kidney basin, or specific spot on the drape). The receiver then picks it up. <strong>This eliminates the dangerous synchronization of hands.</strong> (AORN; CDC)</span></p>

    <h3>20.2.2 متى تستخدمها (When to use it)</h3>
    <p>يجب أن تكون المنطقة المحايدة هي <strong>طريقة التمرير الافتراضية (Default)</strong> لجميع الأدوات الحادة في غرفة العمليات الموثوقة. يجب استخدامها من أجل:</p>
    <ul>
        <li>المشارط (Scalpels) (دائماً).</li>
        <li>المحاقن ذات الإبر (Syringes with needles).</li>
        <li>المقاطع الحادة الكبيرة (Large sharp retractors).</li>
        <li>إبر الخياطة (Suture needles) الثقيلة. (AORN)</li>
    </ul>

    <h3>20.2.3 لماذا تقاوم الفرق المنطقة المحايدة / Why teams resist it</h3>
    <p>يقول الجراحون: "إنها تُبطئني." أو "يجب أن أرفع عيني عن الجرح."<br>
    <strong>الحقيقة:</strong> في البداية، قد تبدو غير مريحة. ولكن بمجرد أن تصبح روتيناً، لا تستغرق المنطقة المحايدة وقتاً أطول. الوقت الذي يستغرقه التعامل مع تعرض (Exposure) مهني واحد—ساعات من الأوراق والقلق، ومقاطعة الحالة—يفوق آلاف عمليات النقل بالمنطقة المحايدة. (IHI)</p>
    <p><span class="english-term"><strong>20.2.3 Why teams resist the neutral zone</strong><br>Surgeons say: “It slows me down.” Or “I have to take my eyes off the wound.”<br><strong>The reality:</strong> At first, it feels clunky. But once it becomes muscle memory, the neutral zone takes no extra time. The time it takes to manage a single exposure—hours of paperwork, anxiety, interrupting the case—outweighs thousands of neutral zone transfers. (IHI)</span></p>

    <h2>20.3 تمرير الأدوات الحادة (عندما يكون التمرير اليدوي ضرورياً)</h2>
    <h3>20.3 Sharps Passing (When Hand-to-Hand is Necessary)</h3>

    <h3>20.3.1 الاستثناءات للقاعدة (Exceptions)</h3>
    <p>هناك أوقات لا يكون فيها التمرير بدون استخدام الأيدي ممكناً (مثال: الجراحات المجهرية/Microsurgery، أو عندما لا يستطيع الجراح رفع عينه عن المجهر). هنا، تصبح <strong>القواعد الصارمة</strong> هي الحاجز بدلاً من المنطقة. (AORN)</p>

    <div class="concept-box">
        <h3>20.3.2 قواعد التمرير اليدوي الموثوق / Rules of reliable hand-to-hand passing</h3>
        <ul>
            <li><strong>التواصل اللفظي (Verbal communication):</strong> قل "أداة حادة" أو "سكين" عند التمرير. هذا يُعيد ضبط انتباه المُتلقي. (AHRQ)</li>
            <li><strong>المقبض أولاً (Handle first):</strong> مرر بحيث يكون المقبض موجهاً بقوة إلى يد المُتلقي، ووجهة الجزء الحاد بعيدة.</li>
            <li><strong>أداة حادة واحدة في كل مرة (One sharp at a time):</strong> لا تمرر إبرتين معاً، أو إبرة ومقصاً في نفس اليد. (AORN)</li>
            <li><strong>التمرير المرئي فقط (Visual passing only):</strong> لا تمرر أو تستلم أبداً خلف ظهرك أو دون تواصل بصري. (AORN)</li>
        </ul>
        <p><span class="english-term">Verbal communication: Say “sharp” or “knife.” Handle first: Pass the handle firmly into the receiver’s hand. One sharp at a time: Never pass two needles together. Visual passing only: Never pass behind your back or blindly.</span></p>
    </div>

    <h2>20.4 الضوابط الهندسية (جعل الأداة نفسها أكثر أماناً)</h2>
    <h3>20.4 Engineering Controls (Making the Tool Itself Safer)</h3>

    <h3>20.4.1 هرمية الضوابط (Hierarchy of controls)</h3>
    <p>تخبرنا إدارة السلامة والصحة المهنية (OSHA) أن تغيير السلوك هو الحلقة الأضعف. التكنولوجيا المُصممة لمنع الإصابة أقوى. (OSHA)</p>
    <p><span class="english-term"><strong>20.4.1 Hierarchy of controls</strong><br>OSHA tells us that changing behavior is the weakest link. Engineered safety is stronger. (OSHA)</span></p>

    <h3>20.4.2 أمثلة لغرفة العمليات / OR Examples</h3>
    <ul>
        <li><strong>المشارط الآمنة (Safety scalpels):</strong> شفرات تتراجع أو تُغطى بغمد بعد الاستخدام. (OSHA; AORN)</li>
        <li><strong>الإبر غير الحادة (Blunt-tip suture needles):</strong> ممتازة لإغلاق اللفافة (Fascia) أو العضلات حيث لا تكون الحدة الفائقة مطلوبة. تُقلل بشكل كبير من الإصابات. (CDC; AORN)</li>
        <li><strong>مُحملات/مزيلات الشفرات الآمنة:</strong> لا تستخدم أصابعك أبداً لتثبيت أو إزالة شفرة المشرط من المقبض. (AORN)</li>
    </ul>

    <h2>20.5 بروتوكول الاستجابة للتعرض (لا تتأخر، لا تختبئ)</h2>
    <h3>20.5 Exposure Response Protocol (Do Not Delay, Do Not Hide)</h3>

    <h3>20.5.1 الوصمة الخطيرة للتعرض / The dangerous stigma</h3>
    <p>في العديد من الثقافات الطبية، يشعر الموظفون بالخجل من التبليغ عن الإصابة—"أنا أفسد العملية"، "أبدو غير كفء". هذا الخجل يقتل. يجب معالجة حالات التعرض (وخز إبرة، تناثر دم في العين) بسرعة من أجل بدء العلاج الوقائي (PEP) لـ HIV إذا لزم الأمر، والذي يكون أكثر فعالية عند البدء به في غضون ساعات. (CDC; OSHA; AHRQ)</p>
    <p><span class="english-term"><strong>20.5.1 The dangerous stigma of exposure</strong><br>In many medical cultures, staff feel ashamed to report an injury... This shame kills. Exposures must be managed quickly to initiate post-exposure prophylaxis (PEP) for HIV if indicated, which is most effective when started within hours. (CDC; OSHA; AHRQ)</span></p>

    <div class="alert-box">
        <h3>20.5.2 بروتوكول الاستجابة الفورية / Immediate Response Protocol</h3>
        <ol>
            <li><strong>تنحَّ جانباً (Step away):</strong> الموظف المصاب يكسر التعقيم فوراً ويتنحى. <strong>المريض على الطاولة لن يموت لأنك توقفت لغسل يدك، لكنك قد تمرض إذا لم تفعل.</strong></li>
            <li><strong>الإسعافات الأولية (First Aid):</strong> اغسل الجرح بالماء والصابون (لا تعصر الجرح بقوة شديدة لتجنب التلف). اغسل الأغشية المخاطية المتعرضة (العين/الفم) بكميات كبيرة من الماء.</li>
            <li><strong>أبلغ (Report):</strong> أبلغ الممرضة المسؤولة (Charge nurse). يتم استدعاء بديل معقم لإكمال الجراحة.</li>
            <li><strong>تقييم المخاطر (Risk Assess):</strong> يتم أخذ عينة دم من المريض المصدر (بموافقته وحسب البروتوكول المحلي) ومن الموظف.</li>
            <li><strong>مسار PEP:</strong> توجيه الموظف فوراً إلى قسم الصحة المهنية أو الطوارئ لتقييم الحاجة للعلاج الوقائي. (CDC; OSHA)</li>
        </ol>
    </div>

    <h2>20.6 القصة الحقيقية 2: "الإبرة المتروكة على الطاولة"</h2>
    <h3>20.6 Real Story 2: "The Needle Left on the Table"</h3>

    <div class="quote-box">
        <p><strong>المشهد:</strong> انتهت الحالة. غادر الجراح. كانت ممرضة جديدة تقوم بتنظيف الطاولة الخلفية (Back table). أمسكت بكومة من الشاش المبلل بالدم لإلقائها في سلة النفايات.</p>
        <p><span class="english-term"><strong>The scene:</strong> The case ended. The surgeon left. A new nurse was cleaning up the back table. She grabbed a pile of bloody sponges to throw into the waste.</span></p>
        
        <p><strong>الحدث:</strong> كانت هناك إبرة خياطة مخفية داخل الشاش. ثقبت القفاز واخترقت كف يدها بعمق. (AORN)</p>
        <p><span class="english-term"><strong>The event:</strong> Inside the sponges was a hidden suture needle. It pierced her glove and went deep into her palm. (AORN)</span></p>
        
        <p><strong>الدرس:</strong> السلامة من الأدوات الحادة لا تنتهي عندما يغادر الجراح. يجب التعامل مع كل الإبر في وسادة عد مغناطيسية (Magnetic needle counter)، ولا تُترك أبداً حرة على الطاولة أو مخفية في الشاش. <strong>احترام الأدوات الحادة هو احترام لمن سيأتي لتنظيفها بعدك.</strong> (AORN; OSHA)</p>
        <p><span class="english-term"><strong>The lesson:</strong> Sharps safety does not end when the surgeon leaves... <strong>Respecting sharps is respecting the person who cleans up after you.</strong> (AORN; OSHA)</span></p>
    </div>

    <h2>20.7 أدوات عملية لموثوقية الأدوات الحادة</h2>
    <h3>20.7 Practical Tools for Sharps Reliability</h3>

    <div class="success-box">
        <ul>
            <li><strong>20.7.1 الأداة 1 — وعاء نقل المنطقة المحايدة (Neutral Zone Transfer Basin):</strong><br>
            استخدم حوضاً صغيراً مميزاً أو وسادة مغناطيسية (Magnetic pad) مُخصصة فقط لنقل الأدوات الحادة في كل حالة جراحية. (AORN)</li>
            <br>
            <li><strong>20.7.2 الأداة 2 — حزمة الإبلاغ الفوري (Immediate Exposure Pack):</strong><br>
            مجموعة جاهزة في كل منطقة عمليات تحتوي على نماذج التبليغ، أنابيب سحب الدم للتحاليل السريعة (للمريض والموظف)، وإرشادات الوصول لقسم الصحة المهنية (Occupational Health). (CDC)</li>
            <br>
            <li><strong>20.7.3 الأداة 3 — التدقيق المُلاحظ (Observational Audit Tool):</strong><br>
            ورقة تدقيق بسيطة لمدير العمليات تسجل: 1) استخدام المنطقة المحايدة، 2) استخدام المشارط الآمنة، 3) التخلص السليم في حاويات الحادة. (IHI)</li>
        </ul>
    </div>

    <h2>20.8 القياس (كيف تعرف أن ثقافتك تتحسن)</h2>
    <h3>20.8 Measurement (How to Know Your Culture is Improving)</h3>

    <h3>20.8.1 المؤشرات الاستباقية / Leading indicators</h3>
    <ul>
        <li>النسبة المئوية لعمليات نقل الأدوات الحادة المُلاحظة التي تستخدم المنطقة المحايدة. (AORN)</li>
        <li>نسبة شراء أو استخدام الأجهزة الهندسية الآمنة (مثل المشارط الآمنة). (OSHA)</li>
        <li>الوقت المستغرق من حدوث التعرض إلى تقديم التقرير ووصول الموظف للتقييم (يجب أن يكون أقل من ساعة). (CDC)</li>
    </ul>

    <h3>20.8.2 المؤشرات المتأخرة / Lagging indicators</h3>
    <ul>
        <li>عدد إصابات الأدوات الحادة (Sharps injuries) لكل 1000 إجراء.</li>
        <li>عدد حالات التعرض للدم وسوائل الجسم.</li>
    </ul>

    <h2>20.16 تأملات الكاتب بعد سنوات في المسرح الجراحي</h2>
    <h3>20.16 The Writer's Reflection</h3>

    <h3>20.16.1 لا يمكنك أن تكون حذراً بما فيه الكفاية لتتغلب على نظام سيء</h3>
    <p>إذا كنت تمرر 300 إبرة من يد ليد تحت ضغط الوقت، فإن الإصابات ستستمر في الحدوث—بغض النظر عن مدى مهارة فريقك. صمم النظام (المنطقة المحايدة) ليعفيك من الاعتماد على الحذر.</p>
    <p><span class="english-term"><strong>20.16.1 You cannot be careful enough to beat a bad system</strong><br>If you are hand-to-hand passing 300 needles under time pressure, injuries will continue—no matter how skilled your staff are. Design the system (neutral zone) to excuse you from relying on caution.</span></p>

    <h3>20.16.2 احترم الأشخاص الذين ينظفون بعدك</h3>
    <p>سلامة الأدوات الحادة تتعلق أيضاً بالكرامة. الإبرة المخفية هي إهانة للأيدي التي تأتي بعدك.</p>
    <p><span class="english-term"><strong>20.16.2 Respect the people who clean after you</strong><br>Sharps safety is also about dignity. A hidden needle is an insult to the next hands.</span></p>

    <h3>20.16.3 قاعدتي / My rule</h3>
    <p>لا ينبغي لأي أداة حادة أن تنتقل أبداً بدون خطة: إلى أين تذهب، كيف تُمرر، وأين تموت (في حاوية التخلص الآمن). (AORN; OSHA)</p>
    <p><span class="english-term"><strong>20.16.3 My rule</strong><br>No sharp should ever travel without a plan: where it goes, how it’s passed, and where it dies (in the container). (AORN; OSHA)</span></p>

    <div class="divider">***</div>

    <h2>ما يجب أن تتذكره من هذا الفصل / What You Should Remember from This Chapter</h2>
    <div class="success-box">
        <p><span class="english-term">Key Memory Messages:</span></p>
        <ul>
            <li>المنطقة المحايدة (التقنية الخالية من الأيدي) هي <strong>الحاجز اليومي الأقوى</strong> ضد إصابات الأدوات الحادة. (AORN; CDC)<br>
            <span class="english-term">Neutral zone (hands-free technique) is the strongest daily barrier against sharps injuries.</span></li>
            
            <li>عندما يكون التمرير اليدوي ضرورياً، استخدم نصوصاً منضبطة وقاعدة "أداة حادة واحدة في كل مرة." (AORN; AHRQ)<br>
            <span class="english-term">When hand-to-hand passing is necessary, use disciplined scripts and “one sharp at a time.”</span></li>
            
            <li>الاستجابة للتعرض يجب أن تكون <strong>فورية</strong>: إسعاف أولي، تقرير، تقييم خطر، مسار PEP حيثما يلزم، توثيق، ومتابعة. (CDC; OSHA)<br>
            <span class="english-term">Exposure response must be immediate: first aid, report, risk assessment, PEP pathway where indicated, document, follow-up.</span></li>
            
            <li>يجب أن تركز المراقبة على جودة السلوك وحلقات التعلم، وليس على "الشرطة/Policing" المبنية على مربعات الاختيار. (AHRQ; IHI)<br>
            <span class="english-term">Monitoring must focus on behavior quality and learning loops, not checkbox policing.</span></li>
        </ul>
    </div>

    <div class="references-list">
        <h2>المراجع / References</h2>
        <ol>
            <li>Occupational Safety and Health Administration (OSHA). Bloodborne Pathogens Standard and related guidance (hierarchy of controls, exposure reporting, workplace requirements).</li>
            <li>Centers for Disease Control and Prevention (CDC). Guidance on occupational exposure management (risk assessment, PEP principles, follow-up concepts).</li>
            <li>Association of periOperative Registered Nurses (AORN). Guidelines for Perioperative Practice (sharps safety, neutral zone/hands-free technique practices, perioperative workflow).</li>
            <li>Agency for Healthcare Research and Quality (AHRQ). Patient Safety resources (human factors, safety culture, speaking up, second-victim support concepts).</li>
            <li>Institute for Healthcare Improvement (IHI). Reliability and quality improvement resources (standard work, audits for learning, measurement, learning loops).</li>
        </ol>
    </div>

    <!-- Download Script -->`,
  "intro": `<!-- Download Button -->
    

    <div class="content-wrapper">
        <h1>مقدمة المؤلف</h1>
        <div class="subtitle">ربع قرن بين مبضع الجراح ونبض الأجهزة..<br>من وهم "البطولات الفردية" إلى هندسة "الأنظمة الآمنة"</div>

        <p class="drop-cap">خمسة وعشرون عاماً.. حين أكتب هذا الرقم الآن وأتأمله على الورق، أشعر بثقل السنين وبكثافة اللحظات التي لا يمكن اختزالها في مجرد مسيرة مهنية أو سيرة ذاتية تُعلق على جدار. خمسة وعشرون عاماً قضيتها أتنقل بين أروقة المستشفيات وغرف العمليات، أقف تحت تلك الأضواء الساطعة الباردة التي لا ترحم الزيف، أستنشق رائحة المعقمات التي تترسخ في الذاكرة حتى تصير جزءاً من التكوين الشخصي، وأصغي إلى ذلك الإيقاع الرتيب والمهيب لأجهزة مراقبة النبض؛ ذلك الرنين الذي يعلمك معنى "الاستقرار" حين يهدأ، ويكشف لك هشاشة الإنسان وضعفه المطلق حين يتغير إيقاعه فجأة.</p>

        <p>في تلك المساحة المغلقة، المعزولة عن ضجيج العالم الخارجي، حيث لا أحد يرى ما يحدث للمريض إلا نحن، تعلمتُ أن قيمة العمل الطبي لا تكمن فقط فيما ننجزه أمام عدسات الكاميرات أو في المؤتمرات الطبية، بل تكمن أساساً فيما نحفظه من أمانة في اللحظات التي لا يراقبنا فيها أحد. لطالما نظرتُ إلى غرفة العمليات على أنها "حرمٌ مُقدس". وأنا هنا لا أستخدم هذا التعبير من باب المبالغة الأدبية أو التنظير الفلسفي، بل لأصف حقيقةً أخلاقية وروحية عشتها بشكل يومي. إنها المكان الوحيد تقريباً على وجه الأرض، الذي يسلمك فيه إنسان غريب أثمن ما يملك، دون قيد أو شرط. يسلمك وعيه، وكرامة جسده، وأنفاسه، وربما حياته بأكملها. يدخل إليك وهو يعلم يقيناً أنه سيغيب عن الوعي، وأنه لن يرى مَن الذي فعل ماذا، ولن يسمع كيف تواصلتم، ولن يعرف إن كنتم متعبين أو منهكين تحت ضغط الوقت. ومع ذلك، يغمض عينيه ويثق بنا.</p>

        <p>هذه الثقة المطلقة ليست "مجاملة" من المريض، إنها تفويض كامل لا يمنحه الإنسان بسهولة إلا حين يشعر أنه لا يملك خياراً آخر. ومن هنا، ومن هذا السرير الدافئ في تلك الغرفة الباردة، يأتي الحمل الأخلاقي الذي يفوق الجبال وزناً: أن تكون أنت والفريق حراساً لهذا التفويض، ليس بالحماسة وحدها، ولا بالنيات الطيبة، بل بالعلم، وبالتواضع، وبالنظام الصارم الذي لا يسمح للضعف البشري بأن يتحول إلى ضرر يصيب من وضع ثقته المطلقة فينا.</p>

        <h2>الفراغ المؤلم في مكتبتنا العربية</h2>

        <p>قد تسألني أيها القارئ الكريم: لماذا هذا الكتاب؟ ولماذا الآن؟ ولماذا باللغة العربية تحديداً؟</p>
        
        <p>على مدار سنوات عملي الطويلة كطبيب وممارس وقيادي، كنت أقف مراراً أمام أرفف المكتبات الطبية والمحتوى المتاح بلغتنا الأم، وكنت أشعر بتناقض مؤلم. لقد حققنا في عالمنا العربي تقدماً هائلاً في ترجمة وتأليف الكتب التي تشرح "كيف تجري عملية جراحية معقدة"، و"كيف تخدر مريضاً يعاني من أمراض مزمنة"، و"كيف تشخص مرضاً نادراً". لدينا مراجع طبية سريرية وتقنية ممتازة تخرج أجيالاً من الأطباء البارعين.</p>

        <p>ولكن، حين كنت أبحث عن إجابة للسؤال الذي يسبق كل تلك المهارات: <strong>كيف نُدير هذا المسرح الجراحي بأمان؟</strong> كيف نبني "أنظمة" تمنع الخطأ الجراحي قبل حدوثه؟ كيف نتعامل مع العوامل البشرية وتأثيرها على جودة الرعاية؟ كيف نؤسس لثقافة تمنع القياس الوهمي وتحفز الإبلاغ الصادق؟... هنا كنت أجد فراغاً مخيفاً وموحشاً.</p>

        <p>المحتوى العربي المتخصص في "سلامة المرضى داخل غرف العمليات" والمبني على علوم الإدارة الحديثة والجودة والموثوقية يكاد يكون غائباً تماماً، أو مقتصراً على مقالات مترجمة بشكل متناثر لا تشكل منهجاً يمكن الاعتماد عليه. نحن في عالمنا العربي بارعون جداً في استيراد أحدث الأجهزة الطبية والروبوتات الجراحية، لكننا غالباً ما ننسى "استيراد أو بناء ثقافة النظام" التي تشغل هذه الأجهزة بأمان. لا زلنا في كثير من مستشفياتنا نعتمد على "الشطارة الفردية" وعلى "المعرفة المتوارثة"، ونفتقر بشدة إلى منهجية مكتوبة، معتمدة، وقابلة للتطبيق، تُهندس السلامة كنظام متكامل لا يقبل الاختراق.</p>

        <p>في بيئة عالية المخاطر كغرفة العمليات، الفراغ المعرفي لا يبقى فراغاً؛ بل يُملأ تلقائياً بالارتجال، وبالمحاولات الفردية غير الموثقة، وبالاعتماد على الحظ الذي قد ينقذنا مرة ولكنه سيفشل في مرات قادمة. من هنا، أخذت على عاتقي عهداً بأن أضع خلاصة هذا الربع قرن، بكل ما تخلله من دماء وعرق ودموع، من نجاحات مبهرة وإخفاقات قاسية، في هذا السفر الشامل ليكون المرجع الأول لكل من ينطق بلغة الضاد ويعمل في هذا الحرم المقدس.</p>

        <h2>موت وهم "البطولة الفردية"</h2>

        <p>دعني أصارحك بحقيقة قاسية استغرقت مني سنوات لأتقبلها. عندما بدأت مسيرتي في غرف العمليات، كنت كغيري من الأطباء الشباب، مسكوناً بوهم "البطولة". كنا نُعجب ونسحر بذلك الجراح الذي يحسم الأمور في اللحظات الحرجة بسرعة البرق، وبالممرضة التي تعرف كل شيء وتتدارك الأخطاء قبل أن تقع، وبالطبيب الذي "لا يغفل ولا ينام". كانت ثقافتنا الطبية، في كثير من الأقسام، تُقدس المهارة الفردية وتخلق منها هالة أسطورية. كنا نربط السلامة بوجود شخص خارق محدد: "إذا كان الدكتور فلان موجوداً فالأمور بخير"، وكأن سلامة المريض تعتمد على جدول مناوبات هذا البطل الفرد.</p>

        <p>كان هذا الوهم مريحاً جداً للقيادات، لأن الحل الإداري يصبح بسيطاً جداً: ابحث عن العبقري، ضعه في مقدمة المشهد، ثم اترك النظام الإداري والتشغيلي متهالكاً كما هو.</p>

        <p>لكن السنوات في غرفة العمليات لا تجامل أحداً، والواقع السريري كفيل بتحطيم الأوهام قطعة قطعة. لقد رأيت بأم عيني جراحين من الطراز العالمي يرتكبون أخطاءً بسيطة ولكنها كارثية تحت ضغط الوقت والإرهاق المتراكم. ورأيت ممرضات من ذوات الخبرة الواسعة يلتبس عليهن الأمر بين عبوتين دوائيتين متشابهتين، لأن عقولنا البشرية—مهما بلغت من الخبرة والذكاء—تتعرض للخداع وتنهار قدراتها التحليلية حين تتشابه الأشياء، وتتزايد المقاطعات، وتزدحم اللحظة الحرجة.</p>

        <p>رأيت فريقاً يضم ألمع الأسماء الطبية يتعثر ويكاد يفقد مريضاً لأن التواصل بينهم كان معدوماً، ورأيت في المقابل فريقاً من أطباء وممرضين "متوسطي الخبرة" يتجاوزون أزمة قلبية عاصفة بسلام تام، لأن نظام العمل بينهم كان واضحاً، ولأنهم تدربوا معاً، ولأن كل فرد فيهم كان يعرف دوره بدقة متناهية.</p>

        <div class="quote-box">
            حينها بدأت الحقيقة تتشكل داخلي وتتجذر لتصبح حجر الأساس لهذا الكتاب بأكمله: إن البشر، مهما كانوا أذكياء ومهرة ومخلصين، سيقعون حتماً في الخطأ إذا صُممت بيئة العمل بطريقة تفترض أنهم ملائكة لا يخطئون. السلامة ليست بطولة فردية، بل هي هندسة نظام يتوقع الضعف البشري ويحتويه بذكاء.
        </div>

        <p>لقد ولى عصر البطولات الفردية في الطب الحديث. نحن اليوم لا نحتاج إلى أبطال ينقذون الموقف في اللحظة الأخيرة وبطريقة هوليودية؛ بل نحتاج إلى <strong>"أنظمة هادئة، صارمة، وموثوقة"</strong> تجعل الحاجة إلى الأبطال أمراً نادراً جداً. نحتاج إلى تصميم مسار عمل يجعل السلوك الآمن هو السلوك الأسهل، ويجعل الخطأ أمراً شاقاً يتطلب اختراق حواجز متعددة.</p>

        <h2>قوة التواصل: عندما يصبح الكلام علاجاً</h2>

        <p>إذا كان هناك درس واحد أتمنى أن يخرج به كل ممارس من هذا الكتاب، فهو أن <span class="highlight-text">التواصل في غرفة العمليات ليس مهارة شخصية تعتمد على المزاج أو اللباقة، بل هو "إجراء طبي" منقذ للحياة.</span></p>

        <p>لقد أفردت في هذا الكتاب مساحات واسعة للحديث عن العوامل البشرية، والتسلسل الهرمي (Hierarchy)، وتدرج السلطة الذي يخنق الحقيقة. في الكثير من الكوارث الطبية التي حُللت أسبابها حول العالم، كان هناك دائماً شخص في الغرفة—غالباً ما يكون ممرضاً مبتدئاً، أو فنياً، أو طبيباً مقيماً—رأى الخطأ وهو يتشكل ككرة الثلج، لكنه التزم الصمت. التزم الصمت خوفاً من سطوة الجراح الأقدم، أو خشية إثارة جلبة، أو رهبة من أن يُقال له "أنت لا تعرف شيئاً".</p>

        <p>الصمت في غرفة العمليات هو قاتل صامت. عندما لا يملك الممارس الشجاعة، ولا توفر له البيئة الأمان ليقول: "قف، أنا لست مرتاحاً لهذه الخطوة"، فإننا نكون قد فقدنا آخر وأهم حواجز السلامة. في هذا الكتاب، سنؤسس لثقافة "التحدث بصوت عالٍ" (Speaking up). سنتعلم كيف نُهندس التواصل ليصبح مغلق الحلقة (Closed-loop)، وكيف نحول قائمة التحقق الجراحية (Checklist) من ورقة روتينية يملؤها السأم، إلى محادثة جماعية حية تخلق نموذجاً عقلياً مشتركاً لكل من في الغرفة.</p>

        <p>أؤكد لك، وبناءً على خبرة دقيقة: إن فريقاً متواضع المهارة الفردية، ولكنه يمتلك تواصلاً فعالاً، وبيئة تسمح بالاعتراض المهني، هو أكثر أماناً للمريض بآلاف المرات من فريق يضم عباقرة متغطرسين لا يتحدثون مع بعضهم البعض.</p>

        <h2>ثقافة عدم اللوم (No-Blame Culture): القضاء على ثقافة الانتقام</h2>

        <p>من أهم الركائز الفلسفية والعملية التي بُني عليها هذا المرجع هو المحاربة الشرسة لـ "ثقافة اللوم". للأسف، في العديد من مستشفياتنا، عندما يقع خطأ ما، يكون رد الفعل الإداري الأول والأسرع هو تفعيل وضعية صيد الساحرات: "مَن فعل هذا؟ مَن المخطئ؟ يجب أن نُعاقب شخصاً ليكون عبرة لغيره!".</p>

        <p>إن العقاب الفوري والصراخ بحثاً عن كبش فداء قد يُرضي الغرور الإداري اللحظي، وقد يوهم الإدارة بأنها "حازمة وتتخذ إجراءات"، لكنه في الحقيقة يدمر مستقبل المؤسسة بأكملها. عندما تعاقب موظفاً لأنه أبلغ بصدق وشفافية عن خطأ غير مقصود أو حادثة وشيكة، فإنك لا تمنع الخطأ من التكرار، بل أنت في الواقع تُدرب الغرفة بأكملها، بل والمستشفى بأكمله، على قاعدة واحدة: <strong>"في المرة القادمة، ادفنوا أخطاءكم في الظلام واخفوها جيداً."</strong></p>

        <p>الخوف هو قاتل السلامة. يجب أن نتحول جذرياً من التساؤل السطحي "مَن المخطئ؟" إلى التساؤل العميق والمنهجي: <strong>"كيف سمح نظامنا، وإجراءاتنا، وبيئتنا لهذا الخطأ بالحدوث؟"</strong></p>

        <p>نحن بشر، والأخطاء البشرية حتمية ولن تتوقف أبداً. ولكن يجب أن نتبنى ما يُعرف بـ "الثقافة العادلة" (Just Culture). هذه الثقافة لا تعني التسيب أو الفوضى، بل تعني التمييز الدقيق بين "الخطأ البشري غير المقصود" الذي يستوجب دعم الموظف وتغيير النظام، و"السلوك المحفوف بالمخاطر" الذي يستوجب التوجيه وإعادة التدريب، وبين "السلوك المتهور المتعمد" وهو الوحيد الذي يستوجب المحاسبة والعقاب. فقط من خلال زرع هذه الثقافة العادلة، ستنهمر تقارير الحوادث الوشيكة (Near-misses)، وهي التي أعتبرها "الذهب الخالص" و"الكنز الحقيقي" لأي مؤسسة طبية تسعى للتعلم من أخطائها المجانية قبل أن تدفع ثمنها من أرواح مرضاها.</p>

        <h2>دعوة شخصية: كيف تقرأ هذا الكتاب؟</h2>

        <p>يا زميلي ورفيق المهنة، أياً كان موقعك الإداري أو السريري؛ لم أكتب هذا المرجع ليُوضع على أرفف المكاتب الأنيقة للمديرين كقطعة ديكور أو دليل يُعرض لجهات الاعتماد فقط. لقد صممت هذا الكتاب ليكون دليلاً عملياً يتلطخ بحبر ملاحظاتك، ويُطوى في جيوب معطفك الطبي، ويوضع على مكاتب التمريض، ومحطات التخدير، وفي غرف استراحة الأطباء ليثير النقاش والجدل.</p>

        <p>لقد قسمت الكتاب إلى أجزاء تأخذك في رحلة متدرجة؛ تبدأ من أسس السلامة وتأسيس الحوكمة، لتنتقل بك إلى بوابات الجاهزية الصارمة قبل أن يلمس المشرط جسد المريض. ثم نغوص معاً في أدق تفاصيل العدوى، والتعقيم، وسلامة الأدوات وتتبع الغرسات. بعدها ندخل إلى ساحة المعركة الحقيقية داخل العملية لمنع "الأحداث التي لا ينبغي أن تحدث أبداً" كالعمليات في الموقع الخاطئ أو نسيان الأدوات الجراحية. ولم أغفل أبداً الجانب التشغيلي؛ فخصصت فصولاً لكيفية تحقيق التدفق والكفاءة وسرعة التبديل (Turnover) دون أن نبيع سلامة المريض من أجل كسب بضع دقائق. وأخيراً، وضعت لك في الجزء الأخير منهجية متكاملة للقياس، وبناء لوحات القيادة (Dashboards) الصادقة، وطرق التحقيق في الحوادث، لتضمن استدامة كل ما بنيته.</p>

        <p>ستجد في نهاية كل فصل قسماً تحت عنوان <strong>"أدوات عملية"</strong>. هذه ليست نظريات، بل هي بطاقات، ونماذج، وخوارزميات، ونصوص محادثة جاهزة للتطبيق الفوري في مستشفاك صباح الغد. وستجد أيضاً فقرة <strong>"ما يجب أن تتذكره"</strong> لتكون بوصلتك السريعة في زحمة العمل.</p>

        <p>لا أطلب منك أن تطبق كل ما في هذا الكتاب دفعة واحدة؛ فثقافة السلامة تُبنى تراكماً كالبناء الشامخ، ولا تُفرض بالانفجارات الإدارية المفاجئة. كل ما أطلبه منك هو أن تختار من هذا الكتاب أمراً واحداً فقط يُغير يومك غداً. قد يكون قراراً بتبني "توقف إلزامي" عند تعارض وثيقة طبية. قد يكون تطبيق قاعدة "لا يُسمح بكوب دواء دون ملصق". قد يكون تخصيص دقيقتين لاجتماع سريع (Huddle) قبل بدء القائمة الجراحية. أي شيء، مهما بدا صغيراً، إذا طُبق بالتزام وموثوقية، فإنه يُحدث أثراً كبيراً.</p>

        <div class="quote-box">
            نحن لا نُحسن السلامة حين نُطالب البشر أن يكونوا ملائكة بلا ضعف...<br>
            نحن نُحسن السلامة حين نبني نظاماً يرحم ضعف البشر، ويحمي المريض منه.
        </div>

        <p>أضع بين يديك عصارة ربع قرن من الشغف، والألم، والقلق، والسهر، والتعلم المستمر. أضعه بين يديك راجياً من الله عز وجل أن يكون هذا الكتاب لبنةً أساسية ومفصلية في بناء ثقافة سلامة راسخة وعلمية في غرف العمليات في عالمنا العربي. أتمنى أن يكون هذا المرجع درعاً يحمي مرضانا من أذى لا يستحقونه، ونبراساً ينير درب الأجيال القادمة من الممارسين، لنجعل من مستشفياتنا بيئات لا تعتمد على الأبطال، لأنها آمنة بالتصميم.</p>

        <p style="text-align: center; font-size: 28px; color: var(--primary-blue); font-weight: bold; margin-top: 50px;">معاً... نصنع الفرق، ونحمي الحياة.</p>

        <div class="signature">
            د. جميل السقيا<br>
            <span class="signature-title">استشاري التخدير والعناية المركزة</span>
        </div>
    </div>

    <!-- Download Script -->`,
  "conclusion": `<!-- Download Button -->
    

    <div class="content-wrapper">
        <h1>خاتمة الكتاب</h1>
        <div class="subtitle">ما الذي يبقى في الذاكرة بعد "مبادئ السلامة والجودة في غرفة العمليات"؟</div>

        <p class="drop-cap">السلامة في غرفة العمليات ليست بندًا يُستكمل، ولا ملفًا يُضاف إلى الرف، ولا حملةً موسمية تتوهّج ثم تنطفئ. إنها طريقٌ طويل من الانتباه اليومي، ومن احترام التفاصيل الصغيرة قبل أن تتحول إلى كوارث كبيرة، ومن الإيمان بأن المريض لا يحتاج منا "أبطالًا" بقدر ما يحتاج نظامًا يحميه عندما نتعب، وعندما نُشتَّت، وعندما تضغط علينا الساعة، وعندما يعلو صوت العجلة على صوت الحكمة.</p>

        <p>لم يُكتب هذا الكتاب ليكون ترفًا معرفيًا، ولا ليُقال إننا نملك "سياسات". كتبته لأنني، بعد سنوات طويلة قرب هذا المسرح الحيّ الذي تُصنع فيه قرارات مصيرية في دقائق، وصلت إلى يقينٍ بسيط: أن كثيرًا من الأذى الذي يقع في غرف العمليات ليس قدرًا محتومًا، بل نتيجةُ نظامٍ لم يُصمَّم ليكون متسامحًا مع الخطأ، وثقافةٍ لم تُبنَ لتسمح للناس أن يوقفوا الخطأ قبل أن يؤذي.</p>

        <p>وكلما اقتربت من جوهر السلامة، أدركت أن السؤال الحقيقي ليس: "من أخطأ؟" بل: "ما الذي جعل الخطأ ممكنًا؟ وما الذي يجعل كشفه مبكرًا صعبًا؟ وما الذي يسمح بتكراره؟"</p>

        <h2>رحلتنا عبر الكتاب: من الفكرة إلى النظام</h2>

        <p>في هذه الصفحات لم نطارد التفاصيل لمجرد التفاصيل، بل لأن غرفة العمليات تُعاقب التساهل. بدأنا من الفكرة الكبرى: لماذا تُعد غرفة العمليات بيئة عالية الخطورة؟ لأنها تجمع الإنسان تحت الضغط، والتقنية، والوقت، والدم، والقرار، والتداخل بين تخصصات متعددة، في مساحةٍ واحدة لا تسمح بالارتجال. ثم رسمنا خريطة المخاطر لا بوصفها قائمة تهديدات، بل بوصفها عقلًا منهجيًا يرى الخطر قبل أن يراه الحدث، ويمنح الفريق لغةً مشتركة للتصعيد والتعامل.</p>

        <p>ثم انتقلنا إلى ما أسميه "بوابات البداية الصحيحة": هوية المريض، وثبات المستندات، وصحة الإجراء والموقع، واستعدادات ما قبل الدخول. تلك ليست إجراءات إدارية؛ إنها الحاجز الأول أمام أخطاءٍ قد تبدو مستحيلة لكنها تحدث حين يُترك الحبل للذاكرة وحدها.</p>

        <p>وبعدها دخلنا إلى قلب منطقة العدوى والتعقيم، لا باعتبارها "مهمة التمريض" أو "مسؤولية التعقيم المركزي"، بل باعتبارها سلسلة واحدة إن انقطعت حلقةٌ فيها لم يعد للحرص معنى. ثم جاءت منظومة "منع الأحداث الجسيمة" التي لا تقبل المساومة: قائمة السلامة الجراحية حين تُستخدم كأداة فريق لا كطقس، والعدّ الجراحي حين يُعامل كحاجز نظامي لا كعملية حسابية، وسلسلة العيّنة حين تُحترم كأمانة تشخيص لا كوعاءٍ يُرسَل، وحماية المريض من مخاطر الطاقة والنار والوخز، والانضباط الدوائي داخل الحقل المعقّم حتى لا يصبح سائلٌ شفاف سببَ ضررٍ لا يُرى إلا بعد فوات الوقت.</p>

        <p>ثم وسّعنا العدسة إلى ما يظنه البعض "تشغيلاً" بينما هو في الحقيقة أمنٌ صريح: جدولة صادقة لا تُكافئ الكذب في التقدير، وبداية يوم تُبنى على الاستعداد لا على استدعاء البطولات، وتجهيز معدات لا يكتفي بوجودها بل يثبت وظيفتها، وسلاسل إمداد لا تترك الفريق يعيش على القلق، ونماذج توظيف وتدريب تفهم أن المهارة ليست شهادة بل ممارسة متجددة.</p>

        <p>وأخيرًا وضعنا الجودة في إطارها الصحيح: القياس ليس غاية، بل ضوءٌ يكشف أين تقف، والتقارير ليست فضيحة بل فرصة، والتحقيق ليس مطاردة أفراد بل إصلاح شروط، والإغلاق ليس "كتابة إجراء" بل تثبيت تغيير، والمحاكاة ليست ترفًا بل صيانةٌ للمهارات الحرجة التي لا تُختبر يوميًا ولكنها تُنقذ الأرواح عندما تقع.</p>

        <h2>التحول العميق في العقلية</h2>

        <p>وإذا كان لي أن أختصر ما أتمنى أن يبقى عالقًا في ذهنك بعد إغلاق هذا الكتاب، فهو هذا التحوّل العميق:</p>
        <ul>
            <li>أن تنتقل غرفة العمليات من عقلية "نطفئ الحريق" إلى عقلية <strong>"نمنع اكتمال مثلث الحريق"</strong>.</li>
            <li>ومن ثقافة "لا تُحرجنا بالتقرير" إلى ثقافة <strong>"بلّغ لتُنقذ"</strong>.</li>
            <li>ومن عبادة السرعة إلى <strong>احترام الاستقرار</strong>.</li>
            <li>ومن الاتكال على خبرة فرد إلى <strong>هندسة فريق</strong>.</li>
            <li>ومن الثقة في الذاكرة إلى <strong>بناء وسائل مساعدة معرفية</strong> تمنع الالتباس قبل أن يقع.</li>
        </ul>

        <p>أتمنى أن يبقى في وجدانك أن الروتيني هو المكان المفضل للخطأ، لأن الروتين يُخدِّر الحذر ويغري بالعجلة. وأن الهدوء الظاهري في غرفة العمليات لا يعني الأمان، فقد يكون الأمان الحقيقي هو ذلك "التوقف القصير" الذي يقطع طريق الضرر، وتلك العبارة التي تُقال في الوقت الصحيح: <strong>"قف، هناك مخاطرة، دعنا نتحقق."</strong></p>

        <p>أتمنى أن تتذكر أن الملصق ليس ورقة، بل هو نظام يمنع تبديل الحقيقة، وأن العدّ ليس عددًا بل حصنٌ ضد نسيانٍ طبيعي لدى البشر حين تتزاحم المهام، وأن التعقيم ليس إجراءات بل كرامة المريض في مواجهة عدوى لا يراها. وأن الفريق الآمن لا يقاس بعدد السياسات، بل بطريقة استجابته للخبر السيئ: هل يُسمح بالصدق؟ هل تُكافأ الجرأة الأخلاقية؟ هل يُحوَّل الألم إلى تعلّم؟ أم يُدفن الحدث في الصمت؟</p>

        <h2>رسالة أخيرة للممارسة</h2>

        <p>وأتمنى، قبل كل شيء، أن يغادر هذا الكتاب يديك وهو يترك في قسمك أثرًا عمليًا صغيرًا لكنه حقيقي.</p>
        <ul>
            <li>أن تضيف لحظة تحقق قبل أن تُفتح عيّنة.</li>
            <li>أن تُعيد تعريف "جاهزية الغرفة" قبل دخول المريض.</li>
            <li>أن تجعل مكان الملصقات ثابتًا لا يهاجر.</li>
            <li>أن تُدرّب فريقك على الخوارزمية لا على الذاكرة.</li>
            <li>أن تحمي "اللحظات الحرجة" من المقاطعات.</li>
            <li>أن تُنشئ لوحة قياس لا تُخيف الناس بل تُنير الطريق.</li>
            <li>وأن تكتب تقرير قرب-حادثة واحد بشجاعة، لأن قرب-الحادثة قد تكون الفرق بين درسٍ صامت وبين مأساةٍ علنية.</li>
        </ul>

        <p>المستقبل سيأتي بتقنية أكثر، وغرف هجينة أكثر، وعمليات أطول، ومرضى أكثر هشاشة وتعقيدًا. لكن الحقيقة الكبرى لا تتغير: <strong>أن أعظم ما يحمي المريض ليس جهازًا ذكيًا، بل قسمٌ ذكي ثقافيًا</strong>، يعرف كيف يرى الخطأ قبل أن يكبر، وكيف يتعلم دون انتقام، وكيف يحول المعرفة إلى عملٍ قياسي، ثم يقيس، ثم يثبت القياس كعادة لا كموسم.</p>

        <div class="quote-box">
            وفي النهاية، أضع بين يديك "عهدًا" لا أحب أن يكون شعارًا بل ممارسةً يومية:<br>
            <strong>ألا ندع مريضًا يدفع ثمن فوضى يمكن تنظيمها، أو لبس يمكن منعه، أو صمتٍ كان يمكن أن يُقال فيه: قف.</strong><br>
            هذا هو جوهر السلامة والجودة في غرفة العمليات: أن تصنع نظامًا يحمي المريض حين تكون أنت في أقصى تعبك، ويُبقي إنسانيتك حاضرة حتى في أقصى ضغطك.
        </div>

        <div class="signature">
            د. جميل السقيا<br>
            <span class="signature-title">استشاري التخدير والعناية المركزة</span>
        </div>
    </div>

    <!-- Download Script -->`,
}