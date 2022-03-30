import React from 'react'

const Blog = () => {
    return (
        <div className="row ">
            <div className="col-lg-4">
                <svg  className="bd-placeholder-img rounded-circle m-auto" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>عنوان</h2>
                <p>تذكر دائماً أن الحاسوب لا يمتلك ذكاءً، ولكنه يكتسب الذكاء الاصطناعي من خلال ثلاثة عناصر وظيفية رئيسة، هي: القدرة على التحليل، والقدرة على التأليف، والاستدلال المنطقي.</p>
                <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>عنوان آخر</h2>
                <p>إذا أردنا استخدام الحاسوب الذكي في معالجة اللغة العربية فإننا نجد أنفسنا أمام تحدٍّ كبير، خاصة وأن لغتنا تمتاز بتماسك منظوماتها وتداخلها، ومع ذلك فإن الذكاء الاصطناعي يمكّننا من الحصول على أربعة أنواع من المعالجة، هي: المعالجة
                    الصوتية، والمعالجة الصرفية، والمعالجة النحوية، والمعالجة الدلالية.</p>
                <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>عنوان ثالث لتأكيد المعلومة</h2>
                <p>بفضل بحوث الذكاء الاصطناعي وتقنياته استطعنا الانتقال من مرحلة التعامل مع الفيزيائي إلى مرحلة التعامل مع المنطقي، وقد انعكس هذا الانتقال بصورة إيجابية على الكيفية التي تتعامل بها الشعوب مع لغاتها الحيَّة، وهذا يعني أنه يجب أن ينعكس
                    بصورة إيجابية على كيفية تعاملنا مع لغتنا العربية.</p>
                <p><a className="btn btn-secondary" href="#">عرض التفاصيل</a></p>
            </div>
        </div>
    )
}

export default Blog