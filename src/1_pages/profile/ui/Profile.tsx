import { Button, Col, Empty, Flex, Row, Tabs } from 'antd'
import s from './Profile.module.css'
import Link from 'next/link'
import Title from 'antd/es/typography/Title'
import { ProfileRewardCard } from '@/4_entities/me'
import { FC } from 'react'
import { profileApi } from '@/4_entities/profile'
import { appRoutes } from '@/5_shared/config/appRoutes'
import { RewardExpandedSchema, UserSchema } from '@/5_shared/gen'


type ProfileProps = {
    userInfo: UserSchema,
    userRewards: RewardExpandedSchema[]
}

const Profile: FC<ProfileProps> = async ({ userInfo, userRewards }) => {


    return (
        <Flex vertical gap="large">
            <br />
            <Row gutter={[12, 12]} >
                <Col xl={6} lg={6} md={6} sm={24} xs={24}>
                    <Flex vertical gap="middle">
                        <img className={s.image} src={userInfo.avatar_url ?? ''} alt="profile" />
                        <Link href={appRoutes.github + userInfo.github_username} target='_blank'>
                            <Button
                                style={{ width: '100%' }}
                                type="dashed"
                            >
                                View on GitHub
                            </Button>
                        </Link>
                    </Flex>
                </Col>
                <Col xl={18} lg={18} md={18} sm={24} xs={24}>
                    <Flex vertical gap="middle">
                        <Flex vertical gap="small">
                            <Title level={3}>{userInfo.github_username}</Title>
                            <Tabs
                                style={{ width: '100%' }}
                                items={[
                                    {
                                        key: '1',
                                        label: 'User Rewards',
                                        children: <Flex vertical gap="small">
                                            {userRewards.length
                                                ? userRewards.map((item) => <ProfileRewardCard key={item.id}  {...item} />)
                                                : <Empty
                                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                                    description="The list is empty"
                                                />}
                                        </Flex>
                                    },
                                ]}
                            />
                        </Flex>
                    </Flex>
                </Col>
            </Row>
            <br />
        </Flex>
    )
}
export { Profile }