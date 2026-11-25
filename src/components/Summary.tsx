import { Button, ButtonGroup, Flex, Heading, Image, Text } from '@olegpolyakov/ui';

import GitHubIcon from '@/assets/github.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import TelegramIcon from '@/assets/telegram.svg';

const PORTFOLIO_URL = 'https://olegpoliakov.dev';

export default function Summary() {
    return (
        <Flex
            className="summary"
            column
            gap="m"
        >
            <Flex
                className="about"
                column
                gap="s"
            >
                <Image
                    className="photo"
                    src="/photo.jpg"
                    alt="Oleg Poliakov"
                />

                <Heading
                    className="name"
                    size="m"
                    content="OLEG POLIAKOV"
                    weight="bold"
                />

                <Heading
                    as="h2"
                    content="Senior Full-Stack Engineer"
                    size="s"
                />

                <Text
                    content="Building products that solve real problems."
                    size="m"
                />

                <Text
                    content="Product Engineering • System Design • AI"
                    size="s"
                />

                <Text
                    className="print-only"
                    content="olegpoliakov@outlook.com • olegpoliakov.dev • github.com/olegpolyakov • linkedin.com/in/olegpoliakov-dev"
                    size="s"
                />
            </Flex>

            <ButtonGroup
                className="actions"
                gap="s"
                fluid
            >
                <Button
                    content="Download PDF"
                    as="a"
                    href="https://s3.olegpoliakov.dev/5f1cc9bd-1520-4073-a1bf-f64aa1cbd929/olegpolyakov-cv.pdf"
                    target="_blank"
                    variant="tinted"
                    rel="noopener noreferrer"
                    endIcon="download"
                    download
                />

                <Button
                    content="Portfolio"
                    as="a"
                    href={PORTFOLIO_URL}
                    endIcon="arrow_outward"
                    variant="tinted"
                />
            </ButtonGroup>

            <ButtonGroup
                className="actions"
                align="evenly"
            >
                <Button
                    as="a"
                    href="mailto:olegpoliakov@outlook.com"
                    icon={{ name: 'email', filled: true }}
                    title="Email"
                />

                <Button
                    as="a"
                    href="https://github.com/olegpolyakov"
                    icon={<GitHubIcon />}
                    title="GitHub account"
                />

                <Button
                    as="a"
                    href="https://linkedin.com/in/olegpoliakov-dev"
                    icon={<LinkedInIcon />}
                    title="LinkedIn account"
                />

                <Button
                    as="a"
                    href="https://t.me/olegpolyakov"
                    icon={<TelegramIcon />}
                    title="Telegram account"
                />
            </ButtonGroup>
        </Flex>
    );
}
