import { Links } from './Links'

export function Profile() {
  return (
    <div>
      <div className="flex m:flex-col s:flex-col l:gap-6 items-center mb-6">
        <h2 className="m:mb-6 s:mb-6 pb-2 pl-6 m:p-0 s:p-0 text-7xl l:text-6xl s:text-6xl border-l-[5px] m:border-none s:border-none s:text-center">テツカ ヒロキ</h2>
        <Links></Links>
      </div>
      <h3 className="m:hidden s:hidden mb-4 text-5xl l:text-[2.6rem]">- Design Tomato代表 / Webエンジニア -</h3>
      <h3 className="ll:hidden l:hidden mb-8 text-[2.8rem] text-center leading-tight">Design Tomato代表<br />Webエンジニア</h3>
      <p className="text-[2.2rem] l:text-[2rem] s:text-[1.7rem] m:text-center leading-normal">
        フリーのフロントエンドエンジニアです！<br />
        最近はバックエンドやインフラなども<br className="sp_only" />幅広く学習しています。<br />
        趣味のイラストやそれで培ったセンスで、<br />
        媒体を問わずデザインの制作も行います！</p>
    </div>
  )
}