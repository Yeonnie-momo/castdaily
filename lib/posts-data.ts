/* ──────────────────────────────────────────────────────────────
 *  블로그 게시글 데이터
 *  ─ 텍스트를 수정하고 싶으면 이 파일만 편집하면 됩니다.
 *  ─ 이미지 경로는 public/images/blog/ 폴더를 참고하세요.
 * ────────────────────────────────────────────────────────────── */

/** 제품 상세 페이지 URL (CTA 링크에 사용) */
export const PRODUCT_DETAIL_URL =
  "https://foind.co.kr/product/%ED%8F%AC%EC%9D%B8%EB%93%9C-001-%EB%B9%84%EA%B1%B4-%EC%BB%B4%ED%8F%AC%ED%8A%B8-%EB%84%A4%EC%9D%BC-%ED%95%98%EB%93%9C%EB%84%88/14/category/42/display/1/";

/* ──────────────────────── 타입 정의 ──────────────────────── */

export interface BestComment {
  id: number;
  author: string;
  date: string;
  text: string;
  likes: number;
}

export interface Post {
  id: number;
  title: string;
  authorName: string;
  dateText: string;
  viewsText: string;
  authorAvatarUrl: string;
  initialLikeCount: number;
  commentCount: number;
  articleHTML: string;
  bestComments: BestComment[];
}

/* ──────────────────────── 게시글 목록 ──────────────────────── */

export const posts: Post[] = [
  /* ============================================================
   *  게시글 1 — 손톱 세로줄 (메인 글)
   * ============================================================ */
  {
    id: 4839201,
    title: "손톱 세로줄 그냥 나이 탓인 줄 알았는데 아니었어요",
    authorName: "NWW",
    dateText: "2026.02.09",
    viewsText: "1,305,967 읽음",
    authorAvatarUrl: "/images/blog/profile-nww.jpg",
    initialLikeCount: 168,
    commentCount: 35,

    articleHTML: `
<p style="text-align:center;">
<strong style="color:hsl(0,70%,50%);font-size:1.15em;">손톱에 세로줄</strong>이 생기기 시작하면<br/>
대부분 나이들어서 그렇겠지 하고 넘기지 않으세요?
</p>

<p style="text-align:center;font-weight:700;font-size:1.1em;">
저도 그랬는데, 방치하면 안 되겠더라구요.
</p>

<figure>
  <img src="/images/blog/nail-before.jpg" alt="손톱 세로줄이 보이는 사용 전 손톱 상태" />
</figure>

<p style="text-align:center;">
어느 날 문득 손톱을 봤는데<br/>
<strong>세로줄이 예전보다 훨씬 진해져</strong> 있는 거예요.
</p>

<p style="text-align:center;">
그거 하나 눈에 들어오니까<br/>
갈라짐, 울퉁불퉁한 표면, 탁한 색까지<br/>
<strong style="color:hsl(0,70%,50%);">전부 다 신경 쓰이기 시작했어요.</strong>
</p>

<p style="text-align:center;">
저 그래도 결혼 전에는 손톱 예쁘단 소리 들었거든요.<br/>
근데 지금은? 설거지, 빨래, 육아...<br/>
손이 완전히 망가졌어요. 솔직히 <strong>자존감까지 바닥</strong>이었습니다.
</p>

<h2>손톱 세로줄, 절대 나이 탓만이 아닙니다</h2>

<p style="text-align:center;">
손톱 세로줄 원인, 검색해보셨죠?<br/>
<strong>"노화"</strong>라고 대충 넘기셨죠?
</p>

<p style="text-align:center;font-weight:700;">
그런데 전문가들 말에 따르면, 진짜 원인은 따로 있었습니다.
</p>

<p style="text-align:center;">
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">물에 자주 닿는 생활</strong><br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">젤네일 반복으로 인한 손상</strong><br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">손톱 자체의 영양 결핍</strong>
</p>

<p style="text-align:center;">
울퉁불퉁, 갈라짐, 탁한 색...<br/>
이건 전부 <strong>손톱이 보내는 SOS 신호</strong>예요.<br/>
무시하면 더 심해집니다.
</p>

<h2>손톱 검은 세로줄? 검색하면 소름 돋습니다</h2>

<p style="text-align:center;">
'손톱 검은 세로줄'로 검색해보세요.<br/>
<strong style="color:hsl(0,70%,50%);">무서운 얘기가 쏟아져 나옵니다.</strong>
</p>

<p style="text-align:center;">
물론 전부 심각한 건 아니에요.<br/>
근데 <strong>그날 이후로 손톱을 방치할 수가 없었어요.</strong>
</p>

<p style="text-align:center;font-weight:700;font-size:1.05em;">
"이게 정말 괜찮은 걸까?"<br/>
"계속 모른 척 해도 되는 걸까?"
</p>

<h2>젤네일로 빠르게 가려봤는데, 오히려 안 좋아졌어요.</h2>

<p style="text-align:center;">
누구나 생각하죠.<br/>
진한 색으로 덮으면 되지 않나?
</p>

<p style="text-align:center;">
<strong style="color:hsl(0,70%,50%);">설거지 몇 번 하면 젤이랑 손톱 사이가 뜨고,</strong><br/>
<strong style="color:hsl(0,70%,50%);">그렇다고 그냥 매니큐어 바르자니 덧바를수록 손톱은 숨을 못쉬고,</strong><br/>
<strong style="color:hsl(0,70%,50%);">결국 손톱도 노화가 더 오더라구요.</strong>
</p>

<p style="text-align:center;">
진짜로 저희 엄마 손이랑 똑같아졌습니다.<br/>
40대인데요. <strong>충격이었어요.</strong>
</p>

<p style="text-align:center;">
매니큐어를 더 바를수록<br/>
손톱은 더 얇아지고, 더 갈라지고, 더 부서졌어요.<br/>
<strong>악순환의 끝판왕</strong>이었습니다.
</p>

<h2>영양제 7개 써봤습니다. 결론부터 말할게요.</h2>

<p style="text-align:center;">
해외 브랜드, 국내 브랜드...<br/>
<strong>총 7개를 직접 사서 다 써봤어요.</strong>
</p>

<p style="text-align:center;">
솔직히 <strong style="color:hsl(0,70%,50%);">거의 다 실망</strong>이었습니다.<br/>
냄새는 독하고, 매니큐어랑 다를 게 없고,<br/>
지울 때 오히려 손톱 표면이 벗겨지더라고요.
</p>

<p style="text-align:center;">
돈만 날렸다는 생각에 화가 날 정도였어요.
</p>

<p style="text-align:center;font-weight:700;font-size:1.05em;">
근데 딱 하나, 완전히 달랐던 제품이 있었습니다.
</p>

<figure>
  <img src="/images/blog/nail-after-1.jpg" alt="손톱 영양제 바른 후 개선된 손톱" />
  <img src="/images/blog/nail-after-2.jpg" alt="손톱 영양제 바른 후 개선된 손톱 다른 각도" />
</figure>

<p style="text-align:center;">
7개 써보면서 생긴 제 기준, 공유할게요.
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
1. 바르고 답답하면? 바로 탈락.
</p>

<p style="text-align:center;">
손톱이 두꺼워 보이거나 숨 막히는 느낌?<br/>
<strong>그건 영양제가 아니라 고문입니다.</strong><br/>
얇게 발리고, 뭉치지 않고, 가벼워야 해요.
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
2. 안 마르면? 여기에 쓸 시간 없잖아요.
</p>

<p style="text-align:center;">
아이 키우면서 손톱 말리느라 10분씩 앉아 있을 수 있나요?<br/>
바르자마자 바로 움직일 수 있어야 해요.<br/>
<strong>이게 안 되면 아무리 좋아도 못 씁니다.</strong>
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
3. 에센스 같은 제형? 물 닿으면 효과 없어요.
</p>

<p style="text-align:center;">
세로줄 없애려고 바르는데, 그 전에 물에 닿아 제품이 먼저 사라져요.<br/>
<strong>코팅력이 있어서 물에도 버텨줘야</strong> 합니다.
</p>

<h2>전후 비교 — 이건 직접 보셔야 합니다</h2>

<p style="text-align:center;">
<strong style="font-size:1.1em;">사진으로 보면 확실합니다.</strong>
</p>

<p style="text-align:center;">
며칠간 설거지, 빨래를 했는데도<br/>
<strong>벗겨지거나 뭉치지 않았어요.</strong>
</p>

<p style="text-align:center;">
아이한테 노출돼도 안전한 성분이래서<br/>
<strong>엄마들이 쓰기에 딱</strong>이에요.
</p>

<figure>
  <img src="/images/blog/nail-closeup.jpg" alt="손톱 영양제 바른 후 가까이서 본 손톱" />
  <img src="/images/blog/nail-after-applied.jpg" alt="손톱 영양제 바른 후 전체 손 모습" />
</figure>

<p style="text-align:center;">
<strong style="color:hsl(0,70%,50%);">세로줄이 눈에 띄게 줄었고</strong><br/>
울퉁불퉁하던 표면이 매끈해졌어요.
</p>

<p style="text-align:center;font-weight:700;">
20대 때 반짝이던 그 손톱이 돌아온 느낌...
</p>

<p style="text-align:center;">
네일샵에서 관리받은 건 아닌데,<br/>
<strong>관리 안 하는 손처럼 안 보이는 게 핵심</strong>이에요.<br/>
손톱계의 꾸안꾸. 이게 진짜입니다.
</p>

<h2>딸이 한마디 했는데, 울었습니다</h2>

<p style="text-align:center;">
아이랑 놀아주고 있는데<br/>
딸랭이가 갑자기 이렇게 말했어요.
</p>

<p style="text-align:center;font-weight:700;font-size:1.2em;color:hsl(0,70%,50%);">
"엄마 손 이쁘다"
</p>

<p style="text-align:center;">
그 한마디에 눈물이 나왔어요.<br/>
늘 아이만 챙기느라 제 자신은 뒷전이었거든요.
</p>

<p style="text-align:center;">
<strong>손톱 하나 바꿨을 뿐인데</strong><br/>
뭔가 나를 다시 챙기기 시작한 것 같아서<br/>
기분이 완전히 달라졌어요.
</p>

<p style="text-align:center;">
남편도 "손이 반짝반짝하다, 튼튼해 보인다"<br/>
(둔한 남편한테 이 소리를 듣다니...)
</p>

<h2>이런 분은 무조건 써보세요</h2>

<p style="text-align:center;font-weight:700;">
고민만 하고 계시면 아무것도 안 바뀝니다.
</p>

<p style="text-align:center;">
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">손톱 세로줄 때문에 손 내밀기 부끄러운 분</strong><br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">젤네일로만 버티고 계신 분</strong><br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">손톱이 자꾸 갈라져서 스트레스인 분</strong><br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">영양제 사서 후회한 적 있는 분</strong>
</p>

<p style="text-align:center;font-weight:700;">
제가 7개 써보고 돈 날린 대신,<br/>
여러분은 이거 하나만 쓰시면 됩니다.
</p>

<p style="text-align:center;">
단점이 하나 있긴 해요...<br/>
<strong>다른 영양제들보다 가격이 좀 있어요.</strong>
</p>

<p style="text-align:center;">
근데 네일샵 한 번 가는 돈이면<br/>
<strong style="color:hsl(0,70%,50%);">6개월 넘게 관리</strong>할 수 있으니까요.<br/>
이건 아까운 게 아니라 <strong>투자</strong>입니다.
</p>

<figure>
  <img src="/images/blog/foind-product.jpg" alt="포인드 001 비건 틴티드 네일 하드너 제품" />
  <figcaption>포인드 001 비건 틴티드 네일 하드너 | 포인드</figcaption>
</figure>

<div style="margin:1.5em auto;max-width:70%;">
  <a href="${PRODUCT_DETAIL_URL}" target="_blank" rel="noreferrer" style="display:flex;align-items:center;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;">
    <img src="/images/blog/foind-product-thumb.png" alt="포인드 001" style="width:64px;height:64px;object-fit:contain;border-radius:8px;flex-shrink:0;" />
    <div>
      <p style="margin:0 0 2px;font-size:0.75em;color:#999;">foind.co.kr</p>
      <p style="margin:0 0 2px;font-weight:700;font-size:0.95em;color:#222;">포인드 001 비건 틴티드 네일 하드너</p>
      <p style="margin:0;font-size:0.82em;color:#888;">손톱 세로줄 케어를 위한 비건 네일 하드너 상세 보기</p>
    </div>
  </a>
</div>

<h2>초간단 손톱 관리법 (이것만 따라하세요)</h2>

<p style="text-align:center;">
<strong>1)</strong> 큐티클을 불려주세요<br/>
<strong>2)</strong> 니퍼로 붙은 큐티클만 잘라주세요<br/>
<strong>(1, 2는 해도 되고 안 해도 돼요)</strong><br/>
<strong>3)</strong> 손톱은 기존 집에 있는 손톱깎이로 잘라주세요<br/>
<strong>4)</strong> 손톱 영양제 한 번씩 발라주세요<br/>
<strong>5)</strong> 그리고 큐티클 오일로 마무리해주세요<br/>
<strong>6)</strong> 손톱 영양제는 2-3일 주기로 덧발라주서도 돼요
</p>

<p style="text-align:center;">
끝입니다. <strong>이게 전부예요.</strong><br/>
하루 3분이면 됩니다.
</p>

<figure>
  <img src="/images/blog/nail-with-product.jpg" alt="포인드 네일 하드너를 손에 들고 있는 모습" />
</figure>

<hr />

<p style="text-align:center;">
더 궁금한 거 있으면 댓글 달아주세요.<br/>
확인하는대로 답글 남길게요~
</p>

<p style="text-align:center;">
(+ 손톱영양제가 투명이랑 색깔 있는게 있는데,<br/>
<strong style="color:hsl(0,70%,50%);">저는 색 있는 게 압도적으로 좋았어요.</strong>)
</p>

<div style="margin:1.5em auto;max-width:70%;">
  <a href="${PRODUCT_DETAIL_URL}" target="_blank" rel="noreferrer" style="display:flex;align-items:center;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;">
    <img src="/images/blog/foind-product-thumb.png" alt="포인드 001" style="width:64px;height:64px;object-fit:contain;border-radius:8px;flex-shrink:0;" />
    <div>
      <p style="margin:0 0 2px;font-size:0.75em;color:#999;">foind.co.kr</p>
      <p style="margin:0 0 2px;font-weight:700;font-size:0.95em;color:#222;">포인드 001 비건 틴티드 네일 하드너</p>
      <p style="margin:0;font-size:0.82em;color:#888;">손톱 세로줄 케어를 위한 비건 네일 하드너 상세 보기</p>
    </div>
  </a>
</div>
`,

    bestComments: [
      {
        id: 1,
        author: "워킹맘쏘",
        date: "2026.02.10",
        text: "저도 손톱 세로줄 고민이었는데 이거 보고 바로 질렀어요! 후기 기대됩니다 ㅎㅎ",
        likes: 247,
      },
      {
        id: 2,
        author: "네일러버",
        date: "2026.02.09",
        text: "비건이라 성분 걱정 없이 쓸 수 있는 게 좋네요. 아이 있는 집이라 이런 거 중요해요!",
        likes: 189,
      },
      {
        id: 3,
        author: "직장인J",
        date: "2026.02.09",
        text: "꾸안꾸 손톱 ㅋㅋㅋ 공감되네요.. 저도 사봐야겠다",
        likes: 134,
      },
    ],
  },

  /* ============================================================
   *  게시글 2 — 손톱 물어뜯기 습관
   * ============================================================ */
  {
    id: 5839202,
    title: "10년 간 손톱 물어뜯던 습관, 이렇게 고쳤습니다",
    authorName: "KKS",
    dateText: "2026.03.08",
    viewsText: "892,341 읽음",
    authorAvatarUrl: "/images/blog/profile-nww.jpg",
    initialLikeCount: 312,
    commentCount: 87,

    articleHTML: `
<p style="text-align:center;">
손톱을 물어뜯기 시작한지 어언 10년째..<br/>
어느 날 문득 제 손을 봤는데 상태가 말이 아닌거에요.
</p>

<figure>
  <img src="/images/blog/nail-before-after.jpg" alt="손톱 물어뜯어서 망가진 손톱 상태" />
</figure>

<p style="text-align:center;">
짧다 못해 살까지 파먹은 손톱,<br/>
주변 피부까지 같이 뜯으며 생긴 거스러미,<br/>
갈라지고 너덜너덜해진 손끝...<br/>
<strong>딱 봐도 관리 안하는 사람 손이었어요.</strong>
</p>

<p style="text-align:center;">
이게 한번 신경쓰이기 시작하니까<br/>
사람 만날 때마다 괜히 손을 숨기게 되더라고요.<br/>
미팅이나 회의할 때 괜히 사람들이 손 쳐다보는거 같고<br/>
카드 꺼낼 때마다 신경쓰이고<br/>
일상생활 할 때 괜히 <strong style="color:hsl(0,70%,50%);">자신감이 떨어지는 느낌...</strong>
</p>

<figure>
  <img src="/images/blog/nail-biting-habit.png" alt="손톱 물어뜯는 습관" />
</figure>

<p style="text-align:center;">
그리고 손톱이 사람 전체 인상에도 영향을 주더라구요<br/>
소개팅 나갔는데 손톱이 뭉툭하고 지저분하면<br/>
혹은 긴장해서 손톱 물어뜯고 있으면<br/>
그 사람에 대해 좋은 인상이 들까요?
</p>

<p style="text-align:center;font-weight:700;">
아무리 다른 부분이 완벽해도 확 깰걸요..<br/>
별거 아닌데 손톱이 깔끔해 보인다는 것만으로<br/>
사람 인상이 달라져요. 이건 진짜에요..
</p>

<figure>
  <img src="/images/blog/nail-outdoor.jpg" alt="손톱 상태 광명 찾은 지금의 손" />
  <figcaption>손톱 상태 광명 찾은 지금의 손</figcaption>
</figure>

<h2>물어뜯는 습관, 왜 고치기 힘들까요?</h2>

<p style="text-align:center;">
그래서 저도 손톱 물어뜯는 습관 고치려고<br/>
무던히 노력했는데 진짜 쉽지 않더라구요
</p>

<p style="text-align:center;">
이게 고치기 힘든 이유가<br/>
손톱 물어뜯다보면<br/>
<strong style="color:hsl(0,70%,50%);">손톱이 점점 얇아지고</strong><br/>
<strong style="color:hsl(0,70%,50%);">표면은 울퉁불퉁해지고</strong><br/>
<strong style="color:hsl(0,70%,50%);">끝은 점점 더 갈라지고</strong><br/>
그러면 또 걸리적거려서 또 뜯게 되고..
</p>

<p style="text-align:center;">
한번이라도 물어뜯은 경험 있다면 공감하실 거에요<br/>
<strong>악순환의 굴레죠..</strong>
</p>

<figure>
  <img src="/images/blog/nail-biting-cycle.png" alt="물어뜯음 - 갈라짐 - 거슬림 악순환 다이어그램" />
</figure>

<p style="text-align:center;">
문제는 여기서 끝이 아니라는 겁니다.<br/>
이걸 계속 반복하면 손톱 자체가 망가집니다.<br/>
<strong style="color:hsl(0,70%,50%);font-size:1.1em;">손톱 모양이 아예 변해요</strong><br/>
<strong>한번 짧아지고 뭉툭한 바디는 되돌릴 수가 없어요..</strong>
</p>

<figure>
  <img src="/images/blog/shocked-face.jpg" alt="놀란 표정" />
</figure>

<h2>해보는거 다 해봤습니다</h2>

<p style="text-align:center;">
손톱 물어뜯는 사람들 해보는거 저도 다 해봤습니다.
</p>

<ul>
<li>손톱깎이로 최대한 짧게 자르기</li>
<li>네일샵 가서 젤네일로 덮기</li>
<li>쓴 맛 나는 매니큐어 발라서 못 뜯게 하기</li>
</ul>

<figure>
  <img src="/images/blog/gel-nail-collage.png" alt="젤네일로 덮던 시절" />
  <figcaption>종잇장 손톱의 원인이 된,, 젤네일로 무작정 덮던 시절</figcaption>
</figure>

<p style="text-align:center;">
근데요,<br/>
짧게 잘라도 조금만 길어서 공간 생기면 또 물어뜯고<br/>
젤네일은 제거하고 나면 손톱이 종잇장처럼 약해지고<br/>
쓴 맛 나는 매니큐어는 맛 때문에 손이 안가고,<br/>
벗겨지면 더 신경쓰이고...
</p>

<h2>결론: 습관을 고치려 하지 말고, 손톱 상태를 먼저 바꾸세요</h2>

<p style="text-align:center;">
모든 방법을 시도해본 끝에 내린 저의 결론은<br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">습관을 고치려고 하기보다</strong><br/>
<strong style="color:hsl(0,70%,50%);font-size:1.05em;">안 뜯을 수 있는 손톱 상태를 만드는 게 먼저라는 거였어요.</strong>
</p>

<p style="text-align:center;">
손톱이 두껍고 단단해지고 표면이 매끈해지면<br/>
신기하게도 손이 입으로 잘 안 갑니다.<br/>
<strong>건드릴 이유가 없어지거든요.</strong>
</p>

<p style="text-align:center;font-weight:700;">
이게 제가 물어뜯는 습관 고치기 전후 손톱 비교에요
</p>

<figure>
  <img src="/images/blog/nail-compare.jpg" alt="손톱 물어뜯기 전후 비교" />
</figure>

<h2>손톱영양제, 강화제 잘 고르는 기준</h2>

<p style="text-align:center;">
손톱을 근본부터 바꾸기 위해<br/>
눈에 띄는 손톱영양제들은 다 사본거 같아요.<br/>
국내 제품, 해외 제품... 총 10개 정도? 써봤어요.<br/>
근데 솔직히 말하면 대부분 비슷했습니다.<br/>
겉만 반드르르하고 속까지 영양이 흡수되는지 잘 모르겠는..?<br/>
투명매니큐어랑 구분이 안가는 느낌이었어요
</p>

<p style="text-align:center;font-weight:700;">
근데 딱 하나 다른 제품이 있었어요.<br/>
정보 알려드리기 전에<br/>
제가 여러개 써보고 돈 날리면서 얻은 팁,<br/>
손톱영양제, 강화제 잘 고르는 기준 먼저 알려드릴게요
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
1. 코팅형 제품이 좋아요
</p>

<p style="text-align:center;">
에센스나 크림 타입은 생활하면서 금방 씻겨나가니까<br/>
그냥 핸드크림 바르는거랑 별반 다를게 없더라구요<br/>
손톱에 코팅이 단단하게 씌워지면 확실히 덜 물어뜯게 되고<br/>
<strong>영양 유지력도 올라가는 거 같아요</strong>
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
2. 답답하면 바로 탈락
</p>

<p style="text-align:center;">
손톱 위에 코팅막이 두껍게 올라가면<br/>
결국 신경쓰여서 또 뜯게 됩니다.<br/>
얇고 가볍게 발려야 손톱 위에 뭐가 있는걸 까먹어서<br/>
<strong>손톱에 신경이 덜 쓰이게 되어요</strong>
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
3. 냄새랑 발림성도 은근 중요해요
</p>

<p style="text-align:center;">
올리브영에서 1등한다는 반디꺼 제품도 써봤는데<br/>
냄새가 엄청 독하고 떡지고 효과도 잘 모르겠고<br/>
이게 영양제가 맞는지 의심되는 수준이었어요<br/>
손톱은 꾸준히 관리해야되는 영역이라<br/>
<strong>사용감도 꼭 챙겨야 합니다!</strong>
</p>

<p style="text-align:center;color:hsl(0,70%,50%);font-weight:700;font-size:1.05em;">
4. 발랐을 때 손톱이 예뻐보여야 합니다
</p>

<p style="text-align:center;">
손톱이 예뻐보이면 이상하게 덜 뜯어요<br/>
<strong>이거 진짜입니다.</strong><br/>
손톱이 망가져 있을 때는 계속 뜯고 싶었는데<br/>
손톱이 윤기나고 괜찮아 보이니까 괜히 건드리기 싫더라고요.
</p>

<h2>제가 10년 습관 고치는데 도움받은 제품</h2>

<p style="text-align:center;">
마지막으로 제가 10년 습관 고치는데<br/>
찐으로 도움받은 제품 공유할게요<br/>
처음에 후기가 너무 좋길래 혹시 조작일까 의심하다가<br/>
다른 제품에는 없는 특허나 임상 같은 결과가 있길래 사봤는데<br/>
<strong style="color:hsl(0,70%,50%);">이건 진짜 다르긴 하더라구요.</strong>
</p>

<p style="text-align:center;">
페이스 제품쪽에 자주 보이는 리포좀 기술 아시나요?<br/>
그걸 네일 제품으로는 처음으로 적용했다고 하던데<br/>
그래서 그런지 다른거랑 달리 효과가 찐으로 느껴졌던..<br/>
<strong>제 구세주같은 제품이에요 이제 없으면 못살아요</strong>
</p>

<figure>
  <img src="/images/blog/nail-keyboard.jpg" alt="건강해진 손톱" />
</figure>

<p style="text-align:center;">
이게 좋은게 영양코팅이 진짜 얇아서 답답함이 1도 없구<br/>
생활할 때 바른 걸 까먹을 정도에요<br/>
그리고 제가 써본 것중에 제일 냄새가 없었어요<br/>
<strong>회사 책상에서 발라도 되는 정도!</strong>
</p>

<p style="text-align:center;">
바르자마자 표면이 정리되고 윤기가 은은하게 돌면서<br/>
손톱이 훨씬 건강해보여요<br/>
컬러 버전도 있는데 안에 든 영양성분은 동일하고<br/>
혈색을 자연스럽게 올려주니까 손톱이 더 생기있고 예뻐보여요<br/>
<strong style="color:hsl(0,70%,50%);">저는 개인적으로 혈색 제품 강추!!!</strong>
</p>

<figure>
  <img src="/images/blog/nail-applying.jpg" alt="네일 하드너 바르는 모습" />
</figure>

<p style="text-align:center;">
이미 현대백화점에도 들어가구 일본에서 1등하고 있다고는 하는데<br/>
그래도 혹시 단종될까봐 불안한 마음에<br/>
널리 알리고파 이렇게 글 남깁니다
</p>

<p style="text-align:center;">
가격도 엄청 합리적이라<br/>
<strong>네일샵 케어 한번 받는 가격으로 거의 두세달은 쓸 수 있어요.</strong>
</p>

<div style="margin:1.5em auto;max-width:70%;">
  <a href="${PRODUCT_DETAIL_URL}" target="_blank" rel="noreferrer" style="display:flex;align-items:center;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;">
    <img src="/images/blog/foind-product-thumb.png" alt="포인드 001" style="width:64px;height:64px;object-fit:contain;border-radius:8px;flex-shrink:0;" />
    <div>
      <p style="margin:0 0 2px;font-size:0.75em;color:#999;">foind.co.kr</p>
      <p style="margin:0 0 2px;font-weight:700;font-size:0.95em;color:#222;">포인드 001 비건 틴티드 네일 하드너</p>
      <p style="margin:0;font-size:0.82em;color:#888;">손톱 물어뜯기 습관 교정을 위한 비건 네일 하드너</p>
    </div>
  </a>
</div>

<h2>이제 손톱 안숨기고 당당하게 살아요</h2>

<p style="text-align:center;">
저는 이제 손톱 안숨기고 당당하게 살아요<br/>
오랜만에 친구 만났는데 그 친구가<br/>
<strong style="color:hsl(0,70%,50%);font-size:1.1em;">"너 손톱 치료받은거야?"</strong> 이러더라구요<br/>
제가 예전에는 손톱이 거의 없는 수준이었거든요<br/>
그 말 듣는데 그 동안 고생했던거 생각하며 눈물이 핑..
</p>

<figure>
  <img src="/images/blog/nail-recovered.jpg" alt="회복된 손톱" />
</figure>

<p style="text-align:center;font-weight:700;">
여러분이 저처럼 손톱 물어뜯는 지긋지긋한 버릇 끝내시고<br/>
손끝에 광명 찾으셨으면 좋겠습니다.<br/>
고민만 하면 절대 안 바뀝니다.
</p>

<ul>
<li><strong style="color:hsl(0,70%,50%);">손톱 물어뜯는 습관 때문에 스트레스인 분</strong></li>
<li><strong style="color:hsl(0,70%,50%);">손톱이 짧고 울퉁불퉁해서 손 숨기는 분</strong></li>
<li><strong style="color:hsl(0,70%,50%);">젤네일로만 버티고 있는 분</strong></li>
<li><strong style="color:hsl(0,70%,50%);">영양제 사서 후회한 경험 있는 분</strong></li>
</ul>

<p style="text-align:center;font-weight:700;">
제가 여러개 써보고 돈 날리며 발굴한<br/>
이거 하나로 시작해보세요.
</p>

<div style="margin:1.5em auto;max-width:70%;">
  <a href="${PRODUCT_DETAIL_URL}" target="_blank" rel="noreferrer" style="display:flex;align-items:center;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;">
    <img src="/images/blog/foind-product-thumb.png" alt="포인드 001" style="width:64px;height:64px;object-fit:contain;border-radius:8px;flex-shrink:0;" />
    <div>
      <p style="margin:0 0 2px;font-size:0.75em;color:#999;">foind.co.kr</p>
      <p style="margin:0 0 2px;font-weight:700;font-size:0.95em;color:#222;">포인드 001 비건 틴티드 네일 하드너</p>
      <p style="margin:0;font-size:0.82em;color:#888;">손톱 물어뜯기 습관 교정을 위한 비건 네일 하드너</p>
    </div>
  </a>
</div>

<hr />

<p style="text-align:center;">
더 궁금한 거 있으면 댓글 남겨주세요.<br/>
확인하는대로 답글 남길게요!
</p>
`,

    bestComments: [
      {
        id: 1,
        author: "손톱고민러",
        date: "2026.03.08",
        text: "저도 10년째 물어뜯는 중인데.. 이거 보고 희망이 생겼어요 ㅠㅠ",
        likes: 423,
      },
      {
        id: 2,
        author: "네일케어초보",
        date: "2026.03.08",
        text: "습관을 고치려 말고 상태를 바꾸라는 말 진짜 공감.. 바로 질러봅니다",
        likes: 287,
      },
      {
        id: 3,
        author: "직장인K",
        date: "2026.03.08",
        text: "회사에서 발라도 냄새 안난다는거 진짜인가요? 그러면 대박인데",
        likes: 156,
      },
    ],
  },

  /* ============================================================
   *  게시글 3 — 겨울 핸드크림 TOP 5
   * ============================================================ */
  {
    id: 1029384,
    title: "2025년 겨울 핸드크림 TOP 5 — 건조한 손을 지켜줄 필수템 비교",
    authorName: "에디터 하은",
    dateText: "2025.11.20",
    viewsText: "892,341 읽음",
    authorAvatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop",
    initialLikeCount: 243,
    commentCount: 58,

    articleHTML: `
<p>
겨울이 다가오면 가장 먼저 거칠어지는 부위가 바로 손이죠. <mark>핸드크림 하나로 하루 종일 촉촉함을 유지</mark>할 수 있다면, 그게 바로 올겨울의 필수템이 아닐까요? 올해 직접 써본 핸드크림 5종을 솔직하게 비교해봤습니다.
</p>

<h2>1. 이솝 레저렉션 아로마틱 핸드밤</h2>

<p>
이솝의 시그니처 제품답게 향이 정말 좋습니다. 텍스처는 약간 묵직한 편이라 ��르자마자 촉촉함이 느껴지고, 약 3~4시간 정도 지속됩니다. 다만 가격대가 높은 편이라 데일리보다는 특별한 날 사용하기 좋습니다.
</p>

<figure>
  <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=760&h=460&fit=crop" alt="핸드크림 이미지" crossorigin="anonymous" />
  <figcaption>겨울철 핸드케어는 선택이 아닌 필수 (이미지: Unsplash)</figcaption>
</figure>

<h2>2. 록시땅 시어 핸드크림</h2>

<p>
"핸드크림의 정석"이라 불릴 만큼 꾸준히 사랑받는 제품. 시어버터 20% 함유로 보습력이 뛰어나고, 끈적임 없이 빠르게 흡수됩니다. 가성비와 성능 모두 만족스러운 올라운더입니다.
</p>

<h2>3. 탬버린즈 퍼퓸 핸드크림</h2>

<p>
향수 대용으로도 손색없는 핸드크림. 특히 <strong>카모 퍼퓸 핸드</strong>는 우디하면서도 은은한 향이 매력적입니다. 보습력은 중간 정도지만 향의 지속력이 탁월해서 향기를 중시하는 분들에게 추천합니다.
</p>

<blockquote>
"탬버린즈 핸드크림은 사무실에서 바르면 꼭 '무슨 향수 뿌렸어?'라는 질문을 받아요. 은은하면서도 고급스러운 향이 최고예요." — 20대 대학원생 박OO
</blockquote>

<h2>4. 키엘 울트라 모이스처라이징 핸드 살브</h2>

<p>
최강의 보습력이 ��요��다면 이 제품. 잠자기 전에 두껍게 바르고 자면 아침에 손이 완전히 달라져 있습니다. <mark>특히 손등이 갈라지는 분들에게 강력 추천</mark>합니다. 다만 낮에 쓰기엔 다소 무거울 수 있어요.
</p>

<h2>5. 한율 달빛유자 핸드크림</h2>

<p>
국내 브랜드 중에서는 단연 톱. 유자 추출물이 들어가 상큼하면서도 은���� 향이 특징이고, 가격도 합리적입니다. 선물용으로도 인기가 많아서 세트 구성으로 자주 나옵니다.
</p>

<p>
<a href="${PRODUCT_DETAIL_URL}" target="_blank" rel="noreferrer">에디터 추천 네일 케어 제품도 함께 확인하기</a>
</p>

<h3>에디터의 최종 선택은?</h3>

<p>
데일리용으로는 <strong>록시땅</strong>, 향기 위주라면 <strong>탬버린즈</strong>, 극건성 케어라면 <strong>키엘</strong>을 추천합니다. 결국 자신의 피부 타입과 사용 상황에 맞는 제품을 고르는 게 가장 중요해요.
</p>

<hr />

<p>
건조한 겨울, 손 관리에 조금만 신경 쓰면 생각보다 큰 차이를 느낄 수 있습니다. 올겨울에는 나에게 맞는 핸드크림 하나쯤 찾아보시는 건 어떨까요?
</p>

<p>
<a href="${PRODUCT_DETAIL_URL}" target="_blank" rel="noreferrer">네일 하드너로 손톱 케어까지 완성하기</a>
</p>
`,

    bestComments: [
      {
        id: 1,
        author: "핸드케어매니아",
        date: "2025.11.19",
        text: "록시땅 시어 진짜 인생템이에요.. 벌써 10통째 ㅋㅋ",
        likes: 312,
      },
      {
        id: 2,
        author: "향기덕후",
        date: "2025.11.18",
        text: "탬버린즈 카모 쓰는데 진짜 향수 필요없어요 강추!!",
        likes: 198,
      },
      {
        id: 3,
        author: "겨울손톱",
        date: "2025.11.17",
        text: "키엘 핸드살브 + 면장갑 조합이면 갈라진 손등도 살아납니다",
        likes: 156,
      },
    ],
  },

  /* Notion sync */
  {
    id: 95010665,
    title: "10년 간 손톱 물어뜯던 습관, 이렇게 고쳤습니다",
    authorName: "NWP",
    dateText: "2026.03.09",
    viewsText: "357 읽음",
    authorAvatarUrl: "/images/blog/profile-nww.jpg",
    initialLikeCount: 71,
    commentCount: 0,
    articleHTML: `
<p style="text-align:center;">손톱을 물어뜯기 시작한지 어언 10년째..</p>
<p style="text-align:center;">어느 날 문득 제 손을 봤는데 상태가 말이 아닌거에요.</p>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/5f4a81c5-59cd-4bca-b474-73f1e14dea2c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-08_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.05.56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110534Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=d6c3455a09b28e3fa3c40d07bf27dcdb8da393f3007f6bcbd4936359407ddc83&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<p style="text-align:center;">짧다 못해 살까지 파먹은 손톱,</p>
<p style="text-align:center;">주변 피부까지 같이 뜯으며 생긴 거스러미,</p>
<p style="text-align:center;">갈라지고 너덜너덜해진 손끝…</p>
<p style="text-align:center;">딱 봐도 관리 안하는 사람 손이었어요.</p>
<p style="text-align:center;">이게 한번 신경쓰이기 시작하니까</p>
<p style="text-align:center;">사람 만날 때마다 괜히 손을 숨기게 되더라고요.</p>
<p style="text-align:center;">미팅이나 회의할 때 괜히 사람들이 손 쳐다보는거 같고</p>
<p style="text-align:center;">카드 꺼낼 때마다 신경쓰이고</p>
<p style="text-align:center;">일상생활 할 때 괜히 자신감이 떨어지는 느낌…</p>
<br/>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/4adea1cf-444a-4002-8cd0-95adfdb507a5/%E3%84%B4_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110534Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=28aa910e4e1ccfc956315e99183d4805583ad09cf9665eff221ea7772834d936&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">그리고 손톱이 사람 전체 인상에도 영향을 주더라구요</p>
<p style="text-align:center;">소개팅 나갔는데 손톱이 뭉툭하고 지저분하면 </p>
<p style="text-align:center;">혹은 긴장해서 손톱 물어뜯고 있으면</p>
<p style="text-align:center;">그 사람에 대해 좋은 인상이 들까요?</p>
<br/>
<p style="text-align:center;">아무리 다른 부분이 완벽해도 확 깰걸요..</p>
<p style="text-align:center;">별거 아닌데 손톱이 깔끔해 보인다는 것만으로</p>
<p style="text-align:center;">사람 인상이 달라져요. 이건 진짜에요..</p>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/7ffecac8-bce9-4f36-a903-f38ff0ac1831/SE-56B869C7-8530-4F47-A929-BFDB3A760BE9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110534Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=2c5a38083fa4d84485c2f560d5a130bf49eb2ae756bd6c7dfc8825ea05aaa8dc&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="손톱 상태 광명 찾은 지금의 손" />
<figcaption>손톱 상태 광명 찾은 지금의 손</figcaption>
</figure>
<br/>
<p style="text-align:center;">그래서 저도 손톱 물어뜯는 습관 고치려고 </p>
<p style="text-align:center;">무던히 노력했는데 진짜 쉽지 않더라구요😭</p>
<p style="text-align:center;">이게 고치기 힘든 이유가</p>
<p style="text-align:center;">손톱 물어뜯다보면</p>
<p style="text-align:center;">손톱이 점점 얇아지고</p>
<p style="text-align:center;">표면은 울퉁불퉁해지고</p>
<p style="text-align:center;">끝은 점점 더 갈라지고</p>
<p style="text-align:center;">그러면 또 걸리적거려서 또 뜯게 되고..</p>
<p style="text-align:center;">한번이라도 물어뜯은 경험 있다면 공감하실 거에요</p>
<p style="text-align:center;">악순환의 굴레죠.. </p>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/5b966aea-c9b3-417f-9303-08940dec35f1/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5_1tinted.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110535Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=35e41f68ddc00bf1c53f7470e819893bfbb6015d0a1a2e4ce769825e6f5a28cf&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">문제는 여기서 끝이 아니라는 겁니다.</p>
<p style="text-align:center;">이걸 계속 반복하면 손톱 자체가 망가집니다.</p>
<p style="text-align:center;"><strong>손톱 모양이 아예 변해요</strong></p>
<p style="text-align:center;"><strong>한번 짧아지고 뭉툭한 바디는 되돌릴 수가 없어요..</strong></p>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/5d9070e2-d1ec-44c9-9aee-942daf5e3d96/79044c27c35e061ed5cb27ad812460bf.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110535Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=8f03c6af4197ae0e2012a4c03caa0d41dc3bf8b8aa6766ebec4ae1a3812b9f3b&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">손톱 물어뜯는 사람들 해보는거 저도 다 해봤습니다.</p>
<ul>
<li>손톱깎이로 최대한 짧게 자르기</li>
<li>네일샵 가서 젤네일로 덮기</li>
<li>쓴 맛 나는 매니큐어 발라서 못 뜯게 하기</li>
</ul>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/a3cdf817-37e7-4e4f-a709-f72cddbaecc5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-08_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.46.41.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110535Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=971270be1a9c92f7e3758e6b9d981f202fd6ef859f8f9d9c3e771f13fb575db2&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="종잇장 손톱의 원인이 된,, 젤네일로 무작정 덮던 시절 " />
<figcaption>종잇장 손톱의 원인이 된,, 젤네일로 무작정 덮던 시절 </figcaption>
</figure>
<p style="text-align:center;">근데요,</p>
<p style="text-align:center;">짧게 잘라도 조금만 길어서 공간 생기면 또 물어뜯고</p>
<p style="text-align:center;">젤네일은 제거하고 나면 손톱이 종잇장처럼 약해지고</p>
<p style="text-align:center;">쓴 맛 나는 매니큐어는 맛 때문에 손이 안가고,</p>
<p style="text-align:center;">벗겨지면 더 신경쓰이고…</p>
<br/>
<p style="text-align:center;">모든 방법을 시도해본 끝에 내린 저의 결론은</p>
<p style="text-align:center;"><strong>습관을 고치려고 하기보다</strong></p>
<p style="text-align:center;"><strong>안 뜯을 수 있는 손톱 상태를 만드는 게 먼저라는 거였어요.</strong></p>
<p style="text-align:center;">손톱이 두껍고 단단해지고 표면이 매끈해지면</p>
<p style="text-align:center;">신기하게도 손이 입으로 잘 안 갑니다.</p>
<p style="text-align:center;">건드릴 이유가 없어지거든요.</p>
<p style="text-align:center;">이게 제가 물어뜯는 습관 고치기 전후 손톱 비교에요</p>
<br/>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/7d2405d1-c08a-4824-a872-aed9c6c77c34/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-08_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_11.03.32.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466USEDDMXB%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110535Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEO8Vzjlm21ac8TGIpERZwgJWUavN5QdAk6ExTEjmoEAiEArNhzHc4QjOO%2F26aBXV8Ks%2BjWs15VeFpRH1uSYWHl3Lsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLLcMvn4v2SkJmxebyrcA92rUNtPl2uxcNKQPVi%2FXUgwjD%2FF%2B9zbOBBMAgTFsZIF9nKk46egZ9aLSamtYcOdvQXQHNR2OOmZIMb1LlbV78Wrvyjv6HVzgWtDMR2NgFxembb%2FuVLxOipbG3Y9wLkdJDB9rV3RMXWtewLNepdQ8fgWb%2FUK%2FzUJ4h4kfC5jh%2B5WF9UpPFmoi%2BaT8HZTihx%2FSy0fEyT%2BtJZTvSeHJdgG%2FnGyMz1o7B4pmysuy0KCdYhae6%2F4Iwt5UNeViPqtZQO5mA5hilvuo67Ysxg3F9b8gbZ4rqhz%2BHk8pl%2FmzGbn7TzdlNg8OLxvJfsJ0X0CkyGAnj2nr0JyQzue%2F9yxXPKGhg%2BDem4aNW%2Fma0uzt6BehBYH%2FEkUFmUeuMMxbxqkAENqxKBJN3fDEd4OB1AYTSAWX6sEjNnPkskrXa4atXUPBv%2F78Fx1L102B4aTmpt3h0YSI%2FI1xbga9qyCTAdiHFSCOLBfxN4aAhb%2B4RbCihr6UAw3ABl6FrhNvCKubPZuR5VglrSJTtdB9dArlHOmFazZB2%2BGN5Jlc8HvfEcySR%2B0ahFeNySxS0TEbUPQygu03yKBeNkJDDyf2FKoObKOQFdlKt2%2BqEmB6iHsIVgAHIGR73GeDPP6Nd0ABykqR%2BWOMJjOus0GOqUBcXvN1VB9o6DF%2BVJmgKCffbu2iCnonOI0VYmWgQRQbQ8We9iTshwtPDwLr%2F1F4Dbv8LqrjVcpMF8TTnhqwQHBDKnqMdXTVi4u5JYaQHijlTtPN3j8C6fVCPm0gFDms6WtIEdqOMwZW18HghOn8hbQe3zSvC2o7SH7l2dkgY3SNunFUgJrS6DaKUvLX2ZB1C0e0nnwML%2BPZtmWkRPY1U9M5j8hFcvq&amp;X-Amz-Signature=680e95b92d362b5ac8dfd0285275e86802fed111e22a145849446fbc4ccc0f00&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">손톱을 근본부터 바꾸기 위해 </p>
<p style="text-align:center;">눈에 띄는 손톱영양제들은 다 사본거 같아요.</p>
<p style="text-align:center;">국내 제품, 해외 제품… 총 10개 정도? 써봤어요.</p>
<p style="text-align:center;">근데 솔직히 말하면 대부분 비슷했습니다.</p>
<p style="text-align:center;">겉만 반드르르하고 속까지 영양이 흡수되는지 잘 모르겠는..?</p>
<p style="text-align:center;">투명매니큐어랑 구분이 안가는 느낌이었어요</p>
<br/>
<p style="text-align:center;">근데 딱 하나 다른 제품이 있었어요.</p>
<p style="text-align:center;">￼정보 알려드리기 전에 </p>
<p style="text-align:center;">제가 여러개 써보고 돈 날리면서 얻은 팁,</p>
<p style="text-align:center;">손톱영양제, 강화제 잘 고르는 기준 먼저 알려드릴게요</p>
<br/>
<ol>
<li><strong>코팅형 제품이 좋아요</strong></li>
</ol>
<p style="text-align:center;">에센스나 크림 타입은 생활하면서 금방 씻겨나가니까</p>
<p style="text-align:center;">그냥 핸드크림 바르는거랑 별반 다를게 없더라구요</p>
<p style="text-align:center;">손톱에 코팅이 단단하게 씌워지면 확실히 덜 물어뜯게 되고</p>
<p style="text-align:center;">영양 유지력도 올라가는 거 같아요</p>
<br/>
<ol>
<li><strong>답답하면 바로 탈락</strong></li>
</ol>
<p style="text-align:center;">손톱 위에 코팅막이 두껍게 올라가면</p>
<p style="text-align:center;">결국 신경쓰여서 또 뜯게 됩니다.</p>
<p style="text-align:center;">얇고 가볍게 발려야 손톱 위에 뭐가 있는걸 까먹어서</p>
<p style="text-align:center;">손톱에 신경이 덜 쓰이게 되어요</p>
<br/>
<ol>
<li><strong>냄새랑 발림성도 은근 중요해요</strong></li>
</ol>
<p style="text-align:center;">올리브영에서 1등한다는 반디꺼 제품도 써봤는데 </p>
<p style="text-align:center;">냄새가 엄청 독하고 떡지고 효과도 잘 모르겠고 </p>
<p style="text-align:center;">이게 영양제가 맞는지 의심되는 수준이었어요</p>
<p style="text-align:center;">손톱은 꾸준히 관리해야되는 영역이라</p>
<p style="text-align:center;">사용감도 꼭 챙겨야 합니다!</p>
<br/>
<ol>
<li><strong>발랐을 때 손톱이 예뻐보여야 합니다</strong></li>
</ol>
<p style="text-align:center;">손톱이 예뻐보이면 이상하게 덜 뜯어요</p>
<p style="text-align:center;">이거 진짜입니다.</p>
<p style="text-align:center;">손톱이 망가져 있을 때는 계속 뜯고 싶었는데</p>
<p style="text-align:center;">손톱이 윤기나고 괜찮아 보이니까 괜히 건드리기 싫더라고요.</p>
<br/>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/21bec522-75e6-4d41-8e81-c39a896e2c6d/IMG_4900.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466SPFO3XZG%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110536Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDnX3GMqeagxcFFZIsfngJqAClJcQBXtw80adiATHiDsQIhAM7DLrYWbOqyIsX%2FVLlHsDGJ25nZCtYfL3iY7ucxHqjPKv8DCCwQABoMNjM3NDIzMTgzODA1IgxD72is5FDDKtNxq0gq3AMgtjz58kck3jpcsobB%2BTWSRcFzVwZZRgmzHmT4Esi0o5ZsJwNAJHrAB8S1kq593hiFrpcx%2FiHRORlFFwFo%2F3PPmCcZMMc4eFhklQZ7j9tDxRbZFl0dKxe8PyOGLAcgUpeprWscxS9h0fDOZ7FdciraIykW462wZiOpv1wjWfRBiUa6OSPaT0KeAwWw0CA3GA%2B804g%2Bbtz9HJKXjnCMKHHoIwDRjbgTAUDLPvoVGkDGJZf7t47GzrH8WU5qcgJq72mrdiasuuKK5miX07Q2wUspg%2FsZMCALZamIZCzStj0U6xj%2FPM7f3tq5AREgoCDRwuomDyWaf%2FOLzCMBuw80T9faL9TZo%2B4LoaaSyvqn3JpYvbSMAsT06d2L2Z1nBGI7y6SsGIMrqp0WyT%2Fcyoj63Bk8MP1KhMPHWhEVvZQvf%2B4KnqQgL1RJfD1LhN1dMc%2BrIfTYzAq98OFdo%2FLoyZnRm6M%2BKaNqjlGeXsRcmw9AW%2FnEB2BYYTFb08QUua0jf8c7valcMtYKVA3MLb5L3f6bnIAjgd1pqm80pZO0gqTUDijEUkB8Rbql1lssu%2FN6LpA8pa0Ze0CHK73jc1UxlSoIPGF3oitY1EwA5%2FV8dZZO4JKLVg3QfGlkr55OPSxM3zDFz7rNBjqkAQ4LTVbZLnWkdVoF8v71oXeYdyk7PiccRAhDGFZMPGIp1d%2BYwj2OJT%2Boq1MnX8odY1FcBojisqgzxWY3ZjC6PxTnI8dG1vaT%2BmxW9Z0Zia%2F%2B%2BThdFX5g3h2amgOjXxjtOBqOSA7SSlIlUmXab073mZerAQtCAV19XiBQGYZRstumOAroEw1DeDjmjDj0dyB5uDlFQ7oFkNU4tiRMH%2FVkUToQzuBe&amp;X-Amz-Signature=2011784a4994d684ca12ffbb521d503747c1a59181a77df0febf2b975cebd662&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">마지막으로 제가 10년 습관 고치는데</p>
<p style="text-align:center;">찐으로 도움받은 제품 공유할게요</p>
<p style="text-align:center;">처음에 후기가 너무 좋길래 혹시 조작일까 의심하다가</p>
<p style="text-align:center;">다른 제품에는 없는 특허나 임상 같은 결과가 있길래 사봤는데</p>
<p style="text-align:center;">이건 진짜 다르긴 하더라구요.</p>
<p style="text-align:center;">페이스 제품쪽에 자주 보이는 리포좀 기술 아시죠?</p>
<p style="text-align:center;">그걸 네일 제품으로는 처음으로 적용했다고 하던데</p>
<p style="text-align:center;">그래서 그런지 다른거랑 달리 효과가 찐으로 느껴졌던..</p>
<p style="text-align:center;">제 구세주같은 제품이에요 이제 없으면 못살아요🥹</p>
<br/>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/8833084d-c9c2-455d-b689-81e35947303c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466SPFO3XZG%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110536Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDnX3GMqeagxcFFZIsfngJqAClJcQBXtw80adiATHiDsQIhAM7DLrYWbOqyIsX%2FVLlHsDGJ25nZCtYfL3iY7ucxHqjPKv8DCCwQABoMNjM3NDIzMTgzODA1IgxD72is5FDDKtNxq0gq3AMgtjz58kck3jpcsobB%2BTWSRcFzVwZZRgmzHmT4Esi0o5ZsJwNAJHrAB8S1kq593hiFrpcx%2FiHRORlFFwFo%2F3PPmCcZMMc4eFhklQZ7j9tDxRbZFl0dKxe8PyOGLAcgUpeprWscxS9h0fDOZ7FdciraIykW462wZiOpv1wjWfRBiUa6OSPaT0KeAwWw0CA3GA%2B804g%2Bbtz9HJKXjnCMKHHoIwDRjbgTAUDLPvoVGkDGJZf7t47GzrH8WU5qcgJq72mrdiasuuKK5miX07Q2wUspg%2FsZMCALZamIZCzStj0U6xj%2FPM7f3tq5AREgoCDRwuomDyWaf%2FOLzCMBuw80T9faL9TZo%2B4LoaaSyvqn3JpYvbSMAsT06d2L2Z1nBGI7y6SsGIMrqp0WyT%2Fcyoj63Bk8MP1KhMPHWhEVvZQvf%2B4KnqQgL1RJfD1LhN1dMc%2BrIfTYzAq98OFdo%2FLoyZnRm6M%2BKaNqjlGeXsRcmw9AW%2FnEB2BYYTFb08QUua0jf8c7valcMtYKVA3MLb5L3f6bnIAjgd1pqm80pZO0gqTUDijEUkB8Rbql1lssu%2FN6LpA8pa0Ze0CHK73jc1UxlSoIPGF3oitY1EwA5%2FV8dZZO4JKLVg3QfGlkr55OPSxM3zDFz7rNBjqkAQ4LTVbZLnWkdVoF8v71oXeYdyk7PiccRAhDGFZMPGIp1d%2BYwj2OJT%2Boq1MnX8odY1FcBojisqgzxWY3ZjC6PxTnI8dG1vaT%2BmxW9Z0Zia%2F%2B%2BThdFX5g3h2amgOjXxjtOBqOSA7SSlIlUmXab073mZerAQtCAV19XiBQGYZRstumOAroEw1DeDjmjDj0dyB5uDlFQ7oFkNU4tiRMH%2FVkUToQzuBe&amp;X-Amz-Signature=96b0feb991b57f2f181a602a95572d3171e0d1f75cdf3a1a7d15aa675d44ba17&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">이게 좋은게 영양코팅이 진짜 얇아서 답답함이 1도 없구 </p>
<p style="text-align:center;">생활할 때 바른 걸 까먹을 정도에요</p>
<p style="text-align:center;">그리고 제가 써본 것중에 제일 냄새가 없었어요</p>
<p style="text-align:center;">회사 책상에서 발라도 되는 정도!</p>
<p style="text-align:center;">바르자마자 표면이 정리되고 윤기가 은은하게 돌면서</p>
<p style="text-align:center;">손톱이 훨씬 건강해보여요</p>
<p style="text-align:center;">컬러 버전도 있는데 안에 든 영양성분은 동일하고</p>
<p style="text-align:center;">혈색을 자연스럽게 올려주니까 손톱이 더 생기있고 예뻐보여요</p>
<p style="text-align:center;">저는 개인적으로 혈색 제품 강추!!!</p>
<br/>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/02e6637d-940e-4179-8bd9-9a772f40a310/ezgif.com-crop_%282%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466SPFO3XZG%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110536Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDnX3GMqeagxcFFZIsfngJqAClJcQBXtw80adiATHiDsQIhAM7DLrYWbOqyIsX%2FVLlHsDGJ25nZCtYfL3iY7ucxHqjPKv8DCCwQABoMNjM3NDIzMTgzODA1IgxD72is5FDDKtNxq0gq3AMgtjz58kck3jpcsobB%2BTWSRcFzVwZZRgmzHmT4Esi0o5ZsJwNAJHrAB8S1kq593hiFrpcx%2FiHRORlFFwFo%2F3PPmCcZMMc4eFhklQZ7j9tDxRbZFl0dKxe8PyOGLAcgUpeprWscxS9h0fDOZ7FdciraIykW462wZiOpv1wjWfRBiUa6OSPaT0KeAwWw0CA3GA%2B804g%2Bbtz9HJKXjnCMKHHoIwDRjbgTAUDLPvoVGkDGJZf7t47GzrH8WU5qcgJq72mrdiasuuKK5miX07Q2wUspg%2FsZMCALZamIZCzStj0U6xj%2FPM7f3tq5AREgoCDRwuomDyWaf%2FOLzCMBuw80T9faL9TZo%2B4LoaaSyvqn3JpYvbSMAsT06d2L2Z1nBGI7y6SsGIMrqp0WyT%2Fcyoj63Bk8MP1KhMPHWhEVvZQvf%2B4KnqQgL1RJfD1LhN1dMc%2BrIfTYzAq98OFdo%2FLoyZnRm6M%2BKaNqjlGeXsRcmw9AW%2FnEB2BYYTFb08QUua0jf8c7valcMtYKVA3MLb5L3f6bnIAjgd1pqm80pZO0gqTUDijEUkB8Rbql1lssu%2FN6LpA8pa0Ze0CHK73jc1UxlSoIPGF3oitY1EwA5%2FV8dZZO4JKLVg3QfGlkr55OPSxM3zDFz7rNBjqkAQ4LTVbZLnWkdVoF8v71oXeYdyk7PiccRAhDGFZMPGIp1d%2BYwj2OJT%2Boq1MnX8odY1FcBojisqgzxWY3ZjC6PxTnI8dG1vaT%2BmxW9Z0Zia%2F%2B%2BThdFX5g3h2amgOjXxjtOBqOSA7SSlIlUmXab073mZerAQtCAV19XiBQGYZRstumOAroEw1DeDjmjDj0dyB5uDlFQ7oFkNU4tiRMH%2FVkUToQzuBe&amp;X-Amz-Signature=67206abce90607523235dc320a2868d38201125e0e6d18c8524507b19e404165&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">이미 현대백화점에도 들어가구 일본에서 1등하고 있다고는 하는데</p>
<p style="text-align:center;">그래도 혹시 단종될까봐 불안한 마음에 </p>
<p style="text-align:center;">널리 알리고파 이렇게 글 남깁니다</p>
<p style="text-align:center;">가격도 엄청 합리적이라</p>
<p style="text-align:center;">네일샵 케어 한번 받는 가격으로 거의 두세달은 쓸 수 있어요.</p>
<br/>
<p style="text-align:center;">저는 이제 손톱 안숨기고 당당하게 살아요</p>
<p style="text-align:center;">오랜만에 친구 만났는데 그 친구가</p>
<p style="text-align:center;">&quot;너 손톱 치료받은거야?&quot; 이러더라구요</p>
<p style="text-align:center;">제가 예전에는 손톱이 거의 없는 수준이었거든요</p>
<p style="text-align:center;">그 말 듣는데 그 동안 고생했던거 생각하며 눈물이 핑..😂</p>
<br/>
<figure>
  <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/2e730524-c938-49ae-8845-e1733e642af9/a165a240-ec2c-4d4b-a234-4162a99878e1/output%EF%BC%BF1348766064.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=ASIAZI2LB466SPFO3XZG%2F20260309%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20260309T110536Z&amp;X-Amz-Expires=3600&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDnX3GMqeagxcFFZIsfngJqAClJcQBXtw80adiATHiDsQIhAM7DLrYWbOqyIsX%2FVLlHsDGJ25nZCtYfL3iY7ucxHqjPKv8DCCwQABoMNjM3NDIzMTgzODA1IgxD72is5FDDKtNxq0gq3AMgtjz58kck3jpcsobB%2BTWSRcFzVwZZRgmzHmT4Esi0o5ZsJwNAJHrAB8S1kq593hiFrpcx%2FiHRORlFFwFo%2F3PPmCcZMMc4eFhklQZ7j9tDxRbZFl0dKxe8PyOGLAcgUpeprWscxS9h0fDOZ7FdciraIykW462wZiOpv1wjWfRBiUa6OSPaT0KeAwWw0CA3GA%2B804g%2Bbtz9HJKXjnCMKHHoIwDRjbgTAUDLPvoVGkDGJZf7t47GzrH8WU5qcgJq72mrdiasuuKK5miX07Q2wUspg%2FsZMCALZamIZCzStj0U6xj%2FPM7f3tq5AREgoCDRwuomDyWaf%2FOLzCMBuw80T9faL9TZo%2B4LoaaSyvqn3JpYvbSMAsT06d2L2Z1nBGI7y6SsGIMrqp0WyT%2Fcyoj63Bk8MP1KhMPHWhEVvZQvf%2B4KnqQgL1RJfD1LhN1dMc%2BrIfTYzAq98OFdo%2FLoyZnRm6M%2BKaNqjlGeXsRcmw9AW%2FnEB2BYYTFb08QUua0jf8c7valcMtYKVA3MLb5L3f6bnIAjgd1pqm80pZO0gqTUDijEUkB8Rbql1lssu%2FN6LpA8pa0Ze0CHK73jc1UxlSoIPGF3oitY1EwA5%2FV8dZZO4JKLVg3QfGlkr55OPSxM3zDFz7rNBjqkAQ4LTVbZLnWkdVoF8v71oXeYdyk7PiccRAhDGFZMPGIp1d%2BYwj2OJT%2Boq1MnX8odY1FcBojisqgzxWY3ZjC6PxTnI8dG1vaT%2BmxW9Z0Zia%2F%2B%2BThdFX5g3h2amgOjXxjtOBqOSA7SSlIlUmXab073mZerAQtCAV19XiBQGYZRstumOAroEw1DeDjmjDj0dyB5uDlFQ7oFkNU4tiRMH%2FVkUToQzuBe&amp;X-Amz-Signature=ddd93212c432fe8db6418c949ca3c1f8d05df7ab5570943b4cf927662db80037&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject" alt="" />

</figure>
<br/>
<p style="text-align:center;">여러분이 저처럼 손톱 물어뜯는 지긋지긋한 버릇 끝내시고</p>
<p style="text-align:center;">손끝에 광명 찾으셨으면 좋겠습니다.</p>
<p style="text-align:center;">고민만 하면 절대 안 바뀝니다.</p>
<ul>
<li>손톱 물어뜯는 습관 때문에 스트레스인 분</li>
<li>손톱이 짧고 울퉁불퉁해서 손 숨기는 분</li>
<li>젤네일로만 버티고 있는 분</li>
<li>영양제 사서 후회한 경험 있는 분</li>
</ul>
<p style="text-align:center;">제가 여러개 써보고 돈 날리며 발굴한</p>
<p style="text-align:center;">이거 하나로 시작해보세요.</p>
<br/>
<div style="margin:1.5em auto;max-width:70%;">
  <a id="bm-rkdfawi" href="https://foind.co.kr/surl/p/14" target="_blank" rel="noreferrer"
     style="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;transition:background 0.15s;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='#fafafa'">
    <div style="min-width:0;">
      <p id="bm-rkdfawi-host" style="margin:0 0 2px;font-size:0.75em;color:#999;">불러오는 중…</p>
      <p id="bm-rkdfawi-title" style="margin:0 0 4px;font-weight:700;font-size:0.95em;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">https://foind.co.kr/surl/p/14</p>
      <p id="bm-rkdfawi-desc" style="margin:0;font-size:0.82em;color:#888;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"></p>
    </div>
    <img id="bm-rkdfawi-img" src="" alt="" style="width:80px;height:80px;object-fit:cover;border-radius:8px;flex-shrink:0;display:none;" />
  </a>
  <script>
    (function(){
      fetch('/api/og?url=https%3A%2F%2Ffoind.co.kr%2Fsurl%2Fp%2F14')
        .then(function(r){return r.json();})
        .then(function(d){
          var h=document.getElementById('bm-rkdfawi-host');
          var t=document.getElementById('bm-rkdfawi-title');
          var desc=document.getElementById('bm-rkdfawi-desc');
          var img=document.getElementById('bm-rkdfawi-img');
          if(h) h.textContent=d.hostname||'';
          if(t) t.textContent=d.title||'';
          if(desc) desc.textContent=d.description||'';
          if(img&&d.image){img.src=d.image;img.style.display='block';}
        }).catch(function(){});
    })();
  </script>
</div>
<br/>
<p style="text-align:center;">더 궁금한 거 있으면 댓글 남겨주세요.</p>
<p style="text-align:center;">확인하는대로 답글 남길게요!</p>
<br/>
<div style="margin:1.5em auto;max-width:70%;">
  <a id="bm-0z82aw3" href="https://foind.co.kr/surl/p/14" target="_blank" rel="noreferrer"
     style="display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid #e0e0e0;border-radius:12px;padding:12px 16px;text-decoration:none;color:inherit;cursor:pointer;background:#fafafa;transition:background 0.15s;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='#fafafa'">
    <div style="min-width:0;">
      <p id="bm-0z82aw3-host" style="margin:0 0 2px;font-size:0.75em;color:#999;">불러오는 중…</p>
      <p id="bm-0z82aw3-title" style="margin:0 0 4px;font-weight:700;font-size:0.95em;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">https://foind.co.kr/surl/p/14</p>
      <p id="bm-0z82aw3-desc" style="margin:0;font-size:0.82em;color:#888;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"></p>
    </div>
    <img id="bm-0z82aw3-img" src="" alt="" style="width:80px;height:80px;object-fit:cover;border-radius:8px;flex-shrink:0;display:none;" />
  </a>
  <script>
    (function(){
      fetch('/api/og?url=https%3A%2F%2Ffoind.co.kr%2Fsurl%2Fp%2F14')
        .then(function(r){return r.json();})
        .then(function(d){
          var h=document.getElementById('bm-0z82aw3-host');
          var t=document.getElementById('bm-0z82aw3-title');
          var desc=document.getElementById('bm-0z82aw3-desc');
          var img=document.getElementById('bm-0z82aw3-img');
          if(h) h.textContent=d.hostname||'';
          if(t) t.textContent=d.title||'';
          if(desc) desc.textContent=d.description||'';
          if(img&&d.image){img.src=d.image;img.style.display='block';}
        }).catch(function(){});
    })();
  </script>
</div>
<br/>
`,
    bestComments: [
      {
        id: 1,
        author: "뷰티고수",
        date: "2026.03.09",
        text: "어머 이거 진짜 좋은 듯요",
        likes: 302,
      },
      {
        id: 2,
        author: "자기계발러",
        date: "2026.03.09",
        text: "믿고 구매해볼게요. 저도 고칠 수 있으면 좋겠어요. ㅠㅠ",
        likes: 340,
      },
      {
        id: 3,
        author: "겨울손톱",
        date: "2026.03.09",
        text: "저희 딸이 중학생인데, 아직도 물어뜯더라구요. 도움 주셔서 감사해요!",
        likes: 426,
      }
    ],
  },

];

/* ──────────────────────── Helper ──────────────────────── */

export function getPostById(id: number): Post | undefined {
  return posts.find((p) => p.id === id);
}
