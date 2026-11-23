import { Provider, Scrollable } from '@olegpolyakov/ui';

import Resume from '@/documents/resume-eng.mdx';

import Summary from './Summary';

export default function Root() {
    return (
        <Provider className="root">
            <aside>
                <Summary />
            </aside>
            
            <Scrollable
                as="main"
                fade
            >
                <article>
                    <Resume />
                </article>
            </Scrollable>
        </Provider>
    );
}