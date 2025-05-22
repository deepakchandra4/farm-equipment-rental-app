'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function EquipmentDetailsIndexPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/equipment');
    }, [router]);

    return null;
}
