import { Links } from './Links'

export function Profile() {
  return (
    <div>
      <div className="flex s:flex-col items-center mb-6">
        <h2 className="s:mb-6 pb-2 pl-6 s:p-0 text-7xl s:text-6xl border-l-[5px] s:border-none s:text-center">テツカ ヒロキ</h2>
        <Links></Links>
      </div>
      <h3 className="mb-4 text-5xl pc_only">- Design Tomato代表 / Webエンジニア -</h3>
      <h3 className="mb-8 text-[2.8rem] text-center leading-tight sp_only">Design Tomato代表<br />Webエンジニア</h3>
      <p className="text-[2.2rem] s:text-[1.7rem] leading-normal">フリーで活動しているエンジニアです！<br />
        主にフロント周りの実装を<br className="sp_only" />メインで行っています。<br />
        趣味のイラストやそれで培ったセンスで、<br />
        媒体を問わずデザインの制作も行います！</p>
    </div>
  )
}