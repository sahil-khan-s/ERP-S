import React from 'react'

const ContractTaskTab = () => {
    return (
        <div className='min-h-[660px]'>
            <div className='flex justify-between'>
                <h2 className='font-outfit text-xl text-[#16151C]'>Service contract</h2>
                <h2 className='font-outfit font-light text-[17px] text-[#A2A1A8]'>29 Dec ‘13 to 28 Dec ‘14</h2>
            </div>

            <div className='flex justify-between items-center mt-2'>
                <div>
                    <p className='font-outfit text-[#16151C] font-light'>for <span className='font-normal'>Ang lee</span></p>
                    <p className='font-outfit text-[#16151C] font-light'>by <span className='font-normal'>John Doe</span></p>
                </div>
                <div>
                    <p className='font-outfit font-light text-[#A2A1A8]'>Shanghai, China</p>
                    <p className='text-right font-outfit font-light text-[#A2A1A8]'>#508787257</p>
                </div>
            </div>


            <div className='flex justify-between mt-4'>
                <h2 className='pl-6 text-[#16151C] font-outfit text-xl'>Attachments</h2>
                <button>
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.95215 8.66513C9.69044 8.92684 9.69045 9.35115 9.95215 9.61285C10.2139 9.87456 10.6382 9.87456 10.8999 9.61285L13.3299 7.18278L13.3299 18.0742C13.3299 18.4443 13.6299 18.7443 14.0001 18.7443C14.3702 18.7443 14.6702 18.4443 14.6702 18.0742V7.18276L17.1003 9.61285C17.362 9.87456 17.7863 9.87455 18.048 9.61285C18.3097 9.35114 18.3097 8.92683 18.048 8.66513L14.4739 5.09105C14.3482 4.96538 14.1778 4.89477 14.0001 4.89478C13.8223 4.89478 13.6519 4.96538 13.5262 5.09106L9.95215 8.66513ZM8.94269 12.2388C9.17418 11.95 9.12774 11.5283 8.83896 11.2968C8.55019 11.0653 8.12843 11.1117 7.89694 11.4005C6.82407 12.7389 6.18188 14.439 6.18188 16.2872C6.18188 20.6052 9.68225 24.1055 14.0002 24.1055C18.3181 24.1055 21.8185 20.6052 21.8185 16.2872C21.8185 14.439 21.1763 12.7389 20.1034 11.4005C19.8719 11.1117 19.4502 11.0653 19.1614 11.2968C18.8726 11.5283 18.8262 11.95 19.0577 12.2388C19.9468 13.348 20.4782 14.7546 20.4782 16.2872C20.4782 19.865 17.5779 22.7653 14.0002 22.7653C10.4225 22.7653 7.52216 19.865 7.52216 16.2872C7.52216 14.7546 8.05355 13.348 8.94269 12.2388Z" fill="#6BA10F" />
                    </svg>
                </button>
            </div>

            <div className='h-[500px] max-h-[500px] overflow-hidden'>
                <p className='mt-4 text-[#A2A1A8] font-light font-outfit'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatibus nobis repellendus fugit veniam alias id a eius? Vitae facilis doloribus eos minus nesciunt beatae vero neque maiores minima sit voluptatem, in facere provident fugiat perspiciatis, nobis velit eaque et architecto eveniet earum nisi modi mollitia atque. Dicta saepe ut sequi, animi totam sed eos vero facere odit obcaecati mollitia ullam, reprehenderit tempora deleniti iure vitae. Doloremque id ad molestiae nostrum laborum reprehenderit dicta, quos modi dolorem eos maiores a illum aperiam eius nisi quod totam cupiditate ipsum soluta, odit, saepe optio veniam! Atque, ipsa maiores saepe officiis praesentium soluta. Eaque ab, ipsa minima natus consequuntur voluptas fugiat blanditiis aut, ex temporibus dolore odio obcaecati, rerum dignissimos harum nam sed voluptatibus necessitatibus et ducimus quibusdam. Dolores perferendis, voluptatibus sint repellendus voluptatum voluptatem exercitationem aliquam possimus voluptate pariatur dolor dolorem iste inventore.
                </p>
            </div>

            <div className='flex justify-end'>
                <p className='font-outfit font-light text-[#A2A1A8]'>1 / 121 Page</p>
            </div>
        </div>
    )
}

export default ContractTaskTab
